"use client";

import React, { FC } from "react";
import Logo from "@/shared/Logo";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import MenuBar from "@/shared/MenuBar";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import SearchDropdown from "./SearchDropdown";
import Link from "next/link";

interface Header3Props {
  className?: string;
}

const Header: FC<Header3Props> = ({ className = "" }) => {
  return (
    <>
      <header className="">
        <div className="relative px-4 lg:container h-24 flex">
          <div className="flex-1 flex justify-between">
            <div className="relative z-10 flex flex-1 items-center ">
              <Logo />
            </div>
            <div className="flex relative z-10 flex-1 justify-end text-neutral-700 dark:text-neutral-100">
              <div className=" flex space-x-1">
                <Link
                  href="/booking"
                  className="self-center text-opacity-90 group px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  Booking Now
                </Link>
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
