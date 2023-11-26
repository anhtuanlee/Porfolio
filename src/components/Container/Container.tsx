import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Container({ children, classNames  }: TContainerLayout) {
  return <div className={cx('containerModule')}>{children}</div>;
}
