'use client';

import { dataContact } from '@/data/data';
import TitleSection from '../../../components/TitleSection/TitleSection';
import ContactItems from './Items/ContactItems';
import { useTranslations } from 'next-intl';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Container from '@/components/Container/Container';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useRefs } from '@/hooks/useRefs';
import { useStore } from '@/context/stores';
import SlideWrapper from '@/components/SlideWrapper/SliderWrapper';
import gsap from 'gsap';

const cx = classNames.bind(styles);

export default function Contact() {
  const t = useTranslations('Contact');
  const sectionContactRef = useRef<any>(null);
  const isOpenMenuHeader = useStore(state => state.isOpenMenuHeader);
  const headerContactRef = useRef<HTMLDivElement>(null);
  const { refsByKey: refsContact, setRef: setRefContact } = useRefs();

  useLayoutEffect(() => {
    const refs = Object.values(refsContact).filter(Boolean);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      sectionContactRef.current = tl;
      console.log(refs);

      refs.forEach((item, index) => {
        const itemChild = item?.children[0] as HTMLDivElement;

        tl.to(
          itemChild,
          {
            y: 0,
            opacity: 1,
            duration: 0.15,
            delay: isOpenMenuHeader ? 0 : 1,
            autoAlpha: 1,
            ease: 'Expo.easeInOut',
            stagger: { amount: 0.5 },
          },
          isOpenMenuHeader ? 0 : 1,
        ).reverse();
      });
      tl.to(headerContactRef.current, {
        width: '100%',
        duration: 1,
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
      <div className="relative z-[1]  mx-[1rem] mt-[30vh] sm:mx-[section] lg:mt-[20vh] xl:mx-auto xl:w-[80vw]">
        <div
          ref={headerContactRef}
          className=" w-0 border-b-[0.3rem] border-l-0 border-r-0 border-t-0 border-solid border-white"
        >
          <SlideWrapper ref={el => setRefContact(el, '0')}>
            <TitleSection title={t('title_section')} />
          </SlideWrapper>
        </div>
        <div className="mt-10 flex w-full flex-col gap-20 lg:max-w-[80%] lg:flex-row lg:justify-between ">
          {dataContact.map((item, index) => {
            return (
              <SlideWrapper
                key={index}
                ref={el => setRefContact(el, `${index + 1}`)}
              >
                <ContactItems title={item.title} links={item.links} />
              </SlideWrapper>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
