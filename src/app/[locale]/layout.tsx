import Navbar from "@/components/navbar";
import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
    </NextIntlClientProvider>
  );
}
