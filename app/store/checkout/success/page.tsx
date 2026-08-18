import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-light px-6 text-brand-dark">

      <section className="w-full max-w-xl rounded-2xl border border-brand-dark/10 bg-white p-8 text-center sm:p-12">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-dark text-2xl text-brand-light">
          ✓
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          BrunzMark Store
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Order Received!
        </h1>

        <p className="mt-4 leading-7 text-brand-dark/60">
          Thank you for shopping with BrunzMark.
          Your order has been received successfully.
        </p>

        <Link
          href="/store"
          className="mt-8 inline-block rounded-lg bg-brand-dark px-6 py-3 font-semibold text-brand-light transition hover:opacity-90"
        >
          Continue Shopping
        </Link>

      </section>

    </main>
  );
}