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
    </main>
  );
};

export default page;
