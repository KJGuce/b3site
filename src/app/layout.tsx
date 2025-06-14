import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "B3 Connect Group",
  description: "B3 Connect Group - Building Better Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-white">
        <Navigation />
        <main className="min-h-[calc(100vh-5rem)]">{children}</main>
      </body>
    </html>
  );
}
