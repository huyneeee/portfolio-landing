import { neueHaasFont } from "@/shared/utils/fonts";
import clsx from "clsx";
import type { Metadata } from "next";
import "@/shared/styles/index.css";
import { Registry } from "./registry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LANDING_URL } from "@/config/environment";

const title = "Portfolio made by Huyneeee";
const description = `Welcome to Huyneeee's portfolio website. I specialize in creating dynamic and interactive websites that captivate users and deliver seamless experiences. With expertise in frontend and backend technologies, I craft responsive designs, optimize performance, and ensure accessibility to reach a wider audience.`;

const urlImages = LANDING_URL + "/opengraph-image.png";
const urlImageTW = LANDING_URL + "/twitter-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(LANDING_URL),
  title: "Portfolio",
  description: "Portfolio made by huyneeee",
  openGraph: {
    title,
    description,
    images: urlImages,
    siteName: "Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    title,
    description,
    images: urlImageTW
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(neueHaasFont.className, "bg-black")}>
        <Registry>{children}</Registry>
        <SpeedInsights />
      </body>
    </html>
  );
}
