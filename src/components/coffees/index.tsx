"use client"
import React from 'react';
import img from '../../../public/image/nature.jpeg';
import Image from 'next/image';
import img2 from '../../../public/image/stadium.jpeg'

const Coffes = () => {
  const sectionStyle = {
    backgroundImage: `url(${img.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section style={sectionStyle} className='h-full w-full px-container'>
      <div className='py-7 text-white max-w-3xl'>
   <div className='pt-8 flex justify-center'>ICon</div>
        <div>
          <h2 className='px-6 font-oregano text-5xl pt-8'>
            Huge Selection Of Green Coffees and Herbal Teas!
          </h2>
        </div>
        <div className='px-6 text-sm pt-6 pb-20'>
            <p>
                <span>Only our shop will take care of that you get the highest quality of goods aimed at correction of your shape and improving your general mood and life satisfaction.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Coffes;
