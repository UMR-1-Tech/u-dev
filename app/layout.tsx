import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI SEO Agent API",
  description: "Production AI SEO analysis backend",
  verification: {
    google: "6xfYgjaJ0yWozda", // ← replace with your full content value
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
