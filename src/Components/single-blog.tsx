import type React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { formatDate } from "@/lib/utils";
import { CalendarIcon, ClockIcon } from "lucide-react";

interface BlogProps {
  id: number;
  title: string;
  slug: string;
  cover_image: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function BlogCardStandard({ blog }: { blog: BlogProps }) {
  const processContent = (content: string) => {
    // Process image sources
    let processedContent = content.replace(
      /src="\/media\//g,
      `src="${process.env.NEXT_PUBLIC_BACKEND_URL}/media/`
    );

    // Process text alignment and links
    processedContent = processedContent.replace(
      /style="text-align:(center|right|left);"/g,
      'class="text-$1"'
    );

    // Process links to open in new tab and add styling
    processedContent = processedContent.replace(
      /<a([^>]*?)href="([^"]+)"([^>]*)>/g,
      (match, before, href, after) => {
        // Check if the href is an external URL
        const isExternal = !href.startsWith("/");
        // Add protocol if needed for external URLs
        const processedHref =
          isExternal && !href.match(/^https?:\/\//) ? `http://${href}` : href;
        return `<a${before}href="${processedHref}"${after} class="underline decoration-primary underline-offset-4 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">`;
      }
    );

    // Process text sizes
    processedContent = processedContent
      .replace(/class="text-big"/g, 'class="text-lg"')
      .replace(/class="text-huge"/g, 'class="text-xl"')
      .replace(/class="text-small"/g, 'class="text-sm"')
      .replace(/class="text-tiny"/g, 'class="text-xs"');

    // Process lists with proper nesting and styling
    processedContent = processedContent
      .replace(
        /<ul>/g,
        '<ul class="list-disc list-outside space-y-2 pl-6 my-4">'
      )
      .replace(
        /<ol>/g,
        '<ol class="list-decimal list-outside space-y-2 pl-6 my-4">'
      )
      .replace(
        /<ul><li>/g,
        '<ul class="list-disc list-outside space-y-2 pl-6 my-4"><li class="ml-2">'
      )
      .replace(
        /<ol><li>/g,
        '<ol class="list-decimal list-outside space-y-2 pl-6 my-4"><li class="ml-2">'
      )
      .replace(/<li>/g, '<li class="ml-2">');

    // Process nested lists
    processedContent = processedContent
      .replace(
        /<ul>(?=\s*<li>\s*<ul>)/g,
        '<ul class="list-disc list-outside space-y-2 pl-4 mt-2">'
      )
      .replace(
        /<ol>(?=\s*<li>\s*<ol>)/g,
        '<ol class="list-decimal list-outside space-y-2 pl-4 mt-2">'
      );

    // Process headings with specific styles
    processedContent = processedContent
      .replace(/<h1>/g, '<h1 class="text-4xl font-bold mb-6 mt-8">')
      .replace(/<h2>/g, '<h2 class="text-3xl font-semibold mb-5 mt-7">')
      .replace(/<h3>/g, '<h3 class="text-2xl font-medium mb-4 mt-6">')
      .replace(/<h4>/g, '<h4 class="text-xl font-medium mb-3 mt-5">')
      .replace(/<h5>/g, '<h5 class="text-lg font-medium mb-2 mt-4">')
      .replace(/<h6>/g, '<h6 class="text-base font-medium mb-2 mt-4">');

    // Process horizontal rules with enhanced styling
    processedContent = processedContent.replace(
      /<hr>/g,
      '<hr class="h-1 my-12 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 border-none rounded-full">'
    );

    // Process image styles and alignment
    processedContent = processedContent
      .replace(
        /<figure class="image">/g,
        '<figure class="image flex justify-center my-4">'
      )
      .replace(
        /<figure class="image image-style-side">/g,
        '<figure class="image float-right ml-4 mb-4">'
      )
      .replace(
        /<figure class="image image-style-align-left">/g,
        '<figure class="image float-left mr-4 mb-4">'
      );

    // Process image styles while preserving original dimensions
    processedContent = processedContent.replace(
      /<img([^>]*?)>/g,
      (match, attributes) => {
        // Keep original width and height if present
        const hasWidth = /width="[^"]*"/.test(attributes);
        const hasHeight = /height="[^"]*"/.test(attributes);
        const preserveSize = hasWidth || hasHeight ? "" : "w-full";
        return `<img${attributes} class="${preserveSize} rounded-lg object-contain">`;
      }
    );

    return processedContent;
  };
  return (
    <article className="rounded-xl overflow-hidden border border-[#d4d4d8] bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative w-full h-72">
        <Image
          src={blog.cover_image || "/placeholder.svg"}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181b]/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <div
            className="px-3 py-1 mb-3 text-xs font-medium text-white rounded-full inline-block"
            style={{ backgroundColor: theme.colors.primary }}
          >
            Blog
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {blog.title}
          </h2>
        </div>
      </div>

      <div className="p-6">
        <div
          className="flex items-center gap-4 mb-4 text-sm"
          style={{ color: theme.colors.darkMuted }}
        >
          <div className="flex items-center gap-1">
            <CalendarIcon size={16} />
            <span>{formatDate(blog.created_at)}</span>
          </div>
          {blog.updated_at !== blog.created_at && (
            <div className="flex items-center gap-1">
              <ClockIcon size={16} />
              <span>Updated: {formatDate(blog.updated_at)}</span>
            </div>
          )}
        </div>

        <div
          className="prose max-w-none prose-headings:mt-6 prose-headings:mb-4 prose-p:my-4 prose-hr:my-8 prose-img:my-8 prose-img:rounded-lg prose-ul:my-6 prose-ol:my-6 [&_.text-right]:text-right [&_.text-left]:text-left [&_.text-center]:text-center"
          style={
            {
              "--tw-prose-headings": theme.colors.dark,
              "--tw-prose-body": theme.colors.dark,
              "--tw-prose-links": theme.colors.primary,
            } as React.CSSProperties
          }
          dangerouslySetInnerHTML={{ __html: processContent(blog.content) }}
        />
      </div>
    </article>
  );
}
