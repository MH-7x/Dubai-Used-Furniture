import React from "react";

const TwoGridLi = ({
  title,
  desc,
  list,
  extra,
}: {
  title: string;
  desc: string;
  list: {
    listType?: "ul" | "ol";
    title: string;
    lis: { title: string; desc: string }[];
  }[];
  extra?: string;
}) => {
  return (
    <section className="con mt-40 md:px-0 px-3">
      <h2 className="md:text-3xl text-2xl text-primary max-w-3xl">{title}</h2>
      <p className="max-w-4xl text-lg/5 text-text mt-3">{desc}</p>
      <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-10">
        {list.map((item, i) => (
          <div key={i} className="bg-accent p-5">
            <h3 className="md:text-2xl text-xl text-primary text-center">
              {item.title}
            </h3>
            {item.listType === "ul" ? (
              <ul className="mt-5 flex flex-col gap-y-2">
                {item.lis.map((li, i) => (
                  <li key={i}>
                    <h4 className="text-lg text-text">{li.title}</h4>
                    <p className="text-gray-500 mt-1">{li.desc}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <ol className="mt-5 flex flex-col gap-y-2">
                {item.lis.map((li, i) => (
                  <li key={i}>
                    <h4 className="text-lg text-text">{li.title}</h4>
                    <p className="text-gray-500 mt-1">{li.desc}</p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
      {extra && (
        <p className="mt-10 max-w-4xl mx-auto text-center md:text-xl text-lg/5 text-primary">
          {extra}
        </p>
      )}
    </section>
  );
};

export default TwoGridLi;
