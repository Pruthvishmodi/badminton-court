"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const slides = [
  {
    imageSrc: "/image/Banner1new.jpg",
    title: "Dive into badminton",
    description:
      "A high-energy sport blending agility and strategy. Smash, drop, and rally your way to a fitter. Transform your reflection, embrace the thrill!",
  },
  {
    imageSrc: "/image/Banner2new.jpg",
    title: "Badminton Court",
    description: "Welcome to badminton court",
  },
  {
    imageSrc: "/image/banner1.jpg",
    title: "Badminton Court",
    description: "Welcome to badminton court",
  },
];

const Banner = () => {
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="h-[90vh] ">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full px-container">
              <Image
                className="object-cover"
                src={slide.imageSrc}
                alt="Description of your image"
                layout="fill"
                objectFit="cointain"
              />
              <div className="absolute text-lg text-white  text-center w-2/5 h-3/5 bottom-9  max-md:hidden ">
                <div className="text-7xl font-bold font-oregano text-white">
                  {slide.title}
                </div>
                <div className="text-lg  text-white p-10">
                  {slide.description}
                </div>
                <div>
                  <button className="text-2xl text-white border-4 rounded-2xl py-4 px-8 border-white text-center">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
