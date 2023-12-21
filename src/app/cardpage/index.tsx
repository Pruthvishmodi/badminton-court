import React from "react";
import Card from "@/components/card";
import Menu from "../../../public/image/hamburger-menu-icon.svg";
import Arrow from "../../../public/curved-thin-arrow-left-to-top-icon.svg";
import Title from "@/components/title";



const cardDetails = [
    {
      imageUrl: "/image/article_7.jpg",
      svg: <Menu />,
      title: "World Championships 2023",
      dis: "BWF World Championships 2023 | PV Sindhu gets bye in first round, face tough draw ahead "
    },
    {
      imageUrl: "/image/article_8.jpg",
      svg: <Menu  />,
      title: "Championships: Rajiv Ouseph",
      dis: "European Badminton Championships: Rajiv Ouseph and the Adcocks win gold in Denmark - BBC Sport "
    },
    {
      imageUrl: "/image/article_9.jpg",
      svg: <Menu  />,
      title: "Olympic gold in 2021",
      dis: "The biggest stars of the sport will chase after Olympic gold in 2021, including Momota Kento, Chen Long, PV Sindhu and Okuhara Nozomi. But a couple of big names won't be there. "
    },
    {
        imageUrl: "/image/article_10.jpg",
        svg: <Menu />,
        title: "Parupalli Kashyap",
        dis: "Canada Open 2023 badminton: Parupalli Kashyap makes early exit "
      },
      {
        imageUrl: "/image/article_11.jpg",
        svg: <Menu  />,
        title: "Canada Open 2023 badminton",
        dis: "Canada Open 2023 badminton: Parupalli Kashyap makes early exit "
      },
      {
        imageUrl: "/image/article_12.jpg",
        svg: <Menu  />,
        title: "National Championships",
        dis: "Badminton: Ong out to pull off stunner in National Championships | The Star "
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
