import { FaAd, FaBarcode,  FaEnvelope, FaHome, FaList,  FaUtensils,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCards from "../hooks/useCards";
import useAdmin from "../hooks/useAdmin";


const Dashborad = () => {
    const [cart] = useCards();
    // TODO:get is admin value in database

    const [isAdmin] = useAdmin();
    return (

        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                        
                    <li>
                        
                        <NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome>
                      Admin Home</NavLink>
                        </li>
                        <li>
                        
                        <NavLink to="/dashboard/addItems">
                        <FaUtensils></FaUtensils>
                       Add Items</NavLink>
                        </li>
                        <li>
                        
                        <NavLink to="/dashboard/manageItems">
                        <FaList></FaList>
                        Manage items</NavLink>
                        </li>
                        <li>
                        
                        <NavLink to="/dashboard/bookings">
                        <FaAd></FaAd>
                     manage Bookings</NavLink>
                        </li>
                        <li>
                        
                        <NavLink to="/dashboard/users">
                        <FaList></FaList>
                       All Users</NavLink>
                        </li>
                        </>
                        :
                        <>
                        </>
                    }
                        <div class="divider"></div>
                        {/* shared common */}
                        <li>
                        
                        <NavLink to="/">
                        <FaHome></FaHome>
                       Home</NavLink>
                        </li>
                        <li>
                        
                        <NavLink to="/order/salad">
                        <FaBarcode></FaBarcode>
                       Menu</NavLink>
                        </li>
                        <li>
                        
                        <NavLink to="/order/contact">
                        <FaEnvelope></FaEnvelope>
                      contact</NavLink>
                        </li>
                </ul>

            </div>
             {/* dashborad content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashborad;