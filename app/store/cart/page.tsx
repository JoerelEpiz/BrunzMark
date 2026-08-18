"use client";

import Link from "next/link";
import StoreProgress from "../../components/StoreProgress";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">

        {/* Progress */}
        <StoreProgress
          current="cart"
          backHref="/store"
          backLabel="Continue Shopping"
        />

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          BrunzMark Store
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          /* ================================
             EMPTY CART
          ================================= */
          <div className="mt-16 rounded-2xl border border-brand-dark/10 bg-white p-10 text-center">
            <h2 className="text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-brand-dark/60">
              You haven't added anything to your cart yet.
            </p>

            <Link
              href="/store"
              className="mt-8 inline-block rounded-lg bg-brand-dark px-6 py-3 font-semibold text-brand-light transition hover:opacity-90"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          /* ================================
             CART
          ================================= */
          <div className="mt-12 grid gap-10 lg:grid-cols-3">

            {/* PRODUCTS */}
            <div className="space-y-5 lg:col-span-2">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 rounded-2xl border border-brand-dark/10 bg-white p-5"
                >

                  {/* IMAGE */}
                  <div className="h-28 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-36 sm:w-32">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex min-w-0 flex-1 flex-col">

                    <div className="flex justify-between gap-4">

                      <div>
                        <h2 className="font-semibold">
                          {item.name}
                        </h2>

                        <p className="mt-1 text-sm text-brand-dark/60">
                          Size: {item.size}
                        </p>

                        <p className="text-sm text-brand-dark/60">
                          Color: {item.color}
                        </p>
                      </div>

                      <p className="font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4">

                      {/* QUANTITY */}
                      <div className="flex items-center rounded-lg border border-brand-dark/20">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          className="px-3 py-2 disabled:opacity-30"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="px-3 py-2"
                        >
                          +
                        </button>

                      </div>

                      {/* REMOVE */}
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="text-sm font-medium text-red-600 hover:underline"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* ================================
               ORDER SUMMARY
            ================================= */}
            <aside className="h-fit rounded-2xl border border-brand-dark/10 bg-white p-6">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-brand-dark/60">
                    Subtotal
                  </span>

                  <span className="font-medium">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-brand-dark/60">
                    Shipping
                  </span>

                  <span className="font-medium">
                    Calculated at checkout
                  </span>
                </div>

                <div className="border-t border-brand-dark/10 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">
                      Total
                    </span>

                    <span className="text-xl font-bold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </div>

              </div>

              {/* CHECKOUT */}
              <Link
                href="/store/checkout"
                className="mt-6 block w-full rounded-lg bg-brand-dark px-6 py-4 text-center font-semibold text-brand-light transition hover:opacity-90"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/store"
                className="mt-3 block text-center text-sm font-medium hover:underline"
              >
                Continue Shopping
              </Link>

            </aside>

          </div>
        )}

      </section>
    </main>
  );
}