'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-2 sm:pt-3 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 rounded-2xl flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-canvas/90 dark:bg-card/90 backdrop-blur-xl border border-border/80 shadow-lg shadow-black/5'
            : 'bg-canvas/75 dark:bg-canvas/75 backdrop-blur-md border border-border-subtle/80 shadow-xs'
        }`}
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border border-border-subtle bg-surface flex items-center justify-center p-0.5 group-hover:border-terracotta/50 transition-colors">
            <Image
              src="/images/logo.png"
              alt="Diya Chanda Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-text-main group-hover:text-terracotta transition-colors">
            Diya Chanda
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block group-hover:scale-150 transition-transform" />
        </a>

        {/* Desktop Menu Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-1 text-xs font-medium text-text-sub">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 py-1.5 rounded-lg hover:text-terracotta hover:bg-surface/80 transition-all duration-200 relative group font-mono text-[13px]"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-px h-4 bg-border-subtle" />

          {/* Quick Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface hover:bg-card border border-border-subtle hover:border-terracotta/40 text-text-main hover:text-terracotta text-xs font-mono font-semibold shadow-xs transition-all duration-200"
          >
            <span>CV</span>
            <ArrowUpRight size={12} className="text-terracotta" />
          </a>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border border-border-subtle bg-surface hover:border-terracotta/40 text-text-sub hover:text-terracotta transition-all shadow-xs cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun size={15} className="stroke-[2.2]" />
            ) : (
              <Moon size={15} className="stroke-[2.2]" />
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border border-border-subtle bg-surface text-text-sub hover:text-terracotta transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border border-border-subtle bg-surface text-text-main cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {open && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden max-w-5xl mx-auto mt-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-5 transition-all shadow-xl animate-fadeIn"
        >
          <ul className="flex flex-col gap-2 text-sm font-medium text-text-main font-mono">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface hover:text-terracotta transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-text-mute font-sans">→</span>
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-border-subtle mt-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-terracotta text-white font-medium text-xs font-mono text-center shadow-xs"
              >
                <span>Download Resume / CV</span>
                <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
