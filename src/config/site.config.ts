// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};


export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  author: string;
  author_img: string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    image?: string; // default og image
    imageAlt?: string;
    locale?: string;
    type?: string;
    twitterCard?: string;
    robots?: string;
    themeColor?: string;
  };

  // Projects configuration
  allowedProjects: string[];

}

export const siteConfig: SiteConfig = {
  siteName: 'Mahmoud Rashad',
  domain: 'mahmoud-rashad.netlify.app',
  author: 'Mahmoud Rashad',
  description: 'Front End Developer creating useful & responsive web applications with high performance and clean code.',
  about:
    'Results-oriented Front-End Developer focused on creating responsive and high-performance web applications. Committed to clean, maintainable code and exceptional user experiences. Always learning to deliver modern digital solutions.',
  author_img: 'https://avatars.githubusercontent.com/u/148764282?s=400&u=081ae7bf4929a7b645123b0ab1db064ae3821a14&v=4',
  keywords: [
    'Mahmoud Rashad',
    'Frontend Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'shadcn/ui',
    'Framer Motion',
  ],
  ogImage: '/og.png',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: 'https://mahmoud-rashad.netlify.app/',
    github: 'https://github.com/MAHMOUD3224',
    linkedin: 'https://www.linkedin.com/in/mahmoud-rashad-2353b0252/',
    email: 'mailto:mahmoud.tec7@gmail.com',
    resume: 'https://drive.google.com/file/d/1-fOkZzuS7LFZQX-pS0f7EYUXVoO42BKl/view?usp=drivesdk', // TODO: Add your Google Drive resume link here
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/MAHMOUD3224/', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mahmoud-rashad-2353b0252/', icon: 'linkedin' },
    { label: 'WhatsApp', url: 'https://wa.me/+201064340657', icon: 'whatsapp' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ],


  seo: {
    title: 'Mahmoud Rashad',
    description: 'Front End Developer creating useful & responsive web applications with high performance and clean code',
    keywords: [
      'Mahmoud Rashad',
      'Front End',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'Framer Motion',
    ],
    canonical: 'https://mahmoud-rashad.netlify.app/',
    image: '/og.png',
    imageAlt: "Mahmoud Rashad - Frontend Developer",
    locale: 'en-US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },

  // Projects to display in the projects grid
  allowedProjects: [
    "to-do",
    "Multi-step-form",
    "praye-time",
    "RESPONSIVE",
    "MAHMOUD3224",
    "social-media",
    "Cards_project",
    "XandO-project",
    "Valid_Form"
  ],

};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: `https://${domain}/`,
      creator: siteConfig.author,
    },
    other: {
      robots: seo.robots,
      'theme-color': seo.themeColor,
      'og:image:alt': seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
