import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../../assets/menu.png';
import arrow from '../../../assets/arrow.png';
import envelope from '../../../assets/envelope.png';
import help from '../../../assets/help.png';
import notif from '../../../assets/notif.png';
import logo from '../../../assets/logo.png';
const Navbar = (props) => {
    return (
        <div className="flex justify-around items-center h-16 bg-[#15283c] text-white relative shadow-sm font-mono">
            <div className="flex bg-[#fe571f] justify-center items-center h-full px-6">
                <button><img src={menu} width={30} height={30} alt='menu' /></button>
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
                <button className='flex'>
                    <div className="h-10 w-14 bg-cover bg-center bg-man rounded-full">
                    </div>
                    <div className='px-2 text-sm text-white py-3'>{props.name}</div>
                    <img className='h-6 w-6 my-2' src={arrow} width={32} height={32} alt='drop' />
                </button>
            </div>

        </div>
    );
};
export default Navbar;