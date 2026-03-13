import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Erich Fill Triathlon – Erlebe den Wettkampf",
    template: "%s | Erich Fill Triathlon",
  },
  description:
    "Der Erich Fill Triathlon – Schwimmen, Radfahren, Laufen. Melde dich jetzt an und erlebe einen der emotionalsten Triathlons der Region.",
  keywords: [
    "Triathlon",
    "Erich Fill",
    "Sprint Triathlon",
    "Olympische Distanz",
    "Staffel Triathlon",
    "Wettkampf",
    "Anmeldung",
  ],
  authors: [{ name: "Erich Fill Triathlon" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://erichfilltriathlon.de",
    siteName: "Erich Fill Triathlon",
    title: "Erich Fill Triathlon – Erlebe den Wettkampf",
    description:
      "Der Erich Fill Triathlon – Schwimmen, Radfahren, Laufen. Melde dich jetzt an.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Erich Fill Triathlon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erich Fill Triathlon – Erlebe den Wettkampf",
    description:
      "Der Erich Fill Triathlon – Schwimmen, Radfahren, Laufen. Melde dich jetzt an.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
