import Image from "next/image";
import React from "react";
import Images from "../../../public/image/cardimage.jpg";
import BadMinton from "../../../public/image/shuttlecock-badminton-icon.svg";

const cardData = [
  {
    photo: Images,
    svg: <BadMinton />,
    title: "Personalized Nutrition Plan",
    buttonText: "More Info",
  },
  // Add more data objects as needed
];

const Cards = () => {
  return (
    
      <div className="group flex flex-col relative border w-full aspect-[4/3] overflow-hidden cursor-pointer">
        {cardData.map((val) => {
          return (
            <>
              <Image
                src={val.photo}
                alt="Picture of the author"
                fill
                className="object-cover"
              />
              <div className="absolute translate-y-[40%] group-hover:translate-y-0 duration-300 flex items-center flex-col mx-auto bottom-0 w-full bg-white gap-10 p-2 pt-16 py-10">
                <div className="absolute top-0 -translate-y-1/3 items-center justify-center flex rounded-full bg-white fill-green-500 p-4">
                  <div className="w-8 h-8">{val.svg}</div>
                </div>
                <p className="text-lg hover:text-green-500 text-[#444444] ">
                  {val.title}
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                  {val.buttonText}
                </button>
              </div>
            </>
          );
        })}
      </div>
  );
};

export default Cards;
