import { FaArrowRight } from "react-icons/fa";
import React, { useContext, useEffect } from 'react'
import category2 from '../../assets/category1.jpg';
import category1 from '../../assets/category2.jpg';
import myContext from '../../context/data/myContext'
   
function Categories()
{
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div className = "container px-5 py-8 md:py-16 mx-auto">
      <div className = "lg:w-1/2 w-full mb-6 lg:mb-10">
        <p className = "text-2xl mb-2 text-black font-rubik" style={{ color: mode === 'dark' ? 'white' : '' }}>Young's Favourite</p>
        <div className = "h-1 w-20 bg-footerBg rounded"></div>
      </div>
      
      <div className = "flex flex-wrap font-poppins">
        <div className = "flex flex-col">
          <div className="flex cursor-pointer" >
            <img className="rounded-3xl w-full h-80 py-2 pr-2 hover:scale-102 transition-transform duration-300 ease-in-out" src={category1} alt="blog" />
          </div>
          <p className = "text-md font-medium mb-[1px]" style={{ color: mode === 'dark' ? 'white' : '' }}>Trending on instagram</p>
          <button className = "flex items-center text-xs text-[#7F7F7F]">Explore Now <FaArrowRight className = "ml-1 text-[10px] text-xs text-[#7F7F7F]"/></button>
        </div>
        <div className = "flex flex-col">
          <div className="flex justify-center cursor-pointer" >
            <img className="rounded-3xl w-full h-80 py-2 pr-2 hover:scale-102 transition-transform duration-300 ease-in-out" src={category2} alt="blog" />
          </div>
          <p className = "text-md font-medium mb-[1px]" style={{ color: mode === 'dark' ? 'white' : '' }}>All under 400</p>
          <button className = "flex items-center text-xs text-[#7F7F7F]">Explore Now <FaArrowRight  className= "ml-1 text-[10px] text-[#7F7F7F]"/></button>
        </div>
      </div>
    </div>
  )
}

export default Categories;

// onClick={()=> window.location.href = `/productinfo/${id}`} 
// onClick={()=> window.location.href = `/productinfo/${id}`} 