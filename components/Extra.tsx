import React from "react";

const Extra = ({
  desc,
  list,
  title,
}: {
  desc: string;
  list: string[];
  title?: string;
}) => {
  return (
    <section className="mt-16 max-w-4xl mx-auto md:px-0 px-3">
      {title && (
        <h2 className="md:text-3xl text-2xl text-primary text-center pb-10">
          {title}
        </h2>
      )}
      <p className="md:text-xl text-lg/5 text-center text-text">{desc}</p>
      <ul className="mt-5 list-inside list-disc text-text md:text-xl text-base">
        {list.map((li: string, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    </section>
  );
};

export default Extra;
