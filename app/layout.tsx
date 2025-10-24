import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const diatype = localFont({
  src: "./fonts/ABCDiatypeVariable.ttf",
  variable: "--font-diatype",
  weight: "200 900", // the full range
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glow",
  description: "Your own currency. Built with your fans.",
  keywords: ["glow", "culture", "trading", "currency", "fans", "community"],
  openGraph: {
    title: "Glow",
    description: "Your own currency. Built with your fans.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow",
    description: "Your own currency. Built with your fans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${diatype.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
