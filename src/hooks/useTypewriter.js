import { useState, useEffect, useRef } from 'react';

export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 45, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const word = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        if (displayed.length < word.length) {
          setDisplayed(word.slice(0, displayed.length + 1));
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
          return;
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return displayed;
}
