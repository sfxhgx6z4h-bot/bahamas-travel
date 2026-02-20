import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BahamasEscape — Your Paradise Awaits",
  description: "Discover the Bahamas with BahamasEscape — curated travel packages, island hopping tours, and luxury retreats across 300+ stunning islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
