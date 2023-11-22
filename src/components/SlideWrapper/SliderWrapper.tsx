/* eslint-disable react/display-name */

import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const SlideWrapper = forwardRef<any, any>(({ children }, ref) => {
  return (
    <div ref={ref} className={cx('item_wrapper')}>
      <div className={cx('item_slide')}>{children}</div>
    </div>
  );
});
export default SlideWrapper;
