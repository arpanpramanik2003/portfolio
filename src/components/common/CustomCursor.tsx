'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

function subscribePointer(callback: () => void) {
  const mediaQuery = window.matchMedia('(pointer: fine)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getPointerSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine)').matches;
}

function getServerPointerSnapshot(): boolean {
  return false;
}

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isPointerFine = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerPointerSnapshot
  );

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [hoverType, setHoverType] = useState<'interactive' | 'text' | 'default'>('default');

  useEffect(() => {
    if (!isPointerFine) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, [role="button"], input, select, textarea, label, [data-cursor="interactive"]')
        );
        const isText = Boolean(
          target.closest('h1, h2, h3, h4, p, blockquote, [data-cursor="text"]')
        );

        if (isInteractive) {
          setHoverType('interactive');
        } else if (isText) {
          setHoverType('text');
        } else {
          setHoverType('default');
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const render = () => {
      const ease = 0.2;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isPointerFine, isVisible]);

  if (!isPointerFine) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 select-none will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    >
      {/* Precision Editorial Reticle Frame */}
      <div
        className={`relative -top-1/2 -left-1/2 flex items-center justify-center transition-all duration-300 ease-out ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
      >
        {hoverType === 'interactive' ? (
          /* Interactive Focus Reticle (Diamond Frame + Crosshairs) */
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            className="text-terracotta transition-transform duration-300 rotate-45"
          >
            {/* 4 Corner Framing Brackets */}
            <path d="M4 14V4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 14V4H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 30V40H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 30V40H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Central Precision Target */}
            <circle cx="22" cy="22" r="3" fill="currentColor" />
          </svg>
        ) : hoverType === 'text' ? (
          /* Editorial Optical Text Caret */
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            className="text-terracotta transition-all duration-200"
          >
            {/* Top Serif */}
            <line x1="4" y1="3" x2="16" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Vertical Stem */}
            <line x1="10" y1="3" x2="10" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Bottom Serif */}
            <line x1="4" y1="25" x2="16" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          /* Default Precision Reticle (Corner Brackets + Central Dot) */
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="transition-all duration-300"
          >
            {/* 4 Crisp Corner Brackets */}
            <path d="M3 10V3H10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />
            <path d="M29 10V3H22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />
            <path d="M3 22V29H10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />
            <path d="M29 22V29H22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />

            {/* Central Terracotta Focal Dot */}
            <circle cx="16" cy="16" r="2" fill="var(--color-terracotta, #C25E38)" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
