"use client";
import React, { useState, useEffect } from "react";
import Cart from "../../../public/icons/cart.svg";
import Search from "../../../public/icons/search.svg";
import Hamburger from "../../../public/icons/hamburger.svg";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // You can adjust the threshold as needed
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  //   useEffect(() => {
  //     const onScroll = () => {
  //       if (window.scrollY >= 40) {
  //         navbarRef.current.classList.add("bg-opacity-100")
  //       } else {
  //         navbarRef.current.classList.remove("bg-opacity-100")
  //       }
  //     }
  //     window.addEventListener("scroll", onScroll, false)
  //     return () => {
  //       window.removeEventListener("scroll", onScroll, false)
  //     }
  //   }, [])
  return (
    <nav
      className={`py-4 px-container w-full sticky top-0 z-10  ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <div className="hover:text-[#2acd35] text-[#444444] font-bold text-2xl w-1/6">
          Logo
        </div>

        {/* Hamburger menu for small screens */}
        <button className="lg:hidden h-10 w-10" onClick={toggleNavbar}>
          <Hamburger className="stroke-black hover:stroke-[#2acd35]" />
        </button>

        {/* Navigation links for desktop */}
        <div className="hidden lg:flex items-center text-lg gap-2">
          {options.map((option, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-[#2acd35] text-[#444444] px-3 font-bold py-2"
            >
              {option}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex gap-8">
          <button className="rounded-full p-2 border-2 border-[#444444] hover:border-[#2acd35] h-10 w-10">
            <Search className="stroke-black hover:stroke-[#2acd35]" />
          </button>
          <button className="hover:text-[#2acd35]">
            <Cart className="h-9 w-9 stroke-black hover:stroke-[#2acd35]" />
          </button>
        </div>
      </div>

      {/* Navigation links for smaller screens */}
      <div
        className={`${
          isCollapsed ? "hidden lg:hidden" : "block lg:hidden "
        } items-center bg-black text-[#2acd35] p-4`}
      >
        {options.map((option, index) => (
          <a
            key={index}
            href="#"
            className="text-[#2acd35] block my-2 text-center text-2xl p-4"
          >
            {option}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
