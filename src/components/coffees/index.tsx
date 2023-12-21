"use client";
import React from "react";
import img from "../../../public/image/coffe_2.jpg";
import BadMiton from '../../../public/image/tennis-icon.svg'

const Coffes = () => {
  const sectionStyle = {
    backgroundImage: `url(${img.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: `rgba(0, 0, 0, 0.5)`,
  };

  return (
    <section style={sectionStyle} className="h-full w-full px-container">
      <div className="py-24 text-white flex flex-col text-center items-center hover:text-green-400">
         {/* <div className="w-16 h-16 fill-white flex"><BadMiton/></div> */}
        <div>
          <h2 className="px-6 font-oregano text-5xl pt-8 ">
            Huge Selection Of Green Coffees and Herbal Teas!
          </h2>
        </div>
        <div className="px-6 text-base pt-6 pb-20">
          <p>
            <span>
              Only our shop will take care of that you get the highest quality
              of goods aimed at correction of your shape and improving your
              general mood and life satisfaction.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Coffes;
