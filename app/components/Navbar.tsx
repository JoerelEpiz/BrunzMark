"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-brand-dark text-brand-light fixed w-full z-10">
      {/* Logo */}
      <a href="#" className="text-xl font-bold">
        BRUNZMARK
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
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
        <div className="absolute top-full left-0 w-full bg-brand-light px-8 py-6 shadow-md md:hidden text-brand-dark z-50">
          <div className="flex flex-col gap-6">
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
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