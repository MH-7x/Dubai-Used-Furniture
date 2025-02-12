import Image from "next/image";
import React from "react";

const SecondSec = () => {
  return (
    <>
      <section className="con mt-32 grid md:grid-cols-2 grid-cols-1 items-center md:px-0 px-3 md:gap-y-0 gap-y-5">
        <div>
          <h2 className="md:text-3xl text-2xl text-primary">
            Premium Inventory for Seating Furniture Buyers and Sellers
          </h2>
          <h3 className="md:mt-5 mt-3 text-xl text-secondary">
            Discover Our Diverse Collection:
          </h3>
          <p className="text-lg text-text mt-3">
            We take pride in our extensive inventory, carefully curated for both
            seating furniture buyers and sellers. Find exactly what you need and
            enjoy unbeatable deals on:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:pl-10">
          <div className="md:h-52 h-44 bg-gray-200 relative overflow-hidden">
            <Image
              src={"/seating/seating-furniture-image.jpeg"}
              alt="used seating furniture store image"
              title="used seating furniture store image"
              fill
              className="absolute object-cover object-center"
            />
          </div>
          <div className="md:h-52 h-44 bg-gray-200 relative overflow-hidden">
            <Image
              src={"/seating/seating-furniture-image-2.webp"}
              title="used seating furniture store image"
              alt="used seating furniture store image"
              fill
              className="absolute object-cover object-center"
            />
          </div>
          <div className="md:h-52 h-44 col-span-2 bg-gray-200 relative overflow-hidden">
            <Image
              src={"/seating/seating-furniture-image-3.jpg"}
              title="used seating furniture store image"
              alt="used seating furniture store image"
              fill
              className="absolute object-cover object-center"
            />
          </div>
        </div>
      </section>
      <ul className="mt-16 con ">
        <li className="max-w-4xl bg-accent mx-auto md:p-8 p-5 my-4">
          <h2 className="text-xl text-primary">
            Where to Buy Used Seating Furniture in Dubai
          </h2>
          <p className="text-text mt-3">
            Visit our showroom at &apos;Building No.4 Moatab Bin Auf St,
            BuShaghara Sharjah&apos; for top-quality used seating furniture in
            Dubai. Our collection features elegant used leather sofas and
            stylish pre-owned chairs, offering a premium used furniture market
            experience.
          </p>
        </li>
        <li className="max-w-4xl bg-accent mx-auto md:p-8 p-5 my-4">
          <h2 className="text-xl text-primary">
            Affordable Second-Hand Sofas for Sale in Abu Dhabi
          </h2>
          <p className="text-text mt-3">
            Upgrade your living space with our budget-friendly, pre-owned sofas
            in Abu Dhabi. We offer affordable second-hand sofas, cheap used
            dining chairs, and quality used sectional sofas in UAE that blend
            comfort with modern design.
          </p>
        </li>
        <li className="max-w-4xl bg-accent mx-auto md:p-8 p-5 my-4">
          <h2 className="text-xl text-primary">
            Best Places to Find Pre-Owned Chairs in Sharjah
          </h2>
          <p className="text-text mt-3">
            Discover a wide variety of pre-owned chairs in Sharjah, including
            gently used lounge chairs and second-hand bar stools. Enjoy quality
            seating options that enhance any décor and meet your style needs.
          </p>
        </li>
        <li className="max-w-4xl bg-accent mx-auto md:p-8 p-5 my-4">
          <h2 className="text-xl text-primary">
            Used Office Seating Furniture Dealers in UAE
          </h2>
          <p className="text-text mt-3">
            Outfit your office with high-quality used seating furniture from
            trusted dealers in UAE. Choose from high-quality pre-owned office
            chairs in Abu Dhabi and ergonomic chairs in UAE, supported by expert
            tips for buying used seating furniture.
          </p>
        </li>
        <li className="max-w-4xl bg-accent mx-auto md:p-8 p-5 my-4">
          <h2 className="text-xl text-primary">
            Second-Hand Recliners Available in Dubai
          </h2>
          <p className="text-text mt-3">
            Relax with our comfortable, gently used recliners available in
            Dubai. Our selection also includes used leather sofas, affordable
            pre-owned theater seating, and used rocking chairs in Abu Dhabi, all
            available on the best online platforms for used seating furniture in
            UAE.
          </p>
        </li>
      </ul>
    </>
  );
};

export default SecondSec;
