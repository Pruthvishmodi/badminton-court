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
    <section className=" px-container bg-white relative pb-16">
      <Title title="Why people need a Health Coach" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 py-6 group ">
        {data.map((data) => (
          <div className="group flex flex-col relative border w-full aspect-[4/3] overflow-hidden cursor-pointer">
            <div className="absolute translate-y-[25%] lg:translate-y-[34%] group-hover:translate-y-0 duration-300 flex items-center flex-col mx-auto bottom-0 w-full bg-white gap-4 p-2 pt-16 py-10">
              <div className="absolute top-0 -translate-y-1/3 items-center justify-center flex rounded-full bg-white fill-green-500 p-4">
                <div className="w-16 h-16">{data.svg}</div>
              </div>
              <h4 className="text-lg hover:text-green-500 text-[#444444] ">
                {data.title}
              </h4>
              <div className="flex py-4  group-hover:hidden ">
                <div className="rounded-full w-2 h-2 bg-slate-500"></div>
                <div className="rounded-full w-2 h-2 bg-slate-500 mx-1"></div>
                <div className="rounded-full w-2 h-2 bg-slate-500"></div>
              </div>
              <p className="text-sm  text-[#444444] flex text-center ">
                {data.dis}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#888888] text-sm text-center py-4 line-clamp-2 mx-auto max-w-2xl ">
        I am delighted to be able to share with you the techniques I have learnt
        over the years that have brought me much{" "}
        <a href="#banner">
          <span className="text-green-500 ">happiness and success.</span>
        </a>
      </p>
    </section>
  );
};

export default SimpleCard;
