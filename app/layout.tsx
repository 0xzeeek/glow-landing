import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfPro = localFont({
  src: "./fonts/SFPro-regular.otf",
  variable: "--font-main",
  weight: "100 900",
});
const dgmTypeset = localFont({
  src: "./fonts/DGMTypeset-regular.otf",
  variable: "--font-mono",
  weight: "100 900",
});

const diatypeRoundedRegular = localFont({
  src: "./fonts/ABCDiatypeRounded-Regular.otf",
  variable: "--font-diatype-rounded",
  weight: "100 900",
});

const diatypeRoundedBold = localFont({
  src: "./fonts/ABCDiatypeRounded-Bold.otf",
  variable: "--font-diatype-rounded-bold",
  weight: "100 900",
});

const diatypeRoundedMedium = localFont({
  src: "./fonts/ABCDiatypeRounded-Medium.otf",
  variable: "--font-diatype-rounded-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Glow - The new way to trade culture",
  description: "Your own currency. Built with your fans.",
  keywords: ["glow", "culture", "trading", "currency", "fans", "community"],
  openGraph: {
    title: "Glow - The new way to trade culture",
    description: "Your own currency. Built with your fans.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow - The new way to trade culture",
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
        className={`${sfPro.variable} ${dgmTypeset.variable} ${diatypeRoundedRegular.variable} ${diatypeRoundedBold.variable} ${diatypeRoundedMedium.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
