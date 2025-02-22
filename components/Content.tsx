import React from "react";

const Content = ({
  title,
  desc,
  first,
  second,
  sub1,
  sub2,
}: {
  title?: string;
  desc?: string;
  sub1?: string;
  sub2?: string;
  first: { title: string; desc?: string; parts?: string[] }[];
  second?: { title: string; desc: string }[];
}) => {
  return (
    <section className="mt-40 bg-accent md:py-16 md:px-0">
      <div className="max-w-5xl bg-white mx-auto md:p-16 px-3  text-text ">
        {title && (
          <h2 className="md:text-3xl max-w-2xl mx-auto text-center text-2xl text-primary">
            {title}
          </h2>
        )}
        {desc && <p className="text-lg/5 mt-5 text-center">{desc}</p>}
        {sub1 && <p className="mt-10">{sub1}</p>}
        {first && (
          <div className="mt-10 flex flex-col gap-y-5">
            {first.map((box, i) => (
              <div key={i}>
                <h2 className="text-text md:text-2xl text-xl font-bold mb-1">
                  {box.title}
                </h2>
                {box.desc && <p>{box.desc}</p>}
                {box.parts &&
                  box.parts.map((p, i) => (
                    <p className="py-2" key={i}>
                      {p}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        )}
        <p className="mt-10">{sub2}</p>
        {second && (
          <div className="mt-3 flex flex-col gap-y-5">
            {second.map((box, i) => (
              <div key={i}>
                <h2 className="text-primary text-xl font-normal mb-1">
                  {box.title}
                </h2>
                <p>{box.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Content;
