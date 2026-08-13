export default function Skills() {
    return (
      <section
        id="skills"
        className="bg-brand-light py-20 text-brand-dark sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
  
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Skills
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Technologies I work with.
            </h2>
  
            <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              Tools and technologies I use to build modern,
              responsive, and functional applications.
            </p>
          </div>
  
          {/* Skills */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  
            {/* Frontend */}
            <div className="rounded-2xl border border-border-light p-6">
              <h3 className="text-xl font-bold">
                Frontend
              </h3>
  
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  HTML
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  CSS
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  JavaScript
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  React
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  Next.js
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  Tailwind CSS
                </span>
              </div>
            </div>
  
            {/* Backend */}
            <div className="rounded-2xl border border-border-light p-6">
              <h3 className="text-xl font-bold">
                Backend
              </h3>
  
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  Node.js
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  Express
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  Python
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  FastAPI
                </span>
              </div>
            </div>
  
            {/* Database & Tools */}
            <div className="rounded-2xl border border-border-light p-6">
              <h3 className="text-xl font-bold">
                Database & Tools
              </h3>
  
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  MySQL
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  Git
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  GitHub
                </span>
  
                <span className="rounded-lg bg-brand-dark px-4 py-2 text-sm text-brand-light">
                  Figma
                </span>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }