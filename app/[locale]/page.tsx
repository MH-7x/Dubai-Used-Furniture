import AboutUs from "@/components/base/AboutUs";
import Cities from "@/components/base/Cities";
import GetStarted from "@/components/base/GetStarted";
import IntroText from "@/components/base/IntroText";
import PersonText from "@/components/base/PersonText";
import Services from "@/components/base/Services";
import Types from "@/components/base/Types";
import WhyChooseUs from "@/components/base/WhyChooseUs";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="md:mt-24 mt-[70px]">
        <HeroSection />
        <IntroText />
        <GetStarted />
        <PersonText />
        <Types />
        <Services />
        <WhyChooseUs />
        <AboutUs />
        <Cities />
        <Contact />
      </main>
      <div className="h-screen"></div>
    </>
  );
}
