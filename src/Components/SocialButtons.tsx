"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { socialMediaLinks } from "@/lib/social_media";

const WHATSAPP_NUMBER = "201121422198";

export default function CircularSocialButtons() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      <Button
        size="icon"
        className="rounded-full h-12 w-12"
        style={{ backgroundColor: "#25D366" }} // WhatsApp's actual color
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp className="h-5 w-5" />
        <span className="sr-only">WhatsApp</span>
      </Button>
      <Button
        size="icon"
        className="rounded-full h-12 w-12"
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
        onClick={() => window.open(socialMediaLinks.instagram, "_blank")}
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Button>
      <Button
        size="icon"
        className="rounded-full h-12 w-12"
        style={{ backgroundColor: "#1877f2" }}
        onClick={() => window.open(socialMediaLinks.facebook, "_blank")}
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Button>
    </div>
  );
}
