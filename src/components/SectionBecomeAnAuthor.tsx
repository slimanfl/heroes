import React, { FC } from "react";
import rightImgDemo from "@/images/sections/carting.jpg";
import Logo from "@/shared/Logo";
import Image from "next/image";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
        WELCOME TO OUR EXCITING WORLD WHER YOU CAN MAKE FUN AND INTERSTING IN OUR SECTIONS
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
       
        we offer a wide range of exhilarating games and entertainment options for all ages.
         Whether you're a hardcore gamer or just looking for a fun day out with family and friends, 
         we have something for everyone.

        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
        Browse our website to discover more about our games, pricing, and special offers. 
        Feel free to contact us for any inquiries or to book your next gaming adventure.  
        </span>
    
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
