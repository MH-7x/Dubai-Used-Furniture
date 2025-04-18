import Image from "next/image";

const ThreeGrid = ({
  title,
  desc,
  list,
  total,
}: {
  title: string;
  desc: string;
  list: { title: string; desc: string }[];
  total: number;
}) => {
  return (
    <section className="mt-40 con md:px-0 px-3 ">
      <h2 className="md:text-3xl max-w-3xl mx-auto text-2xl text-primary text-center">
        {title}
      </h2>
      <p className="max-w-4xl mx-auto text-center text-text text-lg/5 mt-4">
        {desc}
      </p>
      <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-5">
        <ul className={` grid grid-rows-${total / 2} gap-y-3`}>
          {list.slice(0, total / 2).map((li, i) => (
            <li key={i} className="p-5 bg-accent">
              <h3 className="text-xl text-primary">{li.title}</h3>
              <p className="text-base/4 text-text mt-2">{li.desc}</p>
            </li>
          ))}
        </ul>
        <div className="bg-red-400 relative md:h-auto h-80">
          <Image
            src={"/beds/used-beds.jpg"}
            alt="Used Beds For Sell"
            fill
            className="object-cover object-center absolute"
          />
        </div>
        <ul className={` grid grid-rows-${total / 2} gap-y-3`}>
          {list.slice(total / 2, total).map((li, i) => (
            <li key={i} className="p-5 bg-accent">
              <h3 className="text-xl text-primary">{li.title}</h3>
              <p className="text-base/4 text-text mt-2">{li.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ThreeGrid;
