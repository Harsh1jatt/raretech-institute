import "@/globals.css";

import WebHeader from "@/components/WebHeader";
import WebFooter from "@/components/WebFooter";

/* ================= SEO METADATA ================= */

export const metadata = {

  metadataBase: new URL("https://raretech.co.in"),

  title: {

    default:
      "RareTech Institute Ludhiana | Best Computer Institute in Ludhiana",

    template: "%s | RareTech Institute Ludhiana",

  },

  description:

    "RareTech Institute Of Information Technology is the best ISO-certified computer institute in Ludhiana Punjab offering Web Development, Python, C/C++, MERN Stack, Digital Marketing, Tally and Job Oriented IT Courses.",

  keywords: [

    "Computer Institute Ludhiana",

    "Best Computer Institute in Ludhiana",

    "Computer Classes Ludhiana",

    "Web Development Course Ludhiana",

    "Python Course Ludhiana",

    "Digital Marketing Course Ludhiana",

    "Graphic Designing Course Ludhiana",

    "Tally Course Ludhiana",

    "Basic Computer Course Ludhiana",

    "RareTech Institute Ludhiana",

  ],

  alternates: {

    canonical: "/",

  },

  authors: [

    {

      name: "RareTech Institute",

      url: "https://raretech.co.in",

    },

  ],

  category: "education",

  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

      "max-video-preview": -1,

      "max-image-preview": "large",

      "max-snippet": -1,

    },

  },

  openGraph: {

    title:

      "Best Computer Institute in Ludhiana | RareTech Institute",

    description:

      "Join RareTech Institute Ludhiana for Web Development, Programming, Digital Marketing and Job Oriented Computer Courses.",

    url: "https://raretech.co.in",

    siteName: "RareTech Institute",

    locale: "en_IN",

    type: "website",

    images: [

      {

        url: "/og-image.jpg",

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

      "Best Computer Institute in Ludhiana offering Job Oriented IT Courses.",

    images: ["/og-image.jpg"],

  },

  verification: {

    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE",

  },

};

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({ children }) {

  return (

    <html lang="en-IN">

      <body
        className="bg-white dark:bg-gray-900
        text-gray-900 dark:text-white
        antialiased transition-colors duration-500"
      >

        {/* ================= LOCAL SEO SCHEMA ================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{

            __html: JSON.stringify({

              "@context": "https://schema.org",

              "@type": "EducationalOrganization",

              name:

                "RareTech Institute Of Information Technology",

              url: "https://raretech.co.in",

              telephone: "+916280009096",

              address: [

                {

                  "@type": "PostalAddress",

                  streetAddress:

                    "Subhash Nagar Street No.10",

                  addressLocality: "Ludhiana",

                  addressRegion: "Punjab",

                  addressCountry: "India",

                },

                {

                  "@type": "PostalAddress",

                  streetAddress: "Tikoni Park",

                  addressLocality: "Ludhiana",

                  addressRegion: "Punjab",

                  addressCountry: "India",

                },

              ],

              sameAs: [

                "https://www.instagram.com/mand.eep_singh1/",

              ],

            }),

          }}

        />

        {/* ================= HEADER ================= */}

        <WebHeader />

        <main>

          {children}

        </main>

        {/* ================= FOOTER ================= */}

        <WebFooter />

      </body>

    </html>

  );

}