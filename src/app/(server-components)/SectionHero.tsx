import React, { FC } from "react";
import imagePng from "@/images/sections/3.jpg";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";


export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div  className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10  xl:pr-14 lg:mr-10 xl:mr-0" style ={{ marginTop: '180px'}}>
          <h2 className="font-medium  text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Heros' Station
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
          WELCOME TO OUR EXCITING WORLD WHER YOU CAN MAKE FUN AND INTERSTING IN OUR SECTIONS
          </span>
          <ButtonPrimary href="/listing-stay-map" sizeClass="px-5 py-4 sm:px-7">
            Start your search
          </ButtonPrimary>
        </div>
        <div className="flex-grow ">
        <SectionSliderNewCategories
              heading=""
              subHeading=""
          categoryCardType="card5"
          itemPerRow={1}
        />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
