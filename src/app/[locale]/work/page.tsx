'use client';

import Container from '@/components/Container/Container';
import ImageSlide from '@/components/ImagSlide';
import SlideWrapper from '@/components/SlideWrapper/SliderWrapper';
import { useStore } from '@/context/stores';
import { DATA_PROJECTS } from '@/data/data';
import { useRefs } from '@/hooks/useRefs';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';
import { useEffect, useLayoutEffect, useRef } from 'react';
import ItemSelects from '../../../components/ItemSelects/ItemSelect';
import TitleSection from '../../../components/TitleSection/TitleSection';

export default function Work() {
  const t = useTranslations('Work');
  const { isOpenMenuHeader, setPathImgHover, data, isHoverImg } = useStore();
  const sectionWorkRef = useRef<any>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const { refsByKey: refsWork, setRef: setRefWork } = useRefs();

  useLayoutEffect(() => {
    const refs = Object.values(refsWork).filter(Boolean);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      sectionWorkRef.current = tl;
      refs.forEach(item => {
        const itemChild = item?.children[0] as HTMLDivElement;

        tl.to(
          itemChild,
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            autoAlpha: 1,
            delay: isOpenMenuHeader ? 0 : 0.5,
            ease: 'Expo.easeInOut',

            stagger: { amount: 0.5 },
          },
          isOpenMenuHeader ? 0 : 1,
        ).reverse();

        tl.to(workRef.current, {
          width: '100%',
          duration: 0.5,
        });
      });
    });

    return () => ctx.revert();
  }, [isOpenMenuHeader, refsWork]);
  useEffect(() => {
    sectionWorkRef.current && sectionWorkRef.current.reversed(isOpenMenuHeader);
  }, [isOpenMenuHeader]);

  return (
    <Container>
      <div className="mx-[1rem] mt-[30vh] sm:mx-[section]  ">
        <div className="lg:flex lg:h-[65vh] lg:flex-row lg:justify-between lg:gap-10">
          <section className="hidden lg:flex lg:h-full lg:w-1/2 lg:items-center lg:justify-center">
            <ImageSlide href={data?.path} alt={data?.title ?? ''} />
          </section>
          <div className="w-full flex-shrink-0 lg:w-1/2">
            <div
              ref={workRef}
              className="w-0 border-b-[0.3rem] border-l-0 border-r-0 border-t-0 border-solid border-white"
            >
              <SlideWrapper ref={el => setRefWork(el, '0')}>
                <TitleSection title={t('title_section')} />
              </SlideWrapper>
            </div>
            <div
              className="no-scrollbar flex h-[50vh] w-full flex-col sm:overflow-scroll lg:pb-4
            "
            >
              {DATA_PROJECTS.map((data, index) => {
                return (
                  <SlideWrapper
                    key={index}
                    ref={el => setRefWork(el, `${index + 1}`)}
                  >
                    <ItemSelects
                      key={index}
                      title={data.title}
                      href={`/work/${data.key}`}
                      type={data.category}
                      thumbNail={data.thumbnail}
                      index={index}
                    />
                  </SlideWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
