import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MainMenu } from '../../payload-types';
import { CMSLink } from '../Link';
import { Logo } from '../Logo';
import { SectionContainer } from '../SectionContainer';
import { MobileMenu } from './Menu';

type HeaderBarProps = {
  children?: React.ReactNode;
  navItems?: MainMenu["navItems"]
}
export const HeaderBar: React.FC<HeaderBarProps> = ({ children, navItems }) => {
  const [stickyClass, setStickyClass] = useState('shadow-none border-transparent py-5');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      // window height changed for the demo
      // eslint-disable-next-line no-unused-expressions
      windowHeight && windowHeight > 50 ? setStickyClass('shadow-[inset_0_-1px_0_rgba(25,25,60,0.08)] py-4') : setStickyClass('shadow-none border-transparent py-5');
    }
  };

  return (
    <div className="flex flex-col justify-between font-nunito">
      <header className={`transition-all ease-in-out duration-500 fixed  ${stickyClass} top-0 z-50 flex w-full justify-center bg-white/75 dark:bg-neutral-900/95 backdrop-blur-md`}>
        <SectionContainer>
          <div className='flex justify-between items-center w-full'>
            <Link href="/">
              <Logo />
            </Link>

            {children}

            <MobileMenu navItems={navItems} />
          </div>
        </SectionContainer>
      </header>
    </div>
  )
}

export const Header: React.FC<{ mainMenu: MainMenu }> = ({ mainMenu }) => {
  const navItems = mainMenu?.navItems || [];

  return (
    <>
      <HeaderBar navItems={navItems}>
        <nav className="hidden md:flex items-center">
          {navItems.map(({ link }, i) => {
            return (
              <CMSLink key={i} {...link} className="font-nunito font-p-1 ml-4 font-medium text-slate-600 hover:text-black hover:underline dark:text-gray-100" />
            )
          })}
        </nav>
      </HeaderBar>
    </>
  )
}