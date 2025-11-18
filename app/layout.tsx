import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  // ------------------------------------
  // PRIMARY SEO TAGS
  // ------------------------------------
  title: {
    default: "Peeps Rental Manager | The All-in-One Property Management App",
    template: "%s | Peeps Rental Manager", // For nested routes (e.g., Dashboard | Peeps Rental Manager)
  },
  description:
    "Simplify your rental property management. Peeps Rental Manager is the all-in-one app for modern landlords to automate rent collection, track maintenance, and manage tenants easily.",
  keywords: [
    "rental management software",
    "property management app",
    "landlord software",
    "rent collection app",
    "tenant management",
    "maintenance tracking",
    "peeps rental",
  ],
  authors: [{ name: "Peeps Inc" }],
  creator: "Peeps Inc Rental Team",

  // ------------------------------------
  // SOCIAL SHARING (OPEN GRAPH - Used by Facebook, LinkedIn, etc.)
  // ------------------------------------
  openGraph: {
    title: "Peeps Rental Manager | Simplify Your Rental Portfolio",
    description:
      "Automate rent, manage maintenance, and keep your property finances clear with Peeps Rental Manager, the intuitive app for landlords.",
    url: "https://peeps-rental-manager-client.onrender.com", // Replace with your final domain
    siteName: "Peeps Rental Manager",
    images: [
      {
        url: "/og-image.png", // Path to your 1200x630px social share image
        width: 1200,
        height: 630,
        alt: "Peeps Rental Manager Dashboard Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ------------------------------------
  // SOCIAL SHARING (TWITTER)
  // ------------------------------------
  twitter: {
    card: "summary_large_image", // Best for showing a large image
    title: "Peeps Rental Manager | Simplify Your Rental Portfolio",
    description:
      "Automate rent, manage maintenance, and keep your property finances clear with Peeps Rental Manager.",
    // image: "/twitter-image.jpg", // Optional: 1:1 image for Twitter specifically
    creator: "@peepsrental_hq", // Optional: Your company's Twitter handle
  },

  // ------------------------------------
  // TECHNICAL / UTILITY
  // ------------------------------------
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
