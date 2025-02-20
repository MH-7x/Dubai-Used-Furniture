import Image from "next/image";
import React from "react";

const SecondSec = ({
  title,
  desc,
  sub,
  images,
  boxs,
  lis,
  extra,
}: {
  title: string;
  desc: string;
  sub?: string;
  images: { src: string; alt: string }[];
  boxs?: { title: string; desc: string }[];
  lis?: { title: string; desc: string }[];
  extra?: string;
}) => {
  return (
    <>
      <section className="con mt-32 grid md:grid-cols-2 grid-cols-1 items-center md:px-0 px-3 md:gap-y-0 gap-y-5">
        <div>
          <h2 className="md:text-3xl text-2xl text-primary">{title}</h2>
          {sub && (
            <h3 className="md:mt-5 mt-3 text-xl text-secondary">{sub}</h3>
          )}
          <p className="text-lg text-text mt-3">{desc}</p>
          {lis && lis.length > 0 && (
            <ul className="mt-3 list-disc ml-5 text-text">
              {lis.map((li, i) => (
                <li className="mb-2" key={i}>
                  <strong className=" text-secondary">{li.title} </strong>
                  {li.desc}
                </li>
              ))}
            </ul>
          )}
          {extra && (
            <p className="mt-3 text-text">
              <em>{extra}</em>
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 md:pl-10">
          {images.map((image, i) => (
            <div
              key={i}
              className={`md:h-52  h-44 bg-gray-200 relative overflow-hidden ${
                i === 2 && "col-span-2"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                title={image.alt}
                fill
                className="absolute object-cover object-center"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 con ">
        {boxs &&
          boxs.length > 0 &&
          boxs.map((box, i) => (
            <div
              key={i}
              className="max-w-4xl bg-accent mx-auto md:p-8 p-5 my-4"
            >
              <h2 className="text-xl text-primary">{box.title}</h2>
              <p className="text-text mt-3">{box.desc}</p>
            </div>
          ))}
      </section>
    </>
  );
};

export default SecondSec;
