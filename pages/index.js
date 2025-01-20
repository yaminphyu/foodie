import MobileSideBar from "@/components/MobileSideBar";
import Navbar from "@/components/Navbar";
import { MobileToggleContext } from "@/context/MobileToggleContext";
import { useContext } from "react";

export default function Home() {
  const { toggle } = useContext(MobileToggleContext);
  return (
    <div className={`${ toggle ? 'overflow-hidden' : ''}`}>
      <Navbar />
      {
        toggle && <MobileSideBar />
      }
    </div>
  );
}
