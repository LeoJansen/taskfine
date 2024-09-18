import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import localFont from 'next/font/local';
import { siteConfig } from "@/config/site";
const inter = Inter({ subsets: ["latin"] });

const mainFont = localFont({
  src: "../public/urbanist.ttf"
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "logo.svg",
      href: "logo.svg",
    },
  ],

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
