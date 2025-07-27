import type { Metadata } from 'next';
import '@/shared/globals.css';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { FontClassNames } from '@/shared/font';
import { ThemeProvider } from 'next-themes';
import { SITE_CONFIG } from '@/shared/constant';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    template: '%s | bluekite blog',
    default: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
    images: [
      {
        url: SITE_CONFIG.thumbnailURL,
        alt: 'blog thumbnail',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    google: 'notranslate',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='h-full scroll-my-20 scroll-smooth'
      suppressHydrationWarning
    >
      <body className={`${FontClassNames} flex min-h-screen flex-col`}>
        <ThemeProvider>
          <Header />
          <main className='container mx-auto flex flex-1 flex-col'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
