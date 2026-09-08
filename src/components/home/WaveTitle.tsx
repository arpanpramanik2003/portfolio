'use client';

import { FC, useRef, useEffect, useState } from 'react';

interface WaveTitleProps {
  text: string;
  className?: string;
}

export const WaveTitle: FC<WaveTitleProps> = ({ text, className = '' }) => {
  const [initialEntranceComplete, setInitialEntranceComplete] = useState(false);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cooldownRef = useRef<{ [key: number]: number }>({});
  const timeoutRefs = useRef<{ [key: number]: NodeJS.Timeout }>({});

  const words = text.split(' ');

  // Flattened characters to link adjacent letters across words
  const charArray: { char: string; index: number; wordIndex: number }[] = [];
  let gIdx = 0;
  words.forEach((word, wIdx) => {
    word.split('').forEach((c) => {
      charArray.push({ char: c, index: gIdx++, wordIndex: wIdx });
    });
  });

  const totalChars = charArray.length;

  useEffect(() => {
    // When initial entrance finishes, drop initial entrance classes
    const entranceDuration = totalChars * 55 + 1150;
    const timer = setTimeout(() => {
      setInitialEntranceComplete(true);
      // Ensure all letter refs have clean baseline classes
      letterRefs.current.forEach((el) => {
        if (el) {
          el.classList.remove('animate-sea-wave');
          el.style.animationDelay = '';
        }
      });
    }, entranceDuration);

    return () => {
      clearTimeout(timer);
      // Clear any pending ripple timeouts
      Object.values(timeoutRefs.current).forEach(clearTimeout);
    };
  }, [totalChars]);

  const applyWaveAnimation = (
    el: HTMLSpanElement | null,
    animationClass: 'animate-letter-wave' | 'animate-letter-ripple',
    durationMs: number
  ) => {
    if (!el) return;

    // Remove any running wave/entrance animation classes and force reflow
    el.classList.remove('animate-sea-wave', 'animate-letter-wave', 'animate-letter-ripple');
    el.style.animationDelay = '';
    void el.offsetWidth; // Force CSS reflow to restart animation smoothly

    el.classList.add(animationClass);

    // Guaranteed cleanup after animation finishes
    const cleanup = () => {
      el.classList.remove(animationClass);
      el.removeEventListener('animationend', cleanup);
    };

    el.addEventListener('animationend', cleanup, { once: true });
    // Safety timeout fallback in case animationend is suppressed (e.g. window blur)
    setTimeout(cleanup, durationMs);
  };

  const triggerWave = (centerIndex: number) => {
    const now = Date.now();
    // 280ms cooldown on center letter prevents rapid jittering if cursor micro-jitters
    if (cooldownRef.current[centerIndex] && now - cooldownRef.current[centerIndex] < 280) {
      return;
    }
    cooldownRef.current[centerIndex] = now;

    // 1. Trigger primary crest on the hovered letter
    applyWaveAnimation(letterRefs.current[centerIndex], 'animate-letter-wave', 700);

    // 2. Ripple outward to left neighbor
    if (centerIndex - 1 >= 0) {
      if (timeoutRefs.current[centerIndex - 1]) {
        clearTimeout(timeoutRefs.current[centerIndex - 1]);
      }
      timeoutRefs.current[centerIndex - 1] = setTimeout(() => {
        // Only ripple if left neighbor wasn't hovered directly in last 280ms
        const leftNow = Date.now();
        if (!cooldownRef.current[centerIndex - 1] || leftNow - cooldownRef.current[centerIndex - 1] > 280) {
          applyWaveAnimation(letterRefs.current[centerIndex - 1], 'animate-letter-ripple', 600);
        }
      }, 65);
    }

    // 3. Ripple outward to right neighbor
    if (centerIndex + 1 < totalChars) {
      if (timeoutRefs.current[centerIndex + 1]) {
        clearTimeout(timeoutRefs.current[centerIndex + 1]);
      }
      timeoutRefs.current[centerIndex + 1] = setTimeout(() => {
        // Only ripple if right neighbor wasn't hovered directly in last 280ms
        const rightNow = Date.now();
        if (!cooldownRef.current[centerIndex + 1] || rightNow - cooldownRef.current[centerIndex + 1] > 280) {
          applyWaveAnimation(letterRefs.current[centerIndex + 1], 'animate-letter-ripple', 600);
        }
      }, 65);
    }
  };

  let charPointer = 0;

  return (
    <span
      className={`inline-flex flex-wrap justify-center items-center gap-x-[0.28em] select-none ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap overflow-visible py-3"
        >
          {word.split('').map((char) => {
            const index = charPointer++;

            return (
              <span
                key={index}
                ref={(el) => {
                  letterRefs.current[index] = el;
                }}
                aria-hidden="true"
                onMouseEnter={() => triggerWave(index)}
                className={`inline-block cursor-pointer transition-colors duration-200 hover:text-terracotta ${
                  !initialEntranceComplete ? 'animate-sea-wave' : ''
                }`}
                style={{
                  animationDelay: !initialEntranceComplete ? `${index * 55}ms` : undefined,
                  display: 'inline-block',
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

export default WaveTitle;
