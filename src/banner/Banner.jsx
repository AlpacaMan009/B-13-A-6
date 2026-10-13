import React from "react";
import circle from "../assets/Group 5.png";
import banner from "../assets/banner.png"
import { Play } from "lucide-react";

const Banner = () => {
  return (
    <>
        <div className="w-6xl mx-auto p-8 flex gap-[60px]">

        {/* text section */}

      <div className="my-[70px]">

        <div className="badge badge-soft bg-purple-200 text-purple-600 rounded-4xl mb-4">
          <img src={circle} alt="" />
          New: AI-Powered Tools Available
        </div>

      <h1 className="text-5xl font-bold my-4">
        Supercharge Your
        <br />
        Digital Workflow
      </h1>

      <p className="text-gray-400  font-light">Access premium AI tools, design assets, templates, and productivity
        <br />
        software—all in one place. Start creating faster today. Explore Products</p>

      <div className="space-x-2 mt-5">

        <button className="btn btn-outline rounded-4xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none">
          Explore Products
        </button>

        <button className="btn btn-outline border-purple-600 text-purple-600 rounded-4xl">
          <Play /> Watch Demo
        </button>
      </div>

      </div>


    {/* image */}
      <div>
        <img src={banner} alt="" />
      </div>



      


    </div>



    <div className="h-[200px] w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-8 mb-8 ">

        <div className="flex justify-around gap-5 p-7 text-white  ">
            <div>
            <h1 className="font-bold text-[60px] ">50K+</h1>
            <p className="text-lg font-light text-center">Active Users</p>
            </div>
            
            <div>
            <h1 className="font-bold text-[60px] ">200+</h1>
            <p className="text-lg font-light text-center">Premium Tools</p>
            </div>

            <div>
            <h1 className="font-bold text-[60px] ">4.9</h1>
            <p className="text-lg font-light text-center">Rating</p>
            </div>


        </div>

    </div>
    </>
  );
};

export default Banner;
