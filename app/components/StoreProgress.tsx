import Link from "next/link";

type StoreProgressProps = {
  current: "category" | "product" | "cart" | "checkout";
  backHref: string;
  backLabel: string;
};

const steps = [
  {
    id: "category",
    label: "Category",
  },
  {
    id: "product",
    label: "Product",
  },
  {
    id: "cart",
    label: "Cart",
  },
  {
    id: "checkout",
    label: "Checkout",
  },
];

export default function StoreProgress({
  current,
  backHref,
  backLabel,
}: StoreProgressProps) {
  const currentIndex = steps.findIndex(
    (step) => step.id === current
  );

  return (
    <div className="mb-12">

      {/* Back Button */}
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-brand-dark"
      >
        <span aria-hidden="true">←</span>
        {backLabel}
      </Link>

      {/* Progress Panel */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-brand-dark/10 bg-white">

        <div className="px-5 py-5 sm:px-6">

          {/* Header */}
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-semibold">
                Shopping progress
              </p>

              <p className="mt-1 text-xs text-text-secondary">
                Step {currentIndex + 1} of {steps.length}
              </p>
            </div>

            <span className="text-sm font-semibold text-brand-accent">
              {steps[currentIndex].label}
            </span>

          </div>

          {/* Progress */}
          <div className="mt-5">
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-brand-dark/10"
              role="progressbar"
              aria-valuenow={currentIndex + 1}
              aria-valuemin={1}
              aria-valuemax={steps.length}
            >
              <div
                className="h-full rounded-full bg-brand-dark transition-all duration-500"
                style={{
                  width: `${
                    ((currentIndex + 1) /
                      steps.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="mt-5 grid grid-cols-4">

            {steps.map((step, index) => {
              const active = index <= currentIndex;

              return (
                <div
                  key={step.id}
                  className={`text-xs ${
                    active
                      ? "font-semibold text-brand-dark"
                      : "text-text-secondary"
                  }`}
                >
                  {step.label}
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </div>
  );
}