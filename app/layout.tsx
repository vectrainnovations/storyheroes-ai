import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StoryHeroes - Personalized AI Children's Books | Your Child as the Hero",
  description: "Create magical personalized storybooks where your child becomes the hero. AI-generated stories & illustrations. Hardcover books shipped worldwide. Preview before printing.",
  metadataBase: new URL("https://storyheroes.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://storyheroes.io/",
    title: "StoryHeroes - Your Child as the Hero of Every Story",
    description: "Create magical personalized storybooks with AI-generated stories & illustrations. Hardcover books shipped worldwide.",
    siteName: "StoryHeroes",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryHeroes - Your Child as the Hero",
    description: "Create magical personalized storybooks with AI-generated stories & illustrations.",
    images: ["/og-image.jpg"],
    site: "@StoryHeroesIO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-M1LBDZYL8S"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M1LBDZYL8S');
        `}
      </Script>
      </body>
    </html>
  );
}
