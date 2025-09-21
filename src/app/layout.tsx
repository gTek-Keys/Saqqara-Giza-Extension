import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saqqara-Giza Extension",
  description: "Fullstack AI-powered design suite with React, Next.js, Supabase, Tailwind, and generative AI engines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
