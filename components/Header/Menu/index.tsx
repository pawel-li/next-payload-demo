import React, { useState } from 'react';
import { MainMenu } from '../../../payload-types';
import { CMSLink } from '../../Link';

type MobileMenuProps = {
  navItems?: MainMenu["navItems"]
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }
  return (
    <div className="md:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <div className={`c-hamburger c-hamburger--criss-cross ${navShow ? 'active' : ''}`}>
          <div className="c-hamburger-inner">
            <span className="c-hamburger-bar"></span>
            <span className="c-hamburger-bar"></span>
            <span className="c-hamburger-bar"></span>
          </div>
        </div>
      </button>
      <div className={`absolute top-16 mt-2 left-0 z-50 h-[100vh] w-full transform duration-300 ease-in-out bg-white dark:bg-neutral-900 ${navShow ? 'translate-y-0' : 'translate-y-full'
        }`}>
        <nav className="fixed mt-8 w-full mx-10">
          {navItems?.map(({ link }, i) => {
            return (
              <div key={i} className="py-8">
                <div onClick={onToggleNav}>
                  <CMSLink key={i} {...link} className="font-nunito font-p-1 font-medium text-slate-600 hover:text-black hover:underline dark:text-gray-100" />
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
    // <Modal slug={slug} className={classes.mobileMenuModal}>
    //   <HeaderBar />

    //   <Gutter>
    //     <div className={classes.mobileMenuItems}>
    //       {navItems.map(({ link }, i) => {
    //         return (
    //           <CMSLink className={classes.menuItem} key={i} {...link} />
    //         )
    //       })}
    //     </div>
    //   </Gutter>
    // </Modal>
  )
}