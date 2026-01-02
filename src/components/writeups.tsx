import { FadeUp } from "./motion";

type Writeup = {
  title: string;
  description: string;
  status: "Draft" | "Published" | "Living document" | "Planned";
  href?: string;
};

const writeups: Writeup[] = [
  {
    title: "Why This Portfolio Is Open Source",
    description:
      "The reasoning behind treating a personal portfolio as an engineering artifact rather than a design exercise.",
    status: "Published",
    href: "https://github.com/szalikdev/portfolio/blob/main/writeups/why-this-portfolio-is-open-source.md",
  },
  {
    title: "Reliability Over Features",
    description:
      "Why I prioritize correctness, observability, and failure modes over rapid feature expansion.",
    status: "Planned",
  },
  {
    title: "Things I No Longer Do in Production",
    description:
      "A living list of patterns and shortcuts that repeatedly failed under real-world usage.",
    status: "Planned",
  },
  {
    title: "What Breaks First in Small Systems",
    description:
      "Notes on which assumptions tend to collapse first as systems grow beyond their initial scope.",
    status: "Planned",
  },
];

export function Writeups() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <h2 className="text-2xl font-semibold tracking-tight">
            Lab / Writeups
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 mb-12 text-neutral-500 text-sm leading-relaxed">
            Short engineering notes about decisions, trade-offs, and constraints.
            Some finished, some in progress.
          </p>
        </FadeUp>

        <div className="space-y-8">
          {writeups.map((item, i) => {
            const Wrapper = item.href ? "a" : "div";

            return (
              <FadeUp key={item.title} delay={i * 0.05}>
                <Wrapper
                  {...(item.href
                    ? {
                        href: item.href,
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                  className={`block rounded-lg border border-neutral-800 p-6 transition-colors ${
                    item.href
                      ? "hover:border-neutral-700"
                      : "opacity-70 cursor-default"
                  }`}
                >
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
                </Wrapper>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
