"use client";

// /about — two-column layout: photo on the left, bio text on the right.

import { motion } from "framer-motion";
import Image from "next/image";
import BackLink from "../components/BackLink";
import "./about.css";

// Rectangle 1: Picture
function PictureRectangle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Image
        src="/assets/character-face12.jpg"
        alt="Profile photo"
        width={743}
        height={800}
        priority
        className="about-photo"
        style={{
          borderRadius: 24,
          objectFit: "contain",
          maxWidth: 280,
          height: "auto",
        }}
      />
    </motion.div>
  );
}

// Rectangle 2: Texts
function TextsRectangle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ display: "flex", flexDirection: "column", gap: 12 }}
    >
      {/* Name */}
      <h1
        className="about-name"
        style={{
          fontSize: 48,
          fontWeight: 600,
          color: "black",
          margin: 0,
          fontFamily: "var(--font-nunito)",
        }}
      >
        Rufayda Sanjida
      </h1>

      {/* Age · City · Country */}
      <div
        className="about-meta"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "#71717a",
          fontSize: 15,
          fontFamily: "var(--font-nunito)",
        }}
      >
        <span>22</span>
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#a1a1aa",
          }}
        />
        <span>Philadelphia, PA</span>
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#a1a1aa",
          }}
        />
        <span>USA</span>
      </div>

      {/* Bio */}
      <motion.div
        className="about-bio"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ marginTop: 16, maxWidth: 380 }}
      >
        <p
          style={{
            color: "#52525b",
            fontSize: 15,
            lineHeight: 1.7,
            fontFamily: "var(--font-nunito)",
            fontWeight: 300,
            margin: 0,
          }}
        >
          Hey 👋
        </p>
        <p
          style={{
            color: "#52525b",
            fontSize: 15,
            lineHeight: 1.7,
            fontFamily: "var(--font-nunito)",
            fontWeight: 300,
            margin: 0,
            marginTop: 12,
          }}
        >
          I&apos;m a developer passionate about creating beautiful, intuitive
          experiences. I believe in the power of clean design and thoughtful
          interactions.
        </p>
      </motion.div>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ marginTop: 24 }}
      >
        <BackLink />
      </motion.div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main
      className="about-main"
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <div
        className="about-layout"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 48,
        }}
      >
        <PictureRectangle />
        <TextsRectangle />
      </div>
    </main>
  );
}