import { FadeUp } from "./motion";

export function ZalixProject() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeUp>
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Selected Project
          </h2>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <h3 className="text-xl font-medium">
                Zalix Bot
              </h3>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                Multipurpose Discord bot trusted by more than{" "}
                <span className="text-neutral-200 font-medium">
                  10,000 servers
                </span>
                . Designed with reliability, scalability, and long-term
                maintenance in mind.
              </p>

              <ul className="mt-6 space-y-2 text-neutral-400 text-sm">
                <li>• Backend-heavy architecture</li>
                <li>• PHP, JavaScript, SQL</li>
                <li>• High uptime and fault tolerance</li>
                <li>• Actively maintained</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/szalikdev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 font-mono text-sm text-neutral-300">
              <pre className="whitespace-pre-wrap leading-relaxed">
{`services:
  commands:
    enabled: true
  moderation:
    enabled: true
  logging:
    enabled: true

uptime: 99.9%
servers: 10000+
`}
              </pre>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
