'use client';

import { FC, useRef, useEffect, useState } from 'react';

interface WaveTitleProps {
  text: string;
  className?: string;
}

export const WaveTitle: FC<WaveTitleProps> = ({ text, className = '' }) => {
  const [initialEntranceComplete, setInitialEntranceComplete] = useState(false);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const words = text.split(' ');

  // Flattened characters for index calculation
  const charArray: { char: string; index: number; wordIndex: number }[] = [];
  let gIdx = 0;
  words.forEach((word, wIdx) => {
    word.split('').forEach((c) => {
      charArray.push({ char: c, index: gIdx++, wordIndex: wIdx });
    });
  });

  const totalChars = charArray.length;

  useEffect(() => {
    // When initial entrance finishes, drop entrance animation classes
    const entranceDuration = totalChars * 55 + 1150;
    const timer = setTimeout(() => {
      setInitialEntranceComplete(true);
      letterRefs.current.forEach((el) => {
        if (el) {
          el.classList.remove('animate-sea-wave');
          el.style.animationDelay = '';
        }
      });
    }, entranceDuration);

    return () => clearTimeout(timer);
  }, [totalChars]);

  let charPointer = 0;

  return (
    <span
      className={`inline-flex flex-wrap justify-center items-center gap-x-[0.28em] select-none ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap overflow-visible py-0.5"
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
                className={`inline-block cursor-pointer transition-colors duration-200 ease-out hover:text-terracotta ${
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
