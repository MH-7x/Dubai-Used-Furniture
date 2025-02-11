"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const t = useTranslations("service");
  const b = useTranslations("buttons");
  const locale = useLocale();
  return (
    <>
      <section className="con mt-32 md:px-0 px-3">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <h2 className="md:text-4xl text-3xl text-primary">
            {t("section_title")}
          </h2>
          <div
            className={` text-text  py-5 ${
              locale === "ar"
                ? "border-r-2 pr-3 border-r-secondary"
                : "border-l-2 pl-3 border-l-secondary"
            }`}
          >
            <p className="text-lg">{t("description")}</p>
            <button className="px-4 py-2 mt-4 bg-secondary text-primary">
              {b("callOrWhatsapp")}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-10">
          {t.raw("services").map((service: any, index: number) => (
            <div key={index} className="bg-accent md:p-5 p-3 text-text">
              <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
                <Image
                  alt={service.title}
                  title={service.title}
                  src={service.src}
                  fill
                  className="absolute object-contain object-center"
                />
              </div>
              <h3 className="mt-5 md:text-2xl text-xl font-bold text-center">
                {service.title}
              </h3>
              <p className="mt-2">{service.description}</p>
              <ul
                className={`grid md:grid-cols-2 grid-cols-1 gap-x-2 text-primary list-disc pl-5 mt-2 ${
                  locale === "ar" ? "pr-5" : "pl-5"
                }`}
              >
                {service.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="con mt-5 grid grid-cols-2 gap-3">
                <button className="py-2 text-center bg-secondary text-primary">
                  {b("details")}
                </button>
                <button className="py-2 text-center text-secondary">
                  {b("call")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="con mt-10 md:px-0 px-3">
        <p className="text-2xl text-center font-bold">
          Explore Our Other Used Furniture Services
        </p>
        <div className="w-fullpb-10">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 }, // 3 slides for tablets & desktop
            }}
            navigation
            pagination={{ clickable: true }}
            className=" "
          >
            {t
              .raw("otherServices")
              .map(
                (
                  slide: { title: string; desc: string; src: string },
                  i: number
                ) => (
                  <SwiperSlide className="bg-accent mt-10 pb-5" key={i}>
                    <div className="w-full h-60 bg-white overflow-hidden relative">
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        fill
                        className="object-cover object-center absolute"
                      />
                    </div>
                    <h2 className="text-xl text-text px-3 mt-5">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 text-base/5 px-3 mt-2">
                      {slide.desc}
                    </p>
                    <div className="con mt-5 grid grid-cols-2 gap-3">
                      <button className="py-1.5 text-center bg-secondary text-primary">
                        {b("details")}
                      </button>
                      <button className="py-1.5 text-center text-secondary">
                        {b("call")}
                      </button>
                    </div>
                  </SwiperSlide>
                )
              )}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
