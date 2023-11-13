import Navbar from "../components/Navbar";
import Hamburger from "../components/hamburger";
import JsonCode from "../components/jsonCode";
import ImageCode from "../components/ImageCode";
import SqlCode from "../components/SqlCode";
import { useState } from "react";
export default function Chat() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuOptions, setMenuOptions] = useState({
    jsonCode: true,
    imageCode: false,
    sqlCode: false,
  });

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleMenuOptions = (option) => {
    setMenuOptions({
      jsonCode: option === "jsonCode",
      imageCode: option === "imageCode",
      sqlCode: option === "sqlCode",
    });
  };
  return (
    <div className="bg-[#EFF3F8] h-screen w-screen sm::flex">
      <div className="fixed  hidden sm:flex w-60 md:w-80 bg-slate-200 border-r-2 border-black h-screen">
        <div className="hidden sm:flex">
          <Navbar handleMenuOptions={handleMenuOptions} />
        </div>
      </div>
      <div className="flex sm:hidden">
        <Hamburger
          isMenuOpen={isMenuOpen}
          handleToggleMenu={handleToggleMenu}
          handleMenuOptions={handleMenuOptions}
        />
      </div>
      {!isMenuOpen && (
        <div className="absolute px-6 py-2 sm:py-6 sm:px-60 md:px-80">
          <div>
            {menuOptions.jsonCode && <JsonCode />}
            {menuOptions.imageCode && <ImageCode />}
            {menuOptions.sqlCode && <SqlCode />}
          </div>
        </div>
      )}
    </div>
  );
}
