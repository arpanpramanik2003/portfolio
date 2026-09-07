'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';

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

  useEffect(() => {
    if (!isPointerFine) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let isVisible = false;
    let lastTarget: EventTarget | null = null;
    let currentHoverType = 'default';
    let rafId: number;

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorEl.style.opacity = '1';
      }

      // Optimize DOM traversal: only recalculate when crossing element boundaries
      if (e.target !== lastTarget) {
        lastTarget = e.target;
        const target = e.target as HTMLElement | null;

        let nextHoverType = 'default';
        if (target) {
          if (target.closest('a, button, [role="button"], input, select, textarea, label, summary, [data-cursor="interactive"]')) {
            nextHoverType = 'interactive';
          } else if (target.closest('h1, h2, h3, h4, p, blockquote, [data-cursor="text"]')) {
            nextHoverType = 'text';
          }
        }

        if (nextHoverType !== currentHoverType) {
          currentHoverType = nextHoverType;
          cursorEl.dataset.hover = nextHoverType;
        }
      }
    };

    const onMouseDown = () => {
      cursorEl.dataset.clicking = 'true';
    };

    const onMouseUp = () => {
      cursorEl.dataset.clicking = 'false';
    };

    const onMouseLeave = () => {
      isVisible = false;
      cursorEl.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      cursorEl.style.opacity = '1';
    };

    const render = () => {
      const ease = 0.25;
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;

      // Only update transform if cursor is still interpolating towards target
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        currentX += dx * ease;
        currentY += dy * ease;
        cursorEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      data-hover="default"
      data-clicking="false"
      className="group fixed top-0 left-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-300 select-none will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
    >
      {/* Precision Reticle Frame centered on mouse pointer */}
      <div className="flex items-center justify-center transition-transform duration-200 ease-out origin-center group-data-[clicking=true]:scale-75 group-data-[clicking=false]:scale-100">
        {/* Interactive Focus Reticle (Diamond Frame + Focal Core) */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-terracotta transition-transform duration-300 rotate-45 hidden group-data-[hover=interactive]:block"
        >
          {/* 4 Corner Framing Brackets */}
          <path d="M4 12V4H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 12V4H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 28V36H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 28V36H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

          {/* Central Precision Target */}
          <circle cx="20" cy="20" r="2.5" fill="currentColor" />
        </svg>

        {/* Editorial Optical Text Caret */}
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-terracotta transition-all duration-200 hidden group-data-[hover=text]:block"
        >
          {/* Top Serif */}
          <line x1="3" y1="2" x2="13" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Vertical Stem */}
          <line x1="8" y1="2" x2="8" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Bottom Serif */}
          <line x1="3" y1="22" x2="13" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Default Precision Reticle (Corner Brackets + Central Focal Dot) */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="transition-all duration-300 hidden group-data-[hover=default]:block"
        >
          {/* 4 Crisp Corner Brackets */}
          <path d="M3 9V3H9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />
          <path d="M25 9V3H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />
          <path d="M3 19V25H9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />
          <path d="M25 19V25H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-text-main/80" />

          {/* Central Focal Dot */}
          <circle cx="14" cy="14" r="2" fill="var(--color-terracotta, #C25E38)" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
