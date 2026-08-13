const services = [
    {
      number: "01",
      name: "Silkscreen",
      description:
        "Reliable and cost-effective printing for bulk orders, organizations, businesses, and events.",
      features: ["Bulk orders", "Simple designs", "Durable prints"],
    },
    {
      number: "02",
      name: "DTF Printing",
      description:
        "Full-color printing with detailed designs, vibrant artwork, and excellent versatility.",
      features: ["Full-color designs", "Detailed artwork", "Small & large orders"],
    },
    {
      number: "03",
      name: "Sublimation",
      description:
        "High-quality dye-sublimation printing for sportswear, jerseys, and polyester garments.",
      features: ["Sportswear", "All-over designs", "Polyester garments"],
    },
  ];
  
  export default function PrintingServices() {
    return (
      <section
        id="services"
        className="bg-brand-dark py-20 text-brand-light sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
  
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Printing Services
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Bring your designs to life.
            </h2>
  
            <p className="mt-5 text-base leading-7 text-brand-light/70 sm:text-lg sm:leading-8">
              Choose the printing method that fits your design, apparel,
              quantity, and purpose.
            </p>
          </div>
  
          {/* Service Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
  
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-2xl border border-brand-light/10 bg-brand-light/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-light/20 hover:bg-brand-light/[0.08] sm:p-8"
              >
  
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-brand-accent">
                    {service.number}
                  </span>
  
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
  
                {/* Title */}
                <h3 className="mt-10 text-2xl font-bold">
                  {service.name}
                </h3>
  
                {/* Description */}
                <p className="mt-4 leading-7 text-brand-light/70">
                  {service.description}
                </p>
  
                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-brand-light/80"
                    >
                      <span className="text-brand-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
  
              </div>
            ))}
  
          </div>
  
          {/* CTA */}
          <div
            id="custom"
            className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand-light p-6 text-brand-dark sm:p-8 lg:flex-row lg:items-center"
          >
  
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Have a custom project in mind?
              </h3>
  
              <p className="mt-2 text-sm text-text-secondary sm:text-base">
                Tell us what you need and let's create something together.
              </p>
            </div>
  
            <a
              href="#"
              className="w-full rounded-lg bg-brand-dark px-6 py-3 text-center font-semibold text-brand-light transition hover:bg-brand-accent hover:text-brand-dark sm:w-auto"
            >
              Request a Quote
            </a>
  
          </div>
  
        </div>
      </section>
    );
  }