"use client";
import { useEffect, useState } from "react";

const TEXTS = ["Kalabari se\nalua ke obem", "welcome to Kalabari"];

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_TIME = 400;

export default function RotatingText() {
  const [textIndex, setTextIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TEXTS[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charCount === current.length) {
      timeout = setTimeout(() => setDeleting(true), HOLD_TIME);
    } else if (deleting && charCount === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
      timeout = setTimeout(() => setCharCount(1), TYPE_SPEED);
    } else {
      timeout = setTimeout(
        () => {
          setCharCount((prev) => prev + (deleting ? -1 : 1));
        },
        deleting ? DELETE_SPEED : TYPE_SPEED,
      );
    }

    return () => clearTimeout(timeout);
  }, [charCount, deleting, textIndex]);

  return (
    <h1 className="text-center text-white text-7xl sm:text-8xl md:text-9xl alt-font text-shadow whitespace-pre-line">
      {TEXTS[textIndex].slice(0, charCount)}
      <span className="animate-pulse inline-block ml-1 text-white opacity-80">
        |
      </span>
    </h1>
  );
}
