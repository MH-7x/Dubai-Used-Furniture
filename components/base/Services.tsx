"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Link } from "@/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import { RiArrowRightUpFill, RiPhoneFill } from "@remixicon/react";

const links = [
  "/used-seating-furniture",
  "/used-table-furniture",
  "/used-sleeping-furniture",
  "used-storage-furniture",
  "/used-home-appliances",
];

const otherLinks = [
  "used-home-furniture-dubai",
  "used-office-furniture-dubai",
  "used-hotel-furniture-dubai",
];

const Services = ({
  title,
  desc,
  services,
  others,
}: {
  title: string;
  desc: string;
  services: {
    title: string;
    description: string;
    src: string;
    items: string[];
  }[];
  others: { title: string; desc: string; src: string }[];
}) => {
  const b = useTranslations("buttons");
  const locale = useLocale();
  return (
    <>
      <section id="used-furniture-services" className="con mt-32 md:px-0 px-3">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <h2 className="md:text-4xl text-3xl text-primary">{title}</h2>
          <div
            className={` text-text  py-5 ${
              locale === "ar"
                ? "border-r-2 pr-3 border-r-secondary"
                : "border-l-2 pl-3 border-l-secondary"
            }`}
          >
            <p className="text-lg">{desc}</p>
            <Button
              whatsappBtn
              variant={"secondary"}
              className="mt-5"
              size={"lg"}
            >
              {b("callOrWhatsapp")}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-10">
          {services.map((service: any, index: number) => (
            <div
              key={index}
              className="bg-accent md:rounded-xl md:p-5 p-3 text-text"
            >
              <div className="w-full rounded-lg md:h-80 h-60 bg-white overflow-hidden relative">
                <Image
                  alt={service.title}
                  title={service.title}
                  src={service.src}
                  fill
                  className="absolute object-contain object-center"
                />
              </div>
              <Link href={links[index]}>
                <h3 className="mt-5 md:text-2xl text-xl font-bold text-center">
                  {service.title}
                </h3>
              </Link>
              <p className="mt-2">{service.description}</p>
              <ul
                className={`grid md:grid-cols-2 grid-cols-1 gap-x-2 text-primary list-disc pl-5 mt-5 ${
                  locale === "ar" ? "pr-5" : "pl-5"
                }`}
              >
                {service.items.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="con mt-8 grid grid-cols-2 gap-3">
                <Link
                  title={`view more details about ${service.title}`}
                  href={links[index]}
                >
                  <Button
                    title={`view more details about ${service.title}`}
                    size={"lg"}
                  >
                    {b("details")} <RiArrowRightUpFill />
                  </Button>
                </Link>
                <Button
                  callBtn
                  variant={"link"}
                  title={`Call For ${service.title}`}
                  size={"lg"}
                >
                  {b("call")} <RiPhoneFill />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="con mt-16 md:px-0 px-3">
        <p className="md:text-3xl text-2xl text-primary text-center font-bold mb-10">
          Explore Our Other Used Furniture Services
        </p>
        <div className="w-full pb-10">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 }, // 3 slides for tablets & desktop
            }}
            navigation
            pagination={{ clickable: true }}
          >
            {others.map((slide, i: number) => (
              <SwiperSlide className="bg-accent rounded-xl mt-10 pb-5" key={i}>
                <div className="w-full h-60 rounded-t-xl bg-white overflow-hidden relative">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover object-center absolute"
                  />
                </div>
                <h2 className="text-xl text-text px-3 mt-5">{slide.title}</h2>
                <p className="text-gray-600 text-base/5 px-3 mt-2">
                  {slide.desc}
                </p>
                <div className="con mt-5 grid grid-cols-2 gap-3 px-3">
                  <Link
                    title={`view more details about ${slide.title}`}
                    href={otherLinks[i]}
                  >
                    <Button title={`view more details about ${slide.title}`}>
                      {b("details")} <RiArrowRightUpFill />
                    </Button>
                  </Link>

                  <Button
                    callBtn
                    variant={"link"}
                    title={`Call For ${slide.title}`}
                  >
                    {b("call")} <RiPhoneFill />
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
