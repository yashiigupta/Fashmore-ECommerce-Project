import React from 'react';
import curlygirl from '../../assets/curlygirl.png';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className = "m-10 bg-gray-200 px-10 pt-4 rounded-lg flex justify-between">
      <div className = "font-poppins pt-14 pl-10">
        <div className="transform rotate-[-3deg] bg-white w-28 h-8 mb-3">
          <p className="font-bold text-3xl pb-3 transform rotate-[2deg]">LET'S</p>
        </div>
        <p className = "font-bold text-3xl mb-2">EXPLORE</p>
        <div className="transform rotate-[-3deg] bg-footerBg w-44 h-10 mb-3">
          <p className="font-bold text-3xl pb-3 transform rotate-[2deg]">UNIQUE</p>
        </div>
        <p className = "font-bold text-3xl pb-5">CLOTHES</p>
        <p className = "text-sm mb-4">Live for Influential and Innovative fashion!</p>
        <Link to={'/allproducts'}>
          <button className = "text-[14px] py-2 px-4 bg-black text-white rounded-lg">Shop Now</button>
        </Link>
      </div>
      <div className="flex items-end h-[400px]">
        <img className="w-full h-full" src={curlygirl} alt="blog" />
      </div>
    </div>
  )
}

export default HeroSection;