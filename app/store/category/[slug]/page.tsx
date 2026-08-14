import ProductCard from "../../components/ProductCard";
import StoreProgress from "../../../components/StoreProgress";

type CategoryPageProps = {
    params: Promise<{
      slug: string;
    }>;
  };
  
  const categories = {
    "t-shirts": {
      name: "T-Shirts",
      description: "Everyday essentials and custom tees.",
    },
    hoodies: {
      name: "Hoodies",
      description: "Comfortable apparel for any style.",
    },
    polos: {
      name: "Polos",
      description: "Clean and professional custom polos.",
    },
    jerseys: {
      name: "Jerseys",
      description: "Custom jerseys for teams and events.",
    },
    caps: {
      name: "Caps",
      description: "Custom caps for brands and organizations.",
    },
    "tote-bags": {
      name: "Tote Bags",
      description: "Reusable bags with your own design.",
    },
  };
  
  const products = [
    {
      name: "Classic Cotton T-Shirt",
      slug: "classic-cotton-tshirt",
      price: "₱450",
      image: "/products/tshirt-1.jpg",
    },
    {
      name: "Premium Oversized T-Shirt",
      slug: "premium-oversized-tshirt",
      price: "₱650",
      image: "/products/tshirt-2.jpg",
    },
    {
      name: "Custom Basic Tee",
      slug: "custom-basic-tee",
      price: "₱500",
      image: "/products/tshirt-3.jpg",
    },
    {
      name: "BrunzMark Signature Tee",
      slug: "brunzmark-signature-tee",
      price: "₱750",
      image: "/products/tshirt-4.jpg",
    },
  ];

  export default async function CategoryPage({
    params,
  }: CategoryPageProps) {
    const { slug } = await params;
  
    const category = categories[slug as keyof typeof categories];
  
    if (!category) {
      return (
        <main className="min-h-screen bg-brand-light px-6 py-24 text-brand-dark">
          <h1 className="text-4xl font-bold">
            Category not found
          </h1>
        </main>
      );
    }
  
    return (
        <main className="min-h-screen bg-brand-light text-brand-dark">
            <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
            <StoreProgress
              current="category"
              backHref="/store"
              backLabel="Back to Store"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Category
            </p>
        
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {category.name}
            </h1>
        
            <p className="mt-5 max-w-2xl text-text-secondary">
                {category.description}
            </p>
        
            {/* Products */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                <ProductCard
                    key={product.name}
                    name={product.name}
                    slug={product.slug}
                    price={product.price}
                    image={product.image}
                />
                ))}
            </div>
            </section>
        </main>
    );
  }