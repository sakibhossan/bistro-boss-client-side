import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCards from "../../hooks/useCards";



const FoodCard = ({ item }) => {
  const { name, image, price, recipe,_id } = item;
  const {user} =useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const[,refetch]=useCards();


  const handleAddToCart = () =>{
   if(user && user.email){
    // card items to the database
    const cardItem={
menuId:_id,
email:user.email,
name,
image,
price
    }
    axiosSecure.post('/cards',cardItem)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500
        });
        // refetch to the cards
        refetch();
      }


    })
   
   }
   else{
    Swal.fire({
      title: "You are not logged In",
      text: "Please login then add to card !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login"
    }).then((result) => {
      if (result.isConfirmed) {
        
      navigate('/login',{state:{from: location}})
      }
    });
   }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white m-4">
        $ {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>{
            handleAddToCart(item)

          }}
          
          className="btn btn-outline bg-slate-100 border-0 border-orange-400  border-b-4 tex-center mx-56 mt-4">
            {" "}
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
