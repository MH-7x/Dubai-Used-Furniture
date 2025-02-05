import { useTranslations } from "next-intl";

const IntroText = () => {
  const t = useTranslations("intro");
  return (
    <p className="max-w-6xl mx-auto mt-32 bg-secondary/50 font-light text-primary md:p-10 py-5 px-3 md:text-3xl text-xl">
      {t("text")}
    </p>
  );
};

export default IntroText;
