'use client';
import { ROUTE_PATH } from '@/constant/rout-path';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Nav() {
  const t = useTranslations('Nav');
  return (
    <nav className="flex flex-row gap-8  font-medium mix-blend-difference">
      <Link className="text-white" href={ROUTE_PATH.WORK}>
        {t('work')}
      </Link>
      <Link className="text-white" href={ROUTE_PATH.ABOUT}>
        {t('about')}
      </Link>
      <Link className="text-white" href={ROUTE_PATH.CONTACT}>
        {t('contact')}
      </Link>
    </nav>
  );
}
