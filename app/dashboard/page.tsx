import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
          <div className="text-lg font-semibold">Note Sharing</div>
          <div className="flex items-center gap-3">
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
              New Note
            </button>
            <UserButton />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-8">
        <section className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-semibold">My Notes</h1>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search notes"
                className="h-10 rounded-md border bg-background px-3 text-sm"
              />
              <select className="h-10 rounded-md border bg-background px-3 text-sm">
                <option>Sort: Newest</option>
                <option>Sort: Oldest</option>
                <option>Sort: A-Z</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Work",
              "Personal",
              "Ideas",
              "Shared",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="rounded-lg border border-dashed p-10 text-center">
            <p className="text-base font-medium">No notes yet.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Start by creating your first note and organize it your way.
            </p>
            <button className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
              Create your first note
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
