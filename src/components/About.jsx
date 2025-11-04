import React from 'react';
import { Brain, Code2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About BOS138</h2>
          <p className="mt-3 max-w-3xl text-white/80">
            I create story‑driven gaming content and teach AI for creators and developers. My work blends
            real‑time graphics, machine learning, and web technology to build interactive experiences that are
            entertaining and educational.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-600/20 p-2">
                <Brain className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold">AI Education</h3>
            </div>
            <p className="mt-3 text-sm text-white/75">
              Workshops and videos that demystify AI for gamers and creators — from prompt engineering to
              building intelligent tools.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-600/20 p-2">
                <Code2 className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="text-lg font-semibold">Full‑stack Craft</h3>
            </div>
            <p className="mt-3 text-sm text-white/75">
              Modern web stacks, real‑time rendering, and APIs — shipping polished apps from concept to launch.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber-600/20 p-2">
                <Sparkles className="h-6 w-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold">Narrative Design</h3>
            </div>
            <p className="mt-3 text-sm text-white/75">
              Innovative storytelling that connects — turning tech topics into engaging, memorable journeys.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {['React', 'FastAPI', 'Node', 'Python', 'TensorFlow', 'Three.js', 'Spline', 'Vite', 'Tailwind'].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
