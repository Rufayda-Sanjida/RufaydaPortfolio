"use client";

// /achievements — card list of notable achievements.

import { useState } from "react";
import { motion } from "framer-motion";
import Character from "../components/Character";
import BackLink from "../components/BackLink";
import "./achievements.css";

const achievements = [
  {
    emoji: "🏆",
    title: "Full Ride Scholarship",
    subtitle: "Drexel University — A.J. Drexel Scholarship",
    description:
      "Awarded a full ride to Drexel University, one of its most prestigious scholarships, recognizing academic excellence and potential.",
  },
  {
    emoji: "🥇",
    title: "Hackathon Winner",
    subtitle: "",
    description:
      "Won a competitive hackathon, building and shipping a working project under time pressure as part of a team.",
  },
  {
    emoji: "📄",
    title: "Patent",
    subtitle: "Under My Name",
    description:
      "Holds a patent, recognizing original research and innovation in the field.",
  },
];

function AchievementCard({
  emoji,
  title,
  subtitle,
  description,
  index,
}: {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      className="ach-card"
      style={{
        backgroundColor: hovered ? "#e8e8ed" : "#f2f2f7",
        borderRadius: 16,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 16,
        width: "100%",
        maxWidth: 500,
        transition: "background-color 0.2s ease",
        cursor: "default",
      }}
    >
      {/* Emoji icon */}
      <div
        className="ach-emoji"
        style={{ fontSize: 24, lineHeight: 1, flexShrink: 0, marginTop: 2 }}
      >
        {emoji}
      </div>

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <p
          className="ach-title"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#1c1c1e",
            margin: 0,
            fontFamily: "var(--font-nunito)",
          }}
        >
          {title}
        </p>
        {subtitle && (
          <p
            style={{
              fontSize: 12,
              color: "#636366",
              margin: 0,
              fontFamily: "var(--font-nunito)",
              fontWeight: 300,
            }}
          >
            {subtitle}
          </p>
        )}
        <p
          className="ach-description"
          style={{
            fontSize: 13,
            color: "#636366",
            margin: 0,
            marginTop: 4,
            fontFamily: "var(--font-nunito)",
            fontWeight: 300,
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function AchievementsPage() {
  return (
    <main
      className="ach-main"
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 32,
        paddingBottom: 32,
        gap: 16,
      }}
    >
      {/* Character */}
      <div className="ach-character">
        <Character size={80} />
      </div>

      {/* Heading */}
      <motion.h1
        className="ach-heading"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 32,
          fontWeight: 700,
          color: "black",
          margin: 0,
          fontFamily: "var(--font-nunito)",
        }}
      >
        Some Achievements
      </motion.h1>

      {/* Cards */}
      <div
        className="ach-list"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          alignItems: "center",
          padding: "0 16px",
          marginTop: 16,
        }}
      >
        {achievements.map((a, i) => (
          <AchievementCard key={i} {...a} index={i} />
        ))}
      </div>

      {/* Back link */}
      <motion.div
        className="ach-backlink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <BackLink />
      </motion.div>
    </main>
  );
}
