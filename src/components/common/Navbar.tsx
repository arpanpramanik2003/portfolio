'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = [
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'certificates',
        'research',
        'contact',
      ];

      // Near top of document
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Near bottom of document
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection('contact');
        return;
      }

      // Viewport probe line at Y = 200px (comfortably below floating navbar)
      const probeY = 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= probeY && rect.bottom > probeY) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-2.5 sm:px-4 lg:px-6 pt-2 sm:pt-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto px-3.5 sm:px-4 lg:px-6 h-13 sm:h-14 lg:h-16 rounded-2xl flex justify-between items-center transition-all duration-300 gap-2 ${
          scrolled
            ? 'bg-canvas/90 dark:bg-card/95 backdrop-blur-xl border border-border-subtle dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35)]'
            : 'bg-canvas/75 dark:bg-canvas/80 backdrop-blur-md border border-border-subtle dark:border-white/[0.06] shadow-xs'
        }`}
      >
        {/* Brand Identity */}
        <a
          href="#home"
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none flex-shrink-0"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl overflow-hidden border border-border-subtle dark:border-white/20 bg-surface dark:bg-white flex items-center justify-center p-0.5 sm:p-1 group-hover:border-terracotta group-hover:shadow-[0_0_12px_rgba(194,94,56,0.25)] transition-all duration-300">
            <Image
              src="/images/logo.png"
              alt="Diya Chanda"
              width={32}
              height={32}
              priority
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-tight text-text-main dark:text-white group-hover:text-terracotta dark:group-hover:text-terracotta transition-colors truncate">
                Diya Chanda
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block group-hover:scale-125 transition-transform flex-shrink-0" />
            </div>
            <span className="hidden 2xl:block text-[10px] font-mono text-text-sub dark:text-stone-300 tracking-wider uppercase -mt-0.5 font-medium">
              AI Researcher &amp; ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Centered Floating Capsule (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-2">
          <nav className="p-1 rounded-xl bg-surface/70 dark:bg-surface/60 border border-border-subtle dark:border-white/[0.05] backdrop-blur-xs">
            <ul className="flex items-center gap-0.5 xl:gap-1 text-xs font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setActiveSection(link.id)}
                      className={`px-2.5 xl:px-3.5 py-1.5 rounded-lg transition-all duration-200 relative font-mono text-xs xl:text-[13px] inline-flex items-center justify-center font-medium select-none cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-card text-terracotta dark:bg-[#2A2622] dark:text-white shadow-xs border border-border-subtle dark:border-white/[0.12] font-semibold'
                          : 'text-text-main/80 dark:text-stone-200 hover:text-text-main dark:hover:text-white hover:bg-card/50 dark:hover:bg-white/[0.06] border border-transparent'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-terracotta shadow-[0_0_6px_rgba(212,130,106,0.8)] animate-pulse flex-shrink-0" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Desktop Right Action Cluster (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
          {/* Quick Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Diya_Chanda_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-1.5 rounded-xl bg-surface hover:bg-card border border-border-subtle dark:border-white/[0.08] hover:border-terracotta dark:hover:border-terracotta text-text-main dark:text-white hover:text-terracotta dark:hover:text-terracotta text-xs font-mono font-medium shadow-xs transition-all duration-200 group flex-shrink-0"
          >
            <span>Resume</span>
            <ArrowUpRight
              size={13}
              className="text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0"
            />
          </a>

          <div className="w-px h-5 bg-border-subtle dark:bg-white/[0.08]" />

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-xl border border-border-subtle dark:border-white/[0.08] bg-surface hover:bg-card hover:border-terracotta dark:hover:border-terracotta text-text-main dark:text-white hover:text-terracotta transition-all shadow-xs cursor-pointer flex-shrink-0"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="stroke-[2.2] text-amber-400" />
            ) : (
              <Moon size={16} className="stroke-[2.2] text-terracotta" />
            )}
          </button>
        </div>

        {/* Mobile & Tablet Actions Button Cluster (< 1024px) */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
          {/* Quick Resume link on tablets */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Diya_Chanda_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-surface hover:bg-card border border-border-subtle dark:border-white/[0.08] text-text-main dark:text-white text-xs font-mono font-medium transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight size={12} className="text-terracotta" />
          </a>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-xl border border-border-subtle dark:border-white/[0.08] bg-surface text-text-main dark:text-white hover:text-terracotta transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-terracotta" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl border border-border-subtle dark:border-white/[0.08] bg-surface text-text-main dark:text-white hover:border-terracotta transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Glass Navigation Drawer */}
      {open && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden max-w-7xl mx-auto mt-2 bg-card/95 backdrop-blur-xl border border-border-subtle dark:border-white/[0.08] rounded-2xl p-4 sm:p-5 transition-all shadow-2xl animate-fadeIn max-h-[calc(100vh-4.5rem)] overflow-y-auto no-scrollbar"
        >
          <ul className="flex flex-col gap-1.5 text-sm font-medium text-text-main dark:text-white font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.id);
                      setOpen(false);
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl transition-all ${
                      isActive
                        ? 'bg-surface text-terracotta dark:text-white font-semibold border border-border-subtle dark:border-white/[0.08] shadow-xs'
                        : 'text-text-main/80 dark:text-stone-200 hover:bg-surface hover:text-text-main dark:hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-terracotta transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <span>{link.label}</span>
                    </span>
                    <span className="text-xs text-text-mute font-sans">→</span>
                  </a>
                </li>
              );
            })}
            <li className="pt-2.5 border-t border-border-subtle dark:border-white/[0.08] mt-1.5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Diya_Chanda_Resume.pdf"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-terracotta hover:bg-terracotta-hover text-white font-medium text-xs font-mono text-center shadow-xs transition-colors"
              >
                <Sparkles size={14} />
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
