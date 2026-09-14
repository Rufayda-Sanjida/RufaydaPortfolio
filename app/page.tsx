"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import NavButtons from "./components/NavButtons";

// Home page — shows the hero, then reveals nav buttons after the typewriter finishes.
export default function Home() {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <main
      className="hero-main flex-1 flex flex-col items-center justify-center bg-white"
      style={{
        paddingTop: "60px",
        paddingBottom: "32px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <HeroSection onTypewriterDone={() => setShowButtons(true)} />
      <div className="hero-nav-gap" style={{ marginTop: "40px" }}>
        <NavButtons show={showButtons} />
      </div>
    </main>
  );
}
