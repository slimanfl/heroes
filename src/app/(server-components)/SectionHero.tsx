import React, { FC } from "react";
import imagePng from "@/images/hero-img.jpeg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10  xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium  text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Heros' Station
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            dignissimos assumenda dolor libero eos ab harum dicta rem
            reprehenderit.
          </span>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-grow ">
          <Image
            className="w-full rounded-2xl dark:shadow-none shadow-lg"
            src={imagePng}
            alt="hero"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
