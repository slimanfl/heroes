import React, { FC } from "react";
import rightImgDemo from "@/images/sections/HeroStation2.png";
import Logo from "@/shared/Logo";
import Image from "next/image";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = 'https://lh3.googleusercontent.com/pw/ABLVV8666eHPJvddwzvSX0hxVDhz_8UX4RyII9bBiE4P4pHtJHYEsz7WX2dpreBpkF1ENJarnUWPFAeulvgdHG9rTpIPEl2FpIpnGbkxQ6jBD8fzsH8Anh0H3w9v5NzL5KNQHwJThSl0gey1s5i11PbMY9zzs4rjcIoUYpephzQsZFk8AHP29ee9ZZ0rF6cRcFIOJ0GklbtpEGr-6OIrs8GAKivLPC7joAosdkbid4LFxfF6E1A2bmXuZt9CA9E7aNNK6hZ6ns7QjOraQ39rAoudgox8qSHbhiNucO2MsBJ0IsB81I1DdVI0VrGdw0itWKY4vdjw42tEuWvmHQMuS6UzOQGhCo-svU_qQ2rVvUOh8lwQ5mdisWjc6wvws7qRTrITYpZI0GTzslp0Y-LEdTKISXThZANdxa9mdGvOEy-UiL_JaK8JOpwatfcOellf20v5GdSbvfnSGQBTASd4bowA-YdThztrpkyiL99C7jsD1qPQIkDerF_uN7WP5gfBg2lLW_y1hbjr3QelRFUq-YbIQGmi8l5kuaA1zzATKSkFNYNK409dNK68Se4agmpWm197kLkZxD6_W2L3YbvX_1IBIOAKFplbwTTe-7JVw3F6ar5otjRcPYxfFGb5sVyGEqSWGD-mGmnQrV-MGQVY0dr5AOZ3bhUkJjZRQEz2hopjkTUZLJK6pCbFSmMY_NRQv_uDIELT5xDELfaRdrWEBaZmDATtMwjeH3xVrjsPV0t_IIim36k_2MH1uX4pzjgo31oqF7YtOVV5x6j0TGqfdnrN8uUh90BOV9gaxeg-UTW3Ug6VTkT2GAQS4RBvC_QCohgB_Ze-wUnPmyg4iScohqlRSDtOw1jpsdpphrkt8QDsTx3ySDGKY_n5AmTiEWrVc5BmWIa4DIgqRg2aStsaqj3g8laklxI=w923-h923-s-no-gm?authuser=0',
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
        <Image alt="" src={rightImg} width={800} height={500} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
