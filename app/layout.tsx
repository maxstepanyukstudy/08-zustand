import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "NoteHub is a simple and efficient personal notes manager ",
  openGraph: {
    title: "NoteHub",
    description: "NoteHub is a simple and efficient personal notes manager ",
    url: "", // todo: after deploy
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: "1471",
        height: "980",
        alt: "NoteHub Logo",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
          {modal}
        </TanStackProvider>
      </body>
    </html>
  );
}
