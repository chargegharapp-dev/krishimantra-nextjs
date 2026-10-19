import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Free Farming Knowledge & Produce Marketplace for Nepal`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Official website for Krishi Mantra, a free mobile app for farmers in Nepal. Free video courses, agricultural advice, local weather alerts, and direct produce marketplace with Cash on Delivery.",
  keywords: [
    "Krishi Mantra",
    "Kheti Mantra",
    "Nepal agriculture app",
    "Nepal farming",
    "Chitwan Nepal agriculture",
    "Nepal farmer advice",
    "agricultural produce marketplace Nepal",
    "free farming app Nepal",
  ],
  authors: [{ name: siteConfig.developerName, url: siteConfig.url }],
  creator: siteConfig.developerName,
  publisher: siteConfig.developerName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ne_NP"],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Free Farming Knowledge & Marketplace for Nepal`,
    description:
      "Empowering Nepal's farmers with free agricultural education, crop & livestock problem guidance, and direct marketplace with Cash on Delivery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krishi Mantra - Free Farming Knowledge for Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Free Farming App for Nepal`,
    description:
      "Free agricultural knowledge, crop consultation, and farm produce marketplace for farmers in Nepal.",
  },
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.formerName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/favicon.svg`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chitwan",
          addressRegion: "Bagmati Province",
          addressCountry: "NP",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#app`,
        name: siteConfig.name,
        operatingSystem: "ANDROID",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "NPR",
        },
        author: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-white">
        <LanguageProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
