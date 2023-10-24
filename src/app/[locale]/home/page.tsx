'use client';

import { ROUTE_PATH } from '@/constant/rout-path';
import classNames from 'classnames/bind';
import { useTranslations } from 'next-intl';
import ItemLink from '../../../components/ItemLink/ItemLink';
import styles from './Home.module.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGlobalContext } from '@/context/store';
import SlideWrapper from '@/components/SlideWrapper/SliderWrapper';

const cx = classNames.bind(styles);

export default function Home() {
  const t = useTranslations('Home');
  const { isOpenMenuHeader } = useGlobalContext();
  const menuRef = useRef<any>();
  const homeItemRef = Array.from({ length: 5 }, (_, index) => index).map(() =>
    useRef<HTMLDivElement>(null),
  );
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      menuRef.current = tl;
      homeItemRef.forEach(item => {
        tl.to(
          item.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.1,
            delay: 0,
            autoAlpha: 1,
            ease: 'Expo.easeInOut',
            stagger: { amount: 0.5 },
          },
          isOpenMenuHeader ? 0 : 1,
        ).reverse();
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    menuRef.current && menuRef.current.reversed(isOpenMenuHeader);
  }, [isOpenMenuHeader]);
  return (
    <div className={cx('p-section')}>
      <div className=" flex flex-col items-center justify-center gap-8 ">
        <div>
          <h3
            className={cx(
              'flex flex-col items-center gap-2 text-2xl leading-4 text-textMain',
              'home_item',
            )}
          >
            <SlideWrapper>
              <div
                ref={homeItemRef[0]}
                className={cx(
                  'flex flex-col items-center justify-center whitespace-nowrap md:flex-row',
                  'home_item_a',
                )}
              >
                <span className="font-reset text-stroke">
                  {t('text_h3')} &nbsp;
                </span>
                <span>{t('text_name')} </span>
              </div>
            </SlideWrapper>
            <SlideWrapper>
              <div
                ref={homeItemRef[1]}
                className={cx(
                  'flex flex-col items-center justify-center text-center md:flex-row',
                  'home_item_a',
                )}
              >
                <span className="font-reset text-stroke whitespace-nowrap ">
                  {t('text_sub')} &nbsp;
                </span>

                <span> {t('text_sub_name')}</span>
              </div>
            </SlideWrapper>
          </h3>

          <div className="mt-8 flex flex-col items-center justify-center  gap-4 md:whitespace-nowrap">
            <SlideWrapper>
              <p className={cx('home_item_a')} ref={homeItemRef[2]}>
                {t('text_description')}{' '}
              </p>
            </SlideWrapper>
            <SlideWrapper>
              <p className={cx('home_item_a')} ref={homeItemRef[3]}>
                {t('text_sub_description')}
              </p>
            </SlideWrapper>
          </div>
        </div>

        <SlideWrapper>
          <div
            ref={homeItemRef[4]}
            className={cx(
              'flex flex-col gap-8 md:flex-row md:gap-4',
              'home_item_a',
            )}
          >
            <SlideWrapper>
              <ItemLink title={t('title_link_1')} href={ROUTE_PATH.WORK} />
            </SlideWrapper>
            <SlideWrapper>
              <ItemLink title={t('title_link_2')} href={ROUTE_PATH.CONTACT} />
            </SlideWrapper>
          </div>
        </SlideWrapper>
      </div>
    </div>
  );
}
