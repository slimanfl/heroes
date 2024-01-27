import React, { FC } from "react";
import { PostDataType } from "@/data/types";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import SocialsShare from "@/shared/SocialsShare";
import { DEMO_POSTS } from "@/data/posts";
import Link from "next/link";
import Image from "next/image";
import HeroStation3 from "@/images/sections/HeroStation3.png";


export interface Card12Props {
  className?: string;
  post?: PostDataType;
}

const Card12: FC<Card12Props> = ({
  className = "h-full",
  post = DEMO_POSTS[0],
}) => {
  const { title, href, featuredImage, desc, postType } = post;

  return (
    <div className={`nc-Card12 group relative flex flex-col ${className}`}>
  
        <Image
          src={HeroStation3}
          alt={title}
          sizes="(max-width: 768px) 100vw, 400px"
          width={500}
          height={300}
        />
        <span>
          <PostTypeFeaturedIcon
            className="absolute bottom-2 left-2"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
     


      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link href={href} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2"> {desc}</span>
        </span>
      </div>
    </div>
  );
};

export default Card12;
