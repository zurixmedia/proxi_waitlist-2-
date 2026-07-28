import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Proxi | Trusted Local Services",
    template: "%s | Proxi",
  },
  description:
    "Proxi connects customers with trusted local professionals in a simple, modern marketplace.",
  keywords: ["Proxi", "local services", "trusted professionals", "waitlist"],
  metadataBase: new URL("https://proxi.example.com"),
  openGraph: {
    title: "Proxi",
    description: "Find trusted local professionals with confidence.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(manrope.variable)}>
      <body>{children}</body>
    </html>
  );
}
