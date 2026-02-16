import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "West Covina Pest Pros | Professional Pest Control in West Covina CA 91790, 91791",
    template: "%s | West Covina Pest Pros"
  },
  description: "Expert pest control in West Covina, CA near me. Serving zip codes 91790, 91791 with ant, bed bug, rodent control & more. Call (213) 463-6630 for fast service!",
  keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791",
  openGraph: {
    title: "West Covina Pest Pros | Professional Pest Control in West Covina CA 91790, 91791",
    description: "Expert pest control in West Covina, CA near me. Serving zip codes 91790, 91791 with ant, bed bug, rodent control & more. Call (213) 463-6630 for fast service!",
    siteName: "West Covina Pest Pros",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "West Covina Pest Pros | Professional Pest Control in West Covina CA 91790, 91791",
    description: "Expert pest control in West Covina, CA near me. Serving zip codes 91790, 91791 with ant, bed bug, rodent control & more. Call (213) 463-6630 for fast service!",
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
