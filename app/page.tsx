export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Welcome to my portfolio
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Hi, I'm Joerel 👋
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Full-Stack Web Developer
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-lg bg-black px-6 py-3 text-white">
            View My Work
          </button>

          <button className="rounded-lg border px-6 py-3">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}