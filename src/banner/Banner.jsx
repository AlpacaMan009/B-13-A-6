import React from "react";
import circle from "../assets/Group 5.png";
import banner from "../assets/banner.png"
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-center">

        {/* text section */}

      <div className="w-full lg:w-1/2">

        <div className="badge badge-soft bg-purple-200 text-purple-600 rounded-4xl mb-4">
          <img src={circle} alt="" />
          New: AI-Powered Tools Available
        </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4">
        Supercharge Your
        <br />
        Digital Workflow
      </h1>

      <p className="text-gray-400  font-light text-sm sm:text-base">Access premium AI tools, design assets, templates, and productivity
        
        software—all in one place. Start creating faster today. Explore Products</p>

      <div className="flex flex-col sm:flex-row gap-3 mt-5">

        <button className="btn btn-outline rounded-4xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none">
          Explore Products
        </button>

        <button className="btn btn-outline border-purple-600 text-purple-600 rounded-4xl">
          <Play /> Watch Demo
        </button>
      </div>

      </div>


    {/* image */}
      <div className="w-full lg:w-1/2">
        <img src={banner} alt="" className="w-full h-auto"  />
      </div>



      


    </div>



    <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-8 mb-8 py-10">

        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between  gap-8 text-white px-4">
            <div>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[60px]">50K+</h1>
            <p className="text-lg font-light text-center">Active Users</p>
            </div>
            
            <div>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[60px]">200+</h1>
            <p className="text-lg font-light text-center">Premium Tools</p>
            </div>

            <div>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[60px]">4.9</h1>
            <p className="text-lg font-light text-center">Rating</p>
            </div>


        </div>

    </div>
    </>
  );
};

export default Banner;
