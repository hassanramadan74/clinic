import Link from "next/link";
import { MapPin } from "lucide-react";
import { theme } from "@/lib/theme";

const LocationPin = () => {
  const location = "9 Al Somal St. , Al Korba , Masr Al Gdeda";
  const googleMapsLink = `https://www.google.com/maps?q=9 Al Somal, Cairo, Egypt`;
  const googleMapsEmbedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55200.98745322332!2d31.205753999999997!3d30.044419999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b0c8a2b5fb%3A0xf4e1ce02860c4dcd!2s9%20Al%20Somal%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1710443023123!5m2!1sen!2seg`;

  return (
    <div
      style={{ backgroundColor: theme.colors.backgroundAlt }}
      className="px-4 py-4"
    >
      <div className="container mx-auto">
        <h2
          className="mb-8 text-center text-3xl font-bold"
          style={{ color: theme.colors.dark }}
        >
          Our Location
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <div
              className="rounded-lg border-2 p-6"
              style={{
                backgroundColor: theme.colors.primary,
                borderColor: theme.colors.border,
              }}
            >
              <div className="mb-4 flex items-center justify-center">
                <MapPin
                  className="mr-2 h-8 w-8"
                  style={{ color: theme.colors.light }}
                />
                <Link
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold underline"
                  style={{ color: theme.colors.light }}
                >
                  {location}
                </Link>
              </div>
              <p className="text-center" style={{ color: theme.colors.light }}>
                Open daily from 9 AM to 2 AM
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-lg border-2 border-[#A67B5B]">
              <iframe
                src={googleMapsEmbedSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPin;
