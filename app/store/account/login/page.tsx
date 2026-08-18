"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Login:", {
      email,
      password,
    });

    // Authentication will be added later.
  }

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <section className="mx-auto flex min-h-screen max-w-md items-center px-6 py-24">

        <div className="w-full">

          {/* BRAND */}
          <div className="text-center">
            <Link
              href="/store"
              className="text-2xl font-black tracking-tight"
            >
              BRUNZMARK
            </Link>

            <p className="mt-2 text-sm text-brand-dark/60">
              Welcome back
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm sm:p-8"
          >

            <h1 className="text-2xl font-bold">
              Sign In
            </h1>

            <p className="mt-2 text-sm text-brand-dark/60">
              Sign in to access your account and orders.
            </p>

            {/* EMAIL */}
            <div className="mt-8">
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none transition focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
              />
            </div>

            {/* PASSWORD */}
            <div className="mt-5">
              <div className="flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium hover:underline"
                  onClick={() => {
                    console.log(
                      "Forgot password clicked"
                    );
                  }}
                >
                  Forgot password?
                </button>

              </div>

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="••••••••"
                className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none transition focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
              />
            </div>

            {/* LOGIN */}
            <button
              type="submit"
              className="mt-7 w-full rounded-lg bg-brand-dark px-6 py-3.5 font-semibold text-brand-light transition hover:opacity-90"
            >
              Sign In
            </button>

            {/* REGISTER */}
            <p className="mt-6 text-center text-sm text-brand-dark/60">
              Don't have an account?{" "}
              <Link
                href="/store/account/register"
                className="font-semibold text-brand-dark hover:underline"
              >
                Create one
              </Link>
            </p>

          </form>

          {/* BACK */}
          <Link
            href="/store"
            className="mt-6 block text-center text-sm font-medium hover:underline"
          >
            ← Back to Store
          </Link>

        </div>

      </section>
    </main>
  );
}