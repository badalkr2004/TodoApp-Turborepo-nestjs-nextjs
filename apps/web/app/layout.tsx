import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TrpcProvider from "../providers/TrpcProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Todo | Turborepo",
  description: "This todo application built using Monorepo/Turborepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}
