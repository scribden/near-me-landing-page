import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./assets/scss/tailwind.scss";
import "./assets/css/material.css";
import { Providers } from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "NearMe - Register Your Interest",
  description: "Connecting Communities to Local Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body
        className={` ${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
