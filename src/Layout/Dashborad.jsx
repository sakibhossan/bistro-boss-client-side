import { NavLink, Outlet } from "react-router-dom";


const Dashborad = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    <li><NavLink to="/dashboard/cart"></NavLink></li>
                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashborad;