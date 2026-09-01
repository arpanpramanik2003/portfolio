import { useState, useEffect } from "react";

const phrases = [
  "Deep Learning & Neural Systems",
  "Large Language Models & GenAI",
  "Explainable AI Researcher",
  "Full-Stack Web Systems Architect",
];

export default function TypingSubtitle() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const updateSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="inline-flex items-center text-terracotta font-mono font-medium tracking-wide">
      <span>{text}</span>
      <span className="w-1.5 h-4 ml-1 bg-terracotta animate-pulse" />
    </span>
  );
}
