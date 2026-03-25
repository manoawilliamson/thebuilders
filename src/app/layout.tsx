import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { EmailCapturePopup } from "@/components/EmailCapturePopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Builders | Master AI. Build Smarter. Create Faster.",
  description:
    "Learn to work with AI like a pro—from perfect prompts to building real products. Practical skills for students, creators, and makers. No fluff, just skills that matter in 2026.",
  keywords: ["AI education", "prompting", "vibecoding", "AI tools", "learn AI"],
  openGraph: {
    title: "The Builders | Master AI. Build Smarter. Create Faster.",
    description:
      "Learn to work with AI like a pro—from perfect prompts to building real products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-[#1a1a1a]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <EmailCapturePopup />
      </body>
    </html>
  );
}
