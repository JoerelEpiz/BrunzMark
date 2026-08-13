export default function Experience() {
    return (
      <section
        id="experience"
        className="bg-brand-dark py-20 text-brand-light sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
  
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Experience
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              My professional journey.
            </h2>
          </div>
  
          {/* Experience */}
          <div className="mt-12">
  
            {/* Experience 1 */}
            <div className="grid gap-6 border-t border-brand-light/20 py-8 md:grid-cols-[180px_1fr]">
  
              <div>
                <p className="text-sm font-medium text-brand-accent">
                  2022 — Present
                </p>
              </div>
  
              <div>
                <h3 className="text-xl font-bold">
                  Job Title
                </h3>
  
                <p className="mt-1 text-brand-light/70">
                  Company / Organization
                </p>
  
                <p className="mt-4 max-w-3xl leading-7 text-brand-light/80">
                  Describe your responsibilities, projects, achievements,
                  and the technologies you used in this role.
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-light/10 px-3 py-1 text-sm">
                    HTML
                  </span>
  
                  <span className="rounded-full bg-brand-light/10 px-3 py-1 text-sm">
                    CSS
                  </span>
  
                  <span className="rounded-full bg-brand-light/10 px-3 py-1 text-sm">
                    JavaScript
                  </span>
                </div>
              </div>
  
            </div>
  
            {/* Experience 2 */}
            <div className="grid gap-6 border-t border-brand-light/20 py-8 md:grid-cols-[180px_1fr]">
  
              <div>
                <p className="text-sm font-medium text-brand-accent">
                  2020 — 2022
                </p>
              </div>
  
              <div>
                <h3 className="text-xl font-bold">
                  Job Title
                </h3>
  
                <p className="mt-1 text-brand-light/70">
                  Company / Organization
                </p>
  
                <p className="mt-4 max-w-3xl leading-7 text-brand-light/80">
                  Describe your responsibilities, achievements,
                  and experience from this position.
                </p>
  
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-light/10 px-3 py-1 text-sm">
                    Technology
                  </span>
  
                  <span className="rounded-full bg-brand-light/10 px-3 py-1 text-sm">
                    Technology
                  </span>
                </div>
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  }