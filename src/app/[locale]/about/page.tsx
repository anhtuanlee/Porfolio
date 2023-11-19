'use client';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import TitleSection from '../../../components/TitleSection/TitleSection';
import Button from '../../../components/Button/Button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/Container/Container';

const cx = classNames.bind(styles);
export default function About() {
  const t = useTranslations('About');
  return (
    <Container>
      <div
        className={cx(
          'mx-section flex  flex-col-reverse gap-4 sm:mt-[30vh] sm:flex-row sm:justify-between lg:gap-8',
        )}
      >
        <div className={cx('z-[1] flex flex-col gap-4 sm:w-[60%] lg:w-[80%]')}>
          <div className="border-b-[0.3rem] border-l-0 border-r-0 border-t-0 border-solid border-white">
            <TitleSection title={t('title_section')} />
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <p>{t('title_description')}</p>
            <p>{t('title_description_sub_1')}</p>
            <p>{t('title_description_sub_2')}</p>
            <p>{t('title_description_sub_3')}</p>
          </div>
          <div className="-z-[1] flex w-[30rem] flex-row items-center justify-between gap-2 overflow-hidden rounded-full bg-scdark ">
            <Button
              title=""
              className={cx('btn_dual_first', 'btn_first')}
              dowload
              href="/access/file/cv_leanhtuan_fresher_fe.pdf"
            />
            <Button
              title=""
              className={cx('btn_dual_seconds', 'btn_seconds')}
              to="/"
            />
          </div>
        </div>

        <div className="md:1/5 my-auto flex w-full justify-center sm:w-2/5">
          <figure className="as relative aspect-3/4 w-full max-w-[60vw] overflow-hidden rounded-3xl">
            <Image
              fill
              layout="fill"
              objectFit="cover"
              alt="girl"
              src="/access/images/venn.jpg"
            />
          </figure>
        </div>
      </div>
    </Container>
  );
}
