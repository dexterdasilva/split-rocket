import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Anton } from "next/font/google";

const brandFont = Anton({ weight: "400", subsets: ["latin"], variable: "--font-brand", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html className={brandFont.variable}><body>{children}<Analytics /><SpeedInsights /></body></html>;
}
