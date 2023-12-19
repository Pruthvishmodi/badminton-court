import React from 'react'
import { useSwiper } from "swiper/react"
import styles from "../swiperButton/swiperButtons.module.css"
import DownArrow from "../../../../../public/icons/DownArrow.svg"
const SwiperButtons = () => {
    const swiper = useSwiper()
  return (
    <div className={styles.buttonWrapper}>
        <button className={styles.buttonElement} onClick={()=> swiper.slidePrev()} ><DownArrow className="w-10 aspect-square fill-white rotate-90" /></button>
        <button className={styles.buttonElement} onClick={() => swiper.slideNext()}><DownArrow className="w-10 aspect-square fill-white -rotate-90" /></button>
    </div>
  )
}

export default SwiperButtons