import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import React from "react";
import {Analytics} from "@vercel/analytics/vue";


export const metadata: Metadata = {
  title: "Ege Kaan Gürkan",
  description: "Ege Kaan Gürkan's portfolio",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
      <Analytics />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
