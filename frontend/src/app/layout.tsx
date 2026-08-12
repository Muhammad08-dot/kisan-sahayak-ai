import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kisan Sahayak AI - Farmer's Production AI Advisor",
  description: "AI-Powered Crop Disease Diagnosis, Smart Irrigation, and Market Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur">
      <body className="antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
