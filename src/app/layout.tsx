import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Bottle Spinner Game Online | Free Spin The Bottle",
  description: "Play the ultimate Bottle Spinner Game online for free! Perfect for party games, truth or dare, and having fun with friends. Experience realistic glass physics, premium UI, and interactive animations. Play the best bottle spinner online today.",
  keywords: ["bottle spinner", "bottle spinner game", "bottle spinner online", "spin the bottle", "party game", "realistic bottle physics", "online bottle spinner", "glassmorphism game"],
  authors: [{ name: "Bottle Spinner Team" }],
  openGraph: {
    title: "Bottle Spinner Game Online - Realistic, Fun, Interactive",
    description: "The most premium bottle spinning experience on the web. Play the bottle spinner game online now!",
    url: "https://bottle-spinner-game.vercel.app",
    siteName: "Bottle Spinner Online",
    images: [
      {
        url: "https://bottle-spinner-game.vercel.app/og-image.png", // You can add a real OG image later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bottle Spinner Game",
    description: "Realistic 3D Bottle Spinning Experience.",
    images: ["https://bottle-spinner-game.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bottle-spinner-game.vercel.app" />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
