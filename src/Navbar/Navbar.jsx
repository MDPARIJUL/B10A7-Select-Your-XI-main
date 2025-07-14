import React from 'react';
import logo from '../assets/logo.png'
import { BsCoin } from "react-icons/bs";
const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center max-w-[1320px] mx-auto'>
                <img src={logo} alt="" />
                <ul className='flex items-center gap-[40px] text-[#131313B3]'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                    <li className='flex items-center gap-4 border-2 border-[#1313131A] rounded-xl px-6 py-4'> <span className='font-semibold'>Coin</span> <button className='text-xl text-[#F39E09] '><BsCoin/></button> </li>
                   
                </ul>
            </div>
        </div>
    );
};

export default Navbar;