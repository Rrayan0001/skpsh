import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Under Construction",
  description: "We are working hard to bring you a great experience. Please check back soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta name="theme-color" content="#024ad8" />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="w-full bg-[var(--hp-canvas)] border-b border-[var(--hp-hairline)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center">
            <a href="/" className="inline-flex items-center gap-3">
              <img src="/favicon_io/bg_removed_logo.png" alt="Logo" className="h-8 sm:h-10 object-contain" />
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
