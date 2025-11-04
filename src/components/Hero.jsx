import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Gamepad2, Brain, Youtube, Twitter, Github, Mail } from 'lucide-react';

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 transition-colors"
  >
    {children}
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 flex flex-col items-start">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur">
          <span className="text-xs font-medium tracking-wide text-white/80">Innovative Storytelling</span>
          <span className="text-white/30">•</span>
          <span className="text-xs font-medium tracking-wide text-white/80">Tech • Portfolio • Playful</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
          BOS138
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-white/90 leading-relaxed">
          Gaming content creator, AI educator, and full‑stack developer. I blend interactive 3D,
          smart tools, and narrative design to craft experiences that engage and teach.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#showcase"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Explore Work
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
          >
            <Brain className="h-5 w-5" />
            Learn More
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <span className="text-sm uppercase tracking-wider text-white/70">Connect</span>
          <div className="h-px w-10 bg-white/20" />
          <div className="flex items-center gap-3">
            <SocialLink href="https://youtube.com" label="YouTube">
              <Youtube className="h-5 w-5 text-white" />
            </SocialLink>
            <SocialLink href="https://twitter.com" label="Twitter">
              <Twitter className="h-5 w-5 text-white" />
            </SocialLink>
            <SocialLink href="https://github.com" label="GitHub">
              <Github className="h-5 w-5 text-white" />
            </SocialLink>
            <SocialLink href="mailto:hello@bos138.dev" label="Email">
              <Mail className="h-5 w-5 text-white" />
            </SocialLink>
          </div>
        </div>

        <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-green-200">
          <Gamepad2 className="h-4 w-4" />
          <span className="text-sm">Open for collabs, sponsorships, and tech workshops</span>
        </div>
      </div>
    </section>
  );
}
