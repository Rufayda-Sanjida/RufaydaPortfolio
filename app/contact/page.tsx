"use client";

// /contact — contact card with email, LinkedIn, GitHub, and Discord.

import { motion } from "framer-motion";
import Character from "../components/Character";
import BackLink from "../components/BackLink";
import "./contact.css";

const EMAIL = "rufaydasan@gmail.com";
const LINKEDIN = "https://linkedin.com/in/rufayda-sanjida-047187218;
const GITHUB = "https://github.com/Rufayda-Sanjida";
const DISCORD = "rufaydaSanjida";

// Main contact card
function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="contact-card"
      style={{
        backgroundColor: "#f2f2f7",
        borderRadius: 20,
        padding: "28px 36px",
        width: "100%",
        maxWidth: 420,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Contact heading */}
      <h1
        className="contact-heading"
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: "black",
          margin: 0,
          fontFamily: "var(--font-nunito)",
          lineHeight: 1,
        }}
      >
        Contact
      </h1>

      {/* Email link */}
      <a
        href={`mailto:${EMAIL}`}
        className="email-link contact-email"
        style={{
          color: "#007AFF",
          fontSize: 16,
          fontFamily: "var(--font-nunito)",
          fontWeight: 400,
          textDecoration: "none",
          marginTop: 8,
          letterSpacing: "0.04em",
        }}
      >
        {EMAIL}
      </a>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: "#d1d1d6" }} />

      {/* Social links */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link contact-social"
          style={{
            color: "#8e8e93",
            fontSize: 14,
            fontFamily: "var(--font-nunito)",
            fontWeight: 400,
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
        >
          LinkedIn
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link contact-social"
          style={{
            color: "#8e8e93",
            fontSize: 14,
            fontFamily: "var(--font-nunito)",
            fontWeight: 400,
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
        >
          GitHub
        </a>
        <span
          className="contact-social"
          style={{
            color: "#8e8e93",
            fontSize: 14,
            fontFamily: "var(--font-nunito)",
            fontWeight: 400,
          }}
        >
          Discord — {DISCORD}
        </span>
      </div>
    </motion.div>
  );
}

// Secondary note below the card
function ContactNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="contact-note"
      style={{ maxWidth: 420, width: "100%" }}
    >
      <p
        style={{
          color: "#8e8e93",
          fontSize: 13,
          fontFamily: "var(--font-nunito)",
          fontWeight: 300,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        Contact me if you want to work on anything together or if you think
        I&apos;d be a good fit. Email me at{" "}
        <a
          href={`mailto:${EMAIL}`}
          style={{ color: "#007AFF", textDecoration: "none" }}
        >
          {EMAIL}
        </a>{" "}
        and here&apos;s my{" "}
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007AFF", textDecoration: "none" }}
        >
          LinkedIn
        </a>
        .
      </p>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <main
      className="contact-main"
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
      <div className="contact-character">
        <Character size={80} />
      </div>

      {/* Contact card */}
      <ContactCard />

      {/* Note */}
      <ContactNote />

      {/* Back link */}
      <motion.div
        className="contact-backlink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <BackLink />
      </motion.div>
    </main>
  );
}
