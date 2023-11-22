'use client';

import SlideWrapper from '@/components/SlideWrapper/SliderWrapper';
import { ROUTE_PATH } from '@/constant/rout-path';
import { useStore } from '@/context/stores';
import { useRefs } from '@/hooks/useRefs';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';
import { useEffect, useLayoutEffect, useRef } from 'react';
import ItemLink from '../../../components/ItemLink/ItemLink';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

export default function Home() {
  const t = useTranslations('Home');
  const isOpenMenuHeader = useStore(state => state.isOpenMenuHeader);
  const setIdCursor = useStore(state => state.setIdCursorHover);
  const menuRef = useRef<any>();
  const { refsByKey: refHomes, setRef: setRefHomes } = useRefs();
  const { refsByKey: refHeroText, setRef: setRefHero } = useRefs();

  useLayoutEffect(() => {
    const refs = Object.values(refHomes).filter(Boolean);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      menuRef.current = tl;

      // tl.to(textHeroRef.current, {
      //   width: '100%',
      //   duration: 3,
      //   delay: 3.5,
      //   ease: 'power4.inOut',
      // });
      refs.forEach(item => {
        const itemChild = item?.children[0] as HTMLDivElement;
        tl.to(
          itemChild,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 1,
            autoAlpha: 1,
            ease: 'Expo.easeInOut',
            stagger: { amount: 0.5 },
          },
          0,
        ).reverse();
      });
    });

    return () => ctx.revert();
  }, [refHomes]);
  useLayoutEffect(() => {
    const textHeroRef = Object.values(refHeroText);

    textHeroRef.forEach((item, index) => {
      gsap.to(item, {
        width: index === 0 ? '100%' : '0%',
        duration: 3,
        stagger: {
          amount: 0,
        },
        delay: isOpenMenuHeader ? 0 : 3.5,
        ease: 'power4.inOut',
      });
    });
  }, [isOpenMenuHeader, refHeroText]);
  useEffect(() => {
    menuRef.current && menuRef.current.reversed(isOpenMenuHeader);
  }, [isOpenMenuHeader]);
  return (
    <div
      className={cx(
        'flex h-[80vh] w-[100vw] items-center justify-center p-section ',
      )}
    >
      <div className="flex flex-col items-center justify-center gap-8 ">
        <div>
          <h3
            className={cx(
              'flex flex-col items-center gap-2 leading-4',
              'home_item',
            )}
          >
            <div
              className={cx(
                'flex flex-col items-center justify-center whitespace-nowrap md:flex-row',
              )}
            >
              {/* <h3 className="font-reset text-stroke">
                  {t('text_h3')} &nbsp;
                </h3> */}
              {/* <h3>{t('text_name')} </h3> */}
              <div
                className="flex flex-col  items-center gap-8 sm:flex-row"
                onMouseEnter={() => setIdCursor('hero')}
                onMouseLeave={() => setIdCursor(null)}
              >
                <SlideWrapper ref={element => setRefHomes(element, '0')}>
                  <h1
                    data-text="A.TUAN"
                    className={cx('text_hero_left', 'text-stroke')}
                  >
                    A.TUAN
                    <span
                      ref={el => setRefHero(el, '1')}
                      data-text="A.TUAN"
                      className={cx('text_hero_sub', 'text-stroke')}
                    >
                      A.TUAN
                    </span>
                  </h1>
                </SlideWrapper>
                <span className="hidden sm:block">&nbsp;</span>
                <SlideWrapper ref={element => setRefHomes(element, '1')}>
                  <h1
                    className={cx('text_hero_right', 'text-stroke')}
                    data-text="VENN"
                  >
                    VENN
                    <span
                      ref={el => setRefHero(el, '2')}
                      className={cx('text_hero_sub', 'text-stroke')}
                    >
                      VENN
                    </span>
                  </h1>
                </SlideWrapper>
              </div>
            </div>
            {/* <SlideWrapper ref={element => setRefHomes(element, '1')}>
              <div
                className={cx(
                  'flex flex-col items-center justify-center text-center md:flex-row',
                )}
              >
                <h3 className="font-reset text-stroke whitespace-nowrap ">
                  {t('text_sub')} &nbsp;
                </h3>

                <h3> {t('text_sub_name')}</h3>
              </div>
            </SlideWrapper> */}
          </h3>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:whitespace-nowrap">
            <SlideWrapper ref={element => setRefHomes(element, '3')}>
              <p>{t('text_description')} </p>
            </SlideWrapper>
          </div>
        </div>

        <div className={cx('flex flex-col gap-8 md:flex-row md:gap-4')}>
          <SlideWrapper ref={element => setRefHomes(element, '4')}>
            <ItemLink title={t('title_link_1')} href={ROUTE_PATH.WORK} />
          </SlideWrapper>

          <SlideWrapper ref={element => setRefHomes(element, '5')}>
            <ItemLink title={t('title_link_2')} href={ROUTE_PATH.ABOUT} />
          </SlideWrapper>
        </div>
      </div>
    </div>
  );
}
