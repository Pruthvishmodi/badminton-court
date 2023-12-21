"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const slides = [
  {
    imageSrc: "/image/article_6.jpg",
    title: "Who said workouts have to be tedious?",
    description: "Badminton adds a touch of excitement to your wellness routine, turning each session into an exhilarating adventure. Unleash your inner virtuoso and redefine what it means to achieve peak fitness.",
  },
  {
    imageSrc: "/image/banner1new.jpg",
    title: "Dive into badminton",
    description:
      "A high-energy sport blending agility and strategy. Smash, drop, and rally your way to a fitter. Transform your reflection, embrace the thrill!",
  },
  {
    imageSrc: "/image/banner2new.jpg",
    title: "Delve into the sport of badminton",
    description: "Foster optimal wellness through the refined fusion of agility and strategy in the world of badminton.",
  },
];

const Banner = () => {
  return (
    <section className="relative h-[90vh]">
  <Swiper navigation={true} modules={[Navigation]} className="h-full">
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative h-full w-full">
          <Image
            src={slide.imageSrc}
            alt="Description of your image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-10 md:top-36 md:items-center lg:top-1/2 lg:left-0 lg:transform lg:-translate-y-1/2 p-8 text-white text-center lg:text-left lg:px-container md:max-w-4xl">
            <div className="text-7xl font-bold font-oregano">
              {slide.title}
            </div>
            <div className="text-lg text-white mt-4">
              {slide.description}
            </div>
            <div className="mt-4">
              <button className="text-2xl text-white border-4 rounded-2xl py-4 px-8 border-white">
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
