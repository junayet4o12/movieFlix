import React, { useState } from "react";
import {
    Navbar, 
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { MdOutlineLocalMovies } from "react-icons/md";
import movieFlexLogo from '../../assets/movieFlixLogo.png'
const NavBar = () => {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate()
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">


             <>
                    <NavLink to={'/'}>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal navlink transition-all duration-500"
                        >
                            <span className="flex items-center gap-x-1">
                                <FaHome />  Home
                            </span>
                        </Typography>
                    </NavLink>
                    <NavLink to={'/movies'}>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal navlink transition-all duration-500"
                        >
                            <span className="flex items-center gap-x-1">
                                <MdOutlineLocalMovies />   Movies
                            </span>
                        </Typography>
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <Typography
                            as="li"
                            variant="small"
                            color="blue-gray"
                            className="p-1 font-normal navlink transition-all duration-500"
                        >
                            <span className="flex items-center gap-x-1">
                                <FaCartFlatbed />   Cart
                            </span>
                        </Typography>
                    </NavLink>
                </>
            
        </ul>
    );

    return (
        <div className="max-h-[768px] h-[75px] bg-white shadow-xl w-full">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        onClick={() => navigate('/')}

                        className="mr-4 cursor-pointer  font-medium"
                    >
                        <img className="w-16" src={movieFlexLogo} alt="" />
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:flex gap-2">{navList}</div>
                       
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    
                </Collapse>

            </Navbar>
        </div>
    );
}
export default NavBar;