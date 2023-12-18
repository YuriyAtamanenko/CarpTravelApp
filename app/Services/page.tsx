"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import Services01 from "./services01";
import Services02 from "./services02";
import Services03 from "./services03";
import Services04 from "./services04";
import Services05 from "./services05";

export default function Services() {
  const [swiperRef, setSwiperRef] = useState(null);

  const slideTo = (index: number) => {
    swiperRef.slideTo(index);
  };

  return (
    <Swiper
      modules={[EffectFade]}
      onSwiper={setSwiperRef}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
    >
      <SwiperSlide>
        <Services01 slideTo={slideTo} />
      </SwiperSlide>
      <SwiperSlide>
        <Services02 slideTo={slideTo} />
      </SwiperSlide>
      <SwiperSlide>
        <Services03 slideTo={slideTo} />
      </SwiperSlide>
      <SwiperSlide>
        <Services04 slideTo={slideTo} />
      </SwiperSlide>
      <SwiperSlide>
        <Services05 slideTo={slideTo} />
      </SwiperSlide>
    </Swiper>
  );
}
