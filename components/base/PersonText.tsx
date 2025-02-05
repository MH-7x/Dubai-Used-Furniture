import { useLocale, useTranslations } from "next-intl";

const PersonText = () => {
  const locale = useLocale();
  const b = useTranslations("buttons");
  const t = useTranslations("personText");
  return (
    <section className="bg-secondary w-full grid md:grid-cols-3 grid-cols-1 mt-32 md:px-[65px] px-3 md:py-0 pt-10">
      <div
        className={`col-span-2 flex flex-col items-start justify-center text-text font-light ${
          locale === "ar" ? "md:pr-16" : "md:pl-16"
        }`}
      >
        <h2 className="md:text-4xl text-3xl text-primary">{t("title")}</h2>
        <p className="md:text-xl/6 text-lg/5 mt-5">{t("description1")}</p>
        <p className="md:text-xl/6 text-lg/5 mt-3">{t("description2")}</p>
        <div className="mt-5 flex gap-x-4 font-normal">
          <button className="px-5 py-2.5 bg-primary text-secondary">
            {b("contact")}
          </button>
          <button className="px-5 py-2.5 bg-accent text-text">
            {b("about")}
          </button>
        </div>
      </div>
      <div className="col-span-1 flex justify-center">
        <img
          src={"/images/person.png"}
          alt={t("alt")}
          title={t("alt")}
          width={320}
          height={320}
        />
      </div>
    </section>
  );
};

export default PersonText;
