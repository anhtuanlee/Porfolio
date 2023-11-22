'use client';

import { dataWork } from '@/data/data';
import ItemSelects from '../../../components/ItemSelects/ItemSelect';
import TitleSection from '../../../components/TitleSection/TitleSection';
import { useGlobalContext } from '../../../context/store';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useStore } from '@/context/stores';
import { useRefs } from '@/hooks/useRefs';
import gsap from 'gsap';
import SlideWrapper from '@/components/SlideWrapper/SliderWrapper';

export default function Work() {
  const t = useTranslations('Work');
  const { pathImgHover, isHoverImg } = useGlobalContext();
  const isOpenMenuHeader = useStore(state => state.isOpenMenuHeader);
  const sectionWorkRef = useRef<any>(null);
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
            duration: 0.15,
            autoAlpha: 1,
            ease: 'Expo.easeInOut',
            stagger: { amount: 0.5 },
          },
          isOpenMenuHeader ? 0 : 1,
        ).reverse();
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
            <figure className="overflow-hidden lg:w-1/2 lg:rounded-tr-[3rem]">
              {isHoverImg && (
                <Image fill loading="lazy" alt="img-demo" src={pathImgHover} />
              )}
            </figure>
          </section>
          <div className="w-full flex-shrink-0 lg:w-1/2">
            <SlideWrapper ref={el => setRefWork(el, '0')}>
              <TitleSection title={t('title_section')} />
            </SlideWrapper>
            <div
              className="no-scrollbar flex h-[50vh] w-full flex-col sm:overflow-scroll lg:pb-4
            "
            >
              {dataWork.map((data: IDataWorks, index: number) => {
                let id = 200 + index;
                return (
                  <SlideWrapper
                    key={index}
                    ref={el => setRefWork(el, `${index + 1}`)}
                  >
                    <ItemSelects
                      key={index}
                      title={data.title}
                      href={data.href}
                      type={data.type}
                      thumbNail={data.thumbNail}
                      isLastItem={index === dataWork.length - 1}
                      index={index}
                      listImgDetails={data.listImgDetails}
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
