import React from "react";
import Card from "@/components/card";
import BadMinton from "../../../public/image/shuttlecock-badminton-icon.svg";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";

const cardData = [
  {
    imageUrl: "/image/cardimage.jpg",
    svg: <BadMinton />,
    title: "Personalized Nutrition Plan",
    buttonText: "More Info",
  },
  {
    imageUrl: "/image/cardimage.jpg",
    svg: <BadMinton />,
    title: "Personalized Nutrition Plan",
    buttonText: "More Info",
  },
  {
    imageUrl: "/image/cardimage.jpg",
    svg: <BadMinton />,
    title: "Personalized Nutrition Plan",
    buttonText: "More Info",
  },
  // Add more data objects as needed
];

const index = () => {
  return (
    <section className="py-9 bg-[#f5f4f3]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="flex text-5xl hover:text-green-500 text-[#444444] justify-center font-oregano">
        Do not wait for Tomorrow!
      </h1>
      <div >
        <Arrow className="w-20 h-20 fill-green-500 -rotate-6" />
      </div>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-4 px-container mx-auto py-9">
        {cardData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default index;
