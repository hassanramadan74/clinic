import Hero from "@/components/Hero";
import SideSlider from "@/components/ReviewSlider";
import Counter from "@/components/Counter";
import React from "react";
import Certificates from "@/components/certificates";
import StatsCounter from "@/components/Counter";
import ReviewSlider from "@/components/ReviewSlider";

function About() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <Certificates />
      <ReviewSlider />
    </>
  );
}

export default About;
