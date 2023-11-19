import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./pproviders";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabir KOUTABI",
  description: "Sabir Koutabi's Portfolio",
  alternates: {
    canonical: `https://sabirkoutabi.dev/`,
  },
  verification: {
    google:
      "google-site-verification=aW_5U8OJIYmw1ZL1owu2K9jdh6CbvnqMRfn3qb14WT8",
  },
  icons: {
    icon: "/tree.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
