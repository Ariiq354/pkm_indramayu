import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NavbarProvider } from "@/components/provider/navbarProvider";
import Header from "@/components/template/header";
import Footer from "@/components/template/footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Puskesmas",
  description: "Puskesmas Kertasemaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon?png" type="image/png" sizes="png" />
      </head>
      <body className={`${roboto.className}`}>
        <Header />
        <NavbarProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
