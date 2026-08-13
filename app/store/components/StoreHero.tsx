export default function StoreHero() {
    return (
      <section className="bg-brand-dark text-brand-light">
        <div className="mx-auto grid min-h-170 max-w-7xl items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:px-12">
  
          {/* Left Content */}
          <div className="max-w-2xl">
  
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              BrunzMark Store
            </p>
  
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Wear your ideas.
            </h1>
  
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-light/70 sm:text-lg">
              Custom clothing and professional printing made for brands,
              businesses, organizations, teams, and individuals.
            </p>
  
            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
  
              <a
                href="#shop"
                className="rounded-lg bg-brand-light px-6 py-3 text-center font-semibold text-brand-dark transition hover:bg-brand-accent"
              >
                Shop Apparel
              </a>
  
              <a
                href="#custom"
                className="rounded-lg border border-brand-light/30 px-6 py-3 text-center font-semibold text-brand-light transition hover:bg-brand-light hover:text-brand-dark"
              >
                Start Custom Order
              </a>
  
            </div>
  
          </div>
  
          {/* Right Image */}
          <div className="w-full">
            <div className="aspect-4/3 w-full overflow-hidden rounded-2xl">
              <img
                src="/store-hero.jpg"
                alt="BrunzMark custom apparel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  }