import { useContext, useState } from "react";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import MobileSideBar from "@/components/MobileSideBar";
import Navbar from "@/components/Navbar";
import { MobileToggleContext } from "@/context/MobileToggleContext";
import Footer from "@/components/Footer";
import ScrollUpArrow from "@/components/ScrollUpArrow";
import WhyChooseMe from "@/components/WhyChooseMe";
import Stats from "@/components/Stats";

export default function Home() {
  const { toggle, setToggle } = useContext(MobileToggleContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      // When closing the sidebar
      closeSidebar();
    } else {
      // When opening the sidebar
      openSidebar();
    }
  };

  const openSidebar = () => {
    const scrollPosition = window.pageYOffset;

      // Disable body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      // Start animation and set toggle after starting
      setIsAnimating(true);  // Set animation before toggle
      setToggle(true);
  }

  const closeSidebar = () => {
    // When closing the sidebar
    const scrollPosition = parseInt(document.body.style.top, 10) * -1;

    // Trigger animation
    setIsAnimating(false); // Set animation state

    // Wait for animation to complete before restoring scroll
    setTimeout(() => {
      // Restore body scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      window.scrollTo(0, scrollPosition); // Scroll back to the original position

      setToggle(false); // Complete toggle after animation
    }, 500); // Match animation duration
  };

  return (
    <div>
      <Navbar
        handleToggle={handleToggle}
        toggle={toggle}
      />
      {
        toggle &&
        <MobileSideBar
          handleToggle={handleToggle}
          isAnimating={isAnimating}
          closeSidebar={closeSidebar}
        />
      }
      <div className="flex flex-col justify-center items-center w-full h-full">
        <HeroSection />
        <AboutUs />
        <WhyChooseMe />
        <Stats />
        <Footer />
      </div>
      <ScrollUpArrow />
    </div>
  );
}
