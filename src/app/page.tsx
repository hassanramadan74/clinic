import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ReviewSlider from "@/components/ReviewSlider";
import { shortHero } from "@/lib/heroData";
import AnimatedHeader from "@/components/AnimatedHeader";
import LocationPin from "@/components/LocationPin";
import SpecificService from "@/components/SmallServices";
import SmallServices from "@/components/SmallServices";

export default function Home() {
  return (
    <>
      <Hero details={shortHero} />
      <SmallServices limit={6} />
      <ReviewSlider />
      <LocationPin />
    </>
  );
}
