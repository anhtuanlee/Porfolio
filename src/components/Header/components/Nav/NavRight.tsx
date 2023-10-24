'use client';
import { useLocale } from 'next-intl';

import {
  useParams,
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from 'next/navigation';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next-intl/link';
import { IconMenu } from '../../../../../public/access/icons';
import styles from './Nav.module.scss';
import classNames from 'classnames/bind';
import gsap from 'gsap';
import { useGlobalContext } from '@/context/store';

const cx = classNames.bind(styles);

export default function NavRight(props: any) {
  const locale = useLocale();
  const selectedLayoutSegment = useSelectedLayoutSegment() || '';
  const navRef = useRef<any>(null);
  const { isOpenMenuHeader, setIsOpenMenuHeader } = useGlobalContext();
  const handleOpenMenu = () => {
    setIsOpenMenuHeader(!isOpenMenuHeader);
  };

  useLayoutEffect(() => {
    const option: any = { rotation: 60, x: 30, duration: 0.3 };
    const tl = gsap.timeline();
    let ctx = gsap.context(() => {
      navRef.current = tl.to('.icon__block', option).reverse();
      const itemBlock1 = document.querySelector('.classBlockSub1');
      const itemBlock2 = document.querySelector('.classBlockSub2');
      const itemBlock3 = document.querySelector('.classBlockSub3');
      tl.to(itemBlock1, { x: -1.5, y: -1.5, duration: 0.3 }, 0);
      tl.to(itemBlock2, { x: -1.5, y: 1.5, duration: 0.3 }, 0);
      tl.to(itemBlock3, { x: 1.5, y: 1.5, duration: 0.3 }, 0);
    }, [navRef]);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    navRef.current && navRef.current.reversed(!isOpenMenuHeader);
  }, [isOpenMenuHeader]);
  return (
    <nav
      className="flex flex-row items-center justify-center gap-8 text-xl font-medium"
      ref={navRef}
    >
      <Link
        href={`/${selectedLayoutSegment}`}
        locale={locale === 'vi' ? 'en' : 'vi'}
      >
        {locale === 'vi' ? 'EN' : 'VI'}
      </Link>

      <span className="cursor-pointer" onClick={handleOpenMenu}>
        <IconMenu
          classParents={cx('icon__menu')}
          classChild={cx('icon__block')}
        />
      </span>
    </nav>
  );
}
