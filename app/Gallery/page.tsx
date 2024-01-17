"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Gallary01 from "../../public/Gallary/01.jpg";
import Gallary02 from "../../public/Gallary/02.jpg";
import Gallary03 from "../../public/Gallary/03.jpg";

export default function Gallery() {
  const swiper = useSwiper();
  return (
    <section className="gallery section  py-20" id="gallery">
      <div className="flex flex-col container h-full mx-auto max-w-7xl p-6">
        <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px]">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div className="mt-6">
          <Swiper
            modules={[Navigation]}
            rewind={true}
            slidesPerView={1}
            className="flex w-[670px]"
          >
            <SwiperSlide>
              <Image
                src={Gallary01}
                alt="Mountain landscape"
                className="w-[670px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Gallary02}
                alt="Mountain landscape"
                className="w-[670px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Gallary03}
                alt="Mountain landscape"
                className="w-[670px]"
              />
            </SwiperSlide>
          </Swiper>
          <button onClick={() => swiper.slidePrev()}>Back</button>
          <button onClick={() => swiper.slideNext()}>Next</button>
        </div>
      </div>
    </section>
  );
}
