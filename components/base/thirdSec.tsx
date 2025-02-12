import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const ThirdSec = () => {
  const locale = useLocale();
  return (
    <section className="con mt-32">
      <h2 className="max-w-2xl md:text-3xl mx-auto text-2xl text-center text-primary">
        Exclusive Seating Solutions – Tailored for Buyers and Sellers
      </h2>
      <p className="mt-3 text-text max-w-3xl mx-auto text-lg text-center">
        At Dubai Used Furniture, we’re committed to making every transaction
        seamless. As both buyers and sellers, we offer:
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-10">
        <div className="bg-accent md:p-5 p-3 text-text">
          <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
            <Image
              alt={"Collection Of Seating Furnitures"}
              title={"Collection Of Seating Furnitures "}
              src={"/seating/used-seating-furniture.jpg"}
              fill
              className="absolute object-cover object-center"
            />
          </div>

          <h3 className="mt-5 md:text-2xl text-xl font-bold text-center text-text">
            Competitive Offers & Fast Transactions
          </h3>

          <ul
            className={`grid grid-cols-1 gap-x-2 text-text list-disc pl-5 mt-4 ${
              locale === "ar" ? "pr-5" : "pl-5"
            }`}
          >
            <li className="mb-2">
              Looking for cheap used dining chairs in Abu Dhabi or affordable
              used sectional sofas in UAE? Our competitive pricing ensures you
              always get the best value.
            </li>
            <li className="mb-2">
              Ready to sell? We’re actively looking to buy quality pieces, so
              find out where to sell used seating furniture in UAE with ease.
            </li>
          </ul>
        </div>
        <div className="bg-accent md:p-5 p-3 text-text">
          <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
            <Image
              alt={"Used Office Chairs"}
              title={"Used Office Chairs"}
              src={"/seating/used-office-chairs.jpg"}
              fill
              className="absolute object-cover object-top"
            />
          </div>

          <h3 className="mt-5 md:text-2xl text-xl font-bold text-center text-text">
            Specialized Options for Every Need:
          </h3>

          <ul
            className={`grid grid-cols-1 gap-x-2 text-text list-disc pl-5 mt-4 ${
              locale === "ar" ? "pr-5" : "pl-5"
            }`}
          >
            <li className="mb-2">
              Enhance your workspace with our high-quality pre-owned office
              chairs in Abu Dhabi or second-hand ergonomic chairs in UAE.
            </li>
            <li className="mb-2">
              Refresh your living area with standout items such as used leather
              sofas for sale in Dubai, gently used lounge chairs for sale in
              Sharjah, and used rocking chairs available in Abu Dhabi.
            </li>
          </ul>
        </div>
        <div className="bg-accent md:p-5 p-3 text-text">
          <div className="w-full md:h-80 h-60 bg-white overflow-hidden relative">
            <Image
              alt={"Used Outdoor Furniture"}
              title={"Used Outdoor Furniture"}
              src={"/seating/used-outdoor-furniture.jpg"}
              fill
              className="absolute object-cover object-center"
            />
          </div>

          <h3 className="mt-5 md:text-2xl text-xl font-bold text-center text-text">
            Outdoor & Entertainment Seating:
          </h3>

          <ul
            className={`grid grid-cols-1 gap-x-2 text-text list-disc pl-5 mt-4 ${
              locale === "ar" ? "pr-5" : "pl-5"
            }`}
          >
            <li className="mb-2">
              For alfresco living, check out our used outdoor seating furniture
              in Abu Dhabi.
            </li>
            <li className="mb-2">
              Create the perfect entertainment setup with affordable pre-owned
              theater seating in Dubai or add a unique flair with second-hand
              bar stools in Dubai.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;
