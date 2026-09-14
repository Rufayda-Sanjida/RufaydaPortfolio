"use client";

import { useState } from "react";
import Link from "next/link";

// "← Back to Home" link shown at the bottom of every sub-page.
// href and label are customizable via props.

interface BackLinkProps {
  href?: string;
  children?: React.ReactNode;
}

export default function BackLink({
  href = "/",
  children = "← Back to Home",
}: BackLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? "#3f3f46" : "#71717a",
        textDecoration: isHovered ? "underline" : "none",
        transition: "color 0.15s ease",
        fontFamily: "var(--font-nunito)",
      }}
    >
      {children}
    </Link>
  );
}
