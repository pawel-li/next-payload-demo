'use client';

import { GridProvider } from '@faceless-ui/css-grid';
import { ModalContainer, ModalProvider } from '@faceless-ui/modal';
import React, { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainMenu } from '../../payload-types';
import cssVariables from '../../cssVariables';
import '../../css/app.scss';
import {usePathname, useSearchParams} from 'next/navigation'

type Props = {
  mainMenu: MainMenu
  children: React.ReactNode
}

const Layout = ({
  mainMenu,
  children,
}: Props): React.ReactElement => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
   useEffect(() => {
     window.scrollTo(0,0);
   }, [pathname, searchParams])

  return (
    <div className="flex h-screen flex-col justify-between font-nunito">
    <React.Fragment>
      <GridProvider
        breakpoints={{
          s: cssVariables.breakpoints.s,
          m: cssVariables.breakpoints.m,
          l: cssVariables.breakpoints.l,
        }}
        colGap={{
          s: '24px',
          m: '48px',
          l: '48px',
          xl: '72px',
        }}
        cols={{
          s: 4,
          m: 4,
          l: 12,
          xl: 12,
        }}
      >
        <ModalProvider transTime={0} zIndex="var(--modal-z-index)">
          <Header mainMenu={mainMenu} />
          {children}
          <ModalContainer />
          <Footer />
        </ModalProvider>
      </GridProvider>
    </React.Fragment>
    </div>
  )
}

export default Layout
