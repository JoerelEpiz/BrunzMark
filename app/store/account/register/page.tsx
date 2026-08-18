"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Register:", form);

    // Registration will be connected later.
  }

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <section className="mx-auto max-w-lg px-6 py-24">

        {/* BRAND */}
        <div className="text-center">
          <Link
            href="/store"
            className="text-2xl font-black tracking-tight"
          >
            BRUNZMARK
          </Link>

          <p className="mt-2 text-sm text-brand-dark/60">
            Create your BrunzMark account
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm sm:p-8"
        >

          <h1 className="text-2xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-brand-dark/60">
            Create an account to manage your orders and profile.
          </p>

          {/* NAME */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-medium"
              >
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-medium"
              >
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                required
                value={form.lastName}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
              />
            </div>

          </div>

          {/* EMAIL */}
          <div className="mt-5">
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
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
            />
          </div>

          {/* PHONE */}
          <div className="mt-5">
            <label
              htmlFor="phone"
              className="text-sm font-medium"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="09XXXXXXXXX"
              className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mt-5">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              className="mt-2 w-full rounded-lg border border-brand-dark/20 px-4 py-3 outline-none focus:border-brand-dark"
            />
          </div>

          {/* REGISTER */}
          <button
            type="submit"
            className="mt-7 w-full rounded-lg bg-brand-dark px-6 py-3.5 font-semibold text-brand-light transition hover:opacity-90"
          >
            Create Account
          </button>

          {/* LOGIN */}
          <p className="mt-6 text-center text-sm text-brand-dark/60">
            Already have an account?{" "}
            <Link
              href="/store/account/login"
              className="font-semibold text-brand-dark hover:underline"
            >
              Sign in
            </Link>
          </p>

        </form>

        <Link
          href="/store"
          className="mt-6 block text-center text-sm font-medium hover:underline"
        >
          ← Back to Store
        </Link>

      </section>
    </main>
  );
}