const STAGES = ["Applied", "Interview", "Offer", "Hired"];

export default function Home() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center md:py-28">
      <span className="rounded-full border border-line bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-path">
        Built for students
      </span>

      <h1 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight text-ink md:text-7xl">
        InternPath
      </h1>

      <p className="mt-4 text-lg font-medium text-ink/60 md:text-xl">
        Organize. Track. Get Hired.
      </p>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/50 md:text-base">
        One place to manage every internship application, follow up on time,
        and see exactly where you stand — from first click to signed offer.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="/dashboard"
          className="rounded-full bg-path px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-path-dark"
        >
          Start tracking
        </a>
        <a
          href="/docs"
          className="rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-path hover:text-path"
        >
          Read the docs
        </a>
      </div>

      {/* Signature element: the application path itself */}
      <div className="mt-20 w-full max-w-3xl">
        <div className="relative flex items-center justify-between">
          <div
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-line"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 top-1/2 h-px w-1/3 -translate-y-1/2 bg-signal"
            aria-hidden="true"
          />
          {STAGES.map((stage, i) => (
            <div
              key={stage}
              className="relative flex flex-col items-center gap-3 bg-paper px-2"
            >
              <span
                className={`h-3 w-3 rounded-full ring-4 ring-paper ${
                  i === 0 ? "bg-signal" : "bg-line"
                }`}
              />
              <span className="text-xs font-semibold text-ink/50 md:text-sm">
                {stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
