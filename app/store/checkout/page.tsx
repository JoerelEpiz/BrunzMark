"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import StoreProgress from "../../components/StoreProgress";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, clearCart } = useCart();

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = 0;

  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    setIsSubmitting(true);

    /*
      TEMPORARY ORDER PROCESS

      We are not connecting a payment gateway yet.

      Later this is where we'll send the
      order to the backend/database.
    */

    const order = {
      customer: form,
      items: cart,
      subtotal,
      shipping,
      total,
      createdAt: new Date().toISOString(),
    };

    console.log("ORDER:", order);

    // Temporary successful checkout
    clearCart();

    router.push("/store/checkout/success");
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-brand-light text-brand-dark">
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">

          <h1 className="text-3xl font-bold">
            Your cart is empty
          </h1>

          <p className="mt-3 text-brand-dark/60">
            Add a product before checking out.
          </p>

          <Link
            href="/store"
            className="mt-8 inline-block rounded-lg bg-brand-dark px-6 py-3 font-semibold text-brand-light"
          >
            Go to Store
          </Link>

        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">

        {/* PROGRESS */}

        <StoreProgress
          current="checkout"
          backHref="/store/cart"
          backLabel="Back to Cart"
        />

        <div className="mt-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
            BrunzMark Store
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Checkout
          </h1>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-10 lg:grid-cols-3"
        >

          {/* ================================
             CUSTOMER INFORMATION
          ================================= */}

          <div className="space-y-8 lg:col-span-2">

            {/* CUSTOMER */}

            <section className="rounded-2xl border border-brand-dark/10 bg-white p-6 sm:p-8">

              <h2 className="text-xl font-bold">
                Customer Information
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="text-sm font-medium">
                    First Name
                  </label>

                  <input
                    required
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Last Name
                  </label>

                  <input
                    required
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Phone Number
                  </label>

                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                  />
                </div>

              </div>

            </section>

            {/* SHIPPING */}

            <section className="rounded-2xl border border-brand-dark/10 bg-white p-6 sm:p-8">

              <h2 className="text-xl font-bold">
                Shipping Information
              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  <label className="text-sm font-medium">
                    Complete Address
                  </label>

                  <input
                    required
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House No., Street, Barangay"
                    className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-3">

                  <div>
                    <label className="text-sm font-medium">
                      City
                    </label>

                    <input
                      required
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Province
                    </label>

                    <input
                      required
                      name="province"
                      value={form.province}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Postal Code
                    </label>

                    <input
                      required
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
                    />
                  </div>

                </div>

              </div>

            </section>

            {/* PAYMENT PLACEHOLDER */}

            <section className="rounded-2xl border border-brand-dark/10 bg-white p-6 sm:p-8">

              <h2 className="text-xl font-bold">
                Payment Method
              </h2>

              <div className="mt-6 rounded-lg border border-brand-dark/10 bg-brand-light p-5">

                <p className="font-medium">
                  Payment integration coming next
                </p>

                <p className="mt-1 text-sm text-brand-dark/60">
                  We will connect the payment gateway after the checkout flow is complete.
                </p>

              </div>

            </section>

          </div>

          {/* ================================
             ORDER SUMMARY
          ================================= */}

          <aside className="h-fit rounded-2xl border border-brand-dark/10 bg-white p-6">

            <h2 className="text-xl font-bold">
              Your Order
            </h2>

            <div className="mt-6 space-y-5">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >

                  <div className="h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />

                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="mt-1 text-sm text-brand-dark/60">
                      {item.size} / {item.color}
                    </p>

                    <p className="text-sm text-brand-dark/60">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <p className="font-medium">
                    {formatPrice(
                      item.price * item.quantity
                    )}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-6 space-y-4 border-t border-brand-dark/10 pt-6">

              <div className="flex justify-between text-sm">
                <span className="text-brand-dark/60">
                  Subtotal
                </span>

                <span>
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-brand-dark/60">
                  Shipping
                </span>

                <span>
                  Free
                </span>
              </div>

              <div className="flex justify-between border-t border-brand-dark/10 pt-4">

                <span className="font-semibold">
                  Total
                </span>

                <span className="text-xl font-bold">
                  {formatPrice(total)}
                </span>

              </div>

            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full rounded-lg bg-brand-dark px-6 py-4 font-semibold text-brand-light transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting
                ? "Processing..."
                : "Place Order"}
            </button>

            <p className="mt-4 text-center text-xs text-brand-dark/50">
              By placing your order, you agree to our store policies.
            </p>

          </aside>

        </form>

      </section>

    </main>
  );
}