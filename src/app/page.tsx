import Cards from '@/components/card'
import Image from 'next/image'
import CardDemo from './carddemo'
import CardPage from './cardpage'
import Footer from './Footer';
import SimpleCard from './simpleCard';
import Title from '@/components/title';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Form from '@/components/Form';
import Health from '@/components/health';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <SimpleCard />
    
    {/* <Title/> */}
    <SimpleCard/>
      <CardDemo />
    <Health />
      <CardPage />
      <Form/>
      <Footer/>
    </>
  );
}
