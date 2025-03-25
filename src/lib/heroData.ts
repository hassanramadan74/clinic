import { HeroDetails } from "./types";

// Short hero data for the home page
export const shortHero: HeroDetails = {
  name: "Dr. Mohamed Elkholy",
  title: "Clinic & Beauty Consultant",
  image: "/images/profile.PNG",
  qualifications: [
    "Consultant in Dermatology, Cosmetic, and Laser",
    "Master's and Doctorate in Dermatology and Laser Diseases",
  ],
};

// Long hero data for the about page with more qualifications
export const longHero: HeroDetails = {
  name: "Dr. Mohamed Elkholy",
  title: "Clinic & Beauty Consultant",
  image: "/images/profile.PNG",
  qualifications: [
    "Consultant in Dermatology, Cosmetic, and Laser",
    "Master's and Doctorate in Dermatology and Laser Diseases",
    "Certified Trainer",
    "Master Injector",
    "Specialized in Advanced Aesthetic Procedures",
  ],
};
