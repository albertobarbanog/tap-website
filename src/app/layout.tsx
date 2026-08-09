import type { Metadata } from "next";
import { Jost, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "The Antarctica Project",
  description:
    "The Antarctica Project — sitio oficial de la banda. Conciertos, discografía, historia e integrantes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${jost.variable} ${inter.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Providers>
          <div id="page-root" className="flex min-h-full flex-col flex-1">
            <Header />
            <main className="flex-1 pt-[61px] md:pt-[110px]">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
