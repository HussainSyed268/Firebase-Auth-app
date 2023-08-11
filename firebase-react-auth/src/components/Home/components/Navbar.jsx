import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import menu from '../../../assets/menu.png';
import arrow from '../../../assets/arrow.png';
import envelope from '../../../assets/envelope.png';
import help from '../../../assets/help.png';
import notif from '../../../assets/notif.png';
import logo from '../../../assets/logo.png';


const Navbar = (props) => {

    const toggleSidebar = () => {
        props.setSidebar(!props.sidebar);
        console.log(props.sidebar);
    };


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-around items-center h-20 bg-[#15283c] text-white relative shadow-sm font-mono">
            <div className="flex bg-[#fe571f] justify-center items-center h-full px-8">
                <button><img src={menu} width={50} height={50} alt='menu' onClick={toggleSidebar} /></button>
            </div>
            <div className='flex mx-4 justify-between items-center w-full h-16 bg-[#15283c] text-white relative shadow-sm font-mono'>
                <div className='flex'>
                    <img src={logo} width={55} height={50} alt='logo' />
                    <h1 className='text-3xl mx-2 py-3 font-sans'>Pluto</h1>
                </div>
                <div className='flex '>
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
            <div className="flex  bg-[#fe571f] justify-center items-center h-full px-4 sm:hidden lg:flex">
                <button className='flex' onClick={toggleDropdown}>
                    <div className="h-10 w-16 bg-cover bg-center bg-man rounded-full">
                    </div>
                    <div className='px-2 text-sm text-white py-3'>{props.name}</div>

                    <img className='h-6 w-6 my-2' src={arrow} width={32} height={32} alt='drop' />
                    {isDropdownOpen && (
                        <div className="flex flex-col items-start absolute mt-16 py-1 w-36 mr-10 text-black bg-white text-sm shadow-lg">
                            <div className="px-4 py-2 hover:bg-slate-200 duration-200">My Profile</div>
                            <div className="px-4 py-2 hover:bg-slate-200 duration-200">Settings</div>
                            <div className="px-4 py-2 hover:bg-slate-200 duration-200">Help</div>
                            <div className="px-4 py-2 hover:bg-slate-200 duration-200">Logout</div>
                        </div>
                    )}
                </button>
            </div>

        </div>
    );
};
export default Navbar;