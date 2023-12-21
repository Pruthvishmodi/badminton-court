import Image from "next/image";
import React from "react";

type Props = {
  data: {};
};

const Card = ({ data }: Props) => {
  return (
    <div className="group flex flex-col relative border w-full aspect-[4/3] overflow-hidden cursor-pointer">
      <Image
        src={data.imageUrl}
        alt="Picture of the author"
        fill
        className="object-contain"
      />
      <div className="absolute translate-y-[40%] group-hover:translate-y-0 duration-300 flex items-center flex-col mx-auto bottom-0 w-full bg-white gap-12 p-2 pt-16 py-10">
        <div className="absolute top-0 -translate-y-1/3 items-center justify-center flex rounded-full bg-white fill-green-500 p-4">
          <div className="w-8 h-8">{data.svg}</div>
        </div>
        <h4 className="text-lg hover:text-green-500 text-[#444444] ">
          {data.title}
        </h4>
          {data.dis && <p className="text-sm  text-[#444444] flex text-center ">{data.dis}</p>}
          {data.buttonText && (
            <button className="bg-green-500 text-white px-4 py-2 rounded-full">
              {data.buttonText}
            </button>
          )}
      </div>
    </div>
  );
};

export default Card;
