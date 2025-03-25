import Hero from "@/components/Hero";
import React from "react";
import Certificates from "@/components/certificates";
import StatsCounter from "@/components/Counter";
import ReviewSlider from "@/components/ReviewSlider";
import { longHero } from "@/lib/heroData";
import SpecificService from "@/components/SmallServices";

function About() {
  return (
    <>
      <Hero details={longHero} showMoreDetails={false} />
      <StatsCounter />
      <Certificates />
    </>
  );
}

export default About;
