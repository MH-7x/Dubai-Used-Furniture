import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <section className="con mt-32 px-3">
      <p className="text-center text-secondary">How To Sell</p>
      <h2 className="text-center md:text-4xl text-3xl">
        Where To Sell Used Furniture In Dubai
      </h2>
      <p className="mt-3 max-w-4xl text-lg text-center text-text mx-auto">
        If you are selling your used furniture in Dubai, you are in luck. Dubai
        Used Furniture offers a simple solution for selling second-hand
        furniture in Dubai.
      </p>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        <li className="h-52 bg-accent p-3 relative flex flex-col items-start justify-center">
          <Image
            src={"/images/call.svg"}
            alt="Call To Us icon"
            width={45}
            height={45}
            className="absolute top-5 right-5"
          />

          <h3 className="text-2xl text-primary">Call Us Now</h3>
          <p className="text-text leading-5 mt-2">
            Sell your furniture with ease—give us a call, and we’ll come to you.
          </p>
        </li>
        <li className="h-52 bg-accent p-3 relative flex flex-col items-start justify-center">
          <Image
            src={"/images/evaculation.svg"}
            alt=" Free Furniture Evaluation icon"
            width={45}
            height={45}
            className="absolute top-5 right-5"
          />

          <h3 className="text-2xl text-primary">Free Furniture Evaluation</h3>
          <p className="text-text leading-5 mt-2">
            Our experts will visit your location to inspect the condition of
            your furniture.
          </p>
        </li>
        <li className="h-52 bg-accent p-3 relative flex flex-col items-start justify-center">
          <Image
            src={"/images/cash.svg"}
            alt="Instant Cash & Quick Pickup icon"
            width={45}
            height={45}
            className="absolute top-5 right-5"
          />

          <h3 className="text-2xl text-primary">Instant Cash & Quick Pickup</h3>
          <p className="text-text leading-5 mt-2">
            Get paid on the spot, and we’ll handle the pickup hassle-free.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default GetStarted;
