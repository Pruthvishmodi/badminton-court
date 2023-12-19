"use client";
import React, { useState } from "react";
import Cart from "../../../public/icons/cart.svg"
import Search from "../../../public/icons/search.svg"

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const options = [
    "Home",
    "About Us",
    "Services",
    "Blog",
    "Events",
    "Pages",
    "Stories",
    "Shop",
  ];

  return (
    <nav className="bg-gray-800 p-4  w-full sticky top-0 z-10">
      <div className="  container mx-auto flex justify-between items-center ">
        <div className="text-white font-bold text-2xl w-1/4">Logo</div>

        {/* Hamburger menu for small screens */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation links for desktop */}
        <div className=" hidden lg:flex items-center text-lg gap-5">
          {options.map((option, index) => (
            <a key={index} href="#" className="text-white px-4 py-2">
              {option}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex text-white gap-6">
          <div className="">
            <button className="  rounded-full border-gray-600 h-4 w-4">
              <Search />
            </button>
          </div>
          <div className="h-4 w-4"><Cart /></div>
        </div>
      </div>

      {/* Navigation links for smaller screens */}
      <div
        className={`${
          isCollapsed ? "hidden lg:hidden" : "block lg:hidden"
        } items-center bg-gray-800 text-white p-4  `}
      >
        {options.map((option, index) => (
          <a
            key={index}
            href="#"
            className="text-white block my-2  p-4 bg-green-500 "
          >
            {option}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
