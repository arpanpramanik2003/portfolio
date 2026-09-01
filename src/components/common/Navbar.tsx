'use client';

import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-canvas/85 backdrop-blur-md border-b border-border-subtle transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo / Monogram */}
        <a
          href="#home"
          className="font-serif text-xl md:text-2xl font-bold tracking-tight text-text-main flex items-center gap-1 group"
        >
          <span>Diya Chanda</span>
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block group-hover:scale-150 transition-transform" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex items-center gap-7 text-sm font-medium text-text-sub">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-terracotta transition-colors py-1 relative"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-px h-5 bg-border" />

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border border-border-subtle bg-surface hover:border-terracotta/40 text-text-sub hover:text-terracotta transition-all shadow-sm cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun size={17} className="stroke-[2.2]" />
            ) : (
              <Moon size={17} className="stroke-[2.2]" />
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border border-border-subtle bg-surface text-text-sub hover:text-terracotta transition-colors"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border border-border-subtle bg-surface text-text-main"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-canvas border-b border-border px-6 py-6 transition-colors shadow-lg"
        >
          <ul className="flex flex-col gap-4 text-base font-medium text-text-sub">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
