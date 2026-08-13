export default function Projects() {
    return (
      <section
        id="projects"
        className="bg-brand-dark py-20 text-brand-light sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
  
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Selected Work
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Projects I've built.
            </h2>
          </div>
  
          {/* Projects */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
  
            {/* Project 1 */}
            <article className="overflow-hidden rounded-2xl border border-border-dark bg-bg-dark-soft">
              <div className="aspect-video bg-brand-light">
                <img
                  src="/project-1.jpg"
                  alt="Project 1"
                  className="h-full w-full object-cover"
                />
              </div>
  
              <div className="p-6">
                <p className="text-sm text-brand-accent">
                  Desktop Application Development
                </p>
  
                <h3 className="mt-2 text-2xl font-bold">
                  Project Review and Analysis Management Information System
                </h3>
  
                <p className="mt-3 leading-7 text-text-light-muted">
                  Can insert, update, delete, and view project reviews and analysis. 
                  It also has a search feature to find specific reviews and analysis. 
                  The system is built using Python, PySide6, and MySQL.  
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    Python
                  </span>
  
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    PySide6
                  </span>
  
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    MySQL
                  </span>
                </div>
  
                <a
                  href="#"
                  className="mt-6 inline-block font-semibold text-brand-accent hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>
  
            {/* Project 2 */}
            <article className="overflow-hidden rounded-2xl border border-border-dark bg-bg-dark-soft">
              <div className="aspect-video bg-brand-light">
                <img
                  src="/project-2.jpg"
                  alt="Project 2"
                  className="h-full w-full object-cover"
                />
              </div>
  
              <div className="p-6">
                <p className="text-sm text-brand-accent">
                  Application Development
                </p>
  
                <h3 className="mt-2 text-2xl font-bold">
                  Project Name
                </h3>
  
                <p className="mt-3 leading-7 text-text-light-muted">
                  A short description of what the project does,
                  what problem it solves, and what you built.
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    Python
                  </span>
  
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    PySide6
                  </span>
  
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    MySQL
                  </span>
                </div>
  
                <a
                  href="#"
                  className="mt-6 inline-block font-semibold text-brand-accent hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="overflow-hidden rounded-2xl border border-border-dark bg-bg-dark-soft">
              <div className="aspect-video bg-brand-light">
                <img
                  src="/project-3.jpg"
                  alt="Project 3"
                  className="h-full w-full object-cover"
                />
              </div>
  
              <div className="p-6">
                <p className="text-sm text-brand-accent">
                  Application Development
                </p>
  
                <h3 className="mt-2 text-2xl font-bold">
                  Project Name
                </h3>
  
                <p className="mt-3 leading-7 text-text-light-muted">
                  A short description of what the project does,
                  what problem it solves, and what you built.
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    Python
                  </span>
  
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    PySide6
                  </span>
  
                  <span className="rounded-full bg-brand-dark px-3 py-1 text-sm">
                    MySQL
                  </span>
                </div>
  
                <a
                  href="#"
                  className="mt-6 inline-block font-semibold text-brand-accent hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>
  
          </div>
        </div>
      </section>
    );
  }