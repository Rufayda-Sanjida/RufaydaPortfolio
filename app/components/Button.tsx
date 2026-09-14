"use client";

import { ButtonHTMLAttributes, ReactNode, useState } from "react";

// Glassmorphism pill button used for the nav items on the home page.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`hero-btn ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        whiteSpace: "nowrap",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "pointer",
        borderRadius: "16px",
        border: "1px solid #e4e4e7",
        backgroundColor: isHovered
          ? "rgba(0, 0, 0, 0.04)"
          : "rgba(255, 255, 255, 0.3)",
        padding: "20px 28px",
        backdropFilter: "blur(16px)",
        transition: "all 0.15s ease",
        outline: "none",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
