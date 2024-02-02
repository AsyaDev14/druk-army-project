"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { nanoid } from 'nanoid';

import 'swiper/css';
import Image from 'next/image';

const Slider = () => {
  const slides = [
    { img: "/img/home/slider/slide-1.jpg", id: nanoid() },
    { img: "/img/home/slider/slide-2.jpg", id: nanoid() },
    { img: "/img/home/slider/slide-3.jpg", id: nanoid() },
  ];


  return (
    <div className="container">
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
        className="mySwiper"
      >
        {slides.map(({ img, id }) => (
          <SwiperSlide key={id}>
            <Image alt="photo" src={img} width={1000} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider