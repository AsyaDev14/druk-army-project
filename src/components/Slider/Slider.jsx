"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { nanoid } from "nanoid";
import styles from "./Slider.module.css";
import "swiper/css";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';


const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  const deskSlides = [
    { img: "/img/home/slider/slide-1-desc.jpg", id: nanoid() },
    { img: "/img/home/slider/slide-2-desc.jpg", id: nanoid() },
    { img: "/img/home/slider/slide-3-desc.jpg", id: nanoid() },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {slides.map(({ img, id }) => (
          <SwiperSlide key={id}>
            <Image
              alt="photo"
              src={img}
              width={520}
              height={330}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
