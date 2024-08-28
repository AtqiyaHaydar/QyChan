import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qy's Portfolio 2.0",
  description: "My Portfolio Website 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-satoshi'>
        {children}
      </body>
    </html>
  );
}
