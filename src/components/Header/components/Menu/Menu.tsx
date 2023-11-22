import { ROUTE_PATH } from '@/constant/rout-path';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useGlobalContext } from '@/context/store';
import gsap, { Power4 } from 'gsap';
import { Power2 } from 'gsap';
import { DATA_SOCIAL } from '@/data/data';
import ItemLink from '@/components/ItemLink/ItemLink';
import { useRefs } from '@/hooks/useRefs';
import { useStore } from '@/context/stores';

const cx = classNames.bind(styles);

export default function Menu() {
  const isOpenMenuHeader = useStore(state => state.isOpenMenuHeader);
  const setIsOpenMenuHeader = useStore(state => state.setIsOpenMenuHeader);
  const setIdMenuHover = useStore(state => state.setIdCursorHover);
  const idMenuHover = useStore(state => state.idCursorHover);

  const menuRef = useRef<any>();
  const bgMenuRef = useRef<HTMLDivElement>(null);
  const { refsByKey: refSocial, setRef: setRefSocial } = useRefs();
  const { refsByKey: refHeader, setRef: setRefItemHeader } = useRefs();
  const { refsByKey: refBackground, setRef: setItemRefBackground } = useRefs();

  const containerMenu = useRef<any>();
  const handleMouseOver = (id: number) => {
    setIdMenuHover(id);
  };
  const handleMouseLeave = (id: number) => {
    setIdMenuHover(null);
  };
  const handleCloseMenu = () => {
    setIsOpenMenuHeader(false);
  };
  useLayoutEffect(() => {
    const refsSocialItems = Object.values(refSocial).filter(Boolean);
    const refsHeaderItems = Object.values(refHeader).filter(Boolean);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      menuRef.current = tl
        .set(containerMenu.current, {
          display: 'none',
        })
        .reverse();
      tl.to(containerMenu.current, {
        duration: 0,
        display: 'flex',
        ease: 'Expo.easeInOut',
        delay: 1,
      });
      // .reverse();

      tl.to(bgMenuRef.current, {
        opacity: 1,
        duration: 1,
        ease: Power4.easeInOut,
      });
      refsHeaderItems.forEach(item => {
        tl.from(
          item,
          {
            duration: 0.6,
            y: '100%',
            stagger: 0.2,
            ease: 'Expo.easeInOut',
          },
          '-=0.5',
        );
      });
      refsSocialItems.forEach(item => {
        tl.from(
          item,
          {
            duration: 0.6,
            y: '-100%',
            opacity: 0,
            stagger: { amount: 0.5 },
            ease: 'Expo.easeInOut',
          },
          '-=0.5',
        );
      });
    }, [menuRef]);
    return () => ctx.revert();
  }, [refHeader]);

  useEffect(() => {
    menuRef.current && menuRef.current.reversed(!isOpenMenuHeader);
  }, [isOpenMenuHeader]);

  return (
    <div ref={containerMenu} className={cx('fullpage-menu')}>
      <div ref={bgMenuRef} className={cx('menu-bg')}></div>
      <div className="flex items-center justify-center">
        <nav className={cx('nav_container')}>
          <ul className="main-menu flex   flex-col items-start justify-center gap-8 px-20">
            {Object.entries(ROUTE_PATH).map((item, index: number) => {
              return (
                <li
                  key={index}
                  className={cx('inline-block flex-shrink-0', 'nav_item')}
                >
                  <Link
                    className={cx('nav_item_a')}
                    href={item[1]}
                    ref={element => setRefItemHeader(element, `${index}`)}
                  >
                    <h2
                      onMouseOver={() => handleMouseOver(index + 1)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      onClick={handleCloseMenu}
                      className={`transition-all duration-300  ${
                        idMenuHover === index + 1 ? 'font-reset' : ''
                      }`}
                    >
                      {item[0]}
                    </h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={cx('header-nav-footer')}>
          <ul className={cx('social-links flex flex-row gap-16 ')}>
            {DATA_SOCIAL.map((item: any, index: number) => {
              return (
                <span
                  ref={element => setRefSocial(element, `${index}`)}
                  key={index}
                >
                  <ItemLink key={index} title={item.title} href={item.href} />
                </span>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
