const categories = [
    {
      name: "T-Shirts",
      slug: "t-shirts",
      description: "Everyday essentials and custom tees.",
      image: "/categories/tshirts.jpg",
    },
    {
      name: "Hoodies",
      slug: "hoodies",
      description: "Comfortable apparel for any style.",
      image: "/categories/hoodies.jpg",
    },
    {
      name: "Polos",
      slug: "polos",
      description: "Clean and professional custom polos.",
      image: "/categories/polos.jpg",
    },
    {
      name: "Jerseys",
      slug: "jerseys",
      description: "Custom jerseys for teams and events.",
      image: "/categories/jerseys.jpg",
    },
    {
      name: "Caps",
      slug: "caps",
      description: "Custom caps for brands and organizations.",
      image: "/categories/caps.jpg",
    },
    {
      name: "Tote Bags",
      slug: "tote-bags",
      description: "Reusable bags with your own design.",
      image: "/categories/totebags.jpg",
    },
  ];
  
  export default function CategoryGrid() {
    return (
      <section
        id="shop"
        className="bg-brand-light py-20 text-brand-dark sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
  
          {/* Heading */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
  
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Shop
              </p>
  
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Shop by category.
              </h2>
            </div>
  
            <a
              href="#"
              className="text-sm font-semibold transition hover:text-brand-accent"
            >
              View all →
            </a>
  
          </div>
  
          {/* Categories */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
  
            {categories.map((category) => (
              <a
                key={category.name}
                href={`/store/category/${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-brand-dark/10 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
  
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
  
                {/* Content */}
                <div className="p-4">
  
                  <h3 className="font-bold">
                    {category.name}
                  </h3>
  
                  <p className="mt-1 text-xs leading-5 text-text-secondary">
                    {category.description}
                  </p>
  
                </div>
  
              </a>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }