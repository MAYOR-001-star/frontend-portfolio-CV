import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mayowa | Frontend Developer",
  description: "Frontend Developer building modern, scalable web and mobile applications with JavaScript, React, React Native, Node.js, and PostgreSQL. I ship real products and document my work publicly.",
  keywords: [
    "Mayowa",
    "Frontend Developer",
    "Mobile Developer",
    "JavaScript Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "Web Developer",
    "Remote Full Stack Developer"
  ],
  authors: [{ name: "Mayowa" }],
  openGraph: {
    type: "website",
    siteName: "Mayowa | Frontend Developer",
    url: "https://mayowas-portfolio.vercel.app/",
    title: "Mayowa | Frontend Developer",
    description: "I build and ship full-stack web and mobile applications using modern JavaScript technologies. Explore my projects, experience, and live builds.",
    images: [
      {
        url: "https://iammayor.vercel.app/Images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Mayor Azubike – Frontend Developer Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@faya_lordd",
    creator: "@faya_lordd",
    title: "Mayor Azubike | Frontend Developer",
    description: "Frontend Developer building real-world web and mobile applications with JavaScript, React, React Native, and Node.js. View my work and live projects.",
    images: ["https://iammayor.vercel.app/Images/opengraph.png"],
  },
  verification: {
    google: "ZW8DmY-Vom3BSQleib_m8fb2WOKm_Ojz-pRnQyh1Y_E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdul-azeez Baruwa",
    "givenName": "Abdul-azeez",
    "familyName": "Baruwa",
    "url": "https://iammayor.vercel.app",
    "image": "https://iammayor.vercel.app/Images/Mayor.jpg",
    "jobTitle": "Frontend Developer & Software Engineering Student",
    "description": "Frontend Developer and Software Engineering Student, building scalable web and mobile applications with React, React Native, and Node.js.",
    "disambiguatingDescription": "Software Engineering Student and Frontend Developer.",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Technology"
    },
    "sameAs": [
      "https://www.linkedin.com/in/abdul-azeez-baruwa-505551316",
      "https://github.com/MAYOR-001-star",
      "https://x.com/faya_lordd",
      "https://www.facebook.com/share/1KFSZPzBhS/",
      "https://www.instagram.com/iam__mayor"
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "Mobile Development",
      "Software Engineering",
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "TypeScript",
      "Database Management"
    ]
  };

  return (
    <html
      lang="en"
      className={`${lexend.variable} h-full antialiased`}
    >
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=chillax@500,600,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


