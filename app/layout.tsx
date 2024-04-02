
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMobile from "@/components/header/HeaderMobile";
import HeaderSelect from "@/components/header/HeaderSelect";
import FooterMain from './../components/Footer/FooterMain';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HoatHinhOnline",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="flex text-white bg-[#212c37] flex-col  " lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
