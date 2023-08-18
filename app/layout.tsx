import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./pproviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabir KOUTABI",
  description: "My Personal Portfolio",
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
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
