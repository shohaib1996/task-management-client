import { Link } from "react-router-dom";
import NavbarLinks from "../NavbarLinks/NavbarLinks";


const Navbar = () => {
    return (
        <div className="bg-lime-300">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start w-[150px]">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavbarLinks></NavbarLinks>
                        </ul>
                    </div>
                    <Link to="/">
                        <button className="btn btn-ghost text-xl">TaskMaster</button>
                    </Link>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu space-x-3 menu-horizontal px-1">
                        <NavbarLinks></NavbarLinks>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;