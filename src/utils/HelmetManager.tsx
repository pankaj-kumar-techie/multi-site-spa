import React from 'react';
import { Helmet } from 'react-helmet';

interface HelmetManagerProps {
  title: string;
  description: string;
  keywords: string;
  author?: string;
  imageUrl?: string;
  siteUrl?: string;
}

export const HelmetManager: React.FC<HelmetManagerProps> = ({
  title,
  description,
  keywords,
  author,
  imageUrl,
  siteUrl,

}) => {
  return (
    <Helmet>
      <link rel="icon" href="/path-to-favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Add more metadata tags as needed */}

      {/* SEO Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "${title}",
            "description": "${description}",
            "keywords": "${keywords}",
            "url": "${siteUrl || 'https://yourwebsite.com'}",
            ${author
            ? `"author": {
                  "@type": "Person",
                  "name": "${author}"
                },`
            : ''
          }
            ${imageUrl
            ? `"image": {
                  "@type": "ImageObject",
                  "url": "${imageUrl}"
                },`
            : ''
          }
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${siteUrl || 'https://yourwebsite.com'}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
    </Helmet>
  );
};
