import "@/globals.css";

import WebHeader from "@/components/WebHeader";
import WebFooter from "@/components/WebFooter";

/* ================= GLOBAL SEO METADATA ================= */

export const metadata = {
  metadataBase: new URL("https://raretech.co.in"),

  title: {
    default:
      "RareTech Institute Ludhiana | Best Computer Institute in Ludhiana",
    template: "%s | RareTech Institute Ludhiana",
  },

  description:
    "RareTech Institute Of Information Technology is a leading ISO-certified computer institute in Ludhiana offering Web Development, MERN Stack, Python, Digital Marketing, Tally, Graphic Designing and other job-oriented IT courses.",

  keywords: [
    "computer institute ludhiana",
    "best computer institute ludhiana",
    "computer classes ludhiana",
    "web development course ludhiana",
    "mern stack course ludhiana",
    "python course ludhiana",
    "digital marketing course ludhiana",
    "graphic designing course ludhiana",
    "tally course ludhiana",
    "basic computer course ludhiana",
    "raretech institute ludhiana",
  ],

  authors: [
    {
      name: "RareTech Institute",
      url: "https://raretech.co.in",
    },
  ],

  creator: "RareTech Institute",
  publisher: "RareTech Institute",

  category: "education",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Best Computer Institute in Ludhiana | RareTech Institute",
    description:
      "Join RareTech Institute Ludhiana for job-oriented courses like Web Development, MERN Stack, Digital Marketing, Python and more.",
    url: "https://raretech.co.in",
    siteName: "RareTech Institute",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://raretech.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RareTech Institute Ludhiana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RareTech Institute Ludhiana",
    description:
      "Best Computer Institute in Ludhiana offering job oriented IT courses.",
    images: ["https://raretech.co.in/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "RareTech Institute Of Information Technology",
    url: "https://raretech.co.in",
    logo: "https://raretech.co.in/logo.png",
    telephone: "+916280009096",

    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Subhash Nagar Street No.10",
        addressLocality: "Ludhiana",
        addressRegion: "Punjab",
        postalCode: "141001",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Tikoni Park",
        addressLocality: "Ludhiana",
        addressRegion: "Punjab",
        postalCode: "141001",
        addressCountry: "IN",
      },
    ],

    areaServed: {
      "@type": "City",
      name: "Ludhiana",
    },

    sameAs: [
      "https://www.instagram.com/mand.eep_singh1/",
    ],
  };

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Mobile SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>

      <body
        suppressHydrationWarning
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased transition-colors duration-500"
      >
        <WebHeader />

        <main>{children}</main>

        <WebFooter />
      </body>
    </html>
  );
}