'use client';

import { Fragment, ReactNode, useRef } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Header/Header';
import Cursor from '../StickyCursor/StickyCursor';

export function Layout({ children }: { children: ReactNode }) {
  const stickyElement = useRef<TCustomMotionDivProps>(null);
  return (
    <Fragment>
      <Header ref={stickyElement} />
      <div className={`mt-32`}>
        <Wrapper>{children}</Wrapper>
      </div>
      <Cursor stickyElement={stickyElement} />
    </Fragment>
  );
}
