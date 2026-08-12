"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="text-xl font-bold">
        BRUNZMARK
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white px-8 py-6 shadow-md md:hidden">
          <div className="flex flex-col gap-6">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}