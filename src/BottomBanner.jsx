import React from "react";

const BottomBanner = () => {
  return (
    <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20 py-30 ">
      <div className="max-w-5xl mx-auto  justify-around justify-center items-center gap-8 text-white px-4">
        <div>
          <h1 className="font-semibold text-5xl text-center">
            Ready To Transform Your Workflow
          </h1>
          <p className="text-lg font-light text-center mt-7">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br />
            Start your free trial today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center items-center mt-10 ">
          <button className="btn btn-outline rounded-4xl text-purple-700  bg-white border-none shadow-lg">
            Explore Products
          </button>

          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-700 rounded-4xl">
            View Pricing
          </button>
        </div>

        <p className="text-md font-light text-center mt-7">
           14-day free trial • No credit card required • Cancel anytime
          </p>
      </div>
    </div>
  );
};

export default BottomBanner;
