import { RiMapPin2Line, RiSmartphoneLine, RiTimerLine } from "@remixicon/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="bg-accent mt-32 py-10">
      <section className="con gap-x-10 grid grid-cols-5">
        <div className="col-span-2">
          <Image src={"/image001.png"} alt="logo" width={220} height={220} />
          <h3 className="text-xl font-bold text-primary mt-4">
            {t("companyName")}
          </h3>
          <p className="text-sm text-gray-600">{t("description")}</p>
          <table className="mt-5 flex gap-x-3 text-sm">
            <thead className="text-gray-600 ">
              <tr className="flex flex-col items-start">
                <th className="font-normal flex items-center gap-x-1 w-full">
                  <RiMapPin2Line size={18} /> {t("contact.addressLabel")}
                </th>
                <th className="font-normal flex items-center gap-x-1 w-full">
                  <RiSmartphoneLine size={18} /> {t("contact.phoneLabel")}
                </th>
                <th className="font-normal flex items-center gap-x-1 w-full">
                  <RiTimerLine size={18} />
                  {t("contact.hoursLabel")}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="flex flex-col items-start">
                <td className="font-normal">{t("contact.address")}</td>
                <td dir="ltr" className="font-normal">
                  {t("contact.phone")}
                </td>
                <td className="font-normal">{t("contact.hours")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-1  px-4">
          <h3 className="text-xl font-bold text-primary mt-4">
            {t("services.title")}
          </h3>
          <ul className="text-text mt-4 ">
            {t.raw("services.list").map((ser: string, i: number) => (
              <li key={i} className="border-b border-primary/40 pb-1 mb-2">
                {ser}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1  px-4">
          <h3 className="text-xl font-bold text-primary mt-4">
            {t("locations.title")}
          </h3>
          <ul className="text-text mt-4 ">
            {t.raw("locations.list").map((ser: string, i: number) => (
              <li key={i} className="border-b border-primary/40 pb-1 mb-2">
                {ser}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1  px-4">
          <h3 className="text-xl font-bold text-primary mt-4">
            {t("company.title")}
          </h3>
          <ul className="text-text mt-4 ">
            {t.raw("company.list").map((ser: string, i: number) => (
              <li key={i} className="border-b border-primary/40 pb-1 mb-2">
                {ser}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
