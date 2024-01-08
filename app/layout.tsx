import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./pproviders";
import { Toaster } from "react-hot-toast";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabir Koutabi - Front-End Developer | Portfolio",
  description: "Explore Sabir Koutabi's portfolio and discover his projects, skills, and experiences.",
  alternates: {
    canonical: `https://sabirkoutabi.dev/`,
  },
  verification: {
    google:
      "google-site-verification=aW_5U8OJIYmw1ZL1owu2K9jdh6CbvnqMRfn3qb14WT8",
  },
  icons: {
    icon: "/favlogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          {children}
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
