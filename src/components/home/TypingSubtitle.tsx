'use client';

import { useState, useEffect } from 'react';
import heroData from '../../data/sections/hero.json';

const SUBTITLES: string[] = heroData.subtitle
  ? heroData.subtitle.split(' • ').map((s) => s.trim())
  : [
      'Specializing in Deep Learning & Explainable AI',
      'Undergraduate Researcher at The Neotia University',
      'Published IEEE ICRITO 2025 Author',
    ];

export default function TypingSubtitle() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentFullText = SUBTITLES[currentIndex] || 'AI Researcher & Engineer';
    const typingSpeed = isDeleting ? 25 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % SUBTITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <div className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-text-sub">
      <span className="text-terracotta font-bold">&gt;</span>
      <span className="text-text-main font-medium">{displayedText}</span>
      <span className="w-1.5 h-4 bg-terracotta inline-block animate-pulse" />
    </div>
  );
}
