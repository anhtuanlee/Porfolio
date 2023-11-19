'use client';
import { useGlobalContext } from '@/context/store';
import classNames from 'classnames/bind';
import BlockCanvas from '../BlockCanvas/BlockCanvas';
import Form from '../Form/Form';
import GridDebug from '../GridDebug/GridDebug';
import Menu from '../Header/components/Menu/Menu';
import NoiseBg from '../NoiseBg/NoiseBg';
import styles from './Wrapper.module.scss';
import Cursor from '../StickyCursor/StickyCursor';
import Intro from '../Intro/Intro';

const cx = classNames.bind(styles);

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { isForm, isOpenMenuHeader } = useGlobalContext();

  return (
    <div>
      <GridDebug />
      <Intro />
      <Menu />
      <NoiseBg />
      <BlockCanvas />
      {isForm && <Form />}
      {children}
    </div>
  );
}
