import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionHero from "./(server-components)/SectionHero";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import imageHero from "@/images/hero-2.jpeg";
import imageKarting from "@/images/karting-3.jpg";
// import imageClan from "@/images/clan.jpg";
import imageEvent from "@/images/event.jpg";
import imageSpace from "@/images/space.jpg";
import imageDes from "@/images/disney.jpg";
import imageIdol from "@/images/idol.jpg";
import imageBliards from "@/images/bliards.jpg";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/heroes-section",
    name: "Hero's & Coffe",
    taxonomy: "category",
    count: 0,
    thumbnail: imageHero,
  },
  {
    id: "2",
    href: "/Karting-section",
    name: "Karting",
    taxonomy: "category",
    count: 0,
    thumbnail: imageKarting,
  },
  {
    id: "3",
    href: "/event-section",
    name: "Event",
    taxonomy: "category",
    count: 0,
    thumbnail: imageEvent,
  },
  {
    id: "4",
    href: "/disney-world",
    name: "Disney Resturant",
    taxonomy: "category",
    count: 0,
    thumbnail: imageDes,
  },
  {
    id: "5",
    href: "/spaceplanet-section",
    name: "Space Planet",
    taxonomy: "category",
    count: 0,
    thumbnail: imageSpace,
  },
  {
    id: "6",
    href: "/idolland-section",
    name: "Idol Land",
    taxonomy: "category",
    count: 0,
    thumbnail: imageIdol,
  },
  {
    id: "7",
    href: "/bliards-section",
    name: "Bliards & Coffe",
    taxonomy: "category",
    count: 0,
    thumbnail: imageBliards,
  },
];
const DEMO_CATS1: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Meals 1",
    taxonomy: "category",
    count: 0,
    thumbnail: imageHero,
  },
  {
    id: "2",
    href: "/Karting-section",
    name: "Karting",
    taxonomy: "category",
    count: 0,
    thumbnail: imageKarting,
  },
  {
    id: "3",
    href: "/event-section",
    name: "Event",
    taxonomy: "category",
    count: 0,
    thumbnail: imageEvent,
  },
  {
    id: "4",
    href: "/disney-world",
    name: "Disney Resturant",
    taxonomy: "category",
    count: 0,
    thumbnail: imageDes,
  },
  {
    id: "5",
    href: "/spaceplanet-section",
    name: "Space Planet",
    taxonomy: "category",
    count: 0,
    thumbnail: imageSpace,
  },
  {
    id: "6",
    href: "/idolland-section",
    name: "Idol Land",
    taxonomy: "category",
    count: 0,
    thumbnail: imageIdol,
  },
  {
    id: "7",
    href: "/bliards-section",
    name: "Bliards & Coffe",
    taxonomy: "category",
    count: 0,
    thumbnail: imageBliards,
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10" />
        <SectionSliderNewCategories
          className="mt-[-190px]"
          itemPerRow={4}
          categories={DEMO_CATS}
        />
      </div>

      <div className="container relative space-y-24 mb-24  lg:space-y-28 lg:mb-28">
        <SectionOurFeatures />
        {/* <SectionGridFeaturePlaces cardType="card2" /> */}
        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={4}
          categories={DEMO_CATS}
        />
      </div>
    </main>
  );
}

export default PageHome;
