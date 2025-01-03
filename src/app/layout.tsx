import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${urbanist.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
