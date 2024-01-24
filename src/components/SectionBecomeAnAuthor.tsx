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
        HeroStation is the largest entertainment complex in Syria          
         </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
       
        It is considered the first entertainment complex that caters to the entertainment needs of young people, which was opened in history 9/29/2020

        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400">
        The opening of the complex began with three charming sections, distinguished by their luxury and elegance:
          Bowling section,
          Ice hockey section,
          Department of football human,
          The cafe section,
          The number of visitors to the complex on weekdays and on holiday reached about 1,000
          At the end of the week, the number of visitors reached 4,000 
        </span>
    
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
