"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Services01 from "./services01";
import Services02 from "./services02";
import Services03 from "./services03";
import Services04 from "./services04";
import Services05 from "./services05";

export default function Services() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Services01 />
      </SwiperSlide>
      <SwiperSlide>
        <Services02 />
      </SwiperSlide>
      <SwiperSlide>
        <Services03 />
      </SwiperSlide>
      <SwiperSlide>
        <Services04 />
      </SwiperSlide>
      <SwiperSlide>
        <Services05 />
      </SwiperSlide>
    </Swiper>
  );
}
