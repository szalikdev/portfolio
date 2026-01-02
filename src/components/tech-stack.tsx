import { FadeUp } from "./motion";

const stack = [
  {
    category: "Primary",
    items: ["PHP", "JavaScript", "SQL"],
    description:
      "Technologies I rely on for building and maintaining production systems.",
  },
  {
    category: "Secondary",
    items: ["Lua", "C++"],
    description:
      "Used when lower-level control or embedded scripting is required.",
  },
  {
    category: "Approach",
    items: ["Reliability", "Scalability", "Maintainability"],
    description:
      "Principles that guide my technical decisions more than any framework.",
  },
];

export function TechStack() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Tech Stack
          </h2>
        </FadeUp>

        <div className="space-y-12">
          {stack.map((group, i) => (
            <FadeUp key={group.category} delay={i * 0.05}>
              <div>
                <h3 className="font-medium">
                  {group.category}
                </h3>

                <p className="mt-2 text-neutral-400 text-sm max-w-xl">
                  {group.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-neutral-800 px-3 py-1 text-sm text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
