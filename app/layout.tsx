import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Ashish Singh",
  description: "MERN stack developer exploring web automation, TypeScript, and modern frameworks like Next.js. Passionate about building scalable scrapers, full-stack apps, and clean UI experiences. Check out my latest projects on GitHub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>

          <LayoutWrapper>{children}</LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
