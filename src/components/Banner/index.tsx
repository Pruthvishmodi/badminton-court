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

const Banner = () => {
  return (

    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="h-[90vh]  bg-rose-300"
    >
      <SwiperSlide>
     
      <Image
        src="/Images/1BannerImage.webp" // Provide the path to your image in the public directory
        alt="Description of your image"
        fill
      /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Banner;
