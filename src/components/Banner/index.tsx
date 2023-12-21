"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const slides = [
  {
    imageSrc: "/image/banner1new.jpg",
    title: "Dive into badminton",
    description:
      "A high-energy sport blending agility and strategy. Smash, drop, and rally your way to a fitter. Transform your reflection, embrace the thrill!",
  },
  {
    imageSrc: "/image/banner2new.jpg",
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
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation, Autoplay, Pagination]}
      className="h-[90vh]  bg-rose-300"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={slides.imageSrc}
            alt="Description of your image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute text-lg text-white  text-center w-2/5 h-3/5 bottom-9   max-md:hidden ">
            <div className="text-6xl font-bold text-white">
              {slides.title}
              {/* Badminton Court */}
            </div>
            <div className="text-lg text-white p-10">
              {slides.description}
              {/* welcom to badminton court */}
            </div>
            <div className="text-2xl text-white border-4 rounded-2xl mx-14 border-white text-center">
              <button>Explore</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
  </Swiper>
  );
};

export default Banner;
