import React from "react";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";

const Title = ({ title }) => {
  return (
    <div className=" py-2 relative bg-inherit z-10">
      <div className="w-36 h-36 rounded-full bg-inherit absolute -top-8 left-1/2 -translate-x-1/2 "></div>
      <div className="z-10 relative w-full">
        <h1 className=" w-full text-center pt-8 text-5xl hover:text-green-500 text-white font-oregano">
          {title}
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <Arrow className="w-20 h-20 -rotate-12 fill-green-500" />
      </div>
    </div>
  );
};

export default Title;
