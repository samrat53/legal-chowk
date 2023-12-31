import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css"/>
      </head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
