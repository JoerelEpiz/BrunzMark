export default function About() {
    return (
      <section
        id="about"
        className="bg-brand-light py-20 text-brand-dark sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
  
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              About Me
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A little about me.
            </h2>
          </div>
  
          {/* Content */}
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
  
            {/* Main Description */}
            <div>
              <p className="text-lg leading-8">
                I'm a developer who enjoys turning ideas into practical,
                functional, and visually engaging digital experiences.
              </p>
  
              <p className="mt-6 leading-7 text-text-secondary">
                I enjoy working across both frontend and backend development,
                learning new technologies, and building projects that solve
                real-world problems.
              </p>
  
              <p className="mt-6 leading-7 text-text-secondary">
                My goal is to continuously improve my skills and create
                applications that are useful, reliable, and enjoyable to use.
              </p>
            </div>
  
            {/* Quick Information */}
            <div className="grid gap-6 sm:grid-cols-2">
  
              <div className="rounded-2xl border border-border-light p-6">
                <p className="text-sm text-text-secondary">
                  Focus
                </p>
  
                <h3 className="mt-2 text-lg font-bold">
                  Web Development
                </h3>
              </div>
  
              <div className="rounded-2xl border border-border-light p-6">
                <p className="text-sm text-text-secondary">
                  Currently Learning
                </p>
  
                <h3 className="mt-2 text-lg font-bold">
                  Full-Stack Development
                </h3>
              </div>
  
              <div className="rounded-2xl border border-border-light p-6">
                <p className="text-sm text-text-secondary">
                  Interests
                </p>
  
                <h3 className="mt-2 text-lg font-bold">
                  Design & Technology
                </h3>
              </div>
  
              <div className="rounded-2xl border border-border-light p-6">
                <p className="text-sm text-text-secondary">
                  Goal
                </p>
  
                <h3 className="mt-2 text-lg font-bold">
                  Build Better Products
                </h3>
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }