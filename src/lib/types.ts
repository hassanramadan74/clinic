// Define types for the Hero component
export interface HeroDetails {
  name: string;
  title: string;
  image: string;
  qualifications: string[];
}

export interface HeroProps {
  details: HeroDetails;
  showMoreDetails?: boolean;
}

// Define types for the Services component
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}
