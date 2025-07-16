import React from 'react';
import banner from '../assets/banner.jpg';
import bannerlogo from '../assets/banner-logo.png'
const Banner = () => {
    return (
         <div className='max-w-[1320px]  mx-auto relative rounded-3xl overflow-hidden'>
            <img src={banner} className='h-[500px] w-full object-cover' alt="" />
            <div className='bg-black bg-opacity-80 inset-0 h-[500px] absolute'></div>
            <div className='flex flex-col items-center absolute inset-0 justify-center space-y-4'>
                <img src={bannerlogo} alt="" />
                <h1 className='font-bold lg:text-5xl text-[#FFFFFF] max-w-4xl text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-[#FFFFFFB3] lg:text-2xl'>Beyond Boundaries Beyond Limits</h3>
                <button className='btn bg-[#E7FE29] py-2 px-4 rounded-lg font-bold'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;