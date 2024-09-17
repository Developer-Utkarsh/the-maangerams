import React from 'react';

import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center flex-col p-4">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      ></div>
      <div  className="absolute inset-0 bg-zinc-200 opacity-20"></div>
      <div className="relative text-center text-[#525252] px-4 flex justify-center items-center flex-col max-w-4xl mx-auto">
        <div className='mb-4 sm:mb-8'>
          <img src='/images/organic.png' className=" h-28 sm:h-32  md:h-36  mx-auto" alt="Organic" />
          <p className='text-end text-xs sm:text-sm -mt-4 sm:-mt-6 italic text-zinc-600 font-normal'>100% Guarantee</p>
        </div>
        <h1 className="text-5xl  lg:text-7xl font-extralight tracking-tight mb-2 sm:mb-4">
          Consume <span className='font-bold tracking-tighter'>Healthy</span> to Be <span className='font-bold tracking-tighter'>Healthy</span> 
        </h1>
        <p className="text-xs sm:text-sm max-w-3xl mx-auto uppercase font-medium tracking-widest mb-8 sm:mb-12">
          Organic Fruits, Vegetables, And Lot More to Your Door
        </p>

        <Link className='px-6 sm:px-8 py-2 rounded-full uppercase bg-white text-[#222] border-4 sm:border-[6px] border-[#86CDB5] text-sm sm:text-base hover:bg-[#86CDB5] font-medium tracking-tight transition duration-300 hover:text-white' to="/shop">Shop Now</Link>
      </div>
    </div>
  );
};

export default Hero;
