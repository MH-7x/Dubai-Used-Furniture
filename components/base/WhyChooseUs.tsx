import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="mt-32 bg-secondary/70 py-10 md:px-0 px-3">
      <p className=" text-accent text-center">Why Choose Us ?</p>
      <h2 className="text-center md:text-4xl text-3xl text-primary">
        Professional Used Furniture{" "}
        <span className="md:block">Company in Dubai</span>
      </h2>
      <p className="con mt-10 text-text md:text-2xl text-lg font-light">
        If you are searching to sell your used furniture in Dubai, UAE, Dubai
        Used Furniture provides a straightforward and efficient solution. With
        extensive experience in the industry, we offer competitive pricing,
        secure cash payments, and convenient doorstep pickup services. Whether
        you are relocating, upgrading, or decluttering, we guarantee a seamless
        selling experience across Dubai and the wider UAE.
      </p>
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 con items-center md:px-10 md:gap-0 gap-y-5">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl text-primary">
            Wide Selection of Used Furniture
          </h3>
          <p className="text-text mt-3 font-light md:text-lg text-base/5">
            Our extensive inventory includes everything from stylish sofas to
            elegant dining sets. Explore our collection of used furniture for
            sale in Dubai and Abu Dhabi, and find the perfect pieces to enhance
            your home.
          </p>
        </div>
        <div className="flex justify-center md:order-1 order-2 md:p-0 px-10">
          <Image
            className="object-contain"
            alt="Wide Selection of Used Furniture"
            src={"/images/wild-selection.png"}
            width={350}
            height={350}
          />
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 con items-center md:px-10 md:gap-0 gap-y-5">
        <div className="order-1 md:order-2">
          <h3 className="text-2xl text-primary">
            Trusted Used Furniture Buyers
          </h3>
          <p className="text-text mt-3 font-light md:text-lg text-base/5">
            We pride ourselves on being one of the best used furniture buyers in
            Dubai. Our team is dedicated to providing you with a seamless
            experience, whether you&apos;re looking to sell used furniture or
            buy second-hand items.
          </p>
        </div>
        <div className="flex justify-center md:order-1 order-2 md:p-0 px-10">
          <Image
            className="object-contain"
            alt="Trusted Used Furniture Buyers"
            src={"/images/trusted-buyers.svg"}
            width={350}
            height={350}
          />
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 con items-center md:px-10 md:gap-0 gap-y-5">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl text-primary">Convenient Selling Options</h3>
          <p className="text-text mt-3 font-light md:text-lg text-base/5">
            If you have old furniture to sell, we make the process easy. Our
            platform allows you to sell furniture in Dubai and Abu Dhabi quickly
            and efficiently. Connect with old furniture buyers who are eager to
            find quality pieces at great prices.
          </p>
        </div>
        <div className="flex justify-center md:order-1 order-2 md:p-0 px-10">
          <Image
            className="object-contain"
            alt="Convenient Selling Options"
            src={"/images/selling-options.svg"}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 con items-center md:px-10 md:gap-0 gap-y-5">
        <div className="order-1 md:order-2">
          <h3 className="text-2xl text-primary">Local Expertise</h3>
          <p className="text-text mt-3 font-light md:text-lg text-base/5">
            As a leading used furniture dealer in Dubai, we understand the local
            market. Our knowledge of used furniture shops in Dubai and Abu Dhabi
            ensures that you receive the best value for your items.
          </p>
        </div>
        <div className="flex justify-center md:order-1 order-2 md:p-0 px-10">
          <Image
            className="object-contain"
            alt="Local Expertise"
            src={"/images/local-experts.svg"}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 con items-center md:px-10 md:gap-0 gap-y-5">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl text-primary">Eco-Friendly Choices</h3>
          <p className="text-text mt-3 font-light md:text-lg text-base/5">
            By choosing to buy and sell second-hand furniture, you are making a
            sustainable choice that benefits the environment. Join us in
            promoting a greener lifestyle by opting for used furniture.
          </p>
        </div>
        <div className="flex justify-center md:order-1 order-2 md:p-0 px-10">
          <Image
            className="object-contain"
            alt="Eco-Friendly Choices"
            src={"/images/friendly-options.svg"}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
