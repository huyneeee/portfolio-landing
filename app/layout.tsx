import { neueHaasFont } from "@/shared/utils/fonts";
import clsx from "clsx";
import type { Metadata } from "next";
import "@/shared/styles/index.css";
import { Registry } from "./registry";

const title = "Portfolio made by Huyneeee";
const description = `Welcome to Huyneeee's portfolio website. I specialize in creating dynamic and interactive websites that captivate users and deliver seamless experiences. With expertise in frontend and backend technologies, I craft responsive designs, optimize performance, and ensure accessibility to reach a wider audience.`;

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio made by huyneeee",
  openGraph: {
    title,
    description,
    images: "/opengraph-image.png",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    title,
    description,
    images: "/twitter-image.png"
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
      </body>
    </html>
  );
}
