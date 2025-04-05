import { RiImage2Fill, RiWhatsappFill } from "@remixicon/react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
const ServiceHeroSection = ({
  title,
  desc,
  btnsEnable = true,
}: {
  title: { main: string; auth: string };
  desc: string;
  btnsEnable?: boolean;
}) => {
  const locale = useLocale();
  const b = useTranslations("buttons");
  return (
    <section className="bg-secondary md:px-0 px-3 md:py-16 py-5">
      <div
        className={`max-w-5xl  mx-auto  py-10 ${
          locale === "ar"
            ? "md:border-r-4 md:border-accent md:pr-5"
            : "md:border-l-4 md:border-accent md:pl-5"
        }`}
      >
        <h1 className="md:text-4xl text-3xl md:text-start text-center md:border-none border-b-2 border-accent md:pb-0 pb-2 text-primary font-bold">
          {title.main}
          <span className="md:block"> {title.auth}</span>
        </h1>
        <p className="mt-5 md:text-xl text-lg/6 font-light text-text">{desc}</p>
        {btnsEnable && (
          <div className="max-w-xl grid grid-cols-2 md:gap-x-6 gap-x-3 mt-5">
            <Link
              className="md:py-3 rounded-lg flex items-center justify-center  py-2.5 bg-primary text-secondary"
              href={
                "https://wa.me/+971545019655?text=I%20contact%20you%20for%20used%20furniture!"
              }
              title="Send Us Message to our whatsapp number"
            >
              <button className="  flex items-center justify-center gap-x-2">
                <RiWhatsappFill />
                {b("whatsapp")}
              </button>
            </Link>
            <Link
              className="md:py-3 py-2.5 rounded-lg bg-accent text-primary"
              href={"#gallery"}
            >
              <button className=" mx-auto flex items-center justify-center gap-x-2">
                <RiImage2Fill />
                VIEW IMAGES
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceHeroSection;
