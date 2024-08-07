import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";	
import localFont from 'next/font/local';
const inter = Inter({ subsets: ["latin"] });

const mainFont = localFont({
  src:"../public/urbanist.ttf"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
