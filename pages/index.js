import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import MobileSideBar from "@/components/MobileSideBar";
import Navbar from "@/components/Navbar";
import { MobileToggleContext } from "@/context/MobileToggleContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { toggle } = useContext(MobileToggleContext);

  useEffect (() => {
    const body = document.querySelector('body');
    if (toggle) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [toggle]);

  return (
    <div>
      <Navbar />
      { toggle && <MobileSideBar /> }
      <div className="flex flex-col justify-center items-center w-full h-full">
        <HeroSection />
        <AboutUs />
      </div>
    </div>
  );
}
