'use client';
import classNames from 'classnames/bind';
import BlockCanvas from '../BlockCanvas/BlockCanvas';
import GridDebug from '../GridDebug/GridDebug';
import Menu from '../Header/components/Menu/Menu';
import Intro from '../Intro/Intro';
import NoiseBg from '../NoiseBg/NoiseBg';
import styles from './Wrapper.module.scss';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <GridDebug />
      <Intro />
      <Menu />
      <NoiseBg />
      <BlockCanvas />
      {children}
    </div>
  );
}
