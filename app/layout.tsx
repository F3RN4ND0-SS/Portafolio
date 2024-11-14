import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Head from "next/head";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  
  title: "Fernando Salazar Santos🤓",
  description: "Landing page from Fernando Salazar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
       <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
