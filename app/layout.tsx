import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sylvanite Capital",
  description: "A private investment firm that makes long-term investments in small and lower middle-market businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

