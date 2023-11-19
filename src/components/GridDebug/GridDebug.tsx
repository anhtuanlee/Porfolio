'use client';

import React from 'react';
import classNames from 'classnames/bind';

import s from './GridDebug.module.scss';

const cx = classNames.bind(s);

const GridDebug = () => {
  const [isGridShow, setIsGridShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'G') {
        setIsGridShow(!isGridShow);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGridShow]);

  return (
    <div className={cx('grid-debug', `${isGridShow ? '' : 'hidden'}`)}>
      <div className="sm:grid-cols-16 xs:grid-cols-6 grid">
        <div className={cx('col-span-1', 'debug_col')} />
        <div className={cx('col-span-1', 'debug_col')} />
        <div className={cx('col-span-1', 'debug_col')} />
        <div className={cx('col-span-1', 'debug_col')} />
        <div className={cx('col-span-1', 'debug_col')} />
        <div className={cx('col-span-1', 'debug_col')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
        <div className={cx('debug_col', 'xs:hidden col-span-1 sm:block')} />
      </div>
    </div>
  );
};

export default GridDebug;
