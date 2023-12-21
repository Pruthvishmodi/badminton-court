import React from "react";
import Card from "@/components/card";
import BadMinton from "../../../public/image/shuttlecock-badminton-icon.svg";
import Physical from '../../../public/image/Enhancement.jpg'
import Title from "@/components/title";

const cardData = [
  {
    imageUrl: "/image/phycial.jpg",
    svg: <BadMinton />,
    title: "Physical Fitness Enhancement",
    buttonText: "More Info",
  },
  {
    imageUrl: "/image/fitness.jpg",
    svg: <BadMinton />,
    title: "Physical Fitness Enhancement",
    buttonText: "More Info",
  },
  {
    imageUrl: "/image/Enhancement.jpg",
    svg: <BadMinton />,
    title: "Physical Fitness Enhancement",
    buttonText: "More Info",
  },
  // Add more data objects as needed
];

const index = () => {
  return (
    <section className="bg-[#f5f4f3] relative pb-9">
      <Title title=" Don't procrastinate, seize today!" />
      <div className="grid lg:grid-cols-3 items-center gap-4 px-container mx-auto py-9">
        {cardData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default index;
