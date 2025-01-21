import { useContext } from "react";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import MobileSideBar from "@/components/MobileSideBar";
import Navbar from "@/components/Navbar";
import { MobileToggleContext } from "@/context/MobileToggleContext";
import Footer from "@/components/Footer";
import ScrollUpArrow from "@/components/ScrollUpArrow";

export default function Home() {
  const { toggle } = useContext(MobileToggleContext);

  return (
    <div>
      <Navbar />
      { toggle && <MobileSideBar /> }
      <div className="flex flex-col justify-center items-center w-full h-full">
        <HeroSection />
        <AboutUs />
        <Footer />
      </div>
      <ScrollUpArrow />
    </div>
  );
}
