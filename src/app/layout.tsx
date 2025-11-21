import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import NavProvider from "./context/NavContext";
import { ThemeProvider } from "@/components/theme-provider";

import Particles from "@/components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /* SEO */
  generator: "Next.js",
  applicationName: "Kayc Farias Portfolio site",
  keywords: [
    "Portifolio",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
  ],
  creator: "Kayc Farias",
  title: "Kayc Farias",
  description: "Kayc Farias Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Particles
          particleColors={["#858585", "#797979"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          particleHoverFactor={1}
          cameraDistance={50}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavProvider>
            <Navbar />
            {children}
          </NavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
