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
import Image from "next/image";
import logo from "../public/logo-svg.svg";
import Link from "next/link";

const links = [
  "/en/used-home-furniture-dubai",
  "/en/used-office-furniture-dubai",
  "/en/used-home-appliances",
  "/en/used-seating-furniture",
  "/en/used-table-furniture",
  "/en/used-sleeping-furniture",
  "/en/used-storage-furniture",
  "/en/used-hotel-furniture-dubai",
];

const list = [
  "/",
  "/en/used-furniture-in-sharjah",
  "/en/used-furniture-in-ajman",
  "/en/used-furniture-in-abu-dhabi",
  "#",
  "/en/used-furniture-fujairah",
  "/en/used-furniture-al-ain",
];

const companyLinks = [
  "/en/about-us",
  "/en/contact-us",
  "/en/faqs",
  "/en/gallery",
  "/blogs",
  "/en/sitemap",
  "https://hamdanmoversuae.com/en/",
];

const NormalFooter = () => {
  const services = [
    "Home Furniture",
    "Office Furniture",
    "Home Appliances",
    "Seating Furniture",
    "Table Furniture",
    "Sleeping Furniture",
    "Storage Furniture",
    "Hotel Furniture",
  ];

  const locations = [
    "Dubai",
    "Sharjah",
    "Ajman",
    "Abu Dhabi",
    "Ras Al Khaimah",
    "Fujairah",
    "Al Ain",
  ];

  const company = [
    "About Us",
    "Contact Us",
    "FAQs",
    "Gallery",
    "Blog",
    "Sitemap",
    "Our Partner",
  ];

  return (
    <footer className="bg-zinc-50 text-surface/75 dark:bg-neutral-700 dark:text-white/75 mt-32 md:px-10 px-3">
      {/* Logo & Socials */}
      <div className="flex items-center justify-center border-b-2 border-neutral-200 md:px-6 dark:border-white/10 lg:justify-between">
        <div className="w-64 h-20 relative">
          <Image
            src={logo}
            alt="Dubai Used Furniture Logo"
            fill
            className="absolute scale-125 object-contain object-center"
          />
        </div>
        <div className="flex justify-center gap-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=61574525996520"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookCircleFill />
          </a>
          <a
            href="https://www.instagram.com/dubai_used_furniture"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.pinterest.com/dubai_used_furniture"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiPinterestFill />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill />
          </a>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mx-6 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Services */}
          <div>
            <h6 className="mb-4 font-semibold uppercase">Our Services</h6>
            <ul>
              {services.map((service, i) => (
                <li key={i} className="mb-2.5 text-text hover:text-black">
                  <Link href={links[i]} className="hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h6 className="mb-4 font-semibold uppercase">Locations</h6>
            <ul>
              {locations.map((location, i) => (
                <li key={i} className="mb-2.5 text-text hover:text-black">
                  <Link href={list[i]} className="hover:underline">
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="mb-4 font-semibold uppercase">Company</h6>
            <ul>
              {company.map((name, i) => (
                <li key={i} className="mb-2.5 text-text hover:text-black">
                  {companyLinks[i].startsWith("http") ? (
                    <a
                      href={companyLinks[i]}
                      target="_blank"
                      className="hover:underline"
                    >
                      {name}
                    </a>
                  ) : (
                    <Link href={companyLinks[i]} className="hover:underline">
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2">
            <h6 className="mb-4 font-semibold uppercase">Contact Us</h6>
            <p className="mb-4 flex items-center">
              <RiStore2Fill className="mr-3 h-6 w-6" /> Building No.4, Moatab
              Bin Auf St, Bu Shaghara, Sharjah
            </p>
            <p className="mb-4 flex items-center">
              <RiMailSendFill className="mr-3 h-6 w-6" />{" "}
              info@dubaiusedfurniture.ae
            </p>
            <p className="mb-4 flex items-center">
              <RiPhoneFill className="mr-3 h-6 w-6" /> +971 50 123 4567
            </p>
            <p className="mb-4 flex items-center">
              <RiPhoneFill className="mr-3 h-6 w-6" /> +971 55 765 4321
            </p>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div className="md:p-6 flex items-center justify-between md:flex-row flex-col">
        <span>We respect your privacy & terms of service</span>
        <div className="flex gap-x-3">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className="bg-black/5 md:p-6 py-3 px-0 text-center text-text">
        <span>© {new Date().getFullYear()} Dubai Used Furniture.</span>{" "}
        Developed by{" "}
        <a href="https://github.com/MH-7x" className="underline">
          Mashal Huraira
        </a>
      </div>
    </footer>
  );
};

export default NormalFooter;
