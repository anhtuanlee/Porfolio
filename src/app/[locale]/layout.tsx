import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Eczar, Roboto_Serif, Work_Sans } from 'next/font/google';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '@/components/Header/Header';
import { GlobalContextProvider, useGlobalContext } from '../../context/store';
import { NextIntlClientProvider, useLocale } from 'next-intl';

//Text Hightlight Eczar
const worksans = Work_Sans({ subsets: ['latin'], variable: '--font-worksans' });
const eczar = Eczar({ subsets: ['latin'], variable: '--font-eczar' });
const roboto = Roboto_Serif({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Venn Portfolio',
  icons: {
    icon: 'flat.ico',
    apple: 'flat.ico',
  },
};
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'vi' }];
}

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
    <html lang={locale}>
      <body
        className={`${worksans.variable} ${eczar.variable} ${roboto.variable} bg-bgColor text-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main
            className={`${
              locale === 'vi' ? 'font-roboto' : 'font-studiofeixen'
            }`}
          >
            {
              <GlobalContextProvider>
                <Header />
                <div className={`mt-32`}>
                  <Wrapper>{children}</Wrapper>
                </div>
              </GlobalContextProvider>
            }
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
