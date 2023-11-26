import { Layout } from '@/components/Layout/Layout';
import '@/styles/index.scss';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Eczar, Roboto_Serif, Work_Sans } from 'next/font/google';

//Text Hightlight Eczar
const worksans = Work_Sans({ subsets: ['latin'], variable: '--font-worksans' });
const eczar = Eczar({ subsets: ['latin'], variable: '--font-eczar' });
const roboto = Roboto_Serif({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Venn Portfolio',
  icons: {
    apple: [{ url: '/access/icons/favicon.ico' }],
    icon: [{ url: '/access/icons/favicon.ico' }],
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Venn',
    'Le Anh Tuan',
    'Portfolio',
  ],
  authors: [{ name: 'Le Anh Tuan' }, { name: 'Venn' }],
  creator: 'Venn',
  publisher: 'Venn ',
  applicationName: 'Portfolio',
  openGraph: {
    title: 'Portfolio Venn',
    images: [
      {
        url: '/access/images/img_portfolio_1.png',
        width: 800,
        height: 600,
        alt: 'My Portfolio',
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body
        className={`${worksans.variable} ${eczar.variable} ${roboto.variable} text-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className={`${'font-studiofeixen'}`}>
            {<Layout>{children}</Layout>}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
