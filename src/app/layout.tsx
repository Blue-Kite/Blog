import type { Metadata } from 'next';
import '@/shared/globals.css';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { FontClassNames } from '@/shared/font';
import { ThemeProvider } from 'next-themes';
import { SITE_CONFIG } from '@/shared/constant';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    template: '%s | bluekite blog',
    default: SITE_CONFIG.title,
  },
  description: '개발 지식과 경험을 공유하는 블로그입니다.',
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
    <html lang='en' className='h-full scroll-my-20 scroll-smooth' suppressHydrationWarning>
      <body className={`${FontClassNames} flex min-h-screen flex-col`}>
        <ThemeProvider>
          <Header />
          <main className='container mx-auto flex flex-1 flex-col'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
