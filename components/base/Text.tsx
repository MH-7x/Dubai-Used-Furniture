import React from "react";

const Text = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <section className="con mt-40 md:px-0 px-3">
      <h3 className="max-w-3xl md:text-3xl text-xl text-primary">{title}</h3>
      <p className="mt-6 md:text-xl text-base/5 text-text max-w-5xl">{desc}</p>
    </section>
  );
};

export default Text;
