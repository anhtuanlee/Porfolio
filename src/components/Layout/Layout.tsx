'use client';

import { Fragment, ReactNode, useRef } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Header/Header';
import Cursor from '../StickyCursor/StickyCursor';
import useWindowResize from '@/hooks/useWindowResize';

export function Layout({ children }: { children: ReactNode }) {
  const stickyElement = useRef<TCustomMotionDivProps>(null);
  const { isMobile } = useWindowResize();
  return (
    <Fragment>
      <Header ref={stickyElement} />
      <div className={`mb-4 mt-60`}>
        <Wrapper>{children}</Wrapper>
      </div>
      {!isMobile && <Cursor stickyElement={stickyElement} />}
    </Fragment>
  );
}
