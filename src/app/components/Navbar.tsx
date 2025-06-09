'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => (
  <Link
    href={href}
    className={`px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${className}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white dark:bg-slate-900 shadow-md'
        : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold font-display" style={{ color: '#1E90FF' }}>Athena</span>
              <span className="ml-2 text-gray-500 dark:text-gray-400">for Eugene</span>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/platform">Platform</NavLink>
            <NavLink href="/issues">Issues</NavLink>
            <NavLink href="/get-involved">Get Involved</NavLink>
            <NavLink href="/media">Media</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/donate"
              className="btn-secondary"
            >
              Donate
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 shadow-lg">
          <NavLink href="/about" className="block">About</NavLink>
          <NavLink href="/platform" className="block">Platform</NavLink>
          <NavLink href="/issues" className="block">Issues</NavLink>
          <NavLink href="/get-involved" className="block">Get Involved</NavLink>
          <NavLink href="/media" className="block">Media</NavLink>
          <NavLink href="/contact" className="block">Contact</NavLink>
          <NavLink href="/faq" className="block">FAQ</NavLink>
          <Link
            href="/donate"
            className="block px-3 py-2 text-secondary-600 dark:text-secondary-400 font-medium hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;