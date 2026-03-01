import type { Metadata } from "next";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

export const metadata: Metadata = {
  title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl — Official Website",
  description:
    "Discover the massive Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Pre-order now.",
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
      <body className="min-h-screen bg-stalker-dark text-stalker-cream antialiased">
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  );
}
