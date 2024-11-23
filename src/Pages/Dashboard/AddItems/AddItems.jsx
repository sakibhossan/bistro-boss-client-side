import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";


const image_hosting_keys = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_keys}`;
const AddItems = () => {
  const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async(data) => {
    console.log(data);
    // image uplaod to imagebb and then get an url
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosing_api,imageFile,{
      headers: {
        "content-type": "multipart/form-data",
      }
    });
    if(res.data.success){
      // now send the menu item data to the server with the image
      const menuItem = {
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe: data.recipe,
       image:res.data.data.display_url,
      } 
      // 
      const menuRes = await axiosSecure.post('/menu',menuItem);
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        reset();
        // show succes pop up
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:`${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
console.log('with img url',res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name",{required:true})}
              required
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex  gap-24">
            {/* category */}
            <div className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
              defaultValue="default"
                {...register("category",{required:true})}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select A Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="text"
                placeholder="Price"
                {...register("price",{required:true})}
                className="input input-bordered w-full "
              />
            </div>
            
          </div>
          <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Detail</span>
               
              </div>
              <textarea
              {...register('recipe')}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
              
            </label>
            <div className="form-control w-full my-6">
            <input 
            {...register('image',{required:true})}
            type="file" className="file-input w-full max-w-xs" />
            </div>

        <button className="btn ml-4">
    Add Item <FaUtensils></FaUtensils>

        </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
