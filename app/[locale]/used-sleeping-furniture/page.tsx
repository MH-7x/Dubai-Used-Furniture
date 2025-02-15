import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import IntroText from "@/components/base/IntroText";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import ThreeGrid from "@/components/base/ThreeGrid";
import TwoGrid from "@/components/base/TwoGrid";
import Content from "@/components/Content";
import Extra from "@/components/Extra";
import SerChooseUs from "@/components/SerChooseUs";
import React from "react";

const SleepingFurniturePage = () => {
  return (
    <main className="md:mt-24 mt-20 ">
      <ServiceHeroSection
        title={{
          main: "Used Sleeping Furniture in Dubai,",
          auth: "Used Beds, Mattresses & More",
        }}
        desc="Welcome to Dubai Used Furniture, your trusted marketplace for buying and selling premium quality used sleeping furniture in Dubai. Whether you’re on the lookout for used bedroom furniture Dubai, second-hand beds Dubai, pre-owned mattresses Dubai, or used bed frames Dubai, our extensive collection is designed to meet every need and budget. We also proudly offer second-hand sleeping furniture in Dubai, UAE to ensure that quality and affordability are accessible across the region."
      />
      <IntroText text="Our mission is simple: to connect you with the best pre-owned sleeping furniture available, while making the buying and selling process as smooth and transparent as possible. Read on to discover our diverse range of products, learn about our strict quality standards, and find out how we serve every corner of Dubai." />
      <ThirdSec
        title="Our Extensive Range of Used Sleeping Furniture"
        desc="At Dubai Used Furniture, we offer a broad spectrum of sleeping furniture that caters to various tastes and requirements. Our carefully curated inventory includes:"
        items={[
          {
            title: "Specific Furniture Items",
            src: "/tables/used-dinning-tables.webp",
            alt: "Used Dining Tables",
            lis: [
              {
                title: "Used king-size beds Dubai",
                desc: "Ideal for those who desire spacious and comfortable sleeping arrangements.",
              },
              {
                title: "Second-hand bunk beds Dubai",
                desc: "Perfect for families with children or shared living spaces.",
              },
              {
                title: "Pre-owned sofa beds Dubai ",
                desc: " Combining style, space efficiency, and multifunctional design.",
              },

              {
                title: "Used single beds Dubai",
                desc: "An excellent choice for compact rooms or guest accommodations.",
              },
              {
                title: "Second-hand futons Dubai",
                desc: "Trendy, space-saving solutions for modern urban living.",
              },
            ],
          },
          {
            title: "Related Accessories",
            desc: "Complete your bedroom setup with our range of complementary accessories:",
            src: "/tables/used-dinning-tables.webp",
            alt: "Used Dining Tables",
            lis: [
              {
                title: "Used bedside tables Dubai ",
                desc: "Stylish and functional bedside tables at budget-friendly prices.",
              },
              {
                title: "Second-hand wardrobes Dubai",
                desc: "Spacious and durable wardrobes to organize your clothes affordably.",
              },
              {
                title: "Pre-owned dressers Dubai",
                desc: " Elegant and practical dressers to enhance your bedroom storage.",
              },
              {
                title: "Used nightstands Dubai",
                desc: "Convenient nightstands for easy access to essentials.",
              },
              {
                title: "Second-hand bedding Dubai",
                desc: "Comfortable and quality bedding options at great value.",
              },
            ],
          },
        ]}
      />
      <Extra
        desc=" Our inventory isn’t limited to just these items. We also feature a
        variety of products addressing specific needs such as:"
        list={[
          "Where to buy used king-size beds in Dubai for those seeking a luxurious sleep experience.",
          "Affordable second-hand bunk beds for kids in Dubai to create fun and safe sleeping spaces.",
          "Gently used memory foam mattresses available in Dubai for ultimate comfort and support.",
          "Pre-owned adjustable bed frames for sale in Dubai that adapt to your lifestyle.",
          " Second-hand wooden bed frames in Dubai offering a timeless aesthetic with durability.",
        ]}
      />

      <ThreeGrid
        title="Quality You Can Trust"
        desc="We understand that purchasing used furniture requires assurance of
        quality and condition. At Dubai Used Furniture, we maintain high
        standards through rigorous quality checks. Our offerings include:"
        list={[
          {
            title: "Gently Used Beds Dubai",
            desc: " Each piece is inspected to ensure minimal wear and maximum functionality.",
          },
          {
            title: "High-quality second-hand mattresses Dubai",
            desc: "Enjoy the comfort of premium mattresses without the premium price.",
          },
          {
            title: "Luxury pre-owned beds Dubai",
            desc: "For those who desire a touch of elegance in their sleeping spaces.",
          },
          {
            title: "Lightly used sleeping furniture Dubai",
            desc: "Combining the benefits of pre-owned value with near-new quality.",
          },
          {
            title: "Like-new used beds Dubai",
            desc: "that perform as if they were fresh off the showroom floor.",
          },
          {
            title: "Gently used mattresses for sale in Dubai",
            desc: "that have been maintained to ensure your comfort.",
          },
          {
            title: "Well-maintained second-hand bedroom furniture Dubai",
            desc: "crafted to meet the demands of everyday use.",
          },
          {
            title: "Barely used sleeping furniture Dubai",
            desc: "that offers you the best in both durability and style.",
          },
          {
            title: "Almost new pre-owned beds Dubai",
            desc: "available at prices that make luxury affordable.",
          },
        ]}
      />
      <Extra
        desc="For those seeking detailed assurances, our collection also features:"
        list={[
          "High-quality used bedroom furniture sets in Dubai that combine aesthetics and functionality.",
          "Certified pre-owned sleeping furniture dealers in Dubai ensuring every piece meets strict quality benchmarks.",
          "Top-rated used bed frames in Dubai praised by customers for their reliability and design.",
        ]}
      />

      <SerChooseUs
        title="Serving All Areas of Dubai"
        desc="We proudly serve customers throughout Dubai, ensuring that no matter where you are, you can enjoy quality used sleeping furniture at unbeatable prices. Our service areas include:"
        lis={[
          {
            title: "Used sleeping furniture in Dubai Marina ",
            desc: " Perfect for the bustling urban lifestyle.",
          },
          {
            title: "Second-hand beds in Jumeirah Dubai",
            desc: "Bringing comfort to one of Dubai’s most vibrant communities.",
          },
          {
            title: "Pre-owned mattresses in Downtown Dubai",
            desc: "Convenient for city dwellers looking for quality sleep solutions.",
          },
          {
            title: "Used bedroom furniture in Deira Dubai ",
            desc: "Offering a blend of tradition and modernity.",
          },
          {
            title: "Second-hand sleeping furniture in Bur Dubai ",
            desc: "Serving an eclectic and diverse market.",
          },
        ]}
        extra="We ensure that our offerings are easily accessible whether you search for used sleeping furniture stores in Dubai Marina or second-hand beds for sale in Jumeirah Dubai. No matter where you are in the city, our products and services are just a click away."
      />
      <Gallery
        title={"Used Sleeping Furniture, beds Collection"}
        desc={
          "Explore our premium collection of used sleeping furniture and beds in Dubai, offering comfort, durability, and affordability for a restful night's sleep."
        }
        images={[
          "/tables/gallery-1.jpg",
          "/tables/gallery-2.jpg",
          "/tables/gallery-3.jpg",
          "/tables/gallery-4.jpg",
          "/tables/gallery-5.jpg",
          "/tables/gallery-6.jpg",
          "/tables/gallery-7.jpg",
          "/tables/gallery-8.jpg",
          "/tables/gallery-9.jpg",
        ]}
      />
      <TwoGrid />
      <Extra
        desc="In addition, our platform frequently features attractive offers and seasonal promotions, including:"
        list={[
          "Used sleeping furniture deals Dubai that make buying or selling even more rewarding.",
          "Special mentions like used beds under AED 1000 in Dubai for budget-conscious shoppers.",
        ]}
      />
      <Content />

      <FooterCTA
        src="/seating/contact-seating.png"
        alt="Contact For Used Beds in Dubai"
        title={{
          main: "Get Started Today",
        }}
        desc="Don’t wait to transform your sleeping space or clear out unwanted items – take the next step today. Contact us to get more information, request a quote, or start your selling process. "
      />

      <section className="max-w-4xl mx-auto mt-32 md:px-0 px-3 md:text-2xl text-text text-lg ">
        <p className="mb-5">
          At Dubai Used Furniture, we’re dedicated to offering you the finest
          selection of pre-owned sleeping furniture while ensuring a seamless
          buying and selling experience.
        </p>
        <p className="mb-5">
          Whether you’re ready to buy used furniture like second-hand beds Dubai
          and pre-owned mattresses Dubai, or you’re interested in selling used
          bedroom furniture Dubai to earn extra cash, our platform is your
          one-stop solution.
        </p>
        <p className="mb-5">
          Your journey to a better, more cost-effective bedroom begins here.
          Shop smart, save money, and experience the best in second-hand
          sleeping furniture UAE today!
        </p>
      </section>
    </main>
  );
};

export default SleepingFurniturePage;
