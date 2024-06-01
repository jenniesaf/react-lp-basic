import "./header.css";
import HeaderLinks from "./headerLinks";
import { useState } from "react";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="container mx-auto relative">
        <div className="w-full flex xl:justify-between absolute items-center">
          <div className="logo mx-auto xl:mx-0 mt-5">
            <img
              src="/assets/logo-bright.png"
              className="h-[64px] w-full"
              alt=""
            />
          </div>
          <div
            className={`hamburger mt-5 top-0 xl:hidden flex flex-col h-[17px] cursor-pointer absolute justify-between mb-5 z-[1] ${
              isToggled ? "active" : ""
            }`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`mobile-menu-wrapper -ml-[18px] top-0 hidden bg-black w-4/5 left-0 ps-[18px] absolute h-[300px] ${
              isToggled ? "active" : ""
            }`}
          >
            <div className="hamburger-menu flex flex-col cursor-pointer absolute mt-[60px] gap-4">
              <HeaderLinks />
            </div>
          </div>
          <div className="hidden xl:flex desktop-menu xl:text-white xl:gap-5 xl:mt-5 uppercase">
            <HeaderLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
