import { FadeUp } from "./motion";

export function Contact() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="text-2xl font-semibold tracking-tight">
            Let’s build something solid
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Interested in working together, collaborating on tooling, or
            building infrastructure that needs to hold up in production?
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-10 flex justify-center gap-6">
            <a
              href="mailto:hireme@szalik.dev"
              className="rounded-md bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] px-6 py-3 text-sm font-medium text-black hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>

            <a
              href="https://github.com/szalikdev"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-neutral-800 px-6 py-3 text-sm text-neutral-300 hover:border-neutral-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
