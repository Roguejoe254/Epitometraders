'use client';

const features = [
  {
    name: 'Rise / Fall',
    description:
      'Predict whether the next tick will be higher or lower than the current price over a chosen duration.',
  },
  {
    name: 'Accumulators',
    description:
      'Build up payouts with consecutive correct calls on price movements, with growth that compounds per step.',
  },
  {
    name: 'Digits',
    description:
      'Trade on the last digit of a tick — match, differ, over, or under — for quick, precise positions.',
  },
  {
    name: 'Bot Builder',
    description:
      'Compose, back-test, and deploy automated trading strategies block by block without writing code.',
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, rgb(var(--primary)) 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Unified trading platform
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Epitome <span className="text-primary">Traders</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            A comprehensive trading application combining Accumulators, Bot Builder,
            Digits, and Rise/Fall into a single, fast interface.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#features"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Explore modules
            </a>
            <a
              href="#about"
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">Trading modules</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Four trading experiences, one workspace.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.name}
              className="group rounded-lg border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 17l5-5 4 4 6-7" />
                    <path d="M3 21h18" />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold">{feature.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight">About this project</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Epitometraders is a monorepo bringing together a Next.js trading client
            and shared packages for core trading types and a visual bot builder.
            This preview runs the client in development mode with live reload.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Epitome Traders</span>
          <span>Built with Next.js · Tailwind CSS</span>
        </div>
      </footer>
    </main>
  );
}
