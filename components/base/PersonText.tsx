import React from "react";

const PersonText = () => {
  return (
    <section className="bg-secondary w-full h-96 grid md:grid-cols-3 mt-32 md:px-[65px]">
      <div className="col-span-2 flex flex-col items-start justify-center text-text font-light">
        <h1 className="md:text-4xl text-primary font-normal">
          Best Used Furniture Market In Dubai
        </h1>
        <p className="text-lg/6 mt-3">
          Are you looking for high-quality used furniture in Dubai that combines
          style, affordability, and sustainability? Look no further! Our
          extensive collection of pre-owned furniture offers a wide variety of
          options to suit every taste and budget.
        </p>
        <p className="text-lg/6 mt-1">
          {" "}
          Whether you&apos;re furnishing a new home, redecorating, or seeking
          unique pieces to enhance your living space, we have something for
          everyone.
        </p>
        <div className="mt-5 flex gap-x-4 font-normal">
          <button className="px-5 py-2.5 bg-primary text-secondary">
            CONTACT US
          </button>
          <button className="px-5 py-2.5 bg-accent text-text">ABOUT US</button>
        </div>
      </div>
      <div className="col-span-1 ">
        <img
          src={"/images/person.png"}
          alt="Dubai Used Furniture Lady"
          title="Dubai Used Furniture Lady"
          width={320}
          height={320}
          className="md:translate-y-16 mx-auto"
        />
      </div>
    </section>
  );
};

export default PersonText;
