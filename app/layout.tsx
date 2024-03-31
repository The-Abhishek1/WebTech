import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopLinks from "./Components/TopLinks";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ablaze Nova",
  description: "Tech Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <TopLinks />
        <Header />
        {children}
      </body>
    </html>
  );
}
