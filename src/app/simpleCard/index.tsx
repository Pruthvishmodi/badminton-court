import React from "react";
import Shoes from "../../../public/image/shoe-running-icon.svg";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";

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
    <section className=" px-container py-8">
      <div className="relative flex flex-col items-center">
        <div className=" relative h-36 w-36 rounded-full "></div>
        <h1 className="absolute top-14 flex text-5xl hover:text-green-500 text-[#444444] font-oregano">
          Why people need a Health Coach
        </h1>
        <div>
          <Arrow className="w-20 h-20 fill-green-500 -rotate-6" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {data.map((val) => (
          <div
            key={val.id}
            className="border-2 border-[#e1e2e4] shadow-sm flex flex-col text-center items-center justify-center py-5 px-8"
          >
            <div className="w-20 h-20 fill-green-500">{val.svg}</div>
            <h4 className="py-4 text-lg hover:text-green-500 text-[#444444]">
              {val.title}
            </h4>
            <div className="flex py-4">
              <div className="rounded-full w-2 h-2 bg-slate-500"></div>
              <div className="rounded-full w-2 h-2 bg-slate-500 mx-1"></div>
              <div className="rounded-full w-2 h-2 bg-slate-500"></div>
            </div>
            <p className="text-sm text-[#444444] flex text-center">{val.dis}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimpleCard;
