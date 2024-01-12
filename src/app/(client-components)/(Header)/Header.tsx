"use client";

import React, { FC } from "react";
import Logo from "@/shared/Logo";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import SearchDropdown from "./SearchDropdown";
import imgLogo from "@/images/logo.png";
interface Header3Props {
  className?: string;
}

const Header: FC<Header3Props> = ({ className = "" }) => {
  return (
    <>
      <header className="border-b border-b-gray-200 shadow-md">
        <div className="relative px-4 lg:container h-[88px] flex">
          <div className="flex-1 flex justify-between">
            {/* Logo (lg+) */}
            <div className="relative z-10 flex flex-1 items-center">
              <Logo img={imgLogo} />
            </div>

            {/* NAV */}
            <div className="flex relative z-10 flex-1 justify-end text-neutral-700 dark:text-neutral-100">
              <div className=" flex space-x-1">
                <SwitchDarkMode />
                <SearchDropdown className="flex items-center" />
                <NotifyDropdown />
                <AvatarDropdown />
                <MenuBar />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
