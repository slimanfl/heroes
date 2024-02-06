import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Image from "next/image";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionAboutIdolLand: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = 'https://lh3.googleusercontent.com/pw/ABLVV874xsN2uI25rEJSt_mZyv8NT2IeE9oxp_16k3p3wFAxwwU7AyRT1e-Lk70ZqM1frEOUShP0C0Tj52O654gORtEBgAgRZX8nERcqO8WLZ2J1uVLgWf-taQQaDSY4kWKpJIpPP5Cu679pnI3jL7juhpsV=w923-h923-s-no-gm?authuser=0',
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-20" />
        <h2 className="font-semibold text-3xl sm:text-4xl mt-6 sm:mt-11">
        IdolLand is the largest entertainment complex in Syria          
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
        <Image alt="" src={rightImg} width={800} height={500} />
      </div>
    </div>
  );
};

export default SectionAboutIdolLand;
