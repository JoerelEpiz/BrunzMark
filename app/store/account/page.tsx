import Link from "next/link";

const orders = [
  {
    id: "BM-00001",
    date: "August 18, 2026",
    total: 1350,
    status: "Processing",
  },
  {
    id: "BM-00002",
    date: "August 10, 2026",
    total: 750,
    status: "Delivered",
  },
];

export default function AccountPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
            BrunzMark Account
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            My Account
          </h1>

          <p className="mt-3 text-brand-dark/60">
            Welcome back, Joerel.
          </p>
        </div>

        {/* ACCOUNT OPTIONS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/store/account/orders"
            className="rounded-2xl border border-brand-dark/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-bold">
              My Orders
            </h2>

            <p className="mt-2 text-sm text-brand-dark/60">
              View your order history and order status.
            </p>
          </Link>

          <Link
            href="/store/account/profile"
            className="rounded-2xl border border-brand-dark/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-bold">
              Profile
            </h2>

            <p className="mt-2 text-sm text-brand-dark/60">
              Manage your personal information.
            </p>
          </Link>

          <Link
            href="/store/account/addresses"
            className="rounded-2xl border border-brand-dark/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-bold">
              Addresses
            </h2>

            <p className="mt-2 text-sm text-brand-dark/60">
              Manage your shipping addresses.
            </p>
          </Link>

        </div>

        {/* RECENT ORDERS */}
        <section className="mt-12">

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Recent Orders
            </h2>

            <Link
              href="/store/account/orders"
              className="text-sm font-semibold hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-brand-dark/10 bg-white">

            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-4 border-b border-brand-dark/10 p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
              >

                <div>
                  <p className="font-bold">
                    {order.id}
                  </p>

                  <p className="mt-1 text-sm text-brand-dark/60">
                    {order.date}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 sm:justify-end">

                  <div>
                    <p className="text-sm text-brand-dark/60">
                      Total
                    </p>

                    <p className="font-semibold">
                      {formatPrice(order.total)}
                    </p>
                  </div>

                  <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold">
                    {order.status}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">

          <Link
            href="/store"
            className="rounded-lg bg-brand-dark px-6 py-3 text-center font-semibold text-brand-light transition hover:opacity-90"
          >
            Continue Shopping
          </Link>

          <button
            type="button"
            onClick={() => {
              console.log("Logout");
            }}
            className="rounded-lg border border-brand-dark/20 px-6 py-3 font-semibold transition hover:bg-white"
          >
            Logout
          </button>

        </div>

      </section>
    </main>
  );
}