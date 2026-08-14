"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";

type ProductDetailsProps = {
  product: {
    name: string;
    price: string;
    image: string;
    description: string;
  };
};

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
    const { addToCart } = useCart();
    const router = useRouter();

    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("Black");
    const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid items-start gap-12 lg:grid-cols-2">

      {/* Product Image */}
      <div className="overflow-hidden rounded-2xl bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          BrunzMark Store
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {product.name}
        </h1>

        <p className="mt-5 text-2xl font-bold">
          {product.price}
        </p>

        <p className="mt-6 max-w-xl leading-7 text-text-secondary">
          {product.description}
        </p>

        {/* Size */}
        <div className="mt-8">
          <h2 className="font-semibold">
            Size
          </h2>

          <div className="mt-3 flex flex-wrap gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`rounded-lg border px-5 py-2 font-medium transition ${
                  selectedSize === size
                    ? "border-brand-dark bg-brand-dark text-brand-light"
                    : "border-brand-dark/20 bg-white hover:border-brand-dark"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="mt-8">
          <h2 className="font-semibold">
            Color
          </h2>

          <div className="mt-3 flex flex-wrap gap-3">
            {["Black", "White", "Navy", "Gray"].map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`rounded-lg border px-5 py-2 font-medium transition ${
                  selectedColor === color
                    ? "border-brand-dark bg-brand-dark text-brand-light"
                    : "border-brand-dark/20 bg-white hover:border-brand-dark"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-8">
          <h2 className="font-semibold">
            Quantity
          </h2>

          <div className="mt-3 flex w-fit items-center overflow-hidden rounded-lg border border-brand-dark/20 bg-white">
            <button
              type="button"
              onClick={() =>
                setQuantity((current) =>
                  Math.max(1, current - 1)
                )
              }
              className="px-4 py-2 transition hover:bg-brand-light"
            >
              −
            </button>

            <span className="min-w-12 px-4 py-2 text-center font-semibold">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                setQuantity((current) => current + 1)
              }
              className="px-4 py-2 transition hover:bg-brand-light"
            >
              +
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-8 rounded-xl bg-white p-5">
          <h2 className="font-semibold">
            Your Selection
          </h2>

          <div className="mt-4 space-y-2 text-sm text-text-secondary">
            <p>
              Size:{" "}
              <span className="font-semibold text-brand-dark">
                {selectedSize}
              </span>
            </p>

            <p>
              Color:{" "}
              <span className="font-semibold text-brand-dark">
                {selectedColor}
              </span>
            </p>

            <p>
              Quantity:{" "}
              <span className="font-semibold text-brand-dark">
                {quantity}
              </span>
            </p>
          </div>
        </div>

        {/* Add to Cart */}
        <button
            type="button"
            onClick={() => {
                addToCart({
                id: `${product.name}-${selectedSize}-${selectedColor}`,
                name: product.name,
                price: Number(
                    product.price.replace("₱", "")
                ),
                image: product.image,
                size: selectedSize,
                color: selectedColor,
                quantity,
                });

                router.push("/store/cart");
            }}
            className="mt-8 w-full rounded-lg bg-brand-dark px-6 py-4 font-semibold text-brand-light transition hover:bg-dark-800 sm:w-auto"
            >
            Add to Cart
        </button>
      </div>
    </div>
  );
}