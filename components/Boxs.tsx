import React, { ReactNode } from "react";

const Boxs = ({
  heading,
  boxs,
  desc,
}: {
  heading: string;
  desc?: string;
  boxs: { icon?: ReactNode; title?: string; desc: string }[];
}) => {
  return (
    <section className="con mt-40 md:px-0 px-3">
      <h3 className="md:text-3xl text-2xl text-primary font-bold">{heading}</h3>
      {desc && <p className="mt-5 text-lg text-text max-w-3xl">{desc}</p>}
      <div className="con mt-10 grid md:grid-cols-3 grid-cols-1 gap-8">
        {boxs.map((box, i) => (
          <div
            key={i}
            className="p-10 bg-accent rounded-lg flex flex-col items-center"
          >
            {box.icon && (
              <div className="bg-white p-3 text-secondary rounded-full">
                {box.icon}
              </div>
            )}
            {box.title && (
              <h4 className="text-xl text-primary text-center mt-5">
                {box.title}
              </h4>
            )}
            <p className="text-center text-text mt-5">{box.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boxs;
