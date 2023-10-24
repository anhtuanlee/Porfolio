'use client';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import TitleSection from '../../../components/TitleSection/TitleSection';
import Button from '../../../components/Button/Button';
import { useTranslations } from 'next-intl';

const cx = classNames.bind(styles);
export default function About() {
  const t = useTranslations('About');
  return (
    <div
      className={cx(
        'mx-section flex  flex-col-reverse gap-4 sm:flex-row sm:justify-between lg:gap-8',
      )}
    >
      <div className={cx('z-[1] flex flex-col gap-4 sm:w-[60%] lg:w-[75%]')}>
        <div className="border-b-[0.1rem] border-solid border-white">
          <TitleSection title={t('title_section')} />
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <p>{t('title_description')}</p>
          <p>{t('title_description_sub_1')}</p>
          <p>{t('title_description_sub_2')}</p>
          <p>{t('title_description_sub_3')}</p>
        </div>
        <div className="-z-[1] flex w-[17rem] flex-row items-center justify-between gap-2 overflow-hidden rounded-full bg-scdark p-2">
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

      <div className="md:1/4 my-auto w-full sm:w-2/5">
        <figure
          className={cx(
            ' relative -z-10 h-0 overflow-hidden rounded-3xl pb-[150.25%]',
          )}
        >
          <img
            className="absolute inset-0 h-full w-full   object-cover "
            alt="girl"
            src="../access/images/venn.jpg"
          />
        </figure>
      </div>
    </div>
  );
}
