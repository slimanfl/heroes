"use client";

import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import CardCategory3 from "@/components/CardCategory3";
import CardCategory4 from "@/components/CardCategory4";
import CardCategory5 from "@/components/CardCategory5";
import Heading from "@/shared/Heading";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";


export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: 1| 4 | 5;
  sliderStyle?: "style1" | "style2";
}

const IDOL: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV87pfEAVxlsSXozMg-9SV4QP-cpguaHcV-Fqt4VnSVDmICqqXZ8eaW3l94RrjT0dL30J-h5kvDTDLe31y7mfuwV2qJl9uBX1gNy9-sQDDYoCaz2QvYoX46XMFssp9jCtBTIvDVA7enQOxUPaLOziG5s1=w1455-h970-s-no?authuser=0',
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV87e4nj_AKKpLaR18RgrETA9IosrqeF89eN94JP_BOnwt_aPplvAbWY4_0zh_ERbxLG1N9_lZImg1E3n6TVlyD5kTeIAiIZGCsvD-f97367bqN07AO4DC5lNLpNA5sNEPMy9Jdbl6Ze0cKfGV-Wt2q5c=w1455-h970-s-no?authuser=0',
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV850a3N5wiZWMLF6POS9e_iga9IZZJ_bQSRCSWBJCHd52fzwin-U-FcRN6rYFMGvXBjIMe_BF3ANpMxj2dGjxguwRXoSmGd_wXo2PWi_fiWWFm5nIRxmHWv4rWYAW0fnBu-n5Loj8zaHcu7N2XmfqyxU=w1455-h970-s-no?authuser=0',
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV84ww0ThZV4XoQ6H3CHWs3BL6ClZMFZZfJZoxfYlRJCoZIXVKWYp1aRUeITTRfptS6BNzHacTXbzRVLlQjOUGuuyYTOeJ-11FVNnI8rqxi8OqBYsATyHCQECpTou9CbfJhB8VkVySyU8Wue_vw4dUpyd=w1455-h970-s-no?authuser=0',
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV84ltny1ahL_YGH6et4PUapJleyMcEu2ds9L2lu-v1E9OUQSBNb3-ipvFR5TLSqwCtGg_022SN_HBcoynK6YdtniT8qigLeYUrLNWR8TG6dEDAFp95lXGUT4f6anyrYnxNMvVl3DGMnAY7X2DfdEZzd6=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV85EBMf5iWhLUvcenqxMloR6kNe3NECCUSIDTmG48KUorBfcwzATsHnxnMpFe3w3xIdvmsiYcymlWA6JzV4cypCj9aov1y9QIbJNsrBZ51gXP1ZW_tdKFJKbg6YdjFkk-b4dITufX5dWQ4zyub49k3Q5=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV86V7v884ux7td791z5-9BZKKc4YqDQgWmwCgowQPjv8Fj4e3tUoytGLZowbUW8mpA76g7CY_hWnahYSs7W43sZ1vUdvgA3GKL_N9UpXZlEEaxH5Cx5KF2wBAYte62mMhSCBHetrPooZ8bkLSLWF1eTS=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "8",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV86wA41iev63UZvqsSQ-btUpGWJimlxotBc0YtMC_oC6M4MDSvcZHwRB-oHj6qDD2C0tAAUkry9fBjzMW9XQY2REU8HNmL-MtGZ2NQ1imMtVgjSHMGGeG_CFY7R7Pf2urJwWvpZTc6pelp0qocXC6P3j=w1384-h923-s-no-gm?authuser=0',
  },
];

const SectionSliderIdolLand: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Sections for discovery",
  subHeading = "Popular Sections to recommends for you",
  className = "",
  itemClassName = "",
  categories = IDOL,
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);

  const windowWidth = useWindowSize().width;
  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < categories?.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  const renderCard = (item: TaxonomyType) => {
    switch (categoryCardType) {
      case "card3":
        return <CardCategory3 taxonomy={item} />;
      case "card4":
        return <CardCategory4 taxonomy={item} />;
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory3 taxonomy={item} />;
    }
  };

  if (!numberOfItems) return null;

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <Heading desc={subHeading} isCenter={true}>
        {heading}
      </Heading>
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {categories.map((item, indx) => (
                  <motion.li
                    className={`relative inline-block px-2 xl:px-4 ${itemClassName}`}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * -100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * -100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    {renderCard(item)}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>

          {currentIndex ? (
            <PrevBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex - 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}

          {categories.length > currentIndex + numberOfItems ? (
            <NextBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex + 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -right-3 xl:-right-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionSliderIdolLand;
