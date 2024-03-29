import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopLinks from "./Components/TopLinks";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={inter.className}>
        <TopLinks />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
