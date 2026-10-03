"use client";
export function StatusCard({ phase, step, volume, chapter, lastArchived }: { phase: string; step: string; volume: number | null; chapter: string | null; lastArchived: string | null; }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="text-xs tracking-widest text-zinc-500 uppercase">Project Status</div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-white p-3 border border-zinc-100"><div className="text-zinc-500 text-xs">Phase</div><div className="font-medium capitalize">{phase}</div></div>
        <div className="rounded-xl bg-white p-3 border border-zinc-100"><div className="text-zinc-500 text-xs">Step</div><div className="font-medium">{step}</div></div>
        <div className="rounded-xl bg-white p-3 border border-zinc-100"><div className="text-zinc-500 text-xs">Volume</div><div className="font-medium">{volume ?? "-"}</div></div>
        <div className="rounded-xl bg-white p-3 border border-zinc-100"><div className="text-zinc-500 text-xs">Chapter</div><div className="font-medium text-xs break-all">{chapter ?? "-"}</div></div>
      </div>
      <div className="mt-3 text-xs text-zinc-500">Last archived: <span className="text-zinc-800">{lastArchived ?? "-"}</span></div>
    </div>
  );
}
