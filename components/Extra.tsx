import React from "react";

const Extra = ({ desc, list }: { desc: string; list: string[] }) => {
  return (
    <section className="mt-16 max-w-4xl mx-auto">
      <p className="md:text-2xl text-lg/5 text-center text-primary">{desc}</p>
      <ul className="mt-5 list-inside list-disc text-text md:text-xl text-base">
        {list.map((li: string, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    </section>
  );
};

export default Extra;
