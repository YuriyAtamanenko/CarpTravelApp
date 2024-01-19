"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Gallary01 from "../../public/Gallary/01.jpg";
import Gallary02 from "../../public/Gallary/02.jpg";
import Gallary03 from "../../public/Gallary/03.jpg";

export default function Gallery() {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <section className="gallery section  py-20" id="gallery">
      <div className="flex flex-col container h-full mx-auto max-w-7xl p-6">
        <h2 className="text-8xl font-thin uppercase leading-tight tracking-[-3.92px]">
          OUR <span className="font-medium">GALLERY</span>
        </h2>
        <div className="flex items-center max-w-7xl mt-4">
          <button
            className="text-3xl font-thin mt-auto ml-auto mr-2"
            onClick={() => swiperRef.slidePrev()}
          >
            BACK
          </button>
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperRef}
            rewind={true}
            slidesPerView={1}
            className="flex flex-row w-[606px] m-0"
          >
            <SwiperSlide>
              <Image
                src={Gallary01}
                alt="Mountain landscape"
                className="w-[606px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Gallary02}
                alt="Mountain landscape"
                className="w-[606px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={Gallary03}
                alt="Mountain landscape"
                className="w-[606px]"
              />
            </SwiperSlide>
          </Swiper>

          <button
            className="text-3xl font-thin mt-auto mr-auto ml-2"
            onClick={() => swiperRef.slideNext()}
          >
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
}
