import GetStarted from "@/components/base/GetStarted";
import IntroText from "@/components/base/IntroText";
import PersonText from "@/components/base/PersonText";
import Services from "@/components/base/Services";
import Types from "@/components/base/Types";
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
      </main>
      <div className="h-screen"></div>
    </>
  );
}
