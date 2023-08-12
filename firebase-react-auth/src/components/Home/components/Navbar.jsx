import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import menu from '../../../assets/menu.png';
import arrow from '../../../assets/arrow.png';
import envelope from '../../../assets/envelope.png';
import help from '../../../assets/help.png';
import notif from '../../../assets/notif.png';
import logo from '../../../assets/logo.png';
import { auth } from '../../../firebase';

const Navbar = (props) => {

    const navigate = useNavigate();

    const toggleSidebar = () => {
        props.setSidebar(!props.sidebar);
    };

    const Signout = () => {
        auth.signOut();
        navigate("/login");
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-around items-center h-20 bg-[#15283c] text-white relative shadow-sm font-mono">
            <div className="flex bg-[#fe571f] justify-center items-center h-full px-8 cursor-pointer" onClick={toggleSidebar}>
                <button><img src={menu} width={50} height={50} alt='menu' /></button>
            </div>
            <div className='flex mx-4 justify-between items-center w-full h-16 bg-[#15283c] text-white relative shadow-sm font-mono'>
                <div className='flex'>
                    <img src={logo} width={55} height={50} alt='logo' />
                    <h1 className='text-3xl mx-2 py-3 font-sans'>Pluto</h1>
                </div>
                <div className='hidden sm:flex'>
                    <div className='flex my-2'>
                        <button ><img src={notif} width={25} height={25} alt='notification' /></button>
                        <div className=' relative h-4 w-4 rounded-full bg-orange-500 right-2 bottom-2 text-sm'>2</div>
                    </div>
                    <div className='flex my-2 ml-2 mr-6'>
                        <button ><img src={help} width={25} height={25} alt='help' /></button>
                    </div>
                    <div className='flex my-2 mr-4'>
                        <button ><img src={envelope} width={25} height={25} alt='message' /></button>
                        <div className=' relative h-4 w-4 rounded-full bg-orange-500 right-2 bottom-2 text-sm'>3</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fe571f] justify-center items-center h-full px-4 hidden lg:flex">
                <button className='flex' onClick={toggleDropdown}>
                    <div className="w-[5rem] h-14 bg-cover bg-center bg-man rounded-full">
                    </div>
                    <div className='mx-2 min-w-fit w-fit text-sm text-white py-4'>{props.name}</div>

                    <img className='h-6 w-8 my-3' src={arrow} width={32} height={32} alt='drop' />
                    {isDropdownOpen && (
                        <div className="flex flex-col absolute mt-16 py-1 mr-10 w-full text-black bg-white text-sm shadow-lg">
                            <div className=" pl-4 py-2 text-start hover:bg-slate-200 duration-200 w-full">My Profile</div>
                            <div className=" pl-4 py-2 text-start hover:bg-slate-200 duration-200 w-full">Help</div>
                            <div className=" pl-4 py-2 text-start hover:bg-slate-200 duration-200 w-full">Settings</div>
                            <div className=" pl-4 py-2 font-semibold text-start hover:bg-slate-200 duration-200 w-full" onClick={Signout}>Logout</div>
                        </div>
                    )}
                </button>
            </div>

        </div>
    );
};
export default Navbar;