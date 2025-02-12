import FooterCTA from "@/components/base/FooterCTA";
import Gallery from "@/components/base/Gallery";
import SecondSec from "@/components/base/SecondSec";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ThirdSec from "@/components/base/thirdSec";
import SerChooseUs from "@/components/SerChooseUs";

const page = () => {
  return (
    <main className="md:mt-24 mt-20 ">
      <ServiceHeroSection />
      <SecondSec />
      <ThirdSec />
      <SerChooseUs />
      <Gallery />
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
