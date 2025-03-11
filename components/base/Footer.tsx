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
const Footer = () => {
  const t = useTranslations("footer");
  return (
    <>
      <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left mt-32 md:px-10 px-3">
        <div className="flex items-center md:pr-20 justify-center border-b-2 border-neutral-200 px-6 dark:border-white/10 lg:justify-between">
          <div className="w-64 h-20  relative">
            <Image
              src={logo}
              alt="Dubai Used Furniture Logo"
              fill
              className="absolute scale-125  object-contain object-center"
            />
          </div>

          <div className="flex justify-center gap-x-3">
            <a href="#!" className="[&>svg]:h-6 [&>svg]:w-6">
              <RiFacebookCircleFill />
            </a>
            <a href="#!" className="[&>svg]:h-6 [&>svg]:w-6">
              <RiInstagramFill />
            </a>
            <a href="#!" className="[&>svg]:h-6 [&>svg]:w-6">
              <RiTwitterFill />
            </a>
            <a href="#!" className="[&>svg]:h-6 [&>svg]:w-6">
              <RiPinterestFill />
            </a>
            <a href="#!" className="[&>svg]:h-6 [&>svg]:w-6">
              <RiLinkedinBoxFill />
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                {t("services.title")}
              </h6>

              {t.raw("services.list").map((service: any, i: number) => (
                <Link
                  key={i}
                  href={"#"}
                  className="mb-2.5 hover:underline text-text hover:text-black hover:underline-offset-2 block"
                >
                  {service}
                </Link>
              ))}
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                {t("locations.title")}
              </h6>

              {t.raw("locations.list").map((service: any, i: number) => (
                <Link
                  key={i}
                  href={"#"}
                  className="mb-2.5 hover:underline text-text hover:text-black hover:underline-offset-2 block"
                >
                  {service}
                </Link>
              ))}
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                {t("company.title")}
              </h6>

              {t.raw("company.list").map((service: any, i: number) => (
                <Link
                  key={i}
                  href={"#"}
                  className="mb-2.5 hover:underline text-text hover:text-black hover:underline-offset-2 block"
                >
                  {service}
                </Link>
              ))}
            </div>

            <div className="col-span-2">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiStore2Fill />
                </span>
                {t("contact.address")}
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiMailSendFill />
                </span>
                {t("contact.email")}
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiPhoneFill />
                </span>
                {t("contact.phone1")}
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-6 [&>svg]:w-6">
                  <RiPhoneFill />
                </span>
                {t("contact.phone2")}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 flex items-center justify-between">
          <span>Dubai&apos;s Leading Used Furniture Company</span>
          <div className="flex items-center gap-x-3 text-text ">
            <Link className="hover:underline" href={"#"}>
              Privacy Policy
            </Link>
            <Link className="hover:underline" href={"#"}>
              Term & Conditions
            </Link>
          </div>
        </div>
        <div className="bg-black/5 p-6 text-center text-text">
          <span>© {new Date().getFullYear()} Copyright:</span>
          <span className="text-black"> Dubai Used Furniture</span>
          develop by <a href="https://github.com/MH-7x">Mashal Huraira</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
