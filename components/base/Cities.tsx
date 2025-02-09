/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Cities = () => {
  const locale = useLocale();
  const t = useTranslations("cities");
  const b = useTranslations("buttons");
  return (
    <section className="con mt-32 bg-accent p-10">
      <h2 className="md:text-4xl text-3xl text-center text-primary">
        {t("mainTitle.main")}{" "}
        <span className="md:block text-secondary">{t("mainTitle.oth")}</span>
      </h2>
      <p className="text-text text-lg text-center mt-5 max-w-5xl mx-auto">
        {t("intro")}
      </p>

      {t.raw("cities").map((city: any, index: number) => (
        <div
          key={index}
          className="mt-16 bg-white max-w-5xl mx-auto p-5 relative"
        >
          <h3 className=" md:text-2xl text-xl text-text">{city.heading}</h3>
          <p className="text-text text-lg mt-3">{city.text}</p>
          <div className="mt-5 flex gap-x-5">
            <button className="px-5 py-2 text-secondary bg-primary">
              {b("details")}
            </button>
            <button className="px-5 py-2 text-secondary bg-white">
              {b("call")} : +971 50 000 000
            </button>
          </div>
          <Image
            src={city.src}
            alt={city.heading}
            width={250}
            height={250}
            className={`absolute bottom-4  opacity-50 ${
              locale === "ar" ? "left-4" : "right-4"
            }`}
          />
        </div>
      ))}
      {/* <div className="mt-16 bg-white max-w-5xl mx-auto p-5 relative">
        <h3 className=" md:text-2xl text-xl text-text">
          Used Furniture Buyers and Sellers in Sharjah
        </h3>
        <p className="text-text text-lg mt-3">
          Discover quality used furniture in Sharjah with Dubai Used
          Furniture—your trusted partner in the Sharjah used furniture market.
          Whether you&apos;re searching for used furniture for sale in Sharjah
          or looking to sell used furniture Sharjah, we connect you with
          reputable used furniture buyers in Sharjah and top-rated used
          furniture shops in Sharjah and used furniture stores in Sharjah. Join
          us today to experience a seamless buying and selling process in
          Sharjah.
        </p>
        <div className="mt-5 flex gap-x-5">
          <button className="px-5 py-2 text-secondary bg-primary">
            See More
          </button>
          <button className="px-5 py-2 text-secondary bg-white">
            Call Us : +971 50 000 000
          </button>
        </div>
        <Image
          src={"/images/sharjah.svg"}
          alt="dubai svg image"
          width={250}
          height={250}
          className="absolute bottom-4 right-4 opacity-50"
        />
      </div>
      <div className="mt-16 bg-white max-w-5xl mx-auto p-5 relative">
        <h3 className=" md:text-2xl text-xl text-text">
          Buy and Sell Used Furniture Abu Dhabi
        </h3>
        <p className="text-text text-lg mt-3">
          Discover quality used furniture in Abu Dhabi at Dubai Used Furniture.
          Shop our extensive collection of used furniture for sale in Abu Dhabi
          and explore the vibrant used furniture market. Whether you want to buy
          used furniture, connect with used furniture buyers in Abu Dhabi, or
          choose from a range of second hand furniture in Abu Dhabi, we have you
          covered with stylish and affordable pieces.
        </p>
        <div className="mt-5 flex gap-x-5">
          <button className="px-5 py-2 text-secondary bg-primary">
            See More
          </button>
          <button className="px-5 py-2 text-secondary bg-white">
            Call Us : +971 50 000 000
          </button>
        </div>
        <Image
          src={"/images/abu-dhabi.svg"}
          alt="dubai svg image"
          width={300}
          height={300}
          className="absolute bottom-4 right-4 opacity-50"
        />
      </div>
      <div className="mt-16 bg-white max-w-5xl mx-auto p-5 relative">
        <h3 className=" md:text-2xl text-xl text-text">
          Sell and Buy Used Furniture Ajman
        </h3>
        <p className="text-text text-lg mt-3">
          Discover quality used furniture in Ajman with Dubai Used Furniture.
          Shop our extensive selection of used furniture for sale in Ajman,
          connect with trusted used furniture buyers in Ajman, and explore the
          vibrant Ajman used furniture market. Find the best used furniture
          stores in Ajman to enhance your space with affordable, stylish pieces.
        </p>
        <div className="mt-5 flex gap-x-5">
          <button className="px-5 py-2 text-secondary bg-primary">
            See More
          </button>
          <button className="px-5 py-2 text-secondary bg-white">
            Call Us : +971 50 000 000
          </button>
        </div>
        <Image
          src={"/images/ajman.svg"}
          alt="dubai svg image"
          width={300}
          height={300}
          className="absolute bottom-4 right-4 opacity-50"
        />
      </div>
      <div className="mt-16 bg-white max-w-5xl mx-auto p-5 relative">
        <h3 className=" md:text-2xl text-xl text-text">
          Buy and Sell Used Furniture in Ras Al Khaimah
        </h3>
        <p className="text-text text-lg mt-3">
          Discover quality used furniture in Ras Al Khaimah with Dubai Used
          Furniture. Explore a wide range of used furniture for sale Ras Al
          Khaimah, including top picks from Dubizzle used furniture in Ras Al
          Khaimah and leading store selling used furniture in Ras Al Khaimah.
          Whether you&apos;re hunting for a great used furniture sale in Ras Al
          Khaimah or premium second-hand furniture, our curated collection
          offers stylish and affordable options to elevate your space.
        </p>
        <div className="mt-5 flex gap-x-5">
          <button className="px-5 py-2 text-secondary bg-primary">
            See More
          </button>
          <button className="px-5 py-2 text-secondary bg-white">
            Call Us : +971 50 000 000
          </button>
        </div>
        <Image
          src={"/images/Ras-Al-Khaimah.svg"}
          alt="dubai svg image"
          width={300}
          height={300}
          className="absolute bottom-4 right-4 opacity-50"
        />
      </div>
      <div className="mt-16 bg-white max-w-5xl mx-auto p-5 relative">
        <h3 className=" md:text-2xl text-xl text-text">
          Used Furniture Buyer and Sellers in Fujairah
        </h3>
        <p className="text-text text-lg mt-3">
          Discover quality used furniture in Fujairah with our trusted network
          of buyers and sellers. Explore a diverse selection of used furniture
          for sale in Fujairah at competitive prices, and if you’re looking to
          fujairah buy furniture used, we offer fair valuations and seamless
          transactions. Upgrade your space today with our premium second-hand
          furniture options and enjoy a hassle-free experience in
          Fujairah&apos;s thriving furniture market.
        </p>
        <div className="mt-5 flex gap-x-5">
          <button className="px-5 py-2 text-secondary bg-primary">
            See More
          </button>
          <button className="px-5 py-2 text-secondary bg-white">
            Call Us : +971 50 000 000
          </button>
        </div>
        <Image
          src={"/images/Fujairah.svg"}
          alt="dubai svg image"
          width={300}
          height={300}
          className="absolute bottom-4 right-4 opacity-50"
        />
      </div>
      <div className="mt-16 bg-white max-w-5xl mx-auto p-5 relative">
        <h3 className=" md:text-2xl text-xl text-text">
          Umm Al Quwain Used Furniture Buyers & Sellers
        </h3>
        <p className="text-text text-lg mt-3">
          Experience a seamless way to buy and sell used furniture in Umm Al
          Quwain. Our platform offers a curated collection of quality pieces,
          making it easy to find used furniture for sale in Umm Al Quwain that
          fits your style and budget. Whether you&apos;re looking to upgrade
          your home or clear out your space, we connect you with trusted buyers
          and competitive offers. Discover affordable pre-owned furniture and
          enjoy a hassle-free transaction every time.
        </p>
        <div className="mt-5 flex gap-x-5">
          <button className="px-5 py-2 text-secondary bg-primary">
            See More
          </button>
          <button className="px-5 py-2 text-secondary bg-white">
            Call Us : +971 50 000 000
          </button>
        </div>
        <Image
          src={"/images/Umm-Al-Quwain.svg"}
          alt="dubai svg image"
          width={300}
          height={300}
          className="absolute bottom-4 right-4 opacity-50"
        />
      </div>
      <div className="mt-16 bg-white max-w-5xl mx-auto p-5 relative">
        <h3 className=" md:text-2xl text-xl text-text">
          Al Ain Used Furniture Marketplace
        </h3>
        <p className="text-text text-lg mt-3">
          Discover a premier destination for used furniture in Al Ain where
          buyers and sellers connect effortlessly. Whether you’re looking to
          furnish your home with quality second-hand pieces or are an electronic
          buyer of used furniture in Al Ain, our platform offers competitive
          prices and trusted transactions. Explore a diverse range of pre-owned
          items, enjoy fair valuations, and experience a hassle-free marketplace
          that caters to all your used furniture needs in Al Ain.
        </p>
        <div className="mt-5 flex gap-x-5">
          <button className="px-5 py-2 text-secondary bg-primary">
            See More
          </button>
          <button className="px-5 py-2 text-secondary bg-white">
            Call Us : +971 50 000 000
          </button>
        </div>
        <Image
          src={"/images/Umm-Al-Quwain.svg"}
          alt="dubai svg image"
          width={300}
          height={300}
          className="absolute bottom-4 right-4 opacity-50"
        />
      </div> */}
    </section>
  );
};

export default Cities;
