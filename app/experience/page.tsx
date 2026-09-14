"use client";

// /experience — vertical timeline of work history.

import { motion } from "framer-motion";
import Character from "../components/Character";
import BackLink from "../components/BackLink";
import "./experience.css";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "eMoney Advisor – a Fidelity Investments Company",
    date: "March 2026 – Sept. 2026",
    description:
      "Worked across bug fixes and refactoring before owning a client-facing feature — developed a step in the onboarding flow that financial advisors use with their clients, built with React, TypeScript, and C#/.NET.",
  },
  {
    role: "R&D Engineer Intern",
    company: "Hologic",
    date: "March 2025 – Sept. 2025",
    description:
      "Developed computer vision software for mammography machines using Python and OpenCV. Improved skin-edge detection accuracy by 50% and benchmarked depth cameras achieving 98%+ accuracy.",
  },
  {
    role: "Scientific Software Developer Intern",
    company: "Drexel University",
    date: "June 2024 – Dec. 2024",
    description:
      "Built a Python web interface for managing scientific datasets in the DataFed system, reducing data upload time by 40%. Integrated RESTful APIs for CRUD operations and automated metadata workflows.",
  },
  {
    role: "Sales Associate",
    company: "Coach New York",
    date: "June 2023 – Sept. 2023",
    description:
      "Represented the Coach brand on the floor, built rapport with customers, and drove sales through product knowledge and genuine communication. Stayed dependable across shifts and contributed to a consistent in-store experience.",
  },
];

function TimelineItem({
  role,
  company,
  date,
  description,
  index,
  isLast,
}: {
  role: string;
  company: string;
  date: string;
  description: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      style={{ display: "flex", flexDirection: "row", gap: 16 }}
    >
      {/* Left: dot + vertical line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#1c1c1e",
            marginTop: 6,
            flexShrink: 0,
          }}
        />
        {!isLast && (
          <div
            style={{
              width: 1.5,
              flex: 1,
              backgroundColor: "#d1d1d6",
              marginTop: 6,
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? 0 : 28 }}>
        <p
          className="exp-role"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#1c1c1e",
            margin: 0,
            fontFamily: "var(--font-nunito)",
          }}
        >
          {role}{" "}
          <span style={{ color: "#636366", fontWeight: 400 }}>· {company}</span>
        </p>

        <p
          style={{
            fontSize: 12,
            color: "#636366",
            margin: "3px 0 8px",
            fontFamily: "var(--font-nunito)",
            fontWeight: 300,
          }}
        >
          {date}
        </p>

        <p
          className="exp-description"
          style={{
            fontSize: 13,
            color: "#636366",
            margin: 0,
            fontFamily: "var(--font-nunito)",
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 560,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <main
      className="exp-main"
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
      <div className="exp-character">
        <Character size={80} />
      </div>

      {/* Heading */}
      <motion.h1
        className="exp-heading"
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
        Experience
      </motion.h1>

      {/* Timeline */}
      <motion.div
        className="exp-timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        style={{
          width: "100%",
          maxWidth: 600,
          padding: "0 16px",
          marginTop: 16,
        }}
      >
        {experiences.map((exp, i) => (
          <TimelineItem
            key={i}
            {...exp}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </motion.div>

      {/* Back link */}
      <motion.div
        className="exp-backlink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <BackLink />
      </motion.div>
    </main>
  );
}
