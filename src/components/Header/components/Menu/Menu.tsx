import { ROUTE_PATH } from '@/constant/rout-path';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useGlobalContext } from '@/context/store';
import gsap from 'gsap';
import { Power2 } from 'gsap';
import { DATA_SOCIAL } from '@/data/data';
import ItemLink from '@/components/ItemLink/ItemLink';
import { useRefs } from '@/hooks/useRefs';

const cx = classNames.bind(styles);

export default function Menu() {
  const { isOpenMenuHeader, setIsOpenMenuHeader } = useGlobalContext();
  const [isTextHover, setIsTextHover] = useState<number | null>(null);
  const menuRef = useRef<any>();

  const { refsByKey: refSocial, setRef: setRefSocial } = useRefs();
  const { refsByKey: refHeader, setRef: setRefItemHeader } = useRefs();
  const { refsByKey: refBackground, setRef: setItemRefBackground } = useRefs();

  const containerMenu = useRef<any>();
  const handleMouseOver = (id: number) => {
    setIsTextHover(id);
  };
  const handleMouseLeave = (id: number) => {
    setIsTextHover(null);
  };
  const handleCloseMenu = () => {
    setIsOpenMenuHeader(false);
  };
  useLayoutEffect(() => {
    const refsSocialItems = Object.values(refSocial).filter(Boolean);
    const refsHeaderItems = Object.values(refHeader).filter(Boolean);
    const refsBackgroundItems = Object.values(refBackground).filter(Boolean);

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
      });
      // .reverse();

      refsBackgroundItems.forEach(item => {
        tl.from(item, {
          duration: 0.3,
          x: '100%',
          stagger: 0.1,
          ease: 'Expo.easeInOut',
        });
      });
      refsHeaderItems.forEach(item => {
        tl.from(
          item,
          {
            duration: 0.8,
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
            stagger: 0.1,
            ease: 'Expo.easeInOut',
          },
          '-=0.5',
        );
      });
    }, [menuRef]);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    menuRef.current && menuRef.current.reversed(!isOpenMenuHeader);
  }, [isOpenMenuHeader]);

  return (
    <div ref={containerMenu} className={cx('fullpage-menu')}>
      <div className={cx('menu-bg')}>
        {Array.from({ length: 3 }, (_, index) => index + 1).map(
          (item: any, index: number) => {
            return (
              <span
                className={cx('menu_item')}
                ref={element => setItemRefBackground(element, `${index}`)}
                key={index}
              ></span>
            );
          },
        )}
      </div>
      <div className="flex items-center justify-center">
        <nav className={cx('nav_container')}>
          <ul className="main-menu flex w-10/12 flex-col items-start justify-center gap-8 px-20">
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
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      onClick={handleCloseMenu}
                      className={`transition-all duration-300  ${
                        isTextHover === index ? 'font-reset' : ''
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
          <ul className={cx('social-links flex flex-row gap-4 ')}>
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
