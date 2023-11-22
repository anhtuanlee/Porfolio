import Header from '@/components/Header/Header';
import '@/styles/global.scss';
import '@/styles/index.scss';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Eczar, Roboto_Serif, Work_Sans } from 'next/font/google';
import Wrapper from '../../components/Wrapper/Wrapper';
import { GlobalContextProvider } from '../../context/store';
import { Layout } from '@/components/Layout/Layout';

//Text Hightlight Eczar
const worksans = Work_Sans({ subsets: ['latin'], variable: '--font-worksans' });
const eczar = Eczar({ subsets: ['latin'], variable: '--font-eczar' });
const roboto = Roboto_Serif({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Venn Portfolio',
  icons: {
    icon: '/flat.ico',
    apple: '/flat.ico',
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
            {
              <GlobalContextProvider>
                <Layout>{children}</Layout>
              </GlobalContextProvider>
            }
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
