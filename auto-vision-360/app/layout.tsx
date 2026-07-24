import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://autovision360.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Beyond the Blind Spot — Auto Vision 360",
  description:
    "How one drive home led to a human-centered redesign of India's most common public transport. A product design case study on visibility, safety and confidence on the road.",
  keywords: [
    "Auto Vision 360",
    "auto-rickshaw design",
    "transportation design",
    "human-centered design",
    "UX case study",
    "product design portfolio",
  ],
  authors: [{ name: "Auto Vision 360" }],
  openGraph: {
    title: "Beyond the Blind Spot — Auto Vision 360",
    description:
      "How one drive home led to a human-centered redesign of India's most common public transport.",
    url: siteUrl,
    siteName: "Auto Vision 360",
    images: [{ url: "/images/hero-auto-render.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond the Blind Spot — Auto Vision 360",
    description:
      "A human-centered redesign of the auto-rickshaw canopy, told as a documentary-style case study.",
    images: ["/images/hero-auto-render.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-paper text-ink font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
