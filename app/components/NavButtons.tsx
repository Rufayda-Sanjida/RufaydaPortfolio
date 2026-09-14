"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";

// All six nav destinations shown on the home page.
const navItems = [
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact Me", href: "/contact" },
];

interface NavButtonsProps {
  // Hidden until the home page typewriter finishes
  show?: boolean;
}

export default function NavButtons({ show = false }: NavButtonsProps) {
  if (!show) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hero-nav"
      style={{ width: "100%", maxWidth: "600px", padding: "0 16px" }}
    >
      <div
        className="hero-nav-inner"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={item.href}>
              <Button>
                <span className="text-xs font-normal text-zinc-500 sm:text-sm [font-family:var(--font-nunito)]">
                  {item.label}
                </span>
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
