import React from "react";
import Shoes from "../../../public/image/shoe-running-icon.svg";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";
import Title from "@/components/title";

const data = [
  {
    id: "1",
    svg: <Shoes />,
    title: "Workout Routines",
    dis: "Taking care of your body is important.",
  },
  {
    id: "2",
    svg: <Shoes />,
    title: "Workout Routines",
    dis: "Taking care of your body is important.",
  },
  {
    id: "3",
    svg: <Shoes />,
    title: "Workout Routines",
    dis: "Taking care of your body is important.",
  },
  {
    id: "4",
    svg: <Shoes />,
    title: "Workout Routines",
    dis: "Taking care of your body is important.",
  },
];

const SimpleCard = () => {
  return (
    <section className=" px-container py-8 relative">
      <Title title="Why people need a Health Coach" /> 
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 ">
        {data.map((val) => (
          <div
            key={val.id}
            className="border-2 border-[#e1e2e4] shadow-sm flex flex-col text-center items-center justify-center py-5 px-8"
          >
            <div className="w-20 h-20 fill-green-500">{val.svg}</div>
            <h4 className="py-4 text-lg hover:text-green-500 text-[#444444]">
              {val.title}
            </h4>
            <div className="flex py-4 hover:hidden ">
              <div className="rounded-full w-2 h-2 bg-slate-500"></div>
              <div className="rounded-full w-2 h-2 bg-slate-500 mx-1"></div>
              <div className="rounded-full w-2 h-2 bg-slate-500"></div>
            </div>
            <p className="text-sm text-[#444444] flex text-center">{val.dis}</p>
          </div>
        ))}
      </div>
      <p className="text-[#888888] text-sm text-center py-4 line-clamp-2 mx-auto max-w-2xl">
        I am delighted to be able to share with you the techniques I have learnt
        over the years that have brought me much{" "}
        <a href="#banner"><span className="text-green-500 ">happiness and success.</span></a>
      </p>
    </section>
  );
};

export default SimpleCard;
