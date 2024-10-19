import { Inter } from "next/font/google";

import type { Metadata } from "next";

import ThemeProvider from "@/components/ThemeProvider";
import MainNav from "@/components/MainNav";
import "easymde/dist/easymde.min.css";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex flex-col items-center border-b mb-5 px-5 py-3">
            <div className="max-w-6xl w-full">
              <MainNav />
            </div>
          </nav>
          <main className="flex flex-col items-center border-b">
            <div className="max-w-6xl w-full">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
