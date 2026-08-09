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

const siteUrl = "https://www.theantarcticaproject.com";
const description =
  "The Antarctica Project — sitio oficial de la banda de metalcore progresivo. Conciertos, discografía, historia e integrantes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Antarctica Project",
    template: "%s",
  },
  description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Antarctica Project",
    title: "The Antarctica Project",
    description,
    images: [{ url: "/images/hero-band.jpg", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Antarctica Project",
    description,
    images: ["/images/hero-band.jpg"],
  },
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
