import React from 'react';
import { Helmet } from 'react-helmet';
import { SeoData } from '../modal/SeoData';

export const HelmetManager: React.FC<SeoData> = ({
  title,
  description,
  keywords,
  tags,
  author,
  imageUrl,
  faviconUrl,
  siteUrl,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  return (
    <Helmet>
      <link rel="icon" href={faviconUrl || "/favicon.ico"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="name" content={title} />
      <meta name="keywords" content={keywords} />
      <meta name="tags" content={tags} />
      {author && <meta name="author" content={author} />}

      {/* Open Graph Tags for Facebook */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl || window.location.href} />
      <meta property="og:image" content={ogImage || imageUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || imageUrl} />

      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": title,
          "description": description,
          "keywords": keywords,
          "url": siteUrl || window.location.href,
          ...(author ? { "author": { "@type": "Person", "name": author } } : {}),
          ...(imageUrl ? { "image": { "@type": "ImageObject", "url": imageUrl } } : {}),
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl || window.location.href}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};
