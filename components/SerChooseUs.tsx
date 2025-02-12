import {
  RiBankCardFill,
  RiBriefcase2Fill,
  RiShieldCheckFill,
  RiStore2Fill,
} from "@remixicon/react";
import React from "react";

const SerChooseUs = () => {
  return (
    <section className="bg-primary py-16 md:px-0 px-3 mt-32">
      <div className="con ">
        <h2 className="md:text-3xl text-2xl text-accent">
          Why Choose Dubai Used Furniture?
        </h2>
        <p className="max-w-xl text-lg/6 mt-3 font-light text-accent">
          There are many buyers and sellers for your used furniture, see how we
          are the best choose for your used furniture in Dubai!
        </p>
        <div className="con  mt-10 grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="min-h-52 bg-secondary p-8 flex items-start justify-start flex-col gap-y-4">
            <div className="w-20 h-20 border flex items-center justify-center text-primary border-primary rounded-full">
              <RiShieldCheckFill size={50} />
            </div>
            <h3 className="text-xl text-primary">Trusted Expertise</h3>
            <p className="text-text ">
              With years of experience, our team understands the nuances of the
              used furniture market. We offer personalized advice and
              insights—ask for our expert tips for buying used seating furniture
              in UAE.
            </p>
          </div>
          <div className="min-h-52 bg-secondary p-8 flex items-start justify-start flex-col gap-y-4">
            <div className="w-20 h-20 border flex items-center justify-center text-primary border-primary rounded-full">
              <RiBriefcase2Fill size={50} />
            </div>
            <h3 className="text-xl text-primary">Quality & Reliability</h3>
            <p className="text-text ">
              Every piece of furniture is thoroughly inspected to ensure it
              meets our high standards, giving you the confidence to buy or sell
              with us.
            </p>
          </div>
          <div className="min-h-52 bg-secondary p-8 flex items-start justify-start flex-col gap-y-4">
            <div className="w-20 h-20 border flex items-center justify-center text-primary border-primary rounded-full">
              <RiBankCardFill size={50} />
            </div>
            <h3 className="text-xl text-primary">Flexible Solutions</h3>
            <p className="text-text ">
              Not only do we facilitate seamless transactions, but we also
              support sustainability. If you’re ready to part ways with your
              items responsibly, discover where to donate used seating furniture
              in Dubai.
            </p>
          </div>
          <div className="min-h-52 bg-secondary p-8 flex items-start justify-start flex-col gap-y-4">
            <div className="w-20 h-20 border flex items-center justify-center text-primary border-primary rounded-full">
              <RiStore2Fill size={50} />
            </div>
            <h3 className="text-xl text-primary">
              Online & In-Store Convenience
            </h3>
            <p className="text-text ">
              Use our website to browse the best online platforms for used
              seating furniture in UAE, or visit our showroom in Dubai for a
              hands-on experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SerChooseUs;
