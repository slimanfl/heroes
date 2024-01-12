import React from "react";
import logoImg from "@/images/logo.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo flex items-center justify-start text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {img ? (
        <Image className={`block max-h-full`} src={img} alt="Logo" />
      ) : (
        "Logo Here"
      )}
    </Link>
  );
};

export default Logo;
