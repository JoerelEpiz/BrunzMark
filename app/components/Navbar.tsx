"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-9999">
      <nav className="relative bg-brand-dark text-brand-light">
        <div className="flex items-center justify-between px-6 py-4 sm:px-8">

          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            BRUNZMARK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="/store">Store</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Button */}          
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="relative z-10000 flex h-10 w-10 items-center justify-center rounded-lg text-2xl md:hidden"
          >
            {isOpen ? "✕" : "☰"}
          </button>  
          
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full z-9999 border-t border-brand-dark/10 bg-brand-light text-brand-dark shadow-xl md:hidden">
            <div className="flex flex-col px-6 py-4">

              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="border-b border-brand-dark/10 py-4 font-medium"
              >
                Projects
              </a>

              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="border-b border-brand-dark/10 py-4 font-medium"
              >
                Skills
              </a>

              <a
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="border-b border-brand-dark/10 py-4 font-medium"
              >
                Experience
              </a>

              <a
                href="/store"
                onClick={() => setIsOpen(false)}
                className="border-b border-brand-dark/10 py-4 font-medium"
              >
                Store
              </a>

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="border-b border-brand-dark/10 py-4 font-medium"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="py-4 font-medium"
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}