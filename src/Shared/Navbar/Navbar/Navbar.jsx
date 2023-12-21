import { Link } from "react-router-dom";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out successfully')
                toast.success("Logout Successfully")
            })
            .catch(error => {
                console.error(error);
            })
    }
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
                    {
                        user?.email ?
                            <div className="flex items-center">
                                <div className="dropdown dropdown-end">

                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                        <div data-tooltip-id="my-tooltip" data-tooltip-content={`${user?.displayName && user.displayName}`} className="w-10 z-[10] rounded-full">
                                            <img src={user?.photoURL} />
                                            <Tooltip id="my-tooltip" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user?.displayName}
                                            </a>
                                        </li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            :

                            <div className="flex items-center">
                                <Link to="/login">
                                    <button className="btn btn-primary bg-[#99582a] text-white border-none font-bold hover:bg-[#e08c4fd3]">Join Us</button>
                                </Link>
                            </div>


                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;