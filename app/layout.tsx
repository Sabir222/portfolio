import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import Navbar from "@/components/navbar/Navbar";
import getWeather from "./api/weatherAction";
import Template from "./template";
import MobileNav from "@/components/navbar/MobileNav";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

export type WeatherData = {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
};
export const metadata: Metadata = {
  title: "Sabir Koutabi — Front-End Developer",
  description:
    "Explore my portfolio and discover my projects, skills, and experiences.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const weather = await getWeather();
  const data: WeatherData = {
    main: weather.list[0].main,
    weather: weather.list[0].weather,
  };

  return (
    <>
      <html lang="en" suppressHydrationWarning className="!scroll-smooth">
        <body className={GeistMono.className}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Toaster />
            <Navbar weatherData={data} />
            <MobileNav weatherData={data} />
            <Template>{children}</Template>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
