import React from "react";
import { DEMO_POSTS } from "@/data/posts";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHero from "./(server-components)/SectionHero";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionMagazine5 from "@/components/SectionMagazine5";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import imageHero from "@/images/hero-2.jpeg";
import imageKarting from "@/images/karting-3.jpg";
import imageEvent from "@/images/event.jpg";
import imageSpace from "@/images/space.jpg";
import imageDes from "@/images/disney.jpg";
import imageIdol from "@/images/idol.jpg";
import imageBliards from "@/images/bliards.jpg";
import { TaxonomyType } from "@/data/types";


const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/heroes-section",
    name: "Hero's & Coffe",
    taxonomy: "category",
    thumbnail: imageHero,
  },
  {
    id: "2",
    href: "/Karting-section",
    name: "Karting",
    taxonomy: "category",
    thumbnail: imageKarting,
  },
  {
    id: "3",
    href: "/event-section",
    name: "Event",
    taxonomy: "category",
    thumbnail: imageEvent,
  },
  {
    id: "4",
    href: "/disney-world",
    name: "Disney Resturant",
    taxonomy: "category",
    thumbnail: imageDes,
  },
  {
    id: "5",
    href: "/spaceplanet-section",
    name: "Space Planet",
    taxonomy: "category",
    thumbnail: imageSpace,
  },
  {
    id: "6",
    href: "/idolland-section",
    name: "Idol Land",
    taxonomy: "category",
    thumbnail: imageIdol,
  },
  {
    id: "7",
    href: "/bliards-section",
    name: "Bliards & Coffe",
    taxonomy: "category",
    thumbnail: imageBliards,
  },
];

const POSTS = DEMO_POSTS;

const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />
      
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10" />
        {/* <div className=" relative">
        <SectionSliderNewCategories
              heading=""
              subHeading=""
          categoryCardType="card5"
          itemPerRow={1}
        />
        <div className="absolute mb-24 left-0 w-full h-full " style={{ top: '77%' }}>

          <SectionSliderNewCategories2
            categoryCardType="card5"
            itemPerRow={4}
          />
        </div>
        </div> */}

        <div className="relative py-16 mt-10">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>
        <div className="relative py-16 mt-10">
        <BackgroundSection />
        <SectionOurFeatures />
        </div>
      </div>
      
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">

      <SectionGridFeaturePlaces cardType="card2" />
      <SectionMagazine5 posts={MAGAZINE1_POSTS} />

     </div>

      <div className="container relative space-y-24 mb-24  lg:space-y-28 lg:mb-28">
        
        {/* <SectionGridFeaturePlaces cardType="card2" /> */}
        <SectionSliderNewCategories
          heading="Explore more sections"
          subHeading="Explore more than 10 sections"
          categoryCardType="card5"
          itemPerRow={4}
          categories={DEMO_CATS}
        />
 
      </div>
   
    </main>
  );
}

export default PageHome;
