import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farmer Circle v2",
  description: "Next.js + TypeScript upgrade for Farmer Circle"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
