import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const ThirdSec = ({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: {
    title: string;
    desc?: string;
    src: string;
    extra?: string;
    alt: string;
    lis: {
      title?: string;
      desc: string;
    }[];
  }[];
}) => {
  const locale = useLocale();
  const listPadding = locale === "ar" ? "pr-5" : "pl-5";
  return (
    <section className="con mt-40 md:px-0 px-3">
      <h2 className="max-w-2xl md:text-3xl mx-auto text-2xl text-center text-primary">
        {title}
      </h2>
      <p className="mt-3 text-text max-w-3xl mx-auto text-lg text-center">
        {desc}
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-16 gap-10">
        {items.map((item, i) => (
          <div key={i} className="bg-accent md:p-5 p-3 text-text">
            <div className="w-full md:h-96 h-72 bg-white overflow-hidden relative">
              <Image
                alt={item.alt}
                title={item.alt}
                src={item.src}
                fill
                className="absolute object-cover object-center"
              />
            </div>

            <h3 className="mt-5 md:text-2xl text-xl font-bold text-center text-text">
              {item.title}
            </h3>
            {item.desc && <p className="mt-3">{item.desc}</p>}
            <ul
              className={`grid grid-cols-1 gap-x-2 text-text list-disc pl-5 mt-4 ${listPadding}`}
            >
              {item.lis.map((li, i) => (
                <li key={i} className="mb-2">
                  {li.title && (
                    <h4 className="mb-2 text-lg text-primary">{li.title}</h4>
                  )}
                  <p>{li.desc}</p>
                </li>
              ))}
            </ul>
            {item.extra && <em className="mt-5"> {item.extra}</em>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSec;
