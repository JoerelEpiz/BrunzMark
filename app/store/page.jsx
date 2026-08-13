import StoreNavbar from "./components/StoreNavbar";
import StoreHero from "./components/StoreHero";
import CategoryGrid from "./components/CategoryGrid";
import PrintingServices from "./components/PrintingServices";

export default function Store() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <StoreNavbar />
      <StoreHero />
      <CategoryGrid />
      <PrintingServices />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          Store
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          BrunzMark Store
        </h1>

        <p className="mt-5 max-w-2xl text-text-secondary">
          Clothing, custom printing, and apparel made for your brand.
        </p>

      </div>
    </main>
  );
}