'use client';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import TitleSection from '../../../components/TitleSection/TitleSection';
import Button from '../../../components/Button/Button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useRefs } from '@/hooks/useRefs';
import { useStore } from '@/context/stores';
import SlideWrapper from '@/components/SlideWrapper/SliderWrapper';
import gsap from 'gsap';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Metadata } from 'next';

const cx = classNames.bind(styles);

export default function About() {
  const t = useTranslations('About');

  const sectionContactRef = useRef<any>(null);
  const isOpenMenuHeader = useStore(state => state.isOpenMenuHeader);
  const headerAboutRef = useRef<HTMLDivElement>(null);
  const { refsByKey: refsAbout, setRef: setRefAbout } = useRefs();
  useSmoothScroll();
  useLayoutEffect(() => {
    const refs = Object.values(refsAbout).filter(Boolean);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      sectionContactRef.current = tl;

      refs.forEach((item, index) => {
        const itemChild = item?.children[0] as HTMLDivElement;

        tl.to(
          itemChild,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: isOpenMenuHeader ? 0 : 0.5,
            autoAlpha: 1,
            ease: 'Expo.easeInOut',
            stagger: { amount: 0.5 },
          },
          isOpenMenuHeader ? 0 : 1,
        ).reverse();
      });
      tl.to(headerAboutRef.current, {
        width: '100%',
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    sectionContactRef.current &&
      sectionContactRef.current.reversed(isOpenMenuHeader);
  }, [isOpenMenuHeader]);
  return (
    <Container>
      <div
        className={cx(
          'mx-section flex flex-col-reverse gap-4 sm:mt-[30vh]  sm:flex-row sm:items-center sm:justify-between lg:gap-8',
        )}
      >
        <div
          className={cx(
            'flex flex-col justify-evenly gap-8 sm:h-[70vh] sm:w-[60%] lg:w-[70%]',
          )}
        >
          <div
            ref={headerAboutRef}
            className="w-0 border-b-[0.3rem] border-l-0 border-r-0 border-t-0 border-solid border-white"
          >
            <SlideWrapper ref={el => setRefAbout(el, '0')}>
              <TitleSection title={t('title_section')} />
            </SlideWrapper>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <SlideWrapper ref={el => setRefAbout(el, '1')}>
              <p>{t('title_description')}</p>
            </SlideWrapper>
            <SlideWrapper ref={el => setRefAbout(el, '2')}>
              <p>{t('title_description_sub_1')}</p>
            </SlideWrapper>
            <SlideWrapper ref={el => setRefAbout(el, '3')}>
              <p>{t('title_description_sub_2')}</p>
            </SlideWrapper>
            <SlideWrapper ref={el => setRefAbout(el, '4')}>
              <p>{t('title_description_sub_3')}</p>
            </SlideWrapper>
          </div>
          <SlideWrapper
            classNames="leading-extra-loose"
            ref={el => setRefAbout(el, '5')}
          >
            <Button
              title="Dowload Resume"
              type="secondary"
              dowload
              href="/access/file/cv_leanhtuan_fresher_fe.pdf"
            />
          </SlideWrapper>
        </div>

        <SlideWrapper ref={el => setRefAbout(el, '6')}>
          <div className="my-auto  flex w-full  justify-center">
            <figure className=" relative  w-full overflow-hidden rounded-3xl pb-[172%] sm:w-[40vh]">
              <Image
                fill
                layout="fill"
                objectFit="cover"
                alt="boy"
                className="w-auto"
                src="/access/images/venn.jpg"
              />
            </figure>
          </div>
        </SlideWrapper>
      </div>
    </Container>
  );
}
