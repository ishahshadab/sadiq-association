import type { Metadata, Viewport } from 'next';
// @ts-ignore - CSS import
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { companyConfig } from '@/config/company';

export const metadata: Metadata = {
  metadataBase: new URL(companyConfig.seo.siteUrl),
  title: {
    default: companyConfig.seo.defaultTitle,
    template: `%s | ${companyConfig.name}`,
  },
  description: companyConfig.seo.defaultDescription,
  keywords: companyConfig.seo.keywords,
  authors: [{ name: companyConfig.founder.name }],
  creator: companyConfig.name,
  publisher: companyConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: companyConfig.seo.siteUrl,
    siteName: companyConfig.name,
    title: companyConfig.seo.defaultTitle,
    description: companyConfig.seo.defaultDescription,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: companyConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: companyConfig.seo.defaultTitle,
    description: companyConfig.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B4E8A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}