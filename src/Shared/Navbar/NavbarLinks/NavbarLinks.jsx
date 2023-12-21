import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const NavbarLinks = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Contact
                </NavLink>
            </li>
            {
                user?.email && 
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
            }
        </>
    );
};

export default NavbarLinks;