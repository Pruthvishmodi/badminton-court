"use client"
import React, { useEffect, useRef } from 'react';
import img from '../../../public/image/badminton.jpeg';

const Health = () => {
  const sectionStyle = {
    backgroundImage: `url(${img.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const parallaxValue = scrollY * 0.5; 
      parallaxRef.current.style.backgroundPositionY = `calc(50% + ${parallaxValue}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section style={sectionStyle} className='h-full w-full relative overflow-hidden' ref={parallaxRef}>
      <div className="py-20 md:px-5 xl:px-52">
        <h3 className="pt-16 font-oregano text-[52px] text-white xl:text-6xl">
          3 months with a Health Coach
        </h3>
        <div className="pt-4">
          <p className="px-4 space-y-6 text-sm text-white">
            <span>Start working on your body today, and with our individual fitness program, already</span>
            <br />
            <span> in 90 days you will see a totally different girl in the mirror!</span>
          </p>
        </div>
        <div className="pt-10 px-4 pb-9">
          <button className="border border-white text-white px-10 rounded-3xl py-2">More Info</button>
        </div>
      </div>
    </section>
  );
};

export default Health;
