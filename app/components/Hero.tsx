export default function Hero() {
    return (
      <section className="min-h-screen bg-brand-light text-brand-dark">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
  
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Web Developer
            </p>
  
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Hi, I'm Joerel.
            </h1>
  
            <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
              I build modern, responsive, and user-focused websites
              using modern web technologies.
            </p>
  
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-brand-dark px-6 py-3 text-center font-semibold text-brand-light transition hover:bg-dark-800"
              >
                View Projects
              </a>
  
              <a
                href="#contact"
                className="rounded-lg border border-brand-dark px-6 py-3 text-center font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-brand-light"
              >
                Contact Me
              </a>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="w-full">
            <div className="h-100 w-full overflow-hidden rounded-2xl sm:h-110 lg:h-120">
              <img
                src="/hero-image.jpg"
                alt="Joerel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  }