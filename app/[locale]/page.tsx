import GetStarted from "@/components/base/GetStarted";
import IntroText from "@/components/base/IntroText";
import PersonText from "@/components/base/PersonText";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="md:mt-24 mt-[70px]">
        <HeroSection />
        <IntroText />
        <GetStarted />
        <PersonText />
      </main>
      <div className="h-screen"></div>
    </>
  );
}
