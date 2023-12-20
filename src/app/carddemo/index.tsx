import React from "react";
import Card from "@/components/card";
import BadMinton from "../../../public/image/shuttlecock-badminton-icon.svg";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";
import Title from "@/components/title";

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
    <section className="bg-[#f5f4f3] relative">
      <Title title="Do not wait for Tomorrow!" />
      <div className="grid lg:grid-cols-3 items-center gap-4 px-container mx-auto py-9">
        {cardData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default index;
