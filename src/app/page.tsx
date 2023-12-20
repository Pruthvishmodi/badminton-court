import Cards from "@/components/card";
import Image from "next/image";
import CardDemo from "./carddemo";
import CardPage from "./cardpage";
import Footer from "./Footer";
import SimpleCard from "./simpleCard";
import Title from "@/components/title";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Health from "@/components/health";
import Coffes from "@/components/coffees";
import SucessPage from "./sucesspage";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SimpleCard />
      <CardDemo />
      <Health />
      <CardPage />
      <Coffes />
      <SucessPage />
      <Form/>
      <Footer />
    </>
  );
}
