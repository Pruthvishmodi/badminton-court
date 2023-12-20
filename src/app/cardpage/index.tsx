import React from "react";
import Card from "@/components/card";
import Menu from "../../../public/image/hamburger-menu-icon.svg";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";
import Title from "@/components/title";



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
    <section className="bg-white pb-9">
      <Title title="News and Articles"/>
      <div className="grid lg:grid-cols-3 items-center gap-4 px-container mx-auto py-20">
        {cardDetails.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default CardPage;
