import React from "react";
import Line from "../../../public/image/Line 2.svg";

const Title = ({ title }) => {
  return (
    <div className=" py-2 relative bg-inherit z-10">
      <div className="w-48 h-48 rounded-full bg-inherit absolute -top-8 left-1/2 -translate-x-1/2 "></div>
      <div className="z-10 relative w-full flex flex-col items-center">
        <h1 className="w-full text-center pt-8 text-5xl hover:text-green-500 text-[#444444] font-oregano">
          {title}
        </h1>
        <Line className="w-48 h-32" />
      </div>
    </div>
  );
};

export default Title;
