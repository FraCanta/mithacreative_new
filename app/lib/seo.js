const configuredSiteUrl = process.env.SITE_URL?.trim();

function resolveSiteUrl(value) {
  if (!value) return null;

  try {
    const parsed = new URL(value);
    const hostname = parsed.hostname.toLowerCase();
    const isPreviewHost =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.endsWith(".workers.dev") ||
      hostname.endsWith(".pages.dev") ||
      hostname.endsWith(".vercel.app");

    if (
      parsed.protocol !== "https:" ||
      parsed.username ||
      parsed.password ||
      parsed.pathname !== "/" ||
      parsed.search ||
      parsed.hash ||
      isPreviewHost
    ) {
      return null;
    }

    return parsed.origin;
  } catch {
    return null;
  }
}

export const siteUrl = resolveSiteUrl(configuredSiteUrl);
export const isSearchIndexingEnabled =
  process.env.SEO_INDEXING_ENABLED === "true" && Boolean(siteUrl);

const socialImagePath = "/assets/servizi_hero.webp";

function absoluteSiteUrl(path) {
  return new URL(path, `${siteUrl}/`).toString();
}

export function createPageMetadata({ title, description, path, noindex = false }) {
  const indexable = isSearchIndexingEnabled && !noindex;
  const metadata = {
    title,
    description,
    robots: { index: indexable, follow: indexable },
    openGraph: {
      type: "website",
      locale: "it_IT",
      siteName: "Mitha Creative",
      title,
      description,
    },
    twitter: {
      card: indexable ? "summary_large_image" : "summary",
      title,
      description,
    },
  };

  if (indexable && path) {
    const imageUrl = absoluteSiteUrl(socialImagePath);
    metadata.alternates = { canonical: path };
    metadata.openGraph = {
      ...metadata.openGraph,
      url: absoluteSiteUrl(path),
      images: [{
        url: imageUrl,
        width: 1600,
        height: 900,
        alt: "Illustrazione Mitha Creative: astronauti attorno a un pianeta viola",
      }],
    };
    metadata.twitter = {
      ...metadata.twitter,
      images: [imageUrl],
    };
  }

  return metadata;
}

export const rootMetadata = {
  ...(isSearchIndexingEnabled ? { metadataBase: new URL(`${siteUrl}/`) } : {}),
  title: "Mitha Creative",
  description: "Creative collective di quattro freelance indipendenti: brand, UX/UI, contenuti, sviluppo web e progetti costruiti intorno a ogni esigenza.",
  robots: {
    index: isSearchIndexingEnabled,
    follow: isSearchIndexingEnabled,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Mitha Creative",
    title: "Mitha Creative",
    description: "Creative collective di quattro freelance indipendenti: brand, UX/UI, contenuti, sviluppo web e progetti costruiti intorno a ogni esigenza.",
  },
  twitter: {
    card: "summary",
    title: "Mitha Creative",
    description: "Creative collective di quattro freelance indipendenti: brand, UX/UI, contenuti, sviluppo web e progetti costruiti intorno a ogni esigenza.",
  },
};
