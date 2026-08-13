export default function Hero() {
    return (
      <section className="relative min-h-screen overflow-hidden bg-brand-light text-brand-dark pt-16">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center px-8 lg:grid-cols-2 lg:px-12">
          
          {/* Left Content */}
          <div className="relative z-10 max-w-2xl py-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Web Developer
            </p>
  
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm Joerel.
            </h1>
  
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
              I build modern, responsive, and user-focused websites
              using modern web technologies.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-brand-dark px-6 py-3 font-semibold text-brand-light transition hover:bg-dark-800"
              >
                View Projects
              </a>
  
              <a
                href="#contact"
                className="rounded-lg border border-brand-dark px-6 py-3 font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-brand-light"
              >
                Contact Me
              </a>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="relative hidden h-screen lg:block">
            <div className="absolute inset-y-0 right-[-15%] w-[115%] -skew-x-6 overflow-hidden bg-brand-dark">
              <img
                src="/hero-image.jpg"
                alt="Joerel"
                className="h-full w-full object-cover skew-x-6"
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  }