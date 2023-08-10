import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../../assets/menu.png';
import man from '../../../assets/man.jpg'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-16 bg-[#17283a] text-black relative shadow-sm font-mono">
            <div className="flex bg-[#fe571f] justify-center items-center h-full px-7">
                <button><img src={menu} width={25} height={25} alt='menu' /></button>
            </div>
            <div className="px-4 cursor-pointer md:hidden">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    ></path>
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/dashboard" className="p-4">
                    Dashboard
                </Link>
                <Link to="/profile" className="p-4">
                    Profile
                </Link>
                <Link
                    to="/"
                    className="p-4"
                >
                    Logout
                </Link>
            </div>
            <div className="flex bg-[#fe571f] justify-center items-center h-full px-7">
                <button>
                    <div className="h-8 w-8 bg-white rounded-full">
                        <img src={man} />
                    </div>
                </button>
            </div>

        </div>
    );
};
export default Navbar;