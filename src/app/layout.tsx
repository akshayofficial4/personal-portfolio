import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/Components/Background";
import LenisProvider from "@/Components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.akshaydev.in"),
  title: "Akshay Sunil | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
  keywords: [
    "Akshay Sunil",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
  ],
  openGraph: {
    title: "Akshay Sunil | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    url: "https://akshaydev.in",
    siteName: "Akshay Sunil",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Sunil | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, Express.js and MongoDB.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-neutral-950 text-white">
        <Background />
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
