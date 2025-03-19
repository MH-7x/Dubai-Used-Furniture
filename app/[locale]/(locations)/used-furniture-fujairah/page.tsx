/* eslint-disable react/no-unescaped-entities */ import Gallery from "@/components/base/Gallery";
import Services from "@/components/base/Services";
import TestimonialSlider from "@/components/TestimonialsSlider";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import type { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  return MetadataTemplate({
    locale,
    namespace: "FujairahPageMetadata",
  });
}

const UsedFurnitureFujairahPage = () => {
  const t = useTranslations("testimonials");
  return (
    <main className="container md:mt-48 mt-32">
      <section className="hero-section mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Your Best Choice for Used Furniture in Fujairah
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Furnishing your home or office in Fujairah shouldn't break the bank.
          At Dubai Used Furniture, we understand the need for quality and
          affordability. That's why we're Fujairah's leading provider of{" "}
          <Link href="/" className="font-medium text-blue-600 hover:underline">
            used furniture
          </Link>
          , offering a wide selection of{" "}
          <span className="font-semibold">second hand furniture Fujairah</span>{" "}
          residents love. Discover fantastic deals and furnish your space
          smartly with our collection of{" "}
          <span className="font-semibold">
            affordable used furniture Fujairah
          </span>{" "}
          wide!
        </p>
      </section>

      <section className="why-used-section mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Why Fujairah Chooses Used Furniture – Smart & Sustainable Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Save Money Furnishing Your Fujairah Home
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Why pay premium prices for brand new furniture when you can find
              amazing quality{" "}
              <span className="font-semibold">
                cheap used furniture Fujairah
              </span>{" "}
              right here? Stretch your budget further and furnish your entire
              home or office for less with our incredible selection of pre-owned
              pieces.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Go Green with Pre-owned Furniture in Fujairah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Make an eco-conscious choice by opting for{" "}
              <span className="font-semibold">
                pre-owned furniture in Fujairah
              </span>
              . Reduce waste and contribute to a more sustainable lifestyle by
              giving beautiful furniture a second life. Choose{" "}
              <span className="font-semibold">furniture resale Fujairah</span>{" "}
              options and help the environment!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Variety & Unique Finds for Your Fujairah Space
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Explore a diverse range of styles and discover unique pieces you
              won't find in typical furniture stores. From{" "}
              <span className="font-semibold">used sofas Fujairah</span> perfect
              for relaxing evenings to{" "}
              <span className="font-semibold">used dining tables Fujairah</span>{" "}
              for family gatherings, we have something for every taste and need.
              Find the perfect{" "}
              <span className="font-semibold">
                used home furniture Fujairah
              </span>{" "}
              to reflect your personal style.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality & Condition You Can Trust
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Worried about quality? Don't be! We offer only{" "}
              <span className="font-semibold">
                good condition used furniture Fujairah
              </span>
              . Our team carefully inspects each piece to ensure it meets our
              standards, so you can be confident in your purchase. You're
              getting value and durability with our carefully selected inventory
              of <span className="font-semibold">refurbished furniture</span>{" "}
              (where applicable).
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Convenience for Buyers and Sellers in Fujairah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Looking to{" "}
              <span className="font-semibold">buy used furniture Fujairah</span>
              ? Or maybe you want to{" "}
              <span className="font-semibold">
                sell used furniture Fujairah
              </span>
              ? Dubai Used Furniture makes it easy! We offer a streamlined
              process for both buying and selling, making your furniture
              experience in Fujairah hassle-free. Find{" "}
              <span className="font-semibold">
                used furniture for sale Fujairah
              </span>{" "}
              with ease!
            </p>
          </div>
        </div>
      </section>
      <Services
        title="Buy & Sell Used Furniture in Fujairah"
        desc="Buy & sell used furniture in Fujairah with Dubai Used Furniture! Affordable prices for sofas, beds, tables & appliances. Free pickup, instant cash payments, and eco-friendly solutions. Start today!"
        services={[
          {
            title: "Used Seating Furniture in Fujairah",
            description:
              "We provide furniture buy and sell services in Fujairah for the following types of seating furniture used for seating purposes.",
            items: [
              "Rocking chair",
              "Chair",
              "Lift chair",
              "Bar Stool",
              "Chaise longue",
              "Bench",
              "Divan",
              "Sofa or settee",
            ],
            src: "/images/seating-furniture.jpg",
          },
          {
            title: "Used Table Furniture in Fujairah",
            description:
              "We buy and sell any kind of table furniture in good condition in UAE. Located in Fujairah.",
            items: [
              "Coffee Table",
              "Billiard Table",
              "Dining Table",
              "Office Work Station",
              "Computer Table",
              "Study Table",
              "TV Stand",
              "Dressing Table (Child Bed)",
            ],
            src: "/images/table-furniture.jpg",
          },
          {
            title: "Used Sleeping or Lying Furniture in Fujairah",
            description:
              "We buy and sell different types of furniture mostly used for sleeping and lying purposes.",
            items: [
              "Bunk Bed",
              "Bed",
              "Platform Bed",
              "Four-Poster Bed",
              "Murphy Bed",
              "Infant Bed (Child Bed)",
              "Sleigh Bed",
              "Mattress",
            ],
            src: "/images/laying-furniture.jpg",
          },
          {
            title: "Used Storage Furniture in Fujairah",
            description:
              "We buy and sell all kinds of storage furniture like cupboards, cabinets, etc., in Dubai.",
            items: [
              "Baker's Rack",
              "Cupboard",
              "Chifforobe",
              "Bookcase",
              "Cabinetry",
              "Filing Cabinet",
              "Kitchen Cabinet",
              "Chest of Drawers or Dresser",
            ],
            src: "/images/storage-furniture.jpg",
          },
          {
            title: "Used Home Appliance in Fujairah",
            description:
              "We buy all kinds of used home appliances at the best price in good condition. Contact us if you have any appliance to sell.",
            items: [
              "Refrigerator",
              "Washing Machine",
              "Air Condition",
              "Gas Cooker",
              "Dish Washer",
              "Freezer",
              "LED TV",
              "Microwave Oven",
            ],
            src: "/images/home-appliance.webp",
          },
        ]}
        others={[
          {
            title: "Used Home Furniture Buyers in Fujairah",
            desc: "Sell or purchase used home furniture in Fujairah. Receive best price for your second-hand sofas, beds, and more. Quick, convenient service!",
            src: "/images/used-home-furniture.jpg",
          },
          {
            title: "Used Office Furniture Buyers in Fujairah",
            desc: "Sell your old office furniture in Fujairah or purchase cheap second-hand desks, chairs, and cabinets. Top prices, fast deals!",
            src: "/images/used-office-furniture.jpeg",
          },
          {
            title: "Used Hotel Furniture Buyers in Fujairah",
            desc: "Dubai Used Furniture offers hassle-free hotel furniture removal with reasonable prices, easy pick-up, and quick payment in Fujairah.",
            src: "/images/used-hotel-furniture.webp",
          },
        ]}
      />
      <section className="why-dubai-used-furniture-section mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Dubai Used Furniture: Your #1 Used Furniture Store in Fujairah
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Extensive Selection of Used Furniture Fujairah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Browse our regularly updated online catalog to discover a vast
              array of{" "}
              <span className="font-semibold">
                used home furniture Fujairah
              </span>
              . From stylish{" "}
              <Link
                href="/used-sleeping-furniture"
                className="font-medium text-blue-600 hover:underline"
              >
                used sofas & couches
              </Link>{" "}
              and comfortable{" "}
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline"
              >
                used beds & mattresses
              </Link>{" "}
              to elegant{" "}
              <Link
                href="/used-seating-furniture"
                className="font-medium text-blue-600 hover:underline"
              >
                used dining tables & chairs
              </Link>{" "}
              and practical{" "}
              <Link
                href="/used-office-furniture-dubai-dubai-dubai"
                className="font-medium text-blue-600 hover:underline"
              >
                used office furniture Fujairah
              </Link>
              , we have furniture for every room and style.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Browse Our Online Catalog
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Assurance & Best Deals on Used Furniture
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We pride ourselves on offering the{" "}
              <span className="font-semibold">
                best used furniture deals Fujairah
              </span>{" "}
              has to offer. Every piece of{" "}
              <span className="font-semibold">
                second hand furniture in Fujairah
              </span>{" "}
              we stock undergoes a thorough inspection to ensure it meets our
              quality standards. Get incredible value and enjoy{" "}
              <span className="font-semibold">
                discount used furniture Fujairah
              </span>{" "}
              options without compromising on quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Convenient Delivery & Pickup Services in Fujairah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enjoy hassle-free service with our reliable{" "}
              <span className="font-semibold">
                used furniture delivery Fujairah
              </span>
              . We'll bring your chosen furniture right to your doorstep. And if
              you're looking to sell, we offer{" "}
              <span className="font-semibold">
                used furniture pickup Fujairah
              </span>{" "}
              services (if applicable) to make the process even easier for you.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Experienced Used Furniture Dealers Serving Fujairah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              As established{" "}
              <span className="font-semibold">
                used furniture companies Fujairah
              </span>{" "}
              and throughout the UAE, Dubai Used Furniture has the experience
              and reputation you can trust. We are dedicated to providing
              excellent customer service and making your used furniture
              experience a positive one. Choose experienced{" "}
              <span className="font-semibold">
                used furniture dealers Fujairah
              </span>{" "}
              for peace of mind.
            </p>
            {/* Optional Showroom Section - Uncomment if you have a showroom */}
            {/*
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Our Used Furniture Showroom Fujairah</h3>
              <p className="text-gray-700 leading-relaxed">
                (If you have a showroom) Come visit our <span className="font-semibold">used furniture showroom Fujairah</span> to see our collection in person! [Showroom Address and perhaps a map embed here].
              </p>
            </div>
             */}
          </div>
        </div>
      </section>
      <Gallery
        title="Used Furniture Gallery in Fujairah"
        desc="Discover top-quality used furniture collections in Fujairah! Buy & sell affordable pre-owned sofas, beds, tables & appliances. Free pickup, trusted buyers, and eco-friendly options. Explore now!"
        images={[
          "/tables/gallery-2.jpg",
          "/tables/gallery-3.jpg",
          "/tables/gallery-4.jpg",
          "/tables/gallery-5.jpg",
          "/tables/gallery-6.jpg",
          "/tables/gallery-7.jpg",
          "/seating/gallay-1.jpg",
          "/seating/gallay-2.jpg",
          "/seating/gallay-3.jpg",
          "/seating/gallay-4.jpg",
          "/seating/gallay-5.jpg",
          "/appliance/gallery-1.jpg",
          "/appliance/gallery-2.jpg",
          "/appliance/gallery-3.jpg",
          "/appliance/gallery-4.jpg",
          "/appliance/gallery-5.jpg",
          "/appliance/gallery-6.jpg",
        ]}
      />
      <section className="furniture-types-section mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Find the Perfect Used Furniture for Every Need in Fujairah
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <Link
                href="/used-sleeping-furniture"
                className="text-blue-600 hover:underline"
              >
                Used Sofas & Couches Fujairah
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Discover comfortable and stylish{" "}
              <span className="font-semibold">used sofas Fujairah</span> in
              various sizes and designs. Perfect for your living room, majlis,
              or waiting area.
            </p>
            <Link
              href="/used-sleeping-furniture"
              className="inline-block mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full text-sm"
            >
              Browse Used Sofas
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <Link href="/" className="text-blue-600 hover:underline">
                Used Beds & Mattresses Fujairah
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Find quality{" "}
              <span className="font-semibold">used beds Fujairah</span> and
              comfortable{" "}
              <span className="font-semibold">used mattresses Fujairah</span>{" "}
              for a restful night's sleep. We offer various sizes, from single
              to king.
            </p>
            <Link
              href="/"
              className="inline-block mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full text-sm"
            >
              Browse Used Beds
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <Link
                href="/used-seating-furniture"
                className="text-blue-600 hover:underline"
              >
                Used Dining Tables & Chairs Fujairah
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Create a welcoming dining space with our selection of{" "}
              <span className="font-semibold">used dining tables Fujairah</span>{" "}
              and{" "}
              <span className="font-semibold">used dining chairs Fujairah</span>
              . Perfect for family meals and entertaining guests.
            </p>
            <Link
              href="/used-seating-furniture"
              className="inline-block mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full text-sm"
            >
              Browse Dining Sets
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <Link
                href="/used-office-furniture-dubai"
                className="text-blue-600 hover:underline"
              >
                Used Office Furniture Fujairah
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Equip your office or home workspace with budget-friendly{" "}
              <span className="font-semibold">
                used office furniture Fujairah
              </span>
              . Find desks, chairs, and storage solutions to enhance
              productivity.
            </p>
            <Link
              href="/used-office-furniture-dubai"
              className="inline-block mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full text-sm"
            >
              Browse Office Furniture
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <Link
                href="/used-sleeping-furniture"
                className="text-blue-600 hover:underline"
              >
                Used Bedroom Furniture Fujairah
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Create a relaxing bedroom retreat with our range of{" "}
              <span className="font-semibold">
                used bedroom furniture Fujairah
              </span>{" "}
              sets and individual pieces like dressers, nightstands and more.
            </p>
            <Link
              href="/used-sleeping-furniture"
              className="inline-block mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full text-sm"
            >
              Browse Bedroom Furniture
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <Link href="/" className="text-blue-600 hover:underline">
                Used Living Room Furniture Fujairah
              </Link>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Complete your living space with our diverse collection of{" "}
              <span className="font-semibold">
                used living room furniture Fujairah
              </span>
              . From coffee tables to entertainment units, find pieces that
              match your style.
            </p>
            <Link
              href="/"
              className="inline-block mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded-full text-sm"
            >
              Browse Living Room Furniture
            </Link>
          </div>
        </div>
      </section>
      <TestimonialSlider testimonials={t.raw("abuDhabiPageTestimonials")} />
      <section className="faq-section mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions About Used Furniture in Fujairah
        </h2>
        <div className="space-y-4">
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              Where to buy used furniture in Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dubai Used Furniture is your best destination for quality and
              affordable{" "}
              <span className="font-semibold">used furniture in Fujairah</span>.
              We offer a wide selection online and convenient delivery services
              throughout Fujairah.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              What is the best place to buy used furniture Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              For the best combination of selection, quality, prices, and
              customer service when looking to{" "}
              <span className="font-semibold">buy used furniture Fujairah</span>
              , Dubai Used Furniture is the clear choice.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              Are there any used furniture shops near me in Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              While our primary operations are online for wider reach, our
              services extend to Fujairah. Browse our online catalog and enjoy
              convenient delivery of{" "}
              <span className="font-semibold">
                used furniture shops near me in Fujairah
              </span>{" "}
              - virtually!
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              Are there used furniture stores open now in Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our online store is open 24/7! Browse our{" "}
              <span className="font-semibold">
                used furniture stores open now Fujairah
              </span>{" "}
              collection anytime, from the comfort of your home.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              Is there used furniture for small apartments in Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes! We offer a variety of space-saving{" "}
              <span className="font-semibold">
                used furniture for small apartments Fujairah
              </span>
              , including compact sofas, foldable tables, and more.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              Can I find used furniture for office setup in Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Absolutely! We have a dedicated section of{" "}
              <span className="font-semibold">
                used office furniture Fujairah
              </span>{" "}
              perfect for setting up your home office or business space on a
              budget.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              How can I find good used furniture in Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Focus on reputable dealers like Dubai Used Furniture, check for
              detailed descriptions and photos, and always inquire about the
              condition. We make it easy to{" "}
              <span className="font-semibold">
                find good used furniture in Fujairah
              </span>{" "}
              by carefully inspecting every item.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              How can I sell used furniture in Fujairah to Dubai Used Furniture?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              (If you buy furniture) Selling your{" "}
              <span className="font-semibold">used furniture Fujairah</span> to
              us is simple! Contact us with details and photos of your
              furniture, and we'll provide a free quote. We offer convenient
              pickup services.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="text-lg font-semibold text-gray-800">
              What is the value of my used furniture in Fujairah?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The{" "}
              <span className="font-semibold">
                value of used furniture Fujairah
              </span>{" "}
              depends on factors like brand, condition, age, and style. Contact
              us for a free, no-obligation valuation of your furniture.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Ready to Find Your Perfect Used Furniture in Fujairah? Contact Us
          Today!
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Browse our online catalog, get a free quote for selling, or contact us
          with any questions. We&apos;re here to help you furnish your space
          affordably and sustainably in Fujairah.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
          >
            Browse Used Furniture Catalog
          </Link>
          <Link
            href="/contact-us"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
          >
            Get a Free Quote to Sell
          </Link>
          <Link
            href="/contact-us"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full"
          >
            Contact Us Now
          </Link>
        </div>
        <p className="mt-4 text-gray-700">
          Call us directly:{" "}
          <span className="font-semibold">[Your Phone Number]</span>
        </p>
      </section>
    </main>
  );
};

export default UsedFurnitureFujairahPage;
