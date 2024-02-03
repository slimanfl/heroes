import React, { FC } from "react";
import { PostDataType } from "@/data/types";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon";
import SocialsShare from "@/shared/SocialsShare";
import { DEMO_POSTS } from "@/data/posts";
import Link from "next/link";
import Image from "next/image";


export interface Card12Props {
  className?: string;
  post?: PostDataType;
}

const Card12: FC<Card12Props> = ({
  className = "h-full",
  post = DEMO_POSTS[0],
}) => {
  const { title, href, featuredImage, desc, postType } = post;
   let HeroStation3='https://lh3.googleusercontent.com/pw/ABLVV86K7kFK0KXUaL1ZqwNP7QJNzXfTdaoNrNPU8P0oXuOoc-q0CFWYvVf2XRqFrttsPgNy0jp4SnvIDeG772M-CFcqNL3D5q0ZIhhdgNnq6QUULLaNNrExODN74evApZWHSRL9A2mMrh5xgHTkvqfeQUle0SluEk6U8AP2cdo51nXV3N5YgJyeKcG85d-lAjosPMhHCoRY4AFhZbnqW9KSrlGGLvi0epIa6MZ2A2vEVwrmWbg5YXBYLlEA12PG4hzq6VVpQ81mRNcBlJ_lW4jAVCY0LaIHFtriiIqVNUSGsC8GTesDn9QkdEbcJwpZtwKS6nfWbUPF0AsbLLDu-3yMRsQvS9GTDrBM9wHQqMI4FzXYw22R3EReSAFwLIkHOm0OGLW9pqrHKK4d14eI3feoj9MKePbRtXseuC1eXdgzNF5ZiZdZTWMlg1AhE40XY8kOG9K66B3yKriiAvtp8EpIgloZz18IoanVC-ZN_KlsMZBz4NlIUKQqaX_mnZvUduvH6GPQnyh2K1laHLshBxo7RdGDRAqTphx1EfGungG3tn2JvZ_a8rWmxYwblZAIvyL9PPeaS9k8HS3e7Hedc5wYQy9fIsbbQOoVg-DfhvYj_9UtZe9euCTxDamgvaHGh1p5yXBIw0_cTOsHoeW3gvZ-wcGNLZHbBWaFQKxuYxVoUgwDe2Sfx6xl6GL45y738qMo1oB-vtEupaIf3UMyFrE-ccZ6K50oJ6dCW3nLFtvj4BL5XzOeT_pJiK5Qu1gX6H5I2PIa7yc7TmJagkQxS0DbIXpioqZ0MV_LlQR0mOEwcMVvT2oQ3VTDc2tV-DonqH7Uh7GdAilzdLgvLqOBx3tzL-VrB4YlmpZvJ1a80u23VM7Os4Q5TnKmrKeU7-H7VbGZT3K3NGtnyu96vHXDBwSK77XJqVw=w923-h923-s-no-gm?authuser=0'
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
