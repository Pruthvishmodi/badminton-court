"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "@/components/title";
import { optimizeImage } from "next/dist/server/image-optimizer";


const SucessPage = () => {
  const data = [
    {
      id: "1",
      imagePath: "/image/article_1.jpg",
      title: "Little Stars, Big Dreams: Nurturing Badminton Excellence at Ajay Dayal Badminton Academy",
      description:
        "In the captivating realm of badminton, the Ajay Dayal Badminton Academy has become a nurturing ground for the tiniest of talents with dreams as vast as the sky. Picture a group of young enthusiasts, armed with mini racquets and boundless ambition, stepping onto the court with eyes sparkling with determination. Against all odds, these little titans forge their path under the guidance of Ajay Dayal Badminton Academy, turning each shuttlecock into a shooting star. With every spirited rally, their dreams take flight, transforming the court into a canvas where aspirations metamorphose into reality. Witnessing these young champions conquer their goals not only tugs at the heartstrings but stands as a testament to the indomitable spirit that resides in the youngest hearts. In Ajay Dayal Badminton Academy, even the tiniest dreams have the power to soar to remarkable heights.",
      
    },
    {
      id: "2",
      imagePath: "/image/article_2.jpg",
      title: "Little Stars, Big Dreams: Nurturing Badminton Excellence at Ajay Dayal Badminton Academy",
      description: "In the captivating realm of badminton, the Ajay Dayal Badminton Academy has become a nurturing ground for the tiniest of talents with dreams as vast as the sky. Picture a group of young enthusiasts, armed with mini racquets and boundless ambition, stepping onto the court with eyes sparkling with determination. Against all odds, these little titans forge their path under the guidance of Ajay Dayal Badminton Academy, turning each shuttlecock into a shooting star. With every spirited rally, their dreams take flight, transforming the court into a canvas where aspirations metamorphose into reality. Witnessing these young champions conquer their goals not only tugs at the heartstrings but stands as a testament to the indomitable spirit that resides in the youngest hearts. In Ajay Dayal Badminton Academy, even the tiniest dreams have the power to soar to remarkable heights.",
      
    },
    {
      id: "2",
      imagePath: "/image/article_3.jpg",
      title: "Little Stars, Big Dreams: Nurturing Badminton Excellence at Ajay Dayal Badminton Academy",
      description: "In the captivating realm of badminton, the Ajay Dayal Badminton Academy has become a nurturing ground for the tiniest of talents with dreams as vast as the sky. Picture a group of young enthusiasts, armed with mini racquets and boundless ambition, stepping onto the court with eyes sparkling with determination. Against all odds, these little titans forge their path under the guidance of Ajay Dayal Badminton Academy, turning each shuttlecock into a shooting star. With every spirited rally, their dreams take flight, transforming the court into a canvas where aspirations metamorphose into reality. Witnessing these young champions conquer their goals not only tugs at the heartstrings but stands as a testament to the indomitable spirit that resides in the youngest hearts. In Ajay Dayal Badminton Academy, even the tiniest dreams have the power to soar to remarkable heights.",
      
    },
    {
      id: "2",
      imagePath: "/image/article_4.jpg",
      title: "Little Stars, Big Dreams: Nurturing Badminton Excellence at Ajay Dayal Badminton Academy",
      description:"In the captivating realm of badminton, the Ajay Dayal Badminton Academy has become a nurturing ground for the tiniest of talents with dreams as vast as the sky. Picture a group of young enthusiasts, armed with mini racquets and boundless ambition, stepping onto the court with eyes sparkling with determination. Against all odds, these little titans forge their path under the guidance of Ajay Dayal Badminton Academy, turning each shuttlecock into a shooting star. With every spirited rally, their dreams take flight, transforming the court into a canvas where aspirations metamorphose into reality. Witnessing these young champions conquer their goals not only tugs at the heartstrings but stands as a testament to the indomitable spirit that resides in the youngest hearts. In Ajay Dayal Badminton Academy, even the tiniest dreams have the power to soar to remarkable heights."
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section className="pb-9 bg-[#f5f4f3] w-full px-container">
      <Title title="Success Stories" />

      <Swiper pagination={pagination} modules={[Pagination]} className="my-6 sm:my-12">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="flex flex-col sm:flex-row sm:py-2 gap-4 sm:gap-12">
              <div className="sm:flex-1">
                <div className="relative lg:w-[80%] aspect-square">
                  <Image
                    src={item.imagePath}
                    alt={`Image${index + 1}`}
                    fill
                    className="w-full h-full rounded-md object-contain"
                  />
                </div>
              </div>
              <div className="sm:flex-1 md:py-6 max-sm:py-8 space-y-4">
                <a className="cursor-pointer text-green-500 text-lg sm:text-xl font-bold hover:underline">
                  {item.title}
                </a>

                <p className="text-sm sm:text-base">{item.description}</p>

                {/* <p className="text-sm sm:text-base">{item.description1}</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SucessPage;
