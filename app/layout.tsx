import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Arka — Novel Studio",
  description: "Write from your phone. Human polygon UI.",
  manifest: "/manifest.json",
};
export const viewport: Viewport = { themeColor: "#fafaf9" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen mesh-bg">{children}</body>
    </html>
  );
}
