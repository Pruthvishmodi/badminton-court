"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, EffectCreative } from 'swiper/modules';

import styles from "../Banner/banner.module.css"

import Image from 'next/image';
import bannerImage1 from "../../../public/Images/1BannerImage.webp"
import mobileBannerImage1 from "../../../public/Images/1BannerImage.webp"
import bannerImage2 from "../../../public/Images/1BannerImage.webp"
import mobileBannerImage2 from "../../../public/Images/1BannerImage.webp"

import SwiperButtons from '../SwipperButtons';

import clsx from 'clsx';

const data = [{
    id: 1, desktopImage: bannerImage1, mobileImage: mobileBannerImage1, alternativeText: "home banner saree photo"
},
{
    id: 2, desktopImage: bannerImage2, mobileImage: mobileBannerImage2, alternativeText: "home banner saree photo"
},
];


const Banner = () => {

    return (
        <div className=' w-screen '>



            <Swiper
                slidesPerView={1}
                // spaceBetween={30}
                loop={true}
                modules={[Navigation, EffectCreative]}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-70%', 0, -1],
                        scale: 1.5
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}



                className={clsx("mySwiper", styles.swiperParent)}

            >

                {data.map((item) => {
                    return <SwiperSlide ><div key={item.id} className={styles.desktopImageWrapper}><Image src={item.desktopImage} alt={item.alternativeText} sizes='100vw' fill style={{ objectFit: "cover" }} /></div><div className={styles.mobileImageWrapper}><Image src={item.mobileImage} alt={item.alternativeText} sizes='100vw' fill style={{ objectFit: "cover" }} /></div></SwiperSlide>
                })}
                <SwiperButtons />

            </Swiper>


        </div>
    )
}

export default Banner


