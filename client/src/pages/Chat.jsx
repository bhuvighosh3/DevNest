import Navbar from "../components/Navbar";
import Hamburger from "../components/hamburger";
import { useState } from "react";
export default function Chat() {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#EFF3F8] h-screen w-screen sm::flex">
      <div className="fixed  hidden sm:flex w-60 md:w-80 bg-slate-200 border-r-2 border-black h-screen">
        <div className="hidden sm:flex">
          <Navbar />
        </div>
        
      </div>
      <div className="flex sm:hidden">
          <Hamburger isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
        </div>
      {!isMenuOpen && <div className="absolute px-6 py-2 sm:py-6 sm:px-60 md:px-80">hii</div>}
    </div>
  );
}
