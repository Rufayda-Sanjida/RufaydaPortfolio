"use client";

// /projects — two-column grid of project cards.

import { useState } from "react";
import { motion } from "framer-motion";
import Character from "../components/Character";
import BackLink from "../components/BackLink";
import "./projects.css";

const projects = [
  {
    name: "Finance Simulator",
    date: "Jan. 2026 – Present",
    description:
      "Web app that models long-term savings growth using compounding and Monte Carlo simulation. Users can adjust contribution rate, rate of return, and inflation to visualize probabilistic retirement outcomes.",
    stack: ["React", "Node.js", "Express", "Recharts"],
    github: null,
  },
  {
    name: "DroneDash",
    date: "Oct. 2025",
    description:
      "Hackathon-winning drone delivery platform with real-time tracking, geospatial route optimization, and an interactive 3D map rendering 250+ location-based data points. Led a five-person team through a 48-hour build.",
    stack: ["React", "FastAPI", "MongoDB", "Three.js", "WebRTC", "TailwindCSS"],
    github: null,
  },
];

function ProjectCard({
  name,
  date,
  description,
  stack,
  github,
  index,
}: {
  name: string;
  date: string;
  description: string;
  stack: string[];
  github: string | null;
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
      className="projects-card"
      style={{
        backgroundColor: hovered ? "#e8e8ed" : "#f2f2f7",
        borderRadius: 16,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
        transition: "background-color 0.2s ease",
        cursor: "default",
      }}
    >
      {/* Name + date */}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#1c1c1e",
              margin: 0,
              fontFamily: "var(--font-nunito)",
            }}
          >
            {name}
          </p>
          {name === "DroneDash" && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#92670c",
                backgroundColor: "#fef3c7",
                border: "1px solid #f5d87a",
                borderRadius: 6,
                padding: "2px 8px",
                fontFamily: "var(--font-nunito)",
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
            >
              Hackathon Winner
            </span>
          )}
        </div>
        <p
          style={{
            fontSize: 12,
            color: "#636366",
            margin: 0,
            fontFamily: "var(--font-nunito)",
            fontWeight: 300,
          }}
        >
          {date}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 13,
          color: "#636366",
          margin: 0,
          fontFamily: "var(--font-nunito)",
          fontWeight: 300,
          lineHeight: 1.65,
        }}
      >
        {description}
      </p>

      {/* Stack tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
        {stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: 11,
              color: "#636366",
              backgroundColor: "#e5e5ea",
              borderRadius: 6,
              padding: "3px 8px",
              fontFamily: "var(--font-nunito)",
              fontWeight: 400,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <div style={{ marginTop: 2 }}>
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#007AFF",
              fontSize: 13,
              fontFamily: "var(--font-nunito)",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            GitHub →
          </a>
        ) : (
          <span
            style={{
              color: "#aeaeb2",
              fontSize: 13,
              fontFamily: "var(--font-nunito)",
              fontWeight: 300,
            }}
          >
            GitHub coming soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <main
      className="projects-main"
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
      <div className="projects-character">
        <Character size={80} />
      </div>

      {/* Heading */}
      <motion.h1
        className="projects-heading"
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
        Projects
      </motion.h1>

      {/* 2-column grid */}
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 16,
          width: "100%",
          maxWidth: 640,
          padding: "0 16px",
          marginTop: 16,
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} index={i} />
        ))}
      </motion.div>

      {/* Back link */}
      <motion.div
        className="projects-backlink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <BackLink />
      </motion.div>
    </main>
  );
}
