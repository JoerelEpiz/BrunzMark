import Link from "next/link";

const orders = [
  {
    id: "BM-00001",
    date: "August 18, 2026",
    items: 3,
    total: 1350,
    status: "Processing",
  },
  {
    id: "BM-00002",
    date: "August 10, 2026",
    items: 1,
    total: 750,
    status: "Delivered",
  },
  {
    id: "BM-00003",
    date: "July 28, 2026",
    items: 2,
    total: 1100,
    status: "Shipped",
  },
];

export default function OrdersPage() {
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

        {/* BACK */}
        <Link
          href="/store/account"
          className="text-sm font-medium hover:underline"
        >
          ← Back to Account
        </Link>

        {/* HEADER */}
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
            BrunzMark Account
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            My Orders
          </h1>

          <p className="mt-3 text-brand-dark/60">
            View your previous purchases and order status.
          </p>
        </div>

        {/* ORDERS */}
        <div className="mt-10 space-y-5">

          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-brand-dark/10 bg-white p-5 shadow-sm sm:p-6"
            >
              {/* TOP */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <p className="text-lg font-bold">
                    {order.id}
                  </p>

                  <p className="mt-1 text-sm text-brand-dark/60">
                    Ordered on {order.date}
                  </p>
                </div>

                <OrderStatus status={order.status} />

              </div>

              {/* DETAILS */}
              <div className="mt-6 grid gap-4 border-t border-brand-dark/10 pt-5 sm:grid-cols-3">

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-dark/50">
                    Items
                  </p>

                  <p className="mt-1 font-semibold">
                    {order.items}{" "}
                    {order.items === 1 ? "item" : "items"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-brand-dark/50">
                    Total
                  </p>

                  <p className="mt-1 font-semibold">
                    {formatPrice(order.total)}
                  </p>
                </div>

                <div className="sm:text-right">
                  <Link
                    href={`/store/account/orders/${order.id}`}
                    className="inline-block rounded-lg border border-brand-dark/20 px-4 py-2 text-sm font-semibold transition hover:bg-brand-dark hover:text-brand-light"
                  >
                    View Order
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* CONTINUE SHOPPING */}
        <div className="mt-10">
          <Link
            href="/store"
            className="inline-block rounded-lg bg-brand-dark px-6 py-3 font-semibold text-brand-light transition hover:opacity-90"
          >
            Continue Shopping
          </Link>
        </div>

      </section>
    </main>
  );
}

/* ==========================================
   ORDER STATUS
========================================== */

function OrderStatus({
  status,
}: {
  status: string;
}) {
  let statusClass = "";

  switch (status) {
    case "Delivered":
      statusClass =
        "bg-green-100 text-green-700";
      break;

    case "Shipped":
      statusClass =
        "bg-blue-100 text-blue-700";
      break;

    case "Processing":
      statusClass =
        "bg-yellow-100 text-yellow-700";
      break;

    default:
      statusClass =
        "bg-gray-100 text-gray-700";
  }

  return (
    <span
      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
    >
      {status}
    </span>
  );
}