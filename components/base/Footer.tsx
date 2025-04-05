/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailSendFill,
  RiPhoneFill,
  RiPinterestFill,
  RiStore2Fill,
  RiTwitterFill,
} from "@remixicon/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "../../public/logo-svg.svg";
import { Link } from "@/i18n/routing";
const links = [
  "/used-home-furniture-dubai",
  "/used-office-furniture-dubai",
  "/used-home-appliances",
  "/used-seating-furniture",
  "/used-table-furniture",
  "/used-sleeping-furniture",
  "/used-storage-furniture",
  "/used-hotel-furniture-dubai",
];

const list = [
  "/",
  "/used-furniture-in-sharjah",
  "/used-furniture-in-ajman",
  "/used-furniture-in-abu-dhabi",
  "#",
  "/used-furniture-fujairah",
  "/used-furniture-al-ain",
];

const companyLinks = [
  "/about-us",
  "/contact-us",
  "/faqs",
  "/gallery",
  "/blogs",
  "/sitemap",
  "https://hamdanmoversuae.com/en/",
];
const Footer = () => {
  const t = useTranslations("footer");
  const b = useTranslations("buttons");
  return (
    <>
      <footer className="bg-zinc-50  text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left mt-32 md:px-10 px-3">
        <div className="flex items-center md:pr-20 justify-center border-b-2 border-neutral-200 md:px-6 dark:border-white/10 lg:justify-between">
          <div className="w-64 h-20  relative">
            <Image
              src={logo}
              alt="Dubai Used Furniture Logo"
              fill
              className="absolute scale-125  object-contain object-center"
            />
          </div>

          <div className="flex justify-center gap-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61574525996520"
              rel="noopener noreferrer"
              className="[&>svg]:h-6 [&>svg]:w-6"
            >
              <RiFacebookCircleFill />
            </a>
            <a
              href="https://www.instagram.com/dubai_used_furniture"
              rel="noopener noreferrer"
              className="[&>svg]:h-6 [&>svg]:w-6"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.twitter.com"
              rel="noopener noreferrer"
              className="[&>svg]:h-6 [&>svg]:w-6"
            >
              <RiTwitterFill />
            </a>
            <a
              href="https://www.pinterest.com/dubai_used_furniture"
              rel="noopener noreferrer"
              className="[&>svg]:h-6 [&>svg]:w-6"
            >
              <RiPinterestFill />
            </a>
            <a
              href="https://www.linkedin.com"
              rel="noopener noreferrer"
              className="[&>svg]:h-6 [&>svg]:w-6"
            >
              <RiLinkedinBoxFill />
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <h6 className="mb-4 flex font-semibold uppercase justify-start">
                {t("services.title")}
              </h6>
              {/* //! links will be add into json content */}
              <ul>
                {t.raw("services.list").map((service: any, i: number) => (
                  <li
                    className="mb-2.5  text-text hover:text-black flex justify-start"
                    key={i}
                  >
                    <Link
                      href={links[i]}
                      className="hover:underline hover:underline-offset-2"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="mb-4 flex font-semibold uppercase justify-start">
                {t("locations.title")}
              </h6>

              <ul>
                {t.raw("locations.list").map((location: any, i: number) => (
                  <li
                    className="mb-2.5  text-text hover:text-black flex justify-start"
                    key={i}
                  >
                    <Link
                      href={list[i]}
                      className="hover:underline hover:underline-offset-2"
                    >
                      {location}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="mb-4 flex font-semibold uppercase justify-start">
                {t("company.title")}
              </h6>
              <ul>
                {t.raw("company.list").map((company: any, i: number) => (
                  <li
                    className="mb-2.5  text-text hover:text-black flex justify-start"
                    key={i}
                  >
                    {company === "Blogs" ? (
                      <a
                        href={"/blogs"}
                        className="hover:underline hover:underline-offset-2"
                      >
                        {company}
                      </a>
                    ) : (
                      <Link
                        href={companyLinks[i] || "#"}
                        className="hover:underline hover:underline-offset-2"
                      >
                        {company}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2">
              <h6 className="mb-4 flex font-semibold uppercase justify-start">
                {b("contact")}
              </h6>
              <p className="mb-4 flex items-center justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiStore2Fill />
                </span>
                {t("contact.address")}
              </p>
              <p className="mb-4 flex items-center justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiMailSendFill />
                </span>
                {t("contact.email")}
              </p>
              <p className="mb-4 flex items-center justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiPhoneFill />
                </span>
                <span dir="ltr">{t("contact.phone1")}</span>
              </p>
              <p className="mb-4 flex items-center justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiPhoneFill />
                </span>
                <span dir="ltr">{t("contact.phone2")}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-6 flex items-center justify-between md:flex-row flex-col">
          <span>{t("subLine")}</span>
          <div className="flex items-center gap-x-3 text-text ">
            <Link className="hover:underline" href={"#"}>
              {t("pr")}
            </Link>
            <Link className="hover:underline" href={"#"}>
              {t("td")}
            </Link>
          </div>
        </div>
        <div className="bg-black/5 md:p-6 py-3 px-0 text-center text-text">
          <span>© {new Date().getFullYear()} Copyright:</span>
          <span className="text-black"> Dubai Used Furniture </span>
          develop by <a href="https://github.com/MH-7x">Mashal Huraira</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
