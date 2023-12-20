"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper/modules";

const Stories = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="h-[50vh]  bg-rose-300"
    >
     <SwiperSlide>
        3
      </SwiperSlide>
      <SwiperSlide>
        3
      </SwiperSlide>
    </Swiper>
  );
};

export default Stories;
