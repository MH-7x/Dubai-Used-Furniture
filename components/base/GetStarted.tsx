import { useLocale } from "next-intl";
import Image from "next/image";
const GetStarted = ({
  sub,
  title,
  desc,
  lis,
  extra,
}: {
  sub: string;
  title: string;
  desc: string;
  extra?: string;
  lis: {
    title: string;
    desc: string;
    src: string;
    alt: string;
  }[];
}) => {
  const locale = useLocale();
  return (
    <section className="con mt-32 px-3">
      <p className="text-center text-secondary">{sub}</p>
      <h2 className="text-center md:text-4xl text-3xl">{title}</h2>
      <p className="mt-3 max-w-4xl text-lg text-center text-text mx-auto">
        {desc}
      </p>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {lis.map((li, i) => (
          <li
            key={i}
            className="h-52 bg-accent rounded-lg p-3 relative flex flex-col items-start justify-center"
          >
            <Image
              src={li.src}
              alt={li.alt}
              width={45}
              height={45}
              className="absolute top-5 right-5"
            />

            <h3
              className={`text-2xl text-primary ${locale === "ar" && "mt-7"}`}
            >
              {li.title}
            </h3>
            <p className="text-text leading-5 mt-2">{li.desc}</p>
          </li>
        ))}
      </ul>
      {extra && (
        <p className="mt-5 text-lg max-w-3xl mx-auto text-text text-center">
          <em>{extra}</em>
        </p>
      )}
    </section>
  );
};

export default GetStarted;
