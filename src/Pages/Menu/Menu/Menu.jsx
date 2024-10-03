import { Helmet } from 'react-helmet-async';
import Cover from '../../Shares/Cover/Cover';
import  PopularMenu from '../../../Pages/Home/PopularMenu/PopularMenu';
import menuImg from '../../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../../src/assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    
    const dessert = menu.filter((item) =>item.category === "dessert");
    const soup = menu.filter((item) =>item.category === "soup");
    const salad = menu.filter((item) =>item.category === "salad");
    const pizza = menu.filter((item) =>item.category === "pizza");
    const offered = menu.filter((item) =>item.category === "offered");
    return (
        <div>
            <Helmet>
        <title>Jaber Resturent|Menu</title>
        
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* {main cover} */}
      <SectionTitle subHeading="Don't Miss" heading="Today's Offered"></SectionTitle>
           {/* {offered menu items} */}
            <MenuCategory items={offered}></MenuCategory>
            {/* {dessered menu items} */}
            <MenuCategory
            items= {dessert}
            title= "dessert"
            img={dessertImg}
            ></MenuCategory>
            <MenuCategory
            items= {pizza}
            title= "pizza"
            img={pizzaImg}
            ></MenuCategory>
            <MenuCategory
            items= {salad}
            title= "salad"
            img={saladImg}
            ></MenuCategory>
            <MenuCategory
            items= {soup}
            title= "soup"
            img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;