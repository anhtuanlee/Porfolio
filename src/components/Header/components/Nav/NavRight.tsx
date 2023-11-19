'use client';
import { useLocale } from 'next-intl';

import { useGlobalContext } from '@/context/store';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import Link from 'next-intl/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useLayoutEffect, useRef, forwardRef } from 'react';
import styles from './Nav.module.scss';
import Framer from '@/components/Framer/Framer';

const cx = classNames.bind(styles);

export default function NavRight({ forwardRef }: { forwardRef: any }) {
  const locale = useLocale();
  const selectedLayoutSegment = useSelectedLayoutSegment() || '';
  const navRef = useRef<any>(null);
  const { isOpenMenuHeader, setIsOpenMenuHeader } = useGlobalContext();
  const handleOpenMenu = () => {
    setIsOpenMenuHeader(!isOpenMenuHeader);
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    let ctx = gsap.context(() => {
      const itemBlock1 = document.querySelector('.classBlockSub1');
      const itemBlock2 = document.querySelector('.classBlockSub2');
      const itemBlock3 = document.querySelector('.classBlockSub3');
      const itemBlock4 = document.querySelector('.icon__block');

      navRef.current = tl
        .to(itemBlock4, { rotation: 60, x: 30, duration: 0.3 })
        .reverse();
      tl.to(itemBlock1, { x: -1.5, y: -1.5, duration: 0.3 }, 0);
      tl.to(itemBlock2, { x: -1.5, y: 1.5, duration: 0.3 }, 0);
      tl.to(itemBlock3, { x: 1.5, y: 1.5, duration: 0.3 }, 0);
    }, []);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    navRef.current && navRef.current.reversed(!isOpenMenuHeader);
  }, [isOpenMenuHeader]);
  return (
    <nav
      className="flex flex-row items-center justify-center gap-2   font-medium"
      ref={navRef}
    >
      <Link
        href={`/${selectedLayoutSegment}`}
        locale={locale === 'vi' ? 'en' : 'vi'}
      >
        {locale === 'vi' ? 'EN' : 'VI'}
      </Link>

      <Framer>
        <span
          className={cx('icon_menu', 'relative z-10 cursor-pointer')}
          onClick={handleOpenMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="80"
            height="32"
            x="0"
            y="0"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            className={'icon__menu'}
          >
            <g className={'icon__block'}>
              <path
                fill="#fff"
                d="M27 2h-8.59c-1.66 0-3 1.35-3 3v8.59c0 1.66 1.34 3 3 3H27c1.65 0 3-1.34 3-3V5c0-1.65-1.35-3-3-3z"
                opacity="1"
              ></path>
            </g>

            <g>
              <path
                d="M10.83 4.76H5c-1.65 0-3 1.35-3 3v5.83c0 1.66 1.35 3 3 3h5.83c1.66 0 3-1.34 3-3V7.76c0-1.65-1.34-3-3-3z"
                fill="#fff"
                opacity="1"
                className="classBlockSub1"
              ></path>

              <path
                d="M10.83 18.17H5c-1.65 0-3 1.34-3 3V27c0 1.65 1.35 3 3 3h5.83c1.66 0 3-1.35 3-3v-5.83c0-1.66-1.34-3-3-3z"
                fill="#fff"
                opacity="1"
                className="classBlockSub2"
              ></path>

              <path
                d="M24.24 18.17h-5.83c-1.66 0-3 1.34-3 3V27c0 1.65 1.34 3 3 3h5.83c1.65 0 3-1.35 3-3v-5.83c0-1.66-1.35-3-3-3z"
                fill="#fff"
                opacity="1"
                className="classBlockSub3"
              ></path>
            </g>
          </svg>
          <div ref={forwardRef} className={cx('bounds')}></div>
        </span>
      </Framer>
    </nav>
  );
}
