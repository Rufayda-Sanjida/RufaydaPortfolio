"use client";

// /v2 — single-page portfolio. Everything (resume, education, experience,
// projects, skills, awards, contact) lives on one scrollable page.

import { motion } from "framer-motion";
import Character from "../components/Character";
import "./v2.css";

// ─── content ─────────────────────────────────────────────────────────────────
const EMAIL = "rufaydasan@gmail.com";
const LINKEDIN = "https://linkedin.com/in/rufayda-sanjida-047187218";
const GITHUB = "https://github.com/Rufayda-Sanjida";
const RESUME = "/resume.pdf";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    role: "Software Engineer Co-op",
    company: "eMoney Advisor – a Fidelity Investments Company",
    location: "Radnor, PA",
    date: "Mar. 2026 – Sept. 2026",
    points: [
      "Shipped an end-to-end client-facing onboarding feature (React, TypeScript, REST APIs) that helps users prioritize financial goals so advisors can build tailored plans faster.",
      "Refactored a multi-tenant C#/.NET workflow service with dependency injection, feature flags, and partner-scoped XML config for a zero-downtime rollout across institutional clients.",
      "Built a reusable React Context Provider and modal with Yup validation, decoupling legacy architecture across 30+ files.",
    ],
  },
  {
    role: "R&D Engineer Co-op",
    company: "Hologic",
    location: "Newark, DE",
    date: "Mar. 2025 – Sept. 2025",
    points: [
      "Developed computer vision software for embedded mammography systems (Python, OpenCV, camera SDKs) measuring breast thickness within ±5 mm.",
      "Improved skin-edge detection accuracy by 50% with Gaussian filtering and Canny edge detection; benchmarked Time-of-Flight cameras at 98%+ accuracy.",
      "Co-inventor on a patent-pending breast imaging system.",
    ],
  },
  {
    role: "Scientific Software Developer Co-op",
    company: "Drexel University",
    location: "Philadelphia, PA",
    date: "June 2024 – Dec. 2024",
    points: [
      "Built a Python Panel web interface for uploading and managing JSON scientific datasets, cutting upload time by 40%.",
      "Integrated RESTful endpoints for CRUD, metadata sync, and collection management.",
    ],
  },
];

const projects = [
  {
    name: "ReadTheRoom",
    date: "Sept. 2026",
    badge: "MLH Best Use of Presage · OwlHacks 2026",
    description:
      "Video analytics platform that detects audience facial reactions and plots them on an interactive timeline. Tracks 52 facial blendshapes at 60 FPS with MediaPipe via WebAssembly, plus a Gemini-powered chat agent to query viewer sentiment in natural language.",
    stack: ["React 19", "TanStack Start", "FastAPI", "SQLite", "MediaPipe", "Gemini API", "Docker"],
    github: null as string | null,
  },
  {
    name: "Finance Simulator",
    date: "Jan. 2026 – Present",
    badge: null,
    description:
      "Models long-term savings growth with compounding and Monte Carlo simulation. An Express backend runs 1,000 simulations per scenario; adjustable contribution, return, and inflation visualize probabilistic retirement outcomes.",
    stack: ["React", "Node.js", "Express", "Recharts"],
    github: null as string | null,
  },
  {
    name: "DroneDash",
    date: "Oct. 2025",
    badge: "Future Mobility Track Winner · OwlHacks 2025",
    description:
      "Drone delivery platform with real-time tracking, geospatial route optimization, and a 3D map rendering 250+ location points. Led a five-person team; WebRTC laptop-to-phone streaming cut demo setup by 90%.",
    stack: ["React", "FastAPI", "MongoDB", "Three.js", "WebRTC", "TailwindCSS"],
    github: null as string | null,
  },
];

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C#/.NET", "TypeScript", "JavaScript", "SQL", "Bash", "HTML/CSS"],
  },
  {
    category: "Web",
    skills: ["React", "React Native", "Node.js/Express", "FastAPI", "Flask", "Django", "Spring Boot", "TailwindCSS", "WebSocket"],
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "Hugging Face", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Tools",
    skills: ["Docker", "Git", "Linux", "AWS", "CI/CD", "Postman", "JUnit", "Jira"],
  },
];

