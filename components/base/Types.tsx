/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslations } from "next-intl";
const Types = () => {
  const t = useTranslations("types");

  return (
    <section className="con mt-32">
      <h2 className="text-center md:text-4xl text-3xl text-primary md:px-0 px-3">
        {t("title")}
      </h2>
      <p className="text-xl/6 text-center text-text mt-5 max-w-4xl mx-auto md:px-0 px-3">
        {t("description")}
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        {t.raw("categories").map((items: any, index: number) => (
          <div
            key={index}
            className=" bg-primary text-accent p-5 text-center relative"
          >
            <span className="bg-pattren opacity-30" />
            <h3 className=" text-2xl text-secondary">{items.title}</h3>
            <p className="font-light mt-2">{items.description}</p>
            <ul className="text-start mt-5 list-disc ml-4">
              {items.items.map((item: any, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Types;
