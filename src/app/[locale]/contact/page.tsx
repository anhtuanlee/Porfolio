'use client';

import { dataContact } from '@/data/data';
import TitleSection from '../../../components/TitleSection/TitleSection';
import ContactItems from './Items/ContactItems';
import { useTranslations } from 'next-intl';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Container from '@/components/Container/Container';

const cx = classNames.bind(styles);

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <Container>
      <div className="relative z-[1]  mx-[1rem] mt-[30vh] sm:mx-[section] lg:mt-[20vh] xl:mx-auto xl:w-[80vw]">
        <div className="border-b-[0.3rem] border-l-0 border-r-0 border-t-0 border-solid border-white">
          <TitleSection title={t('title_section')} />
        </div>
        <div className="mt-10 flex w-full flex-col gap-20 lg:max-w-[80%] lg:flex-row lg:justify-between ">
          {dataContact.map((item, index) => {
            return (
              <ContactItems key={index} title={item.title} links={item.links} />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
