import { neueHaasFont } from "@/shared/utils/fonts";
import clsx from "clsx";
import type { Metadata } from "next";
import "@/shared/styles/index.css";
import { Registry } from "./registry";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio made by huyneeee"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(neueHaasFont.className)}>
        <Registry>{children}</Registry>
      </body>
    </html>
  );
}
