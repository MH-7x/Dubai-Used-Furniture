import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

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
          <Link href={"/contact-us"}>
            <button className="px-5 rounded-lg py-2.5 bg-primary text-secondary">
              {b("contact")}
            </button>
          </Link>
          <Link href={"/about-us"}>
            <button className="px-5 rounded-lg py-2.5 bg-accent text-text">
              {b("about")}
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-1 md:h-[430px] h-80 flex justify-center relative">
        <Image
          src={"/images/person.png"}
          alt={t("alt")}
          title={t("alt")}
          fill
          className="absolute object-contain object-top"
        />
      </div>
    </section>
  );
};

export default PersonText;
