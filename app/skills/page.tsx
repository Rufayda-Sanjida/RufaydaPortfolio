"use client";

// /skills — skill pills grouped by category.

import { motion } from "framer-motion";
import Character from "../components/Character";
import BackLink from "../components/BackLink";
import "./skills.css";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      "Python",
      "Java",
      "C",
      "C#/.NET",
      "Bash",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "Flask",
      "FastAPI",
      "Django",
      "React",
      "React Native",
      "Node.js/Express",
      "TailwindCSS",
      "Spring Boot",
    ],
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "Pandas", "OpenCV", "Hugging Face", "NumPy"],
  },
  {
    category: "Tools",
    skills: [
      "Docker",
      "Git",
      "Linux",
      "AWS",
      "Postman",
      "Confluence",
      "CI/CD Pipeline",
      "JUnit",
    ],
  },
];

function SkillCard({
  category,
  skills,
  index,
}: {
  category: string;
  skills: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="skills-card"
      style={{
        backgroundColor: "#f2f2f7",
        borderRadius: 16,
        padding: "16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* Category label */}
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#636366",
          margin: 0,
          fontFamily: "var(--font-nunito)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {category}
      </p>

      {/* Skill pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.1 }}
            style={{
              fontSize: 12,
              color: "#1c1c1e",
              backgroundColor: "#e5e5ea",
              borderRadius: 8,
              padding: "4px 10px",
              fontFamily: "var(--font-nunito)",
              fontWeight: 400,
              display: "inline-block",
              cursor: "default",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  return (
    <main
      className="skills-main"
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
      <div className="skills-character">
        <Character size={80} />
      </div>

      {/* Heading */}
      <motion.h1
        className="skills-heading"
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
        Skills
      </motion.h1>

      {/* Cards */}
      <div
        className="skills-list"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          maxWidth: 480,
          padding: "0 20px",
          marginTop: 16,
        }}
      >
        {skillGroups.map((group, i) => (
          <SkillCard key={group.category} {...group} index={i} />
        ))}
      </div>

      {/* Back link */}
      <motion.div
        className="skills-backlink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <BackLink />
      </motion.div>
    </main>
  );
}
