import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    template: '%s | Unoplast',
    default: 'Unoplast'
  },
  description: "Welcome to Unoplast - your destination for innovative, high-quality Water Tanks. Explore our diverse products, learn about our mission, and connect with our team"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <link rel="icon" href="/logo.svg" sizes="any" />
      <body className={`h-full w-full`}>
        <main className="w-full min-h-full flex flex-col">
          <Suspense>
            <Header/>
          </Suspense>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
