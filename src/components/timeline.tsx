import { FadeUp } from "./motion";

const entries = [
  {
    year: "2012",
    title: "Early Development",
    description:
      "Started building web applications and backend logic. First exposure to production systems and self-hosting.",
  },
  {
    year: "2016–2019",
    title: "Backend Focus",
    description:
      "Deepened backend skills using PHP and SQL. Built systems designed for stability and long-term maintenance.",
  },
  {
    year: "2020–2023",
    title: "Scalable Systems",
    description:
      "Designed and maintained systems used by large user bases. Focus on reliability, performance, and automation.",
  },
  {
    year: "2024–Now",
    title: "Tooling & Infrastructure",
    description:
      "Building backend-heavy tooling and infrastructure with a strong emphasis on correctness and scale.",
  },
];

export function Timeline() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Experience
          </h2>
        </FadeUp>

        <div className="space-y-16">
          {entries.map((entry, i) => (
            <FadeUp key={entry.year} delay={i * 0.05}>
              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-sm text-neutral-500">
                  {entry.year}
                </div>

                <div>
                  <h3 className="font-medium">{entry.title}</h3>
                  <p className="mt-2 text-neutral-400 leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
