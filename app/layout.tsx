import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"], 
  variable: "--font-inter" 
});

const rajdhani = Rajdhani({ 
  weight: ['400', '600', '700'], 
  subsets: ["latin"],
  variable: "--font-rajdhani" 
});

export const metadata: Metadata = {
  title: "NEXUS CYBER LOUNGE | Премиальный компьютерный клуб",
  description: "Лучший компьютерный клуб в городе. Топовые ПК (RTX 5090), 360Hz мониторы, VIP комнаты, PS5 зоны и турниры. Забронируй место сейчас!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} ${rajdhani.variable} min-h-screen flex flex-col antialiased bg-background text-white`}>
        {/* Фоновые партиклы и свечение применяются глобально */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_50%)] opacity-20 pointer-events-none"></div>
        <div className="fixed inset-0 z-[-2] bg-background pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
