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
        <div className="relative w-full h-full">
          <Image
            className="object-cover"
            src="/image/Banner1new.jpg" // Provide the path to your image in the public directory
            alt="Description of your image"
            fill
          />
          <div className="absolute text-lg text-white  text-center w-2/5 h-3/5 bottom-9   max-md:hidden ">
            <div className="text-6xl font-bold text-white"> Badminton Court</div>
            <div className="text-lg text-white p-10"> welcom to badminton court</div>
            <div className="text-2xl text-white border-4 rounded-2xl mx-14 border-white text-center">
              <button>Explore</button>
            </div>
          </div>
        </div>
        {/* <div className="bg-yellow-500 h-56">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam rerum eveniet nemo deleniti ducimus aut. Adipisci totam corporis sunt ullam blanditiis, repudiandae impedit. Optio fuga amet veritatis accusamus voluptate.
      <Image
        src="/Images/Banner1new.jpg" // Provide the path to your image in the public directory
        alt="Description of your image"
        fill
        
      /></div> */}
        {/* <div className="bg-yellow-500 h-56">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, veniam asperiores architecto perferendis laboriosam dignissimos facilis quibusdam accusantium. Expedita rem fuga ullam! Doloremque iste, quo asperiores aut eaque temporibus? Iure ab pariatur eius? Laudantium dolore voluptates fugiat. Cum magni molestias harum. Rem quos eum voluptate, atque nobis fugiat sequi minus!</div> */}
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/image/Banner2new.jpg" // Provide the path to your image in the public directory
          alt="Description of your image"
          fill
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
