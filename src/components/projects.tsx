import { FadeUp } from "./motion";

type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  systemView: string;
};

const projects: Project[] = [
  {
    name: "Portfolio",
    description:
      "Personal portfolio built with Next.js and Framer Motion. Features automated releases via GitHub Actions, static site generation, and a terminal-inspired design aesthetic.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/szalikdev/portfolio",
    systemView: `build:
  framework: next.js
  output: static
  deployment: automated

ci/cd:
  releases: on_commit
  assets: production_build
  
hosting: ready_to_deploy`,
  },
  {
    name: "Internal Tooling",
    description:
      "A collection of backend-heavy tools built to automate workflows and reduce operational overhead.",
    stack: ["PHP", "SQL"],
    systemView: `scheduler:
  retries: true
  backoff: exponential

observability:
  logs: structured
  metrics: enabled`,
  },
  {
    name: "Experimental Lua Systems",
    description:
      "Lua-based scripting systems used for rapid prototyping and embedded logic.",
    stack: ["Lua", "C++"],
    systemView: `runtime:
  sandboxed: true
  hot_reload: enabled

memory:
  manual_control: true`,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Projects
          </h2>
        </FadeUp>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <FadeUp key={project.name} delay={index * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left — narrative */}
                <div>
                  <h3 className="text-xl font-medium">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-neutral-800 px-3 py-1 text-sm text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-neutral-300 hover:text-white transition-colors"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  )}
                </div>

                {/* Right — system view */}
                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 backdrop-blur p-6 font-mono text-sm text-neutral-300">
                  <pre className="whitespace-pre-wrap leading-relaxed">
{project.systemView}
                  </pre>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}