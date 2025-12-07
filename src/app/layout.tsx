import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import ThemeProvider from "@/providers/theme";
import Navbar from "@/components/widget/navbar";
import ThemeSwitcher from "@/components/widget/theme-switcher";

import SITE from "@/config/site";

import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.title,
  keywords: SITE.keywords,
  authors: SITE.authors,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "xl:container xl:mx-auto m-10"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
