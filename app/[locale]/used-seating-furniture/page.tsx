import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import SerChooseUs from "@/components/SerChooseUs";

import {
  RiBankCardFill,
  RiBriefcase2Fill,
  RiShieldCheckFill,
  RiStore2Fill,
} from "@remixicon/react";

const page = () => {
  return (
    <main className="md:mt-24 mt-20 ">
      <ServiceHeroSection
        title={{
          main: " Buy & Sell Premium Used Seating Furniture,",
          auth: "Dubai Used Furniture",
        }}
        desc="At Dubai Used Furniture, we’re your trusted partner in buying and
          selling high-quality used seating furniture across the UAE. Whether
          you’re searching for a new addition to your home or looking to offload
          gently used items, we offer an exclusive range of seating solutions to
          suit every style and budget."
      />
      <SecondSec
        title="Premium Inventory for Seating Furniture Buyers and Sellers"
        sub=" Discover Our Diverse Collection:"
        desc=" We take pride in our extensive inventory, carefully curated for both
            seating furniture buyers and sellers. Find exactly what you need and
            enjoy unbeatable deals on:"
        images={[
          {
            src: "/seating/seating-furniture-image.jpeg",
            alt: "used seating furniture store image",
          },
          {
            src: "/seating/seating-furniture-image-2.webp",
            alt: "used seating furniture store image",
          },
          {
            src: "/seating/seating-furniture-image-3.jpg",
            alt: "used seating furniture store image",
          },
        ]}
        boxs={[
          {
            title: "Where to Buy Used Seating Furniture in Dubai",
            desc: "Visit our showroom at &apos;Building No.4 Moatab Bin Auf St, BuShaghara Sharjah&apos; for top-qulity used seating furniture in Dubai. Our collection features elegant used leather sofas and stylish pre-owned chairs, offering a premium used furniture market experience.",
          },
          {
            title: "Affordable Second-Hand Sofas for Sale in Abu Dhabi",
            desc: "Upgrade your living space with our budget-friendly, pre-owned sofas in Abu Dhabi. We offer affordable second-hand sofas, cheap used dining chairs, and quality used sectional sofas in UAE that blend comfort with modern design.",
          },
          {
            title: " Best Places to Find Pre-Owned Chairs in Sharjah",
            desc: "Discover a wide variety of pre-owned chairs in Sharjah, including gently used lounge chairs and second-hand bar stools. Enjoy quality seating options that enhance any décor and meet your style needs.",
          },
          {
            title: " Used Office Seating Furniture Dealers in UAE",
            desc: "Discover a wide variety of pre-owned chairs in Sharjah, including gently used lounge chairs and second-hand bar stools. Enjoy quality seating options that enhance any décor and meet your style needs.",
          },
          {
            title: " Used Office Seating Furniture Dealers in UAE",
            desc: "Outfit your office with high-quality used seating furniture from trusted dealers in UAE. Choose from high-quality pre-owned office chairs in Abu Dhabi and ergonomic chairs in UAE, supported by expert tips for buying used seating furniture.",
          },
          {
            title: " Second-Hand Recliners Available in Dubai",
            desc: " Relax with our comfortable, gently used recliners available in Dubai. Our selection also includes used leather sofas, affordable pre-owned theater seating, and used rocking chairs in Abu Dhabi, all available on the best online platforms for used seating furniture in UAE.",
          },
        ]}
      />
      <ThirdSec
        title="Exclusive Seating Solutions – Tailored for Buyers and Sellers"
        desc="  At Dubai Used Furniture, we’re committed to making every transaction
        seamless. As both buyers and sellers, we offer:"
        items={[
          {
            title: "Competitive Offers & Fast Transactions",
            src: "/seating/used-seating-furniture.jpg",
            alt: "Collection Of Seating Furnitures",
            lis: [
              {
                desc: "Looking for cheap used dining chairs in Abu Dhabi or affordable used sectional sofas in UAE? Our competitive pricing ensures you always get the best value.",
              },
              {
                desc: " Ready to sell? We’re actively looking to buy quality pieces, so find out where to sell used seating furniture in UAE with ease.",
              },
            ],
          },
          {
            title: " Specialized Options for Every Need",
            src: "/seating/used-office-chairs.jpg",
            alt: "Used Office Chairs",
            lis: [
              {
                desc: " Enhance your workspace with our high-quality pre-owned office chairs in Abu Dhabi or second-hand ergonomic chairs in UAE.",
              },
              {
                desc: "Refresh your living area with standout items such as used leather sofas for sale in Dubai, gently used lounge chairs for sale in Sharjah, and used rocking chairs available in Abu Dhabi.",
              },
            ],
          },
          {
            title: " Outdoor & Entertainment Seating",
            src: "/seating/used-outdoor-furniture.jpg",
            alt: "Used Outdoor Furniture",
            lis: [
              {
                desc: "For alfresco living, check out our used outdoor seating furniture in Abu Dhabi.",
              },
              {
                desc: " Create the perfect entertainment setup with affordable pre-owned theater seating in Dubai or add a unique flair with second-hand bar stools in Dubai.",
              },
            ],
          },
        ]}
      />
      <SerChooseUs
        title="Why Choose Dubai Used Furniture?"
        desc="There are many buyers and sellers for your used furniture, see how we are the best choose for your used furniture in Dubai!"
        lis={[
          {
            title: "Trusted Expertise",
            icon: <RiShieldCheckFill size={50} />,
            desc: " With years of experience, our team understands the nuances of the used furniture market. We offer personalized advice and insights—ask for our expert tips for buying used seating furniture in UAE.",
          },
          {
            title: "Quality & Reliability",
            icon: <RiBriefcase2Fill size={50} />,
            desc: " Every piece of furniture is thoroughly inspected to ensure it meets our high standards, giving you the confidence to buy or sell with us.",
          },
          {
            title: "Flexible Solutions",
            icon: <RiBankCardFill size={50} />,
            desc: " Not only do we facilitate seamless transactions, but we also support sustainability. If you’re ready to part ways with your items responsibly, discover where to donate used seating furniture in Dubai.",
          },
          {
            title: "Online & In-Store Convenience",
            icon: <RiStore2Fill size={50} />,
            desc: "Use our website to browse the best online platforms for used seating furniture in UAE, or visit our showroom in Dubai for a hands-on experience.",
          },
        ]}
      />
      <Gallery
        title=" Our Used Seating Furniture Collection"
        desc=" Discover our diverse collection of used seating furniture, carefully
        selected to meet your style and budget needs."
        images={[
          "/seating/gallay-1.jpg",
          "/seating/gallay-2.jpg",
          "/seating/gallay-3.jpg",
          "/seating/gallay-4.jpg",
          "/seating/gallay-5.jpg",
          "/seating/gallay-6.jpg",
          "/seating/gallay-7.jpg",
          "/seating/gallay-8.jpg",
          "/seating/gallay-9.jpg",
          "/seating/gallay-10.webp",
        ]}
      />
      <FooterCTA
        title={{
          main: "Ready to Transform Your Space?",
        }}
        desc="Contact us today or visit our showroom to get started!
Discover why discerning buyers and sellers across the UAE choose Dubai Used Furniture for all their seating needs."
        src="/seating/contact-seating.png"
        alt="Contact For Used Seating Furniture in Dubai"
      />
      <section className="max-w-4xl mx-auto mt-32 md:px-0 px-3 md:text-2xl text-text text-lg">
        <p>
          At Dubai Used Furniture, we invite you to experience a world of
          exceptional deals in used seating furniture. Whether you’re here to
          buy or sell, our dedicated team is ready to help you find the perfect
          match for your style and budget.
        </p>
        <p className="mt-5">
          Transform your space and enjoy the benefits of sustainable,
          cost-effective furniture with Dubai Used Furniture – your premier
          destination for premium used seating furniture.
        </p>
      </section>
    </main>
  );
};

export default page;
