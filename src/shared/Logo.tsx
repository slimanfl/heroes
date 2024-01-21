import React from "react";

import Link from "next/link";
import Image from "next/image";
import imgLogo from "@/images/logo.png";
import imgLogoLight from "@/images/logo-2.png";
export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24" }) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {/* <LogoSvgLight />
      <LogoSvg />
      */}
      <Image
        className="hidden dark:block"
        height={60}
        src={imgLogo}
        alt="Logo"
      />
      <Image
        className="block dark:hidden"
        src={imgLogoLight}
        height={60}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
