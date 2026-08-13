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
    </main>
  );
}