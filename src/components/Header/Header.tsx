/* eslint-disable react/display-name */

'use client';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { forwardRef, useEffect, useState } from 'react';
import { IconsLogo } from '../../../public/access/icons';
import styles from './Header.module.scss';
import NavRight from './components/Nav/NavRight';
import { useStore } from '@/context/stores';
const cx = classNames.bind(styles);

const Header = forwardRef<any, any>((props, ref) => {
  const [isScrolHeader, setIsScrollHeader] = useState<boolean>(false);
  const { setIdCursorHover } = useStore();

  const handleWindowScroll = (e: Event) => {
    if (window.scrollY > 133) {
      setIsScrollHeader(true);
    } else {
      setIsScrollHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', e => handleWindowScroll(e));
  }, []);

  return (
    <header
      className={`${cx(
        'header',
      )} font-custom fixed top-0 z-10 mx-auto flex w-full flex-row  justify-between  py-8  
      ${isScrolHeader ? 'backdrop-blur-sm' : ''}`}
    >
      <Link
        href="/"
        className="flex flex-row items-center justify-center gap-2 "
        onMouseEnter={() => setIdCursorHover('icon')}
        onMouseLeave={() => setIdCursorHover(null)}
      >
        <span>
          <IconsLogo />
        </span>

        <h4 className="font-sans font-semibold text-white">Venn</h4>
      </Link>
      <NavRight forwardRef={ref} />
    </header>
  );
});

export default Header;
