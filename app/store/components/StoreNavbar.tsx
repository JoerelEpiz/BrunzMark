"use client";

import { useState } from "react";

export default function StoreNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-brand-dark/10 bg-brand-light">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">

        {/* Logo */}
        <a
          href="/store"
          className="text-xl font-bold tracking-tight text-brand-dark"
        >
          BRUNZMARK
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#shop"
            className="text-sm font-medium transition hover:text-brand-accent"
          >
            Shop
          </a>

          <a
            href="#services"
            className="text-sm font-medium transition hover:text-brand-accent"
          >
            Printing
          </a>

          <a
            href="#custom"
            className="text-sm font-medium transition hover:text-brand-accent"
          >
            Custom
          </a>

          <a
            href="#promos"
            className="text-sm font-medium transition hover:text-brand-accent"
          >
            Promos
          </a>
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-5 md:flex">

          <a
            href="/store/login"
            className="text-sm font-medium transition hover:text-brand-accent"
          >
            Account
          </a>

          <a
            href="/store/cart"
            className="text-sm font-medium transition hover:text-brand-accent"
          >
            Cart (0)
          </a>

        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle store menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full border-b border-brand-dark/10 bg-brand-light px-6 py-6 shadow-md md:hidden">

            <div className="flex flex-col gap-6">

              <a
                href="#shop"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </a>

              <a
                href="#services"
                onClick={() => setIsOpen(false)}
              >
                Printing
              </a>

              <a
                href="#custom"
                onClick={() => setIsOpen(false)}
              >
                Custom
              </a>

              <a
                href="#promos"
                onClick={() => setIsOpen(false)}
              >
                Promos
              </a>

              <div className="border-t border-brand-dark/10 pt-6">

                <a
                  href="/store/login"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  Account
                </a>

                <a
                  href="/store/cart"
                  className="mt-5 block"
                  onClick={() => setIsOpen(false)}
                >
                  Cart (0)
                </a>

              </div>

              <a
                href="/"
                className="border-t border-brand-dark/10 pt-6 text-sm font-medium text-brand-accent"
                onClick={() => setIsOpen(false)}
              >
                ← Back to Portfolio
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}