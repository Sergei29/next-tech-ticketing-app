import { Inter } from "next/font/google";

import type { Metadata } from "next";

import MainNav from "@/components/MainNav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticketing Application",
  description: "Booking the tickets, for training purposes only.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
