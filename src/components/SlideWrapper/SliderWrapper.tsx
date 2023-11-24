/* eslint-disable react/display-name */

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const SlideWrapper = forwardRef<any, any>(({ children, classNames }, ref) => {
  return (
    <div ref={ref} className={cx('item_wrapper', `${classNames}`)}>
      <div className={cx('item_slide', `${classNames}`)}>{children}</div>
    </div>
  );
});
export default SlideWrapper;
