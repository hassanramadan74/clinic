import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import CircularSocialButtons from "@/components/SocialButtons";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dr. Mohamed Elkholy - Plastic Surgery & Dermatology Clinic | د. محمد الخولي",
  description:
    "Expert plastic surgery and dermatology services in Cairo, Egypt. Dr. Mohamed Elkholy's clinic offers premium aesthetic treatments and transformative results.",
  // icons: {
  //   icon: "icon.ico",
  // },
  metadataBase: new URL("https://www.dr-mohamed-elkholy.com"),
  alternates: {
    canonical: "/",
    languages: {
      ar: "/ar",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://www.dr-mohamed-elkholy.com",
    title: "Dr. Mohamed Elkholy - Plastic Surgery & Dermatology Clinic",
    description:
      "Expert plastic surgery and dermatology services in Cairo, Egypt. Dr. Mohamed Elkholy's clinic offers premium aesthetic treatments and transformative results.",
    images: [
      {
        url: "/images/profile.PNG",
        width: 800,
        height: 600,
        alt: "Dr. Mohamed Elkholy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mohamed Elkholy - Plastic Surgery & Dermatology",
    description:
      "Expert plastic surgery and dermatology services in Cairo, Egypt",
    images: ["/images/profile.PNG"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <div className="overflow-x-hidden">
          <Providers>
            <Navbar />
            <CircularSocialButtons />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
