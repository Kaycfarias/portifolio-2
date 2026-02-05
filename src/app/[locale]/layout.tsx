import "@/app/globals.css";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import NavProvider from "@/app/context/NavContext";
import { ThemeProvider } from "@/components/theme-provider";

import Particles from "@/components/particles-background";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

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
          <NavProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Navbar />
              {children}
            </NextIntlClientProvider>
          </NavProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
      </body>
    </html>
  );
}