const awards = [
  { emoji: "🥇", title: "OwlHacks 2026 Winner", detail: "ReadTheRoom — MLH Best Use of Presage" },
  { emoji: "🏆", title: "OwlHacks 2025 Winner", detail: "DroneDash — Future Mobility Track" },
  { emoji: "📄", title: "Co-Inventor, Patent Pending", detail: "Hologic breast imaging system" },
  { emoji: "🎓", title: "Drexel Liberty Full Scholarship", detail: "Full tuition, for academic excellence and leadership" },
];
// ─────────────────────────────────────────────────────────────────────────────

// Fades each section in as it scrolls into view
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="v2-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="v2-section-title">{title}</h2>
      {children}
    </motion.section>
  );
}

function Hero() {
  return (
    <header className="v2-hero">
      <Character size={96} />

      <motion.h1
        className="v2-name"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
      >
        Rufayda Sanjida
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        className="v2-hero-body"
      >
        <p className="v2-tagline">Software Engineer</p>

        <p className="v2-edu">
          Senior studying <strong>Computer Science</strong> (Minor in Mathematics)
          <br />
          at <strong>Drexel University</strong> · Graduating <strong>June 2027</strong>
        </p>

        <p className="v2-status">
          <span className="v2-dot" />
          Previously SWE Co-op at eMoney Advisor (Fidelity) & R&D Co-op at Hologic
        </p>

        <div className="v2-cta">
          <a href={RESUME} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-primary">
            Resume ↗
          </a>
          <a href={`mailto:${EMAIL}`} className="v2-btn">
            Email
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="v2-btn">
            LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="v2-btn">
            GitHub
          </a>
        </div>
      </motion.div>
    </header>
  );
}

function Nav() {
  return (
    <nav className="v2-nav">
      <a href="#top" className="v2-nav-name">
        Rufayda Sanjida
      </a>
      <div className="v2-nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={RESUME} target="_blank" rel="noopener noreferrer" className="v2-nav-resume">
          Resume
        </a>
      </div>
    </nav>
  );
}

export default function PortfolioV2() {
  return (
    <div id="top" className="v2-root">
      <Nav />

      <main className="v2-main">
        <Hero />

        <Section id="experience" title="Experience">
          <div className="v2-timeline">
            {experiences.map((exp) => (
              <div key={exp.company} className="v2-tl-item">
                <div className="v2-tl-rail">
                  <span className="v2-tl-dot" />
                  <span className="v2-tl-line" />
                </div>
                <div className="v2-tl-content">
                  <div className="v2-row">
                    <p className="v2-item-title">
                      {exp.role} <span className="v2-muted">· {exp.company}</span>
                    </p>
                    <p className="v2-date">{exp.date}</p>
                  </div>
                  <ul className="v2-points">
                    {exp.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="v2-cards">
            {projects.map((p) => (
              <motion.div key={p.name} className="v2-card" whileHover={{ scale: 1.015 }}>
                <div className="v2-row">
                  <p className="v2-item-title">{p.name}</p>
                  <p className="v2-date">{p.date}</p>
                </div>
                {p.badge && <span className="v2-badge">🏆 {p.badge}</span>}
                <p className="v2-desc">{p.description}</p>
                <div className="v2-tags">
                  {p.stack.map((t) => (
                    <span key={t} className="v2-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="v2-link">
                    GitHub →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="v2-skills">
            {skillGroups.map((g) => (
              <div key={g.category} className="v2-skill-row">
                <p className="v2-skill-cat">{g.category}</p>
                <div className="v2-tags">
                  {g.skills.map((s) => (
                    <span key={s} className="v2-tag v2-tag-dark">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="awards" title="Awards">
          <div className="v2-awards">
            {awards.map((a) => (
              <div key={a.title} className="v2-award">
                <span className="v2-award-emoji">{a.emoji}</span>
                <div>
                  <p className="v2-item-title">{a.title}</p>
                  <p className="v2-muted v2-small">{a.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="v2-card v2-contact">
            <p className="v2-desc">
              Open to new-grad Software Engineering roles starting 2027. Reach out if you want to
              work on something together or think I&apos;d be a good fit.
            </p>
            <a href={`mailto:${EMAIL}`} className="v2-link v2-contact-email">
              {EMAIL}
            </a>
            <div className="v2-contact-links">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={RESUME} target="_blank" rel="noopener noreferrer">
                Resume (PDF)
              </a>
            </div>
          </div>
        </Section>

        <footer className="v2-footer">© 2026 Rufayda Sanjida · Philadelphia, PA</footer>
      </main>
    </div>
  );
}
