import React from 'react';
import logo from '../assets/logo.png'
import { BsCoin } from "react-icons/bs";
const Navbar = () => {
    return (
        <div>
            <div className='lg:flex justify-between items-center max-w-[1320px] mx-auto mb-5 lg:mb-0'>
                <img className='mx-auto lg:mx-0' src={logo} alt="" />
                <ul className='lg:flex items-center gap-[40px] text-[#131313B3] text-center'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li className='relative group'>Teams
                        <ul className='absolute top-5 hidden group-hover:block bg-[#e05a3b] px-4 text-center text-[#131313B3]' >
                            <li className='hover:bg-[#33ff57] mt-2'>Bangladesh </li>
                            <li className='hover:bg-[#33ff57] mt-2'>India</li>
                            <li className='hover:bg-[#33ff57] mt-2'>Pakistan</li>
                            <li className='hover:bg-[#33ff57] mt-2'>Srilanka</li>
                            <li className='hover:bg-[#33ff57] mt-2'>Nepal</li>
                        </ul>

                    </li>
                    <li>Schedules</li>
                    <li className='flex items-center gap-4 border-2 border-[#1313131A] rounded-xl px-3 py-2 lg:px-6 lg:py-4 w-fit mx-auto'> <span className='font-semibold'>Coin</span> <button className='text-xl text-[#F39E09] '><BsCoin/></button> </li>
                   
                </ul>
            </div>
        </div>
    );
};

export default Navbar;