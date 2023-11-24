'use client';
import { useStore } from '@/context/stores';
import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

export default function ItemSelects({
  title,
  href,
  type,
  thumbNail,
  index,
}: IDataWorks) {
  const { setIdCursorHover, setPathImgHover, data, isHoverImg, setIsHover } =
    useStore();

  const marqueTextRef = useRef<HTMLSpanElement>(null);
  const marQueContainerRef = useRef<HTMLHeadingElement>(null);

  const handleHover = () => {
    setIdCursorHover('icon');
    setIsHover(true);
    setPathImgHover({ path: thumbNail, title });
  };
  const handleLeave = () => {
    setIdCursorHover(null);
    setPathImgHover(undefined);
    setIsHover(false);
  };

  return (
    <Link href={href}>
      <div
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleLeave()}
        className={cx(
          `mt-8  flex w-full flex-row items-center justify-between pb-8 md:mt-12 md:pb-12 lg:px-8 lg:pb-12`,
          'item_select_work',
        )}
      >
        <div className="flex flex-row items-center ">
          <div className={' mr-4 block '}>
            <h4 className="inline-block">→</h4>
          </div>
          <h5
            ref={marQueContainerRef}
            className={cx(
              'flex min-w-[60%] cursor-pointer items-center whitespace-nowrap',
              'marquee-container',
            )}
          >
            <span className={cx('marquee-text')} ref={marqueTextRef}>
              {title}
            </span>
          </h5>
        </div>
        <p className="text-right ">{type}</p>
      </div>
    </Link>
  );
}
