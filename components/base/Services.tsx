/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Services = () => {
  const t = useTranslations("service");
  const b = useTranslations("buttons");
  const locale = useLocale();
  return (
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

        {/* <div className="bg-accent md:p-5 p-3 text-text">
          <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
            <Image
              alt="seating furniture buyers & sellers"
              title="seating furniture buyers & sellers"
              src={"/images/table-furniture.jpg"}
              fill
              className="absolute object-contain object-center"
            />
          </div>
          <h3 className="mt-5 md:text-2xl text-xl font-bold text-center">
            Table Furniture Buyers & Sellers
          </h3>
          <p className="mt-2">
            We buy and sell any kind of table furniture in good condition in UAE
            Located in Dubai
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-2 text-primary list-disc pl-5 mt-2">
            <li>Coffee Table</li>
            <li>Billiard Table</li>
            <li>Dining Table</li>
            <li>Office Work Station</li>
            <li>Computer Table</li>
            <li>Study Table</li>
            <li>TV Stand</li>
            <li>Dressing Table (Child Bed)</li>
          </ul>
        </div>
        <div className="bg-accent md:p-5 p-3 text-text">
          <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
            <Image
              alt=" Sleeping or Lying Furniture buyers & sellers"
              title=" Sleeping or Lying Furniture buyers & sellers"
              src={"/images/laying-furniture.jpg"}
              fill
              className="absolute object-contain object-center"
            />
          </div>
          <h3 className="mt-5 md:text-2xl text-xl font-bold text-center">
            Sleeping or Lying Furniture Buyers & Sellers
          </h3>
          <p className="mt-2">
            We buy and sell different types of furniture which are mostly used
            for sleeping and lying purposes.
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-2 text-primary list-disc pl-5 mt-2">
            <li>Bunk Bed</li>
            <li>Bed</li>
            <li>Platform Bed</li>
            <li>Four-Poster Bed</li>
            <li>Murphy Bed</li>
            <li>Infant Bed (Child Bed)</li>
            <li>Sleigh Bed</li>
            <li>Mattress</li>
          </ul>
        </div>
        <div className="bg-accent md:p-5 p-3 text-text">
          <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
            <Image
              alt=" Storage Furniture buyers & sellers"
              title=" Storage Furniture buyers & sellers"
              src={"/images/storage-furniture.jpg"}
              fill
              className="absolute object-contain object-center"
            />
          </div>
          <h3 className="mt-5 md:text-2xl text-xl font-bold text-center">
            Storage Furniture Buyers & Sellers
          </h3>
          <p className="mt-2">
            We provide buy sell any kind of furniture for storage purposes like
            cupbaords, cabinets etc in Dubai.
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-2 text-primary list-disc pl-5 mt-2">
            <li>Baker&apos;s Rack</li>
            <li>Cupboard</li>
            <li>Chifforobe</li>
            <li>Bookcase</li>
            <li>Cabinetry</li>
            <li>Filing Cabinet</li>
            <li>Kitchen Cabinet</li>
            <li>Chest of Drawers or Dresser</li>
          </ul>
        </div>
        <div className="bg-accent md:p-5 p-3 text-text">
          <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
            <Image
              alt="Home Appliance buyers & sellers"
              title="Home Appliance buyers & sellers"
              src={"/images/home-appliance.webp"}
              fill
              className="absolute object-contain object-center"
            />
          </div>
          <h3 className="mt-5 md:text-2xl text-xl font-bold text-center">
            Home Appliance Buyers & Sellers
          </h3>
          <p className="mt-2">
            We buy all kind of used home appliances on best price in good
            condition. If you have any appliance which is you want to sell just
            contact us as soon as possible.
          </p>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-2 text-primary list-disc pl-5 mt-2">
            <li>Refrigerator</li>
            <li>Washing Machine</li>
            <li>Air Condition</li>
            <li>Gas Cooker</li>
            <li>Dish Washer</li>
            <li>Freezer</li>
            <li>LED TV</li>
            <li>Microwave Oven</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
