'use client';

import { dataContact } from '@/data/data';
import TitleSection from '../../../components/TitleSection/TitleSection';
import ContactItems from './Items/ContactItems';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <div className="mx-[1rem] mt-[30vh] sm:mx-[section] lg:mt-[20vh] xl:mx-auto xl:w-[80vw]">
      <div className="border-b-[0.1rem] border-solid border-white">
        <TitleSection title={t('title_section')} />
      </div>
      <div className="mt-10 flex w-full flex-col gap-10 lg:max-w-4xl lg:flex-row lg:justify-between ">
        {dataContact.map((item, index) => {
          return (
            <ContactItems key={index} title={item.title} links={item.links} />
          );
        })}
      </div>
    </div>
  );
}
