"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "@/components/title";

const SucessPage = () => {
  const data = [
    {
      id: "1",
      imagePath: "/image/Sania_Mirza_-_Roland_Garros_2011.jpg",
      title: "Linda Mayers Lost 80 Pounds and 4 Sizes",
      description:
        "Downloading the MyFitnessPal app and lacing up my running shoes helped me kick 53 pounds to the curb.",
      description1:
        "When it comes to weight loss, exercise is your best friend. If you haven’t exercised for a long time and are very out of shape, start out by exercising for just 10 minutes a day, and add on over time to build up to 30 minutes to an hour every day. Do both aerobic exercise (like walking, swimming, and cycling) and anaerobic exercise (resistance training, weight lifting) for best results. Aerobic exercise has many benefits: it improves insulin sensitivity, strengthens your heart, gives you more energy, and much more.",
    },
    {
      id: "2",
      imagePath: "/image/Sania_Mirza_-_Roland_Garros_2011.jpg",
      title: "Linda Mayers Lost 80 Pounds and 4 Sizes",
      description: "It all was quite simple, but I could never do that alone",
      description1: "94% increased their physical activity (most frequently through walking)",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section className="pb-9 bg-[#f5f4f3] w-full px-container">
      <Title title="Success Stories" />

      <Swiper pagination={pagination} modules={[Pagination]} className="my-6 sm:my-12">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="flex flex-col sm:flex-row py-2 sm:py-5 gap-4 sm:gap-12">
              <div className="sm:flex-1">
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.imagePath}
                    alt={`Image${index + 1}`}
                    fill
                    className="w-full h-full rounded-md object-contain"
                  />
                </div>
              </div>
              <div className="sm:flex-1 md:py-12 max-sm:py-8 space-y-4">
                <a className="cursor-pointer text-green-500 text-lg sm:text-xl font-bold hover:underline">
                  {item.title}
                </a>

                <p className="text-sm sm:text-base">{item.description}</p>

                <p className="text-sm sm:text-base">{item.description1}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SucessPage;
