export const ROOT_URL = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : process.env.NEXT_PUBLIC_URL;

export const OPEN_GRAPH_SEO = {
  type: 'website',
  site_name: 'ChadScan',
  images: [
    {
      url: `${ROOT_URL}/images/cover.png`,
      width: 1200,
      height: 630,
      alt: 'Preview Photo',
    },
  ],
};

export const TWITTER_SEO = {
  cardType: 'summary_large_image',
};

export const ADDITIONAL_LINK_TAGS_SEO = [
  {
    rel: 'apple-touch-icon',
    href: '/icons/apple-touch-icon.png',
    sizes: '180x180',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/icons/favicon-32x32.png',
    sizes: '32x32',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/icons/favicon-16x16.png',
    sizes: '16x16',
  },
  {
    rel: 'manifest',
    href: '/icons/site.webmanifest',
  },
  {
    rel: 'shortcut icon',
    href: '/icons/favicon.ico',
  },
];

export const ADDITIONAL_META_TAGS = [
  {
    property: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width',
  },
  {
    property: 'msapplication-TileColor',
    content: '#da532c',
  },
  {
    name: 'msapplication-config',
    content: '/icons/browserconfig.xml',
  },
  {
    name: 'theme-color',
    content: '#ffffff',
  },
];
