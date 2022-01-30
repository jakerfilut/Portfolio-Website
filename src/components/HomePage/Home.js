import React from "react";
import HeroSection from "./HeroSection.js";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
