type ProductCardProps = {
    name: string;
    slug: string;
    price: string;
    image: string;
  };
  
  export default function ProductCard({
    name,
    slug,
    price,
    image,
  }: ProductCardProps) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-brand-dark/10 bg-white">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
  
        {/* Product Information */}
        <div className="p-5">
          <h3 className="font-semibold text-brand-dark">
            {name}
          </h3>
  
          <p className="mt-2 font-bold text-brand-dark">
            {price}
          </p>
  
          <a
            href={`/store/product/${slug}`}
            className="mt-4 block w-full rounded-lg bg-brand-dark px-4 py-3 text-sm font-semibold text-brand-light transition hover:bg-dark-800"
          >
            View Product
          </a>
        </div>
      </article>
    );
  }