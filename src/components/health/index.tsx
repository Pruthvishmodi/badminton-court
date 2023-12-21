"use client";
import React, { useEffect, useRef } from "react";
import img from "../../../public/image/badminton.jpeg";

const Health = () => {
  const sectionStyle = {
    backgroundImage: `url(${img.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const parallaxValue = scrollY * 0.5;
      parallaxRef.current.style.backgroundPositionY = `calc(50% + ${parallaxValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      style={sectionStyle}
      className="h-full w-full relative overflow-hidden"
      ref={parallaxRef}
    >
      <div className="py-20 md:px-5 xl:px-32 max-w-5xl">
        <h3 className="pt-16 px-4 font-oregano text-[52px] text-white xl:text-6xl">
          Master the Shuttlecock in 90 Days
        </h3>

        <p className="px-4 space-y-6 text-sm text-white py-6">
          Dive into the world of badminton today and join our expert coaching
          program. In a short span of 90 days, experience a remarkable
          metamorphosis in your game, unveiling a refined player and strategist
          as you glance into the mirror.
        </p>

        <div className="pt-10 pb-9">
          <button className="border border-white text-white px-10 rounded-3xl py-2">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Health;
