import "@/app/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import NavProvider from "@/app/context/NavContext";
import { ThemeProvider } from "@/components/theme-provider";

import Particles from "@/components/particles-background";
import { GoogleAnalytics } from "@next/third-parties/google";

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

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
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
          <NavProvider>{children}</NavProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
      </body>
    </html>
  );
}
