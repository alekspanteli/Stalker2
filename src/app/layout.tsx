import type { Metadata } from "next";
import { Oswald, Rubik } from "next/font/google";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl — Official Website",
  description:
    "Discover the massive Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Pre-order now.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-S2.png",
  },
  openGraph: {
    title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    description:
      "Discover the massive Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${rubik.variable} min-h-screen bg-stalker-dark text-stalker-cream antialiased`}>
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
