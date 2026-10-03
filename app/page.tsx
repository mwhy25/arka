"use client";
import { useEffect, useState } from "react";
import AiOfficeScene from "@/components/AiOfficeScene";
import { StatusCard } from "@/components/StatusCard";

type Status = { phase: string; current_step: string; current_volume: number | null; current_chapter: string | null; last_archived: string | null; chapter_status: string | null; };

export default function Home() {
  const [status, setStatus] = useState<Status | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const api = process.env.NEXT_PUBLIC_API_URL || "";
  const token = process.env.NEXT_PUBLIC_API_TOKEN || "";

  useEffect(() => {
    if (!api) return;
    const url = `${api}/api/status` + (token ? `?token=${encodeURIComponent(token)}` : "");
    fetch(url, { cache: "no-store" })
      .then((r) => r.json())
      .then(setStatus)
      .catch((e) => setErr(String(e)));
  }, [api, token]);

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-white/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Arka — Novel Studio</div>
          <div className="text-xs text-zinc-500 hidden sm:block">AI Office 3D · Write from phone</div>
          <a href="#reader" className="text-sm rounded-full bg-zinc-900 text-white px-4 py-2">Reader</a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="space-y-4">
          <div className="glass rounded-2xl overflow-hidden p-0">
            <div className="relative h-[360px] sm:h-[420px]">
              <AiOfficeScene className="absolute inset-0" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/55 via-white/5 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h1 className="text-2xl font-semibold tracking-tight">AI Office — your agents at work</h1>
                <p className="text-sm text-zinc-600 mt-1 max-w-[44ch]">Minimalist clean office in 3D. Watch your novel agents work — approve, read, and get updates from your phone.</p>
              </div>
            </div>
          </div>

          {!api && (
            <div className="glass rounded-2xl p-5 text-sm text-amber-900 bg-amber-50/70">
              Set <code>NEXT_PUBLIC_API_URL</code> to your backend (HF Space / Fly / local http://localhost:8787) and redeploy. Add <code>NEXT_PUBLIC_API_TOKEN</code> if server has <code>API_TOKEN</code>.
            </div>
          )}
          {err && <div className="glass rounded-2xl p-5 text-sm text-red-700">Error: {err}</div>}
          {status ? (
            <StatusCard phase={status.phase} step={status.current_step} volume={status.current_volume} chapter={status.current_chapter} lastArchived={status.last_archived} />
          ) : api ? (
            <div className="glass rounded-2xl p-5 text-sm text-zinc-500">Loading status…</div>
          ) : null}

          <div className="glass rounded-2xl p-5">
            <div className="font-medium">Quick actions (from phone)</div>
            <ul className="mt-3 grid sm:grid-cols-3 gap-2 text-sm">
              <li className="rounded-xl bg-white border border-zinc-100 p-3">Approve outline: “lanjut / setuju” in chat or Telegram</li>
              <li className="rounded-xl bg-white border border-zinc-100 p-3">Request changes: send revision notes to <code>.agent/task</code></li>
              <li className="rounded-xl bg-white border border-zinc-100 p-3">Get updates: Telegram bot pushes on archive / review</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4" id="reader">
          <div className="glass rounded-2xl p-5">
            <div className="font-medium">Connect</div>
            <div className="mt-2 text-sm text-zinc-600">Backend: <span className="font-mono text-zinc-900 break-all">{api || "(not set)"}</span></div>
            <div className="mt-3 flex gap-2">
              <a className="rounded-full bg-white border border-zinc-200 px-4 py-2 text-sm" href={api ? `${api}/health` : "#"} target="_blank" rel="noreferrer">Health</a>
              <a className="rounded-full bg-white border border-zinc-200 px-4 py-2 text-sm" href={api ? `${api}/api/status${token ? `?token=${encodeURIComponent(token)}` : ""}` : "#"} target="_blank" rel="noreferrer">Raw status JSON</a>
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="font-medium">Reader</div>
            <p className="text-sm text-zinc-600 mt-1">Open archives from phone. Uses <code>/api/content?path=archives/...</code>.</p>
            <div className="mt-3 text-xs text-zinc-500">Tip: add this site to Home Screen — it is PWA-ready.</div>
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto px-4 py-10 text-xs text-zinc-500">Arka fork (local) · Vercel frontend + HF Spaces backend · Telegram updates</footer>
    </main>
  );
}
