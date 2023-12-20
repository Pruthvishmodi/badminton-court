"use client";
import React from "react";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";
import Image from "next/image";
import Image1 from "../../../public/image/sania_mirja.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const SucessPage = () => {
  const data = [
    {
      imagePath: "/image/sania_mirja.jpeg",
      title: "Linda Mayers Lost 80 Pounds and 4 Sizes",
      description:
        "Downloading the MyFitnessPal app and lacing up my running shoes helped me kick 53 pounds to the curb.",
      description1:
        "When it comes to weight loss, exercise is your best friend.  If you haven’t exercised for a long time and are very out of shape, start out by exercising for just 10 minutes a day, and add on over time to build up to 30 minutes to an hour every day. Do both aerobic exercise (like walking, swimming, and cycling) and anaerobic exercise (resistance training, weight lifting) for best results. Aerobic exercise has many benefits: it improves insulin sensitivity, strengthens your heart, gives you more energy, and much more.",
    },
    {
      imagePath: "/image/sania_mirja.jpeg",
      title: "Linda Mayers Lost 80 Pounds and 4 Sizes",
      description:
        "It all was quite simple  but I could never do that alone",
      description1:  
        "94% increased their physical activity (most frequently through walking)",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <section className="py-9 bg-[#f5f4f3] border w-full h-screen px-container">
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex text-5xl hover:text-green-500 text-[#444444] justify-center font-oregano">
          Sucess Story
        </h1>
        <div>
          <Arrow className="w-20 h-20 -rotate-6 fill-green-500" />
        </div>
      </div>

      {/* <div className="flex py-5 gap-12">
        <div className="flex-1 ">
          <div className="relative aspect-[4/3]">
            <Image
              src="/image/sania_mirja.jpeg"
              alt="Image1"
              fill
              className=""
            />
          </div>
        </div>
        <div className="flex-1 py-20 space-y-4">
          <a className="cursor-pointer text-green-500 text-xl font-bold hover:underline">
            Linda Mayers Lost 80 Pounds and 4 Sizes
          </a>

          <p>
            Downloading the MyFitnessPal app and lacing up my running shoes
            helped me kick 53 pounds to the curb.
          </p>
          <p>
            When it comes to weight loss, exercise is your best friend. If you
            haven't exercised for a long time and are very out of shape, start
            out by exercising for just 10 minutes a day, and add on over time to
            build up to 30 minutes to an hour every day. Do both aerobic
            exercise (like walking, swimming, and cycling) and anaerobic
            exercise (resistance training, weight lifting) for best results.
            Aerobic exercise has many benefits: it improves insulin sensitivity,
            strengthens your heart, gives you more energy, and much more.{" "}
          </p>
        </div>
      </div> */}

      {/* <Swiper pagination={pagination} modules={[Pagination]} className="">
        <SwiperSlide className="relative bottom-9">
          <div className="flex py-5 gap-12">
            <div className="flex-1 ">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/image/sania_mirja.jpeg"
                  alt="Image1"
                  fill
                  className=""
                />
              </div>
            </div>
            <div className="flex-1 py-20 space-y-4">
              <a className="cursor-pointer text-green-500 text-xl font-bold hover:underline">
                Linda Mayers Lost 80 Pounds and 4 Sizes
              </a>

              <p>
                Downloading the MyFitnessPal app and lacing up my running shoes
                helped me kick 53 pounds to the curb.
              </p>
              <p>
                When it comes to weight loss, exercise is your best friend. If
                you haven't exercised for a long time and are very out of shape,
                start out by exercising for just 10 minutes a day, and add on
                over time to build up to 30 minutes to an hour every day. Do
                both aerobic exercise (like walking, swimming, and cycling) and
                anaerobic exercise (resistance training, weight lifting) for
                best results. Aerobic exercise has many benefits: it improves
                insulin sensitivity, strengthens your heart, gives you more
                energy, and much more.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bottom-9">
          <div className="flex py-5 gap-12">
            <div className="flex-1 ">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/image/sania_mirja.jpeg"
                  alt="Image1"
                  fill
                  className=""
                />
              </div>
            </div>
            <div className="flex-1 py-20 space-y-4">
              <a className="cursor-pointer text-green-500 text-xl font-bold hover:underline">
                Linda Mayers Lost 80 Pounds and 4 Sizes
              </a>

              <p>
                Downloading the MyFitnessPal app and lacing up my running shoes
                helped me kick 53 pounds to the curb.
              </p>
              <p>
                When it comes to weight loss, exercise is your best friend. If
                you haven't exercised for a long time and are very out of shape,
                start out by exercising for just 10 minutes a day, and add on
                over time to build up to 30 minutes to an hour every day. Do
                both aerobic exercise (like walking, swimming, and cycling) and
                anaerobic exercise (resistance training, weight lifting) for
                best results. Aerobic exercise has many benefits: it improves
                insulin sensitivity, strengthens your heart, gives you more
                energy, and much more.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}

      <Swiper pagination={pagination} modules={[Pagination]} className="my-12">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative bottom-9">
            <div className="flex py-5 gap-12">
              <div className="flex-1 ">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.imagePath}
                    alt={`Image${index + 1}`}
                    fill
                    style={{objectFit: "contain"}}
                    className="w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="flex-1 py-20 space-y-4">
                <a className="cursor-pointer text-green-500 text-xl font-bold hover:underline">
                  {item.title}
                </a>

                <p>{item.description}</p>

                <p>{item.description1}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SucessPage;
