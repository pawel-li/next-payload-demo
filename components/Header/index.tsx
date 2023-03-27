import Link from 'next/link';
import React from 'react';
import { MainMenu } from '../../payload-types';
import { Gutter } from '../Gutter';
import { CMSLink } from '../Link';
import { Logo } from '../Logo';

import classes from './index.module.scss';
import { MobileMenu } from './Menu';

type HeaderBarProps = {
  children?: React.ReactNode;
  navItems?: MainMenu["navItems"]
}
export const HeaderBar: React.FC<HeaderBarProps> = ({ children, navItems }) => {
  return (
    <header className={classes.header}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Logo />
        </Link>

        {children}

        <MobileMenu navItems={navItems}/>
      </Gutter>
    </header>
  )
}

export const Header: React.FC<{ mainMenu: MainMenu }> = ({ mainMenu }) => {
  const navItems = mainMenu?.navItems || [];

  return (
    <>
      <HeaderBar navItems={navItems}>
        <nav className={classes.nav}>
          {navItems.map(({ link }, i) => {
            return (
              <CMSLink key={i} {...link} className="font-nunito font-p-1 font-medium text-slate-600 hover:text-black hover:underline dark:text-gray-100 sm:p-4" />
            )
          })}
        </nav>
      </HeaderBar>
    </>
  )
}
