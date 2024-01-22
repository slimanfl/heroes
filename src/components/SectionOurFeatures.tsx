import React, { FC } from "react";
import heroEntry from "@/images/sections/3.jpg";
import heroCafe from "@/images/sections/5.jpg";

import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = heroEntry,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
   
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 mr-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
       
        <h2 className="font-semibold text-4xl mt-5">OUR FEATURES</h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <span className="block text-xl font-semibold">
            Extensive Game Selection
             </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
             Our gaming center boasts a wide range of games and activities to cater to all interests and age groups.
             From classic arcade games to the latest virtual reality experiences,
             we have something for everyone.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-xl font-semibold">
            State-of-the-Art Equipment
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
             We pride ourselves on providing the latest gaming technology and equipment. Our high-quality gaming consoles,
           immersive virtual reality setups, and well-maintained game machines ensure a seamless and enjoyable gaming experience.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-xl font-semibold">
            Dedicated Party Rooms
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Celebrate special occasions with us! Our dedicated party rooms provide the perfect setting for birthday parties or group events. Enjoy a private space, personalized decorations, 
            and access to a variety of games and activities for an unforgettable celebration.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-xl font-semibold">
            Family-Friendly Environmen
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
             Our gaming center is designed to be a family-friendly destination. 
            We offer games and activities suitable for all ages, ensuring that everyone, from kids to adults, can have a fantastic time together.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-xl font-semibold">
            Skilled Staff and Assistance
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
             Our friendly and knowledgeable staff members are always available to assist you. Whether you need help choosing a game, setting up your equipment, or understanding game rules,
             our team is here to ensure you have a smooth and enjoyable gaming experience.
            </span>
          </li>
    
        </ul>
      </div>
      <div className="flex-grow ">
        <Image  src={rightImg} alt="" />
        <Image className="mt-10"  src={heroCafe} alt="" />

      </div>
    </div>
  );
};

export default SectionOurFeatures;
