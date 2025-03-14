/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import Button from '@/components/elements/Button';
import Image from '@/components/elements/Image';
import ModuleLayout from '@/components/elements/ModuleLayout';
import ScrollTrigger from '@/components/elements/ScrollTrigger';
import arkane from '@/public/arkane.svg';
import arkane2 from '@/public/arkane2.svg';
import hamburger from '@/public/hamburger.svg';
import hamburger2 from '@/public/hamburger2.svg';
import x from '@/public/x.svg';

export type NavParameters = {
  title: string;
};

type NavProps = ComponentProps<NavParameters>;

const Nav: React.FC<NavProps> = () => {
  const pathname = usePathname();
  const clearNavbar = pathname === '/' || pathname === '/services';
  const [belowTrigger, setBelowTrigger] = useState(false);
  const [showMenu, setShowMenu] = useState('mr-[-100em]');
  // navbar styling variables
  useLayoutEffect(() => {
    if (window.scrollY >= 70) setBelowTrigger(true);
  }, []);
  let navigationClassNames = 'md:absolute bg-white';
  if (clearNavbar) {
    if (belowTrigger) {
      navigationClassNames = 'fixed top-0 w-full bg-brand-purple-900 border-b-1 border-black z-30';
    } else {
      navigationClassNames = 'md:absolute bg-brand-purple-900 md:bg-transparent';
    }
  }
  const logoLine = clearNavbar ? 'divide-white/20' : 'divide-gray-600';
  const textColor = clearNavbar ? 'text-white' : 'text-brand-charcoal-800';
  const buttonColor = clearNavbar ? 'bg-gray-100' : 'bg-[#520067] text-white';
  const buttonShadow = clearNavbar ? 'bg-brand-purple-600' : 'bg-brand-purple-200';
  // opening and closing menu
  const toggleMenu = () => {
    setShowMenu(showMenu === 'mr-0' ? 'mr-[-100em]' : 'mr-0');
  };
  const keyboardInput = useRef<HTMLButtonElement>(null);
  const handleInput = () => {
    if (keyboardInput.current !== null) {
      keyboardInput.current.focus();
      setShowMenu(showMenu === 'mr-0' ? 'mr-[-100em]' : 'mr-0');
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowMenu('mr-[-100em]');
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ModuleLayout name="nav-bar">
      <header>
        <a href="#main" className=" sr-only focus:not-sr-only" type="button">
          Skip to main content
        </a>
        {clearNavbar && (
          <ScrollTrigger
            className="fixed top-0 z-30 w-full md:absolute"
            onEnter={() => belowTrigger && setBelowTrigger(false)}
            onExit={() => setBelowTrigger(true)}
          />
        )}
        <div className={`fixed top-0 z-30 w-full ${navigationClassNames}`}>
          <nav className="p-3 sm:p-4">
            <div className="flex justify-between">
              <div className={`flex items-center gap-3 md:divide-x ${logoLine}`}>
                <a href="/">
                  {clearNavbar ? (
                    <Image src={arkane} alt="Arkane" unoptimized priority />
                  ) : (
                    <Image src={arkane2} alt="Arkane" unoptimized priority />
                  )}
                </a>
                <p className={`hidden py-1 pl-3 font-lexend text-xs uppercase tracking-widest md:inline ${textColor}`}>
                  Digital Agency
                </p>
              </div>
              <div className="flex min-w-[11rem] items-center justify-end gap-3 sm:gap-6 md:w-fit">
                <a
                  type="button"
                  className="collapse relative w-[7rem] rounded-full font-display text-label-small uppercase sm:visible sm:w-fit"
                  href="/contact"
                >
                  <div className={`absolute inset-x-0  h-full rounded-full ${buttonShadow}`} />
                  <div
                    className={`relative transform rounded-full border-gray-500 px-1 py-2 text-center transition duration-200 hover:-translate-y-1 sm:px-4 ${buttonColor}`}
                  >
                    Have a question?
                  </div>
                </a>
                <button type="button" onClick={toggleMenu} ref={keyboardInput}>
                  {clearNavbar ? (
                    <Image alt="Open menu" src={hamburger} className="min-w-min" unoptimized />
                  ) : (
                    <Image alt="Open menu" src={hamburger2} className="min-w-min" unoptimized />
                  )}
                </button>
              </div>
            </div>
            <div>
              <div
                className={`fixed right-[-10rem] top-0 z-30 flex h-[105vh] w-[45rem] flex-col items-end gap-6 bg-[#460067E5]/90 backdrop-blur-lg transition-all duration-500 md:skew-x-[-12deg] ${showMenu}`}
              />
              {showMenu === 'mr-0' && (
                <button type="button" className="fixed right-0 top-0 z-0 h-screen w-full" onClick={() => handleInput()}>
                  {' '}
                </button>
              )}
              <div
                className={`fixed right-[-10rem] top-0 z-30 flex h-screen w-[45rem] flex-col items-end gap-6 transition-all duration-500 ${showMenu}`}
              >
                <div className="z-30 mr-44 mt-5 flex flex-col items-end gap-6 sm:mr-48 sm:mt-6 md:gap-8">
                  <button onClick={handleInput} type="button">
                    <Image src={x} alt="Close" unoptimized />
                  </button>
                  <div className="mt-0 flex flex-col items-end gap-2 text-h3 sm:-mt-6 sm:text-h2 md:gap-4">
                    <a
                      onClick={() => handleInput()}
                      href="/services"
                      className="rounded-lg p-2 text-right font-display text-white transition-all duration-300 hover:bg-white/10 hover:px-3 sm:text-h1"
                    >
                      Our services
                    </a>
                    <a
                      onClick={() => handleInput()}
                      href="/our-work"
                      className="rounded-lg p-2 text-right font-display text-white transition-all duration-300 hover:bg-white/10 hover:px-3 sm:text-h1"
                    >
                      Our work
                    </a>
                    <a
                      onClick={() => handleInput()}
                      href="/articles"
                      className="rounded-lg p-2 text-right font-display text-white transition-all duration-300 hover:bg-white/10 hover:px-3 sm:text-h1"
                    >
                      Articles
                    </a>
                    <a
                      onClick={() => handleInput()}
                      href="/about"
                      className="rounded-lg p-2 text-right font-display text-white transition-all duration-300 hover:bg-white/10 hover:px-3 sm:text-h1"
                    >
                      About us
                    </a>
                    <a
                      onClick={() => handleInput()}
                      href="/careers"
                      className="rounded-lg p-2 text-right font-display text-white transition-all duration-300 hover:bg-white/10 hover:px-3 sm:text-h1"
                    >
                      Careers
                    </a>
                    <div role="button" className="visible p-2 sm:collapse">
                      <Button link="/contact" text="Have a question?" onClick={() => setShowMenu('mr-[-100em]')} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </ModuleLayout>
  );
};

export default Nav;
