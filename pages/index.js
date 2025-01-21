import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import MobileSideBar from "@/components/MobileSideBar";
import Navbar from "@/components/Navbar";
import { MobileToggleContext } from "@/context/MobileToggleContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { toggle } = useContext(MobileToggleContext);

  useEffect(() => {
    const body = document.querySelector('body');
    const handleTouchMove = (event) => {
      if (toggle) {
        event.preventDefault();
      }
    };

    if (toggle) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      window.removeEventListener('touchmove', handleTouchMove);
    }

    return () => {
      // Cleanup to ensure no memory leaks
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      window.removeEventListener('touchmove', handleTouchMove);
    };
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
