import { Terminal } from "./terminal";
import { FadeUp } from "./motion";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
			{/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(127,90,240,0.15),transparent_70%)]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(44,182,125,0.12),transparent_70%)]" />
      </div>
			<div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Left column */}
				<div className="flex flex-col justify-center">
					<FadeUp>
						<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
							<span className="bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent">
								szalik.dev
							</span>
						</h1>
					</FadeUp>

					<FadeUp delay={0.05}>
						<p className="mt-5 text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed">
							Backend engineer building production systems trusted by thousands of users.
						</p>
					</FadeUp>

					<FadeUp delay={0.1}>
						<div className="mt-10 flex gap-4">
							<button className="px-5 py-2.5 rounded-md bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-black hover:opacity-90 transition-opacity">
								View Projects
							</button>

							<button className="px-5 py-2.5 rounded-md border border-neutral-700 hover:border-neutral-500 transition-colors">
								Contact
							</button>
						</div>
					</FadeUp>

				</div>
				{/* Right column */}
				<FadeUp delay={0.15}>
					<div className="hidden md:flex items-center justify-center">
						<Terminal />
					</div>
				</FadeUp>
	 		</div>
    		</section>
  	);
}