export function Terminal() {
  return (
	<div className="w-full max-w-md rounded-lg border border-neutral-800 bg-neutral-900/60 backdrop-blur px-5 py-4 font-mono text-sm text-neutral-300">
	  <div className="flex items-center gap-2 mb-3">
		<span className="h-3 w-3 rounded-full bg-red-500/80" />
		<span className="h-3 w-3 rounded-full bg-yellow-500/80" />
		<span className="h-3 w-3 rounded-full bg-green-500/80" />
	  </div>

	  <pre className="whitespace-pre-wrap leading-relaxed">
{`$ whoami
szalik.dev

$ role
backend engineer

$ focus
scalable systems
discord infrastructure
production reliability

$ status
building`}
	  </pre>
	</div>
  );
}
