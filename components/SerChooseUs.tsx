const SerChooseUs = ({
  title,
  desc,
  lis,
  extra,
}: {
  title: string;
  desc: string;
  lis: { title: string; desc: string; icon?: React.ReactNode }[];
  extra?: string;
}) => {
  return (
    <section className="bg-primary py-16 md:px-0 px-3 mt-32">
      <div className="con ">
        <h2 className="md:text-3xl text-2xl text-accent">{title}</h2>
        <p className="max-w-2xl text-lg/6 mt-3 font-light text-accent">
          {desc}
        </p>
        <ul className="con  mt-10 grid md:grid-cols-2 grid-cols-1 gap-5">
          {lis.map((li, i) => (
            <div
              key={i}
              className={`${
                li.icon && "min-h-52"
              } bg-secondary p-8 flex items-start justify-start flex-col gap-y-4`}
            >
              {li.icon && (
                <div className="w-20 h-20 border flex items-center justify-center text-primary border-primary rounded-full">
                  {li.icon}
                </div>
              )}
              <h3 className="text-xl text-primary">{li.title}</h3>
              <p className="text-text ">{li.desc}</p>
            </div>
          ))}
        </ul>
        {extra && (
          <p className="mt-10 font-light max-w-3xl mx-auto text-center text-lg text-accent">
            <em>{extra}</em>
          </p>
        )}
      </div>
    </section>
  );
};

export default SerChooseUs;
