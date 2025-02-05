import { useTranslations } from "next-intl";
import Image from "next/image";
const GetStarted = () => {
  const t = useTranslations("getStarted");
  return (
    <section className="con mt-32 px-3">
      <p className="text-center text-secondary">{t("sub")}</p>
      <h2 className="text-center md:text-4xl text-3xl">{t("title")}</h2>
      <p className="mt-3 max-w-4xl text-lg text-center text-text mx-auto">
        {t("desciption")}
      </p>
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
        <li className="h-52 bg-accent p-3 relative flex flex-col items-start justify-center">
          <Image
            src={"/images/call.svg"}
            alt={t("step1.alt")}
            width={45}
            height={45}
            className="absolute top-5 right-5"
          />

          <h3 className="text-2xl text-primary">{t("step1.title")}</h3>
          <p className="text-text leading-5 mt-2">{t("step1.description")}</p>
        </li>
        <li className="h-52 bg-accent p-3 relative flex flex-col items-start justify-center">
          <Image
            src={"/images/evaculation.svg"}
            alt={t("step2.alt")}
            width={45}
            height={45}
            className="absolute top-5 right-5"
          />

          <h3 className="text-2xl text-primary">{t("step2.title")}</h3>
          <p className="text-text leading-5 mt-2">{t("step2.description")}</p>
        </li>
        <li className="h-52 bg-accent p-3 relative flex flex-col items-start justify-center">
          <Image
            src={"/images/cash.svg"}
            alt={t("step3.alt")}
            width={45}
            height={45}
            className="absolute top-5 right-5"
          />

          <h3 className="text-2xl text-primary">{t("step3.title")}</h3>
          <p className="text-text leading-5 mt-2">{t("step3.description")}</p>
        </li>
      </ul>
    </section>
  );
};

export default GetStarted;
