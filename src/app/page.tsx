import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionHero from "./(server-components)/SectionHero";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import imageHero from "@/images/hero-2.jpeg";
import imageKarting from "@/images/karting-3.jpg";
import imageClan from "@/images/clan.jpg";
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
  {
    id: "8",
    href: "/clans-section",
    name: "Clans",
    taxonomy: "category",
    count: 0,
    thumbnail: imageClan,
  },
];
const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];
function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />
      </div>
      <SectionSliderNewCategories
        className="xl:mt-[-16rem] py-24 px-8 xl:px-32"
        categories={DEMO_CATS}
      />

      <div className="container relative space-y-24 mb-24  lg:space-y-28 lg:mb-28">
        <SectionOurFeatures />
        <SectionGridFeaturePlaces cardType="card2" />
      </div>
    </main>
  );
}

export default PageHome;
