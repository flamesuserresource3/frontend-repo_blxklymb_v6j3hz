import React from 'react';
import { ExternalLink, PlayCircle, Wand2, Layers } from 'lucide-react';

const Card = ({ title, desc, tag, icon: Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-white transition hover:border-white/20 hover:bg-white/[0.05]"
  >
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
        <Icon className="h-4 w-4" />
        {tag}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-indigo-300">
        <ExternalLink className="h-4 w-4" />
        <span className="text-sm">View details</span>
      </div>
    </div>
  </a>
);

export default function Showcase() {
  const items = [
    {
      title: 'Interactive AI Coach',
      desc: 'A playful mentor that guides players with tips generated in real‑time using game telemetry.',
      tag: 'AI + Realtime',
      icon: Wand2,
      link: '#',
    },
    {
      title: 'Story‑Driven Stream Overlay',
      desc: 'Dynamic scenes that react to chat, music, and in‑game events — built with web tech + 3D.',
      tag: 'Streaming',
      icon: Layers,
      link: '#',
    },
    {
      title: 'Procedural Map Generator',
      desc: 'Generate arena layouts with controllable complexity for fast prototyping and level design.',
      tag: 'Tools',
      icon: Wand2,
      link: '#',
    },
    {
      title: 'YouTube Series: AI for Gamers',
      desc: 'Bite‑size episodes teaching practical AI concepts for creators and devs.',
      tag: 'Education',
      icon: PlayCircle,
      link: '#',
    },
  ];

  return (
    <section id="showcase" className="relative w-full bg-[#0E0E14] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Work</h2>
            <p className="mt-2 text-white/75">Interactive, modern, and built with performance in mind.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white hover:bg-white/[0.08]"
          >
            Get in touch
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((i) => (
            <Card key={i.title} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
}
