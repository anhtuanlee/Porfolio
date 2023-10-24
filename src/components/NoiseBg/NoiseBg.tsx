import classNames from 'classnames/bind';
import styles from './NoiseBg.module.scss';
const cx = classNames.bind(styles);

export default function NoiseBg() {
  return <div className={cx('noise_bg')}> </div>;
}
