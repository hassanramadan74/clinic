"use client";

import { services } from "@/lib/Services";

import { theme } from "@/lib/theme";

type SmallServicesProps = {
  limit?: number;
  title?: string;
  description?: string;
};

export default function SmallServices({
  limit,
  title = "Our Services",
  description = "Discover our comprehensive range of professional services designed to meet your needs",
}: SmallServicesProps) {
  // Filter services based on limit prop if provided
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: theme.colors.dark }}
        >
          {title}
        </h2>
        <div
          className="w-24 h-1 mx-auto"
          style={{ backgroundColor: theme.colors.primary }}
        ></div>
        <p
          className="mt-4 max-w-2xl mx-auto"
          style={{ color: theme.colors.darkMuted }}
        >
          {description}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedServices.map((service) => (
          <div
            key={service.id}
            className="transition-all hover:translate-y-[-5px]"
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: theme.colors.dark }}
            >
              {service.title}
            </h3>
            <div
              className="w-12 h-1 mb-3"
              style={{ backgroundColor: theme.colors.primary }}
            ></div>
            <p className="text-sm" style={{ color: theme.colors.darkMuted }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/services"
          className="px-6 py-3 rounded-md transition-all hover:translate-y-[-2px]"
          style={{
            backgroundColor: theme.colors.primary,
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          View All Services
        </a>
      </div>
    </div>
  );
}
