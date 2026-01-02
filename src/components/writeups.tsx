import { FadeUp } from "./motion";

const writeups = [
  {
    title: "Scaling a Discord Bot to 10k+ Servers",
    description:
      "Design decisions, trade-offs, and mistakes made while scaling a real-world Discord bot used by thousands of communities.",
    status: "Draft",
  },
  {
    title: "Reliability Over Features",
    description:
      "Why I prioritize correctness, observability, and failure modes over rapid feature expansion.",
    status: "Published",
  },
  {
    title: "Things I No Longer Do in Production",
    description:
      "A growing list of patterns and shortcuts that do not survive real usage.",
    status: "Living document",
  },
];

export function Writeups() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Lab / Writeups
          </h2>
        </FadeUp>

        <div className="space-y-8">
          {writeups.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.05}>
              <div className="rounded-lg border border-neutral-800 p-6 hover:border-neutral-700 transition-colors">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">
                    {item.title}
                  </h3>

                  <span className="text-xs text-neutral-500">
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}