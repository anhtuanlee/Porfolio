'use client';
import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';
import NoiseBg from '../NoiseBg/NoiseBg';
import { useGlobalContext } from '@/context/store';
import Form from '../Form/Form';
import Menu from '../Header/components/Menu/Menu';
import Intro from '../Intro/Intro';

const cx = classNames.bind(styles);

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isForm, isOpenMenuHeader } = useGlobalContext();
  return (
    <div>
      {/* <GridDebug /> */}
      <Intro />
      <Menu />
      <NoiseBg />
      {isForm && <Form />}
      {children}
    </div>
  );
}
