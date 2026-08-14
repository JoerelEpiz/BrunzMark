import ProductDetails from "./ProductDetails";
import StoreProgress from "../../../components/StoreProgress";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const products = {
  "classic-cotton-tshirt": {
    name: "Classic Cotton T-Shirt",
    price: "₱450",
    image: "/products/tshirt-1.jpg",
    description:
      "A comfortable everyday cotton T-shirt that is perfect for casual wear and custom printing.",
  },

  "premium-oversized-tshirt": {
    name: "Premium Oversized T-Shirt",
    price: "₱650",
    image: "/products/tshirt-2.jpg",
    description:
      "A premium oversized T-shirt designed for a relaxed and modern fit.",
  },

  "custom-basic-tee": {
    name: "Custom Basic Tee",
    price: "₱500",
    image: "/products/tshirt-3.jpg",
    description:
      "A simple and versatile T-shirt ready for your custom design.",
  },

  "brunzmark-signature-tee": {
    name: "BrunzMark Signature Tee",
    price: "₱750",
    image: "/products/tshirt-4.jpg",
    description:
      "A signature BrunzMark design made for everyday style.",
  },
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <main className="min-h-screen bg-brand-light px-6 py-24 text-brand-dark">
        <h1 className="text-4xl font-bold">
          Product not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
      <StoreProgress
        current="product"
        backHref="/store/category/t-shirts"
        backLabel="Back to T-Shirts"
      />
        <ProductDetails product={product} />
      </section>
    </main>
  );
}