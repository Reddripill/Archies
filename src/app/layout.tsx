import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
   title: "Archies App",
   description: "Archies - Architecture & Interior Design",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            <div className="relative w-full h-full flex flex-col">
               <Header />
               <main className="flex-grow">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
