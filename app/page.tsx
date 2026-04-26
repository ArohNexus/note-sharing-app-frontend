import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 md:px-8">
        <section className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Note Sharing — your thoughts in your control, safe and secure.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:mx-0">
            Save, organize, and share notes with full privacy control.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Link
              href="/sign-up"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Get started
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-medium"
            >
              Sign in
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            "Private by default",
            "Share with permissions",
            "Access anywhere",
          ].map((benefit) => (
            <article key={benefit} className="rounded-lg border bg-card p-6">
              <h2 className="text-base font-semibold">{benefit}</h2>
            </article>
          ))}
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {["Create note", "Set privacy", "Share link"].map((step, index) => (
              <li key={step} className="rounded-lg border p-6">
                <p className="text-sm text-muted-foreground">Step {index + 1}</p>
                <p className="mt-1 text-base font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-3 rounded-lg border bg-muted/40 p-6 text-sm md:grid-cols-2">
          <p>Protected by Clerk authentication.</p>
          <p>Encrypted storage.</p>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-6 px-6 py-6 text-sm text-muted-foreground md:px-8">
          <a href="#">Docs</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  );
}
