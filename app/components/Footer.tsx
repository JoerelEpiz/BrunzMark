export default function Footer() {
    return (
      <footer className="border-t border-brand-light/10 bg-brand-dark text-brand-light">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
  
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
  
            {/* Logo */}
            <a
              href="#home"
              className="text-xl font-bold tracking-tight"
            >
              BRUNZMARK
            </a>
  
            {/* Navigation */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-light/70">
              <a
                href="#projects"
                className="transition hover:text-brand-light"
              >
                Projects
              </a>
  
              <a
                href="#skills"
                className="transition hover:text-brand-light"
              >
                Skills
              </a>
  
              <a
                href="#experience"
                className="transition hover:text-brand-light"
              >
                Experience
              </a>
  
              <a
                href="#about"
                className="transition hover:text-brand-light"
              >
                About
              </a>
  
              <a
                href="#contact"
                className="transition hover:text-brand-light"
              >
                Contact
              </a>
            </nav>
  
          </div>
  
          {/* Bottom */}
          <div className="mt-8 flex flex-col gap-3 border-t border-brand-light/10 pt-6 text-sm text-brand-light/50 sm:flex-row sm:items-center sm:justify-between">
  
            <p>
              © {new Date().getFullYear()} BRUNZMARK. All rights reserved.
            </p>
  
            <p>
              Built with Next.js & Tailwind CSS.
            </p>
  
          </div>
  
        </div>
      </footer>
    );
  }