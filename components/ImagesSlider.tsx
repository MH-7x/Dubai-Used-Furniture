"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import Image from "next/image";

const ImageSlider = ({ imgs }: { imgs: string[] }) => {
  return (
    <div className="relative con mt-16">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        pagination={{
          clickable: true,
        }}
        className="relative"
      >
        {imgs.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-accent h-72 overflow-hidden">
              <Image
                src={src}
                alt={`Used Furniture Gallery Image No ${index + 1}`}
                fill
                className="object-cover object-center absolute"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute md:left-[45%] left-[34%] -bottom-16 bg-secondary text-primary py-1 px-5 transition-transform focus:scale-95">
        &#10094;
      </button>
      <button className="swiper-button-next absolute md:right-[45%] right-[34%] -bottom-16 bg-secondary text-primary py-1 px-5 transition-transform focus:scale-95">
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
