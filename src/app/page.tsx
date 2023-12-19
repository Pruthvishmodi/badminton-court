import Navbar from "@/components/Navbar";
import Banner from "../components/Banner";
import Cards from '@/components/cards'
import Image from 'next/image'
import CardDemo from './carddemo'
import Stories from "@/components/Stories";
import Form from "@/components/Form";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Stories /> */}
      {/* <Form /> */}
    </>
  );
}
