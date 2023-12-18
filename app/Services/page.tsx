"use client";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { useSwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Services01 from "./services01";
import Services02 from "./services02";
import Services03 from "./services03";
import Services04 from "./services04";
import Services05 from "./services05";

export default function Services() {
  const swiperSlide = useSwiperSlide();
  // const GoTo = (index: number) => {
  //   console.log("GO");
  //   swiper.slideTo(index);
  // };

  console.dir(swiperSlide);

  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect="fade"
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
