"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Character from "./Character";

// ─── config ───────────────────────────────────────────────────────────────────
const NAME = "Rufayda Sanjida";
const TITLE = "Software Engineer";
const TYPEWRITER_START_DELAY = 200; // ms before typing begins
const TYPEWRITER_SPEED = 25; // ms per character
// ─────────────────────────────────────────────────────────────────────────────

interface HeroSectionProps {
  onTypewriterDone?: () => void;
}

export default function HeroSection({ onTypewriterDone }: HeroSectionProps) {
  const [typedTitle, setTypedTitle] = useState("");
  const [titleStarted, setTitleStarted] = useState(false);

  // Delay before typewriter kicks off
  useEffect(() => {
    const t = setTimeout(() => setTitleStarted(true), TYPEWRITER_START_DELAY);
    return () => clearTimeout(t);
  }, []);

  // Type one character at a time
  useEffect(() => {
    if (!titleStarted || typedTitle.length >= TITLE.length) return;
    const t = setTimeout(
      () => setTypedTitle(TITLE.slice(0, typedTitle.length + 1)),
      TYPEWRITER_SPEED,
    );
    return () => clearTimeout(t);
  }, [titleStarted, typedTitle]);

  const typingDone = typedTitle.length === TITLE.length;

  // Tell the parent (page.tsx) when typing finishes so nav buttons can appear
  useEffect(() => {
    if (typingDone) onTypewriterDone?.();
  }, [typingDone, onTypewriterDone]);

  return (
    <div className="flex flex-col items-center">
      {/* Avatar — sway animation lives inside Character */}
      <div className="hero-character">
        <Character size={128} />
      </div>

      {/* Name */}
      <motion.h1
        className="hero-name mt-4 text-5xl font-normal tracking-tight text-black select-none text-center [font-family:var(--font-nunito)]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
      >
        {NAME}
      </motion.h1>

      {/* Title with typewriter effect */}
      <div className="hero-title mt-4 text-lg tracking-widest uppercase text-zinc-500 select-none h-8 flex items-center [font-family:var(--font-nunito)]">
        <span>{typedTitle}</span>
        {/* Blinking cursor — disappears when typing is done */}
        {!typingDone && (
          <motion.span
            className="inline-block w-0.5 h-9 bg-zinc-500 ml-0.5 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>
    </div>
  );
}
