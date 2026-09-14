"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Shared avatar used on the home hero and every sub-page header.
// Accepts an optional size prop (default 128px).

const CHARACTER_SRC = "/assets/character-face12.jpg";
const CHARACTER_ALT = "Character illustration";

interface CharacterProps {
  size?: number;
}

export default function Character({ size = 128 }: CharacterProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
    >
      {/* Figure-8 sway: x and y animate on different cycle lengths */}
      <motion.div
        animate={{ x: [0, 7, 0, -7, 0] }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.6,
        }}
      >
        <motion.div
          animate={{ y: [0, -5, 0, -5, 0] }}
          transition={{
            duration: 1.75,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.6,
          }}
        >
          {imgError ? (
            // Fallback emoji if the image fails to load
            <div
              className="rounded-full border-2 border-black flex items-center justify-center text-4xl select-none"
              style={{ width: size, height: size }}
              aria-label={CHARACTER_ALT}
            >
              👾
            </div>
          ) : (
            <Image
              src={CHARACTER_SRC}
              alt={CHARACTER_ALT}
              width={size}
              height={size}
              priority
              className="object-contain"
              style={{ width: size, height: size }}
              onError={() => setImgError(true)}
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
