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

import { TaxonomyType } from "@/data/types";


const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/heroes-section",
    name: "Hero's & Coffe",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV85B35MFyJKjrVez1dyowfMimW_NQUfVprJzZ7aiD5R2cnpiNU4kdwMW2bxNJCVH9OVoNcKh-b7BrYm6GNqG9jZEBJurR-8MS1BJrCskrJVUWag3DW2IlxjTRSvydStG1tKpcPCmE1_f5wNfe92cPyQC=w1280-h853-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/Karting-section",
    name: "Karting",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV87HBOR1S6TPzeX2WfKLMJ1ZgYLdc3kPR7bK8-WQPh3wqf1zhxn1lf2USgs1o8dhtZQnADRw3_dGvHivxktGQ3KVIJR4yvQCe6qZ6sX3wbey479eLaH7wNK5wocsRvSV1nI_jJXVw-6aa-YZuhUAWHvb=w944-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/event-section",
    name: "Event",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV85BMOr0eaNmUS_gMxCAgikVdhr_J0fDHmzx6Z3Ccs18DTVu2QFfFlhSUByWMyJ-95QAMITBkRhwoCOns3zlridsnmyRT8DTVyymHYHzqpEhEv9dqoD3wdYnLIjFoTMtET-xGuL58uWuDdK5MbaK1Lfv=w615-h923-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/disney-world",
    name: "Disney Resturant",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV87sIQpi6XLXoVgYrFcQ4zEDBeruowy288V0vqCdslrDEUWVSHiiHn_7uO8e7yxwlPMxfpzonHEnw7qtONPWux1w4jZ2o4P9CIwA48Cou7aYidEwVwC3zYTYQ5jLzOJWzK17EO0PIjvRHCoIS44ZgA09=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "5",
    href: "/spaceplanet-section",
    name: "Space Planet",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV87YfPrAEu3yxGH85PG2wua5aqIVsUfoVtPdHOBbh7BSm1l9D_xq4kPbsLFzJYaV2cYOLdzZBGW16gi0mLcPT8ylbuQnPnosDxKhzt7liBFfseSNcdCDDklTHPA2FhDxX0A6D9qlD3sd5Gxycp_W5404=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "6",
    href: "/idolland-section",
    name: "Idol Land",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV84Uu_zsQKzaAC9zunoX4sBWtnWJhSC8reNPR6EdnnGMNpfE6cXI_EK-4Dne0xgowAU1GgXZgp1MiEWZNhPKQiT1e2p5YOXih1jFo0TXocalegvqenb9Fok2zBykF1W32aFwjaq2gYHbRVJTVHFzDAzV=w1404-h923-s-no-gm?authuser=0',
  },
  {
    id: "7",
    href: "/bliards-section",
    name: "Bliards & Coffe",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV84sBJBgSttqb_yaP1_J9MH5RO938RbjvhBHYXhNjSJnszIcTJS3r9R50fZf8uBKlw6go4tnXbEJSKN89ShMfi47jkCqCA1oye6RcZxIvWnEzB8f8njBLWF-lSNCTgI7uHCv3l7GI5b5qfp18b75bdHw=w615-h923-s-no-gm?authuser=0',
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
