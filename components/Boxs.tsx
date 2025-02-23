import React, { ReactNode } from "react";

const Boxs = ({
  heading,
  boxs,
}: {
  heading: string;
  boxs: { icon: ReactNode; desc: string }[];
}) => {
  return (
    <section className="con mt-40">
      <h3 className="md:text-3xl text-2xl text-primary font-bold">{heading}</h3>
      <div className="con mt-10 grid md:grid-cols-3 grid-cols-1 gap-8">
        {boxs.map((box, i) => (
          <div
            key={i}
            className="p-10 bg-accent rounded-lg flex flex-col items-center"
          >
            <div className="bg-white p-3 text-secondary rounded-full">
              {box.icon}
            </div>
            <p className="text-center text-text mt-5">{box.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boxs;
