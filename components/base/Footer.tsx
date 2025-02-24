import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMapPin2Line,
  RiPinterestFill,
  RiSmartphoneLine,
  RiTimerLine,
  RiTwitterFill,
} from "@remixicon/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <>
      <footer className="bg-accent mt-32 pt-10 md:px-0 px-3">
        <section className="con md:gap-10 gap-5 grid md:grid-cols-5 grid-cols-2">
          <div className="col-span-2">
            <Image src={"/logo-svg.svg"} alt="logo" width={220} height={220} />
            <h3 className="text-xl font-bold text-primary mt-4">
              {t("companyName")}
            </h3>
            <p className="text-sm text-gray-600">{t("description")}</p>
            <table className="mt-5 flex gap-x-3 text-sm">
              <thead className="text-gray-600 ">
                <tr className="flex flex-col items-start  min-w-28">
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
          <div className="col-span-1  md:px-4">
            <h3 className="text-xl font-bold text-primary mt-4">
              {t("services.title")}
            </h3>
            <ul className="text-text mt-4">
              {t.raw("services.list").map((ser: string, i: number) => (
                <li key={i} className="border-b border-primary/40 pb-1 mb-2">
                  {ser}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1  md:px-4">
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
          <div className="col-span-1  md:px-4">
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
        <div className="mt-5 con flex items-center md:flex-row gap-y-2 flex-col justify-between">
          <div className="flex items-center gap-2">
            <RiFacebookCircleFill className="text-secondary" size={30} />
            <RiInstagramFill className="text-secondary" size={30} />
            <RiTwitterFill className="text-secondary" size={30} />
            <RiPinterestFill className="text-secondary" size={30} />
            <RiLinkedinBoxFill className="text-secondary" size={30} />
          </div>
          <div className="flex items-center text-gray-600 justify-center gap-2">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </footer>
      <div className="bg-secondary text-center text-primary py-3 mt-5 relative md:px-0 px-3">
        <p>
          All right reserved &copy; {new Date().getFullYear()},{" "}
          {t("companyName")}. Design and Developed by{" "}
          <a className="font-bold" href="https://github.com/MH-7x">
            Mashal Huraira
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
