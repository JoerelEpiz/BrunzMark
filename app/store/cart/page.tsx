import StoreProgress from "../../components/StoreProgress";
export default function CartPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">

        {/* Progress bar / Back button */}
        <StoreProgress
          current="cart"
          backHref="/store"
          backLabel="Continue Shopping"
        />

        {/* Page label */}
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          BrunzMark Store
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Your Cart
        </h1>

        {/* Cart content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          ...
        </div>

      </section>
    </main>
  );
}