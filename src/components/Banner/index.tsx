"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Navbar from "../Navbar";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="h-[90vh] ">
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              src="/image/Banner1new.jpg" // Provide the path to your image in the public directory
              alt="Description of your image"
              layout="fill"
              objectFit="cointain"
            />
            <div className="absolute text-lg text-white  text-center w-2/5 h-3/5 bottom-9   max-md:hidden ">
              <div className="text-7xl font-bold font-oregano text-white">
                Badminton Court
              </div>
              <div className="text-lg  text-white p-10">
                welcom to badminton court
              </div>
              <div>
                <button className="text-2xl text-white border-4 rounded-2xl py-4 px-8 border-white text-center">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              src="/image/Banner2new.jpg" // Provide the path to your image in the public directory
              alt="Description of your image"
              layout="fill"
              objectFit="cointain"
            />
            <div className="absolute text-lg text-white  text-center w-2/5 h-3/5 right-0  max-md:hidden ">
              <div className="text-7xl font-bold font-oregano text-white">
                Badminton Court
              </div>
              <div className="text-lg  text-white p-10">
                welcom to badminton court
              </div>
              <div>
                <button className="text-2xl text-white border-4 rounded-2xl py-4 px-8 border-white text-center">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="object-cover"
              src="/image/banner1.jpg" // Provide the path to your image in the public directory
              alt="Description of your image"
              layout="fill"
              objectFit="cointain"
            />
            <div className="absolute text-lg mt-10 text-white  text-center w-2/5 h-3/5 left-0  max-md:hidden ">
              <div className="text-7xl font-bold font-oregano text-white">
                Badminton Court
              </div>
              <div className="text-lg  text-white p-10">
                welcom to badminton court
              </div>
              <div>
                <button className="text-2xl text-white border-4 rounded-2xl py-4 px-8 border-white text-center">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
