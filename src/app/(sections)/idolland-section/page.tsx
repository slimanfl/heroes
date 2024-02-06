"use client";

import React, { FC } from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionIdol from "../../(server-components)/SectionIdol";


const idol: FC = () => {
  return (
    <main className="nc-PageHome relative overflow-hidden">
    {/* GLASSMOPHIN */}
    <BgGlassmorphism />
    
    <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
      {/* SECTION HERO */}
      <SectionIdol className="pt-10" />

    </div>
    
 
 
  </main>
  );
};

export default idol;
