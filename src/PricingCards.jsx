import React from "react";

const PricingCards = () => {
  return (
    <div className="text-center mt-30">
      <h2 className="font-semibold text-5xl">Simple, Transparent Pricing</h2>
      <p className="mt-7 font-light">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4 items-stretch mt-5">

        {/* card-1 */}
         <div className="card bg-base-200 shadow-sm flex flex-col h-full border border-gray-300 rounded-2xl">
        <div className="card-body flex flex-col p-6 items-start text-left">
          {/* Header Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Starter</h2>
            <p className="text-sm text-gray-500 mt-1">
              Perfect for getting started
            </p>

            {/* Large Price */}
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <span className="text-sm font-light text-gray-500 ml-1">
                /Month
              </span>
            </div>
          </div>

          {/* Features List */}
          <ul className="mt-6 flex flex-col gap-3 text-sm text-gray-600">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Access to 10 free tools</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Basic templates</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Community Support</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>1 project per month</span>
            </li>
          </ul>

          {/* Button */}
          <div className="mt-auto pt-8 w-full">
            <button className="btn w-full rounded-full bg-purple-700 hover:bg-purple-800 text-white border-none">
              Get Started Free
            </button>
          </div>
        </div>
      </div>


    {/* card-2 */}

    <div className="card relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm flex flex-col h-full border rounded-2xl">

        <div className="badge bg-[#FEF3C6] text-[#BB4D00] absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded-full">
  Most Popular
</div>
        <div className="card-body flex flex-col p-6 items-start text-left">
          {/* Header Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">Pro</h2>
            <p className="text-sm text-white mt-1">
              Best for professionals
            </p>

            {/* Large Price */}
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-sm font-light text-white ml-1">
                /Month
              </span>
            </div>
          </div>

          {/* Features List */}
          <ul className="mt-6 flex flex-col gap-3 text-sm text-white">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Access to all premium tools</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Unlimited templates</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Priority Support</span>
            </li>


            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Unlimited Projects</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Cloud sync</span>
            </li>
            
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-white shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Advanced analytics</span>
            </li>
          </ul>

          {/* Button */}
          <div className="mt-auto pt-8 w-full">
            <button className="btn w-full rounded-full text-purple-700 bg-white hover:bg-purple-800 hover:text-white border-none">
              Get Started Free
            </button>
          </div>
        </div>
      </div>


      {/* card3 */}
      <div className="card bg-base-200 shadow-sm flex flex-col h-full border border-gray-300 rounded-2xl">
        <div className="card-body flex flex-col p-6 items-start text-left">
          {/* Header Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
            <p className="text-sm text-gray-500 mt-1">
              For teams and businesses
            </p>

            {/* Large Price */}
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-gray-900">$99</span>
              <span className="text-sm font-light text-gray-500 ml-1">
                /Month
              </span>
            </div>
          </div>

          {/* Features List */}
          <ul className="mt-6 flex flex-col gap-3 text-sm text-gray-600">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Basic templates</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Team collaboration</span>
            </li>
            
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Custom integrations</span>
            </li>

            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Dedicated support</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>SLA Guarantee</span>
            </li>

            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 text-green-600 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Custom branding</span>
            </li>
          </ul>

          {/* Button */}
          <div className="mt-auto pt-8 w-full">
            <button className="btn w-full rounded-full bg-purple-700 hover:bg-purple-800 text-white border-none">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default PricingCards;
