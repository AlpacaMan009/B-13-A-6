import React from "react";
import user from "./assets/user.png";
import box from "./assets/package.png";
import rocket from "./assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-7xl">Get Started In 3 Steps</h2>
      <p className="mt-7 font-light">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-5 mt-7 px-4">

        {/* first card */}
        <div className="relative w-full bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
          {/* Number Badge */}
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold rounded-full w-8 h-8 flex items-center justify-center">
            01
          </div>

          {/* Icon Circle */}
          <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <img src={user} alt="" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-medium text-gray-900 mb-2">
            Create Account
          </h2>

          {/* Description */}
          <p className="text-sm font-light">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* 2nd card */}
        <div className="relative w-full bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
          {/* Number Badge */}
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold rounded-full w-8 h-8 flex items-center justify-center">
            02
          </div>

          {/* Icon Circle */}
          <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <img src={box} alt="" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-medium text-gray-900 mb-2">
            Choose Products
          </h2>

          {/* Description */}
          <p className="text-sm font-light">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* 3rd card */}
        <div className="relative w-full bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
          {/* Number Badge */}
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold rounded-full w-8 h-8 flex items-center justify-center">
            03
          </div>

          {/* Icon Circle */}
          <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <img src={rocket} alt="" />
          </div>

          {/* Title */}
          <h2 className="text-xl font-medium text-gray-900 mb-2">
            Start Creating
          </h2>

          {/* Description */}
          <p className="text-sm font-light">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
