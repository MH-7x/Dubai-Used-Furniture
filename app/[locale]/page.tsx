import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <h1 className="mt-32">{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
