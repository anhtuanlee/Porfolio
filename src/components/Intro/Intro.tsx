import classNames from 'classnames/bind';
import gsap, { Power0 } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { IntroText, IntroTextMobile } from '../../../public/access/icons';
import styles from './Intro.module.scss';
import useWindowResize from '@/hooks/useWindowResize';

const cx = classNames.bind(styles);

export default function Intro() {
  const [couter, setCouter] = useState<number>(0);
  const introTextRef = useRef<null | SVGElement>(null);
  const couterRef = useRef<HTMLHeadingElement | null>(null);
  const containerIntroRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useWindowResize();
  useEffect(() => {
    let delay = Math.floor(Math.random() * 20) * 10;
    const timer = setInterval(() => {
      setCouter(prev => {
        const newValue = (prev += Math.floor(Math.random() * 10) + 1);
        return newValue > 100 ? 100 : newValue;
      });
      if (couterRef.current) {
        couterRef.current.textContent = couter.toString() + '%';
      }
      if (couter === 100) {
        clearInterval(timer);
        return;
      }
    }, delay);

    return () => clearInterval(timer);
  }, [couter, isMobile]);

  useEffect(() => {
    const listChilds = introTextRef.current
      ?.childNodes as NodeListOf<ChildNode>;

    listChilds.forEach((item, index) => {
      if (item instanceof SVGPathElement) {
        const lengthPath = item.getTotalLength().toString();
        const dataText = item.dataset.text;

        gsap.set(item, {
          strokeDasharray: lengthPath,
          strokeDashoffset: lengthPath,
          opacity: 0,
          delay: 0,
          display: 'block',
        });
        gsap.to(item, {
          strokeDashoffset: 0,
          duration: 2,
          delay: 2 - 0.15 * index,
          opacity: 1,
          stagger: {
            amount: 0.5,
          },
        });
        if (isMobile) {
          gsap.to(item, {
            fill: dataText ? '#fff' : 'transparent',
            delay: 4,
          });
        }
      }
    });
    gsap.to(couterRef.current, {
      delay: 3.5,
      duration: 0.5,
      opacity: 0,
    });
    gsap.set(introTextRef.current, {
      fill: '#fff',
      delay: 4,
    });
    gsap.to(introTextRef.current, {
      scale: isMobile ? 0.8 : 0.5,
      duration: 0.4,
      delay: 4,
      ease: 'power4.easeInOut',
      display: 'none',
    });
    gsap.to(containerIntroRef.current, {
      background: 'transparent',
      delay: 4.5,
      duration: 0.5,
      ease: Power0.easeNone,
    });
    gsap.to(containerIntroRef.current, {
      display: 'none',
      delay: 4.6,
      duration: 1,
    });
  }, [introTextRef, containerIntroRef, isMobile]);
  return (
    <div
      ref={containerIntroRef}
      className="fixed inset-0 z-30 flex h-full w-full items-center justify-center bg-black"
    >
      <h2 ref={couterRef} className={cx('couter')}></h2>

      <div className="fixed z-20 flex h-auto w-full items-center justify-center">
        {isMobile ? (
          <IntroTextMobile classNames={cx('icon__text')} ref={introTextRef} />
        ) : (
          <IntroText classNames={cx('icon__text')} ref={introTextRef} />
        )}
      </div>
    </div>
  );
}
