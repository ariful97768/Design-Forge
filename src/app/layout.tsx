import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design forge",
  description: "Design & Develop on demand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
