"use client";

import Link from "next/link";
import {
  Home,
  CircleUser,
  Syringe,
  NotebookTabs,
  BookCheck,
  Laugh,
} from "lucide-react";

import { socialMediaLinks } from "@/lib/social_media";
import { theme } from "@/lib/theme";

import Facebook01Icon from "./ui/facebook-01-stroke-rounded";
import InstagramIcon from "./ui/instagram-stroke-rounded";
import TiktokIcon from "./ui/tiktok-stroke-rounded";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: theme.colors.primary }} className="px-2">
      <div className="mx-auto grid grid-cols-1 gap-8 px-1 py-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <h3
            className="mb-2 text-lg font-bold"
            style={{ color: theme.colors.light }}
          >
            Quick Links
          </h3>
          <ul className="space-y-1">
            {[
              { name: "Home", icon: Home, href: "/" },
              { name: "About Us", icon: CircleUser, href: "/about" },
              { name: "Services", icon: Syringe, href: "/services" },
              { name: "Blogs", icon: BookCheck, href: "/blog" },
              { name: "Transformation", icon: Laugh, href: "/transformation" },
              { name: "Reservation", icon: NotebookTabs, href: "/reservation" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group flex items-center space-x-2 transition-colors duration-200"
                  style={{ color: theme.colors.light }}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="relative overflow-hidden">
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100"
                      style={{ backgroundColor: theme.colors.lightMuted }}
                    ></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3
            className="mb-2 text-lg font-bold"
            style={{ color: theme.colors.light }}
          >
            About Us
          </h3>
          <p className="text-xs" style={{ color: theme.colors.light }}>
            With years of experience in advanced cosmetic and reconstructive
            surgery, Dr. El Kholy is dedicated to delivering natural results and
            restoring confidence. From body contouring to facial rejuvenation,
            each treatment is tailored with precision and care.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3
            className="mb-2 text-lg font-bold"
            style={{ color: theme.colors.light }}
          >
            Contact Us
          </h3>
          <p className="mb-1 text-xs" style={{ color: theme.colors.light }}>
            9 Elsomal st. - Elkorba Masr-Elgdeda Cairo - Egypt
          </p>
          <p className="mb-2 text-xs" style={{ color: theme.colors.light }}>
            Phone:+20 106 973 9914
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3
            className="mb-2 text-lg font-bold"
            style={{ color: theme.colors.light }}
          >
            Follow Us
          </h3>

          <div className="flex space-x-4">
            <Link
              href={socialMediaLinks.instagram}
              className="transition-colors duration-200"
              style={{ color: theme.colors.light }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = theme.colors.lightMuted)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = theme.colors.light)
              }
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>

            <Link
              href={socialMediaLinks.tiktok}
              className="transition-colors duration-200"
              style={{ color: theme.colors.light }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = theme.colors.lightMuted)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = theme.colors.light)
              }
              aria-label="TikTok"
            >
              <TiktokIcon className="h-5 w-5" />
            </Link>

            <Link
              href={socialMediaLinks.facebook}
              className="transition-colors duration-200"
              style={{ color: theme.colors.light }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = theme.colors.lightMuted)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = theme.colors.light)
              }
              aria-label="Facebook"
            >
              <Facebook01Icon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
