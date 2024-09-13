import {Outlet} from "react-router-dom";
import Footer from "../Pages/Shares/Footer";
import Navbar from "../Pages/Shares/Navber/Navbar";

const Main = () => {
    return (
        <div>
           <Outlet></Outlet>
           <Navbar></Navbar>
           <Footer></Footer>
        </div>
    );
};

export default Main;