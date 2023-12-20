import React from "react";
import Card from "@/components/card";
import Menu from "../../../public/image/hamburger-menu-icon.svg";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";



const cardDetails = [
    {
      imageUrl: "/image/hc_31-795x500.jpg",
      svg: <Menu />,
      title: "8 Most Underrated Workouts",
      dis: "Whether you`re a diehard cruncher or stalwart planker, your ab workout could probably use a tune-up. "
    },
    {
      imageUrl: "/image/hc_31-795x500.jpg",
      svg: <Menu  />,
      title: "Underestimating workout music",
      dis: "Whether you`re a diehard cruncher or stalwart planker, your ab workout could probably use a tune-up. "
    },
    {
      imageUrl: "/image/hc_31-795x500.jpg",
      svg: <Menu  />,
      title: "Mistakes fighting with cellulitis",
      dis: "Whether you`re a diehard cruncher or stalwart planker, your ab workout could probably use a tune-up. "
    },
    {
        imageUrl: "/image/hc_31-795x500.jpg",
        svg: <Menu />,
        title: "Eating breakfast cuts inches off?",
        dis: "Whether you`re a diehard cruncher or stalwart planker, your ab workout could probably use a tune-up. "
      },
      {
        imageUrl: "/image/hc_31-795x500.jpg",
        svg: <Menu  />,
        title: "What secrets almonds hide",
        dis: "Whether you`re a diehard cruncher or stalwart planker, your ab workout could probably use a tune-up. "
      },
      {
        imageUrl: "/image/hc_31-795x500.jpg",
        svg: <Menu  />,
        title: "Ginger is not just simple food",
        dis: "Whether you`re a diehard cruncher or stalwart planker, your ab workout could probably use a tune-up. "
      },
    
  ];


const CardPage = () => {
  return (
    <section className="py-9 bg-[#f5f4f3]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="flex text-5xl hover:text-green-500 text-[#444444] justify-center font-oregano">
        News and Articles
        </h1>
        <div>
          <Arrow className="w-20 h-20 -rotate-6 fill-green-500" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-4 px-container mx-auto py-9">
        {cardDetails.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CardPage;
