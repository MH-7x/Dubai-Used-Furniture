import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "@remixicon/react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  const u = useTranslations("utils");
  return (
    <section className="min-h-screen bg-primary mt-32 ">
      <div className="container px-6 md:py-16 py-10 mx-auto ">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h2 className="text-2xl font-semibold text-secondary capitalize  lg:text-3xl">
              {t("title")}
            </h2>

            <p className="mt-4 text-accent">{t("desc")}</p>

            <ContactForm />
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <div className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96 relative overflow-hidden">
              <Image
                src={"/images/contact-us.jpg"}
                alt="Contact With Dubai Used Furniture"
                fill
                className="object-cover object-right"
              />
            </div>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 truncate w-72 text-accent font-light">
                  {u("address")}
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span
                  dir="ltr"
                  className="mx-2 truncate w-72 text-accent font-light"
                >
                  +971 50 999 9999 , +971 50 888 8888
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 truncate w-72 text-accent font-light">
                  dubaiusedfurniture@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 dark:text-gray-300 ">
                {t("follow")}
              </h3>

              <div className="flex mt-4 -mx-1.5 ">
                <RiFacebookCircleFill
                  className="mx-1.5 text-secondary"
                  size={30}
                />
                <RiInstagramFill className="mx-1.5 text-secondary" size={30} />
                <RiTwitterFill className="mx-1.5 text-secondary" size={30} />
                <RiLinkedinBoxFill
                  className="mx-1.5 text-secondary"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
