"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "/seating/gallay-1.jpg",
  "/seating/gallay-2.jpg",
  "/seating/gallay-3.jpg",
  "/seating/gallay-4.jpg",
  "/seating/gallay-5.jpg",
  "/seating/gallay-6.jpg",
  "/seating/gallay-7.jpg",
  "/seating/gallay-8.jpg",
  "/seating/gallay-9.jpg",
  "/seating/gallay-10.webp",
];

const ImageSlider = () => {
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
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-72 overflow-hidden">
              <span className=" absolute bottom-0 right-0 z-10 text-sm text-accent font-light">
                image of dubai used furniture
              </span>
              <Image
                src={src}
                alt={`seating furniture image ${index + 1}`}
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
