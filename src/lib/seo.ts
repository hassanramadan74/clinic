import { Service } from "./types";
import { services } from "./services";

interface LocalizedService extends Service {
  titleAr: string;
  descriptionAr: string;
  featuresAr: string[];
}

export const localizedServices: LocalizedService[] = [
  {
    ...services[0],
    titleAr: "نحت الجسم",
    descriptionAr:
      "إجراءات متقدمة لنحت الجسم لتحسين تناسق الجسم الطبيعي وتحقيق الشكل المثالي المطلوب.",
    featuresAr: [
      "خطط علاج مخصصة",
      "نتائج طبيعية المظهر",
      "وقت تعافي قصير",
      "نتائج طويلة الأمد",
      "تقنيات جراحية متخصصة",
    ],
  },
  {
    ...services[1],
    titleAr: "شد الوجه والرقبة",
    descriptionAr:
      "تجديد شامل للوجه لاستعادة ملامح الشباب ومعالجة علامات الشيخوخة في الوجه والرقبة.",
    featuresAr: [
      "نتائج طبيعية المظهر",
      "تحسين ملامح الوجه",
      "تقليل علامات الشيخوخة",
      "تأثيرات طويلة الأمد",
      "ندبات طفيفة",
    ],
  },
  // ... Add Arabic translations for all services
];

export const generateServiceMetadata = (service: LocalizedService) => {
  return {
    title: `${service.title} - Dr. Mohamed Elkholy | د. محمد الخولي`,
    description: service.description,
    alternates: {
      canonical: `https://drelkholy.com/services/${service.id}`,
      languages: {
        ar: `https://drelkholy.com/ar/services/${service.id}`,
        en: `https://drelkholy.com/services/${service.id}`,
      },
    },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image],
      locale: "en_US",
      alternateLocale: "ar_EG",
      type: "website",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: service.title,
      description: service.description,
      medicalSpecialty: "Plastic Surgery",
      performedBy: {
        "@type": "Physician",
        name: "Dr. Mohamed Elkholy",
        medicalSpecialty: "Plastic Surgery",
      },
      availableService: service.features,
    },
  };
};

export const generateBlogMetadata = (blog: any) => {
  return {
    title: `${blog.title} - Dr. Mohamed Elkholy's Plastic Surgery Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://drelkholy.com/blog/${blog.slug}`,
      languages: {
        ar: `https://drelkholy.com/ar/blog/${blog.slug}`,
        en: `https://drelkholy.com/blog/${blog.slug}`,
      },
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.featuredImage],
      type: "article",
      article: {
        publishedTime: blog.publishedAt,
        modifiedTime: blog.updatedAt,
        authors: ["Dr. Mohamed Elkholy"],
        tags: blog.tags,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      image: blog.featuredImage,
      datePublished: blog.publishedAt,
      dateModified: blog.updatedAt,
      author: {
        "@type": "Person",
        name: "Dr. Mohamed Elkholy",
        jobTitle: "Plastic Surgeon",
      },
    },
  };
};
