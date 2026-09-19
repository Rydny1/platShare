import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "PlateShare Admin",
  description: "Campus food rescue operations dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
