import React, { FC } from "react";
import heroEntry from "@/images/sections/heroIntry.jpg";
import heroCafe from "@/images/sections/5.jpg";

import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData | string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = 'https://lh3.googleusercontent.com/pw/ABLVV86L4RLzGg31ZSJ-OkwIr5HFugRws8EYzu3__rGb9dnVqaAsb5OXlEQ0wuIC8VDs-dyeqhAtrw8PFaHww2PV0gXV-PXGHb5nYxV3WpdRNuHexZfh7q6xa6kZWtCNrHuOalXf2v5w1aH41jHLSgidd3nqm9MX2SpJPdVuhAPLVc6Eh0Ms5fLeH4Vdk5EBII6hkAh8CxNYus5-002abIUq17r_42r-eER7sQHxRvu_U4rxQpaNhoiaUGuCiAVO9Gbb-6Rkor6T1nWWbLT_s-OZJ8aX5GZuEM_Zk8ylD2HL67v95LQTbH-5Y1wy_x7Nbv-ZgAPDO9eD4nrf187YmTwPGKUAmpGllU6eROXeLjigMP3X3-E_ocfOUuo5pgcBOkOpzHCvV7-0aIzAGsFbTd7QUzgtaB_EUpLHA61XtvBPUWWh0a9phC634e0a9O3GRZTnhqL2-IGZ-k5JBefQbxkvdH53q0yISc9_G1_k_VcU1jFWRaqp3pVJOYcPjWXLbvRwsbbD1Wf6gRXPsN6QsI6csizD9PB-ba_gQzCSQVdLXgTE5gTrfwLuwdjwCD49g8cpDC5g3ZXKiGpjTW8_g11ZhhrqVgqRIHcm9C3TiPSkDYIZc3Wg8IEBzCFi9iYPFUMUhyReMzam65Ik_jR3qc9pI-5OYX_2J97b9VITDinSwRMihjQcdbfJbnGf9wcjFhVnVl3YCFlbShZK99754ePLCjPWKnPaqGMCCjotIAcwoc-VNnZjHyX1OLqHwQ5TrGEODCUoWi6faq9F9D0TYZ0YfMFKPgGoVpLU-iFxVLm8z7W1V5vLqGNbckoOAmdBAz2Rj_yILj7XQTOLY3gJ1VIzIlcGz3-GO2xzhe9M61gcqtADN8tZogmkY2fVkq5vs5w1LdjRo59q3akzMjZLHU53P8lFwik=w1640-h923-s-no-gm?authuser=0',
  type = "type1",
}) => {
  let heroCafe ='https://lh3.googleusercontent.com/pw/ABLVV84WjuSCoLuS5_iSVHuLAYRmIhFBUHu_PCQXIxA9T6wBAJoPG1yU47EEs12TQzsgKTfKX5fUdU6DvSr0Y8dtlz8ZpbjYfdVExbGzJwmuDe9teu1Hl1O8GpXgYsRZz4mceKaHCWrNB7ppmkHQJknmR4mqH0dxAdFAu3vj2iJh14ExD4Er84QkXFoYewn_HimtC32k1O7FEB_GYpHtUOJACHtB2HV3IuldwMIf8KDnyf3a3O-TrI_xO_liOicJopkD6Z7i3XDIOtC-RBIL6RQjRcK8epRZSBY568KI6su47NDGkNM6b10UH4GqQ-X_A_b87WHwSVnE856ev9ZvO0tySpyGdBN4Fkr8i39a1yqS9NjtyeMCr0YVnq8UaMOrFvW4FeVw3nBiu1MdyypIRhu60PIaeBTSwXP8LcbItJoMARIqsqyhu40PJywNGutMARVLXmL_Px0wK55CwSzPvZfIeiUWqgiJbASJHueeVzJlERs3xsVwenWUgT_EMWlJb3RCMsiWOobooKtEMs_eZi1DJwFKCX0w3CM840GF130cgc0sc-FIyhZ_1p7CCxf-sQ3HMnckrK9R_ohIp4mzYXYwQpF_Nrk13BFP9VHrwUrPypSY_63pf8HuOaKvtAkAhojk2MOH1foRbLPF8rFLn0d_TnvwIWogHrSPtd-q_dj1dvljbbKc7ZAC0_FVtKdlwOL1U-sYlDEI6N6wN4bvP-LJy3Nuz4WhrZ9AjnDsOy9VI3hwggl6mAiFwu-HE4BLWYE2QoWwXf9OcBFCGFM4tfBQe0zT-rr1NdrmEplmP9pNqbXm8QG4SDzv_G5vuroa7s4-2-nbpUE08MZCfDTx8MaoFzkfCRD88BdU1ykXpebGAAMfTqVMSRtTR300_eQxwpJ5ulyTRSTtlw-uzLyb4wSdImUy3tY=w1280-h853-s-no-gm?authuser=0'
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
        <Image  src={rightImg} alt="" width={800} height={500} />
        <Image className="mt-10"  src={heroCafe} alt=""  width={800} height={500} />

      </div>
    </div>
  );
};

export default SectionOurFeatures;
