import './globals.css'
import type { Metadata } from 'next'
import { dir } from "i18next";
import { Inter } from 'next/font/google'
import { languages } from "@/i18n/settings";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
