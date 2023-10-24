import classNames from 'classnames/bind';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { IntroText } from '../../../public/access/icons';
import styles from './Intro.module.scss';

const cx = classNames.bind(styles);

export default function Intro() {
  const [couter, setCouter] = useState<number>(0);
  const introTextRef = useRef<null | SVGElement>(null);
  const couterRef = useRef<HTMLHeadingElement | null>(null);
  const containerIntroRef = useRef<HTMLDivElement>(null);

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
  }, [couter]);

  useEffect(() => {
    const listChilds = introTextRef.current
      ?.childNodes as NodeListOf<ChildNode>;

    listChilds.forEach((item, index) => {
      if (item instanceof SVGPathElement) {
        const lengthPath = item.getTotalLength().toString();
        gsap.set(item, {
          strokeDasharray: lengthPath,
          strokeDashoffset: lengthPath,
          opacity: 0,
          delay: 0,
          display: 'block',
        });
        gsap.to(item, {
          strokeDashoffset: 0,
          duration: 1,
          delay: 0.5 + 0.05 * index,
          opacity: 1,
          stagger: {
            amount: 0.6,
          },
          // ease: 'power1.inOut',
        });
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
      scale: 20,
      duration: 0.5,
      delay: 4,
      ease: 'power4.easeInOut',
      display: 'none',
    });
    gsap.to(containerIntroRef.current, {
      display: 'none',
      delay: 4.5,
      rotate: 180,
      duration: 0.5,
      opacity: 0,
    });
  }, [introTextRef, containerIntroRef]);
  return (
    <div
      ref={containerIntroRef}
      className="fixed inset-0 z-30  flex h-full w-full items-center justify-center bg-black"
    >
      <h3 ref={couterRef} className={cx('text-[4.5rem]', 'couter')}></h3>

      <div className="fixed z-20 flex h-auto w-full items-center justify-center">
        <IntroText classNames={cx('icon__text')} ref={introTextRef} />
      </div>
    </div>
  );
}
