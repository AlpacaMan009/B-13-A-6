import React from "react";

import { ShoppingCart } from "lucide-react";

const Navbar = ({ carts }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>

            <li>
              <a className="relative">
                <ShoppingCart />
                {carts.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {carts.length}
                  </span>
                )}
              </a>
            </li>

            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          Digitools
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex justify-center items-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 navbar-end  ">
        <div className="hidden lg:block">
          <ul className="flex gap-3 items-center justify-center ">
            <li>
              <a className="relative">
                <ShoppingCart />
                {carts.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {carts.length}
                  </span>
                )}
              </a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
        <a className="btn rounded-4xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
