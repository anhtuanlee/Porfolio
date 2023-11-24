'use client';

import Container from '@/components/Container/Container';
import TitleSection from '@/components/TitleSection/TitleSection';
import { DATA_PROJECTS } from '@/data/data';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import SlideWrapper from '@/components/SlideWrapper/SliderWrapper';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useRefs } from '@/hooks/useRefs';
import { useStore } from '@/context/stores';
import gsap, { Expo } from 'gsap';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
const cx = classNames.bind(styles);

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
ScrollTrigger.normalizeScroll(true);
export default function Page() {
  const { key } = useParams();
  const workRef = useRef<any>();
  const projectRef = useRef<HTMLDivElement>(null);
  const { refsByKey: refWork, setRef: setRefWork } = useRefs();
  const { refsByKey: refScrollStrigger, setRef: setRefScrollStrigger } =
    useRefs();
  const { isOpenMenuHeader, setIdCursorHover } = useStore();

  useSmoothScroll();

  const getDataFromKey = (key: string | string[]) => {
    const data = DATA_PROJECTS.filter(item => item.key === key);
    return data[0];
  };

  const data = getDataFromKey(key);

  useLayoutEffect(() => {
    const refs = Object.values(refWork).filter(Boolean);
    const refsImg = Object.values(refScrollStrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      workRef.current = tl;

      refs.forEach((item, index) => {
        const itemChild = item?.children[0] as any;

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
          isOpenMenuHeader ? 0 : 0.5,
        ).reverse();
      });

      refsImg.forEach(item => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item as gsap.DOMTarget,
            toggleActions: 'play none none reverse',
            start: 'top 80%',
            end: '70% 80%',
            //   scrub: 1,
          },
        });
        tl.to(
          item,
          0.5,
          {
            clipPath: !isOpenMenuHeader
              ? 'polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)'
              : 'polygon(0% 0%,0% 0%, 0% 100%, 0% 100%)',
            ease: 'expo.out',
          },
          '-= 1',
        ).reverse();

        tl.to(
          item?.children[0] as HTMLElement,
          1.5,
          {
            clipPath: !isOpenMenuHeader
              ? 'polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)'
              : 'polygon(0% 0%,0% 0%, 0% 100%, 0% 100%)',
            ease: 'expo.out',
          },
          '-= 0.5',
        ).reverse();
        tl.from(
          item?.children[0].children[0] as HTMLImageElement,
          1.5,
          {
            scale: 1.5,
            filter: 'blur(15px)',
            ease: 'expo.out',
          },
          '-=1.7',
        );
      });
      tl.to(
        window,
        {
          duration: 2,
          scrollTo: {
            y: 0,
            autoKill: true,
          },
          ease: 'power4.inOut',
        },
        -2,
      );

      tl.to(projectRef.current, {
        width: '100%',
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, [isOpenMenuHeader]);

  useEffect(() => {
    workRef.current && workRef.current.reversed(isOpenMenuHeader);
  }, [isOpenMenuHeader]);

  return (
    <Container>
      <div className="h-full w-full p-8 ">
        <SlideWrapper ref={el => setRefWork(el, '0')}>
          <div className="flex w-full justify-center ">
            <figure className="relative mb-20 aspect-3/2 w-full  overflow-hidden  rounded-3xl sm:w-3/5 ">
              <Image
                loading="lazy"
                fill
                layout="fill"
                objectFit="cover"
                className={cx('item_img', 'absolute w-auto')}
                alt={data.key}
                src={data.thumbnail}
              />
            </figure>
          </div>
        </SlideWrapper>
        <div
          ref={projectRef}
          className="w-0 border-b-[0.3rem] border-l-0 border-r-0 border-t-0 border-solid border-white"
        >
          <SlideWrapper ref={el => setRefWork(el, '1')}>
            <TitleSection
              title={data.title}
              classNames="text-[30px] whitespace-nowrap overflow-hidden text-ellipsis whitespace-nowrap block"
            />
          </SlideWrapper>
        </div>
        <SlideWrapper ref={el => setRefWork(el, '2')}>
          <div className="mt-20">
            <h5>Category: </h5>
            <span className={cx('project_item')}> {data.category} </span>
          </div>
        </SlideWrapper>
        <SlideWrapper ref={el => setRefWork(el, '3')}>
          <div className="mt-20">
            <h5>Visit: </h5>
            <span
              onMouseEnter={() => setIdCursorHover('link')}
              onMouseLeave={() => setIdCursorHover(null)}
              className={cx(
                'project_item',
                'overflow-hidden text-ellipsis whitespace-nowrap',
              )}
            >
              {data.link}
            </span>
          </div>
        </SlideWrapper>
        <SlideWrapper ref={el => setRefWork(el, '4')}>
          <div className="mt-20">
            <h5>Tech: </h5>
          </div>
        </SlideWrapper>
        <SlideWrapper ref={el => setRefWork(el, `{5}`)}>
          <ul className="flex flex-wrap">
            {data.technology.map((item, index) => {
              if (index < data.technology.length - 1) {
                return (
                  <span key={index} className={cx('project_item')}>
                    {item},&nbsp;
                  </span>
                );
              } else {
                return (
                  <span key={index} className={cx('project_item')}>
                    {item}
                  </span>
                );
              }
            })}
          </ul>
        </SlideWrapper>

        <SlideWrapper ref={el => setRefWork(el, '6')}>
          <div className="mt-20">
            <h5>Description: </h5>
            <p>{data.description}</p>
          </div>
        </SlideWrapper>

        <div className="mt-40">
          <div className="grid  grid-cols-1 items-center justify-center  gap-10 sm:grid-cols-2 sm:gap-20">
            {data.images.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cx(
                    'wrapper_img',
                    'relative mb-20 aspect-3/2 w-full  overflow-hidden  rounded-xl',
                  )}
                  ref={el => setRefScrollStrigger(el, `${index + 1}`)}
                >
                  <figure
                    className={cx(
                      ' relative mb-20 aspect-3/2 w-full  overflow-hidden  rounded-xl',
                      'wrapper_img_inner',
                    )}
                  >
                    <Image
                      fill
                      layout="fill"
                      loading="lazy"
                      objectFit="cover"
                      className={cx('item_img', 'absolute w-auto')}
                      alt={item}
                      src={item}
                    />
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
