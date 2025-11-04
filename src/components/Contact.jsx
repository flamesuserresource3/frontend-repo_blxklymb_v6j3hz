import React from 'react';
import { Mail, SendHorizonal, Youtube, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0B0B10] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s Collaborate</h2>
          <p className="mt-2 max-w-3xl text-white/80">
            Tertarik bekerja sama untuk kampanye gaming, edukasi AI, atau proyek web? Kirim pesan langsung —
            aku biasanya membalas dalam 24 jam.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:col-span-2">
            <form action="mailto:hello@bos138.dev" method="post" encType="text/plain" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-indigo-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-indigo-400"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-indigo-400"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-indigo-400"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
              >
                <SendHorizonal className="h-5 w-5" /> Send message
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-600/20 p-2">
                <Mail className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <div className="mt-4 space-y-2 text-white/80">
              <p>Email: <a href="mailto:hello@bos138.dev" className="text-indigo-300 hover:underline">hello@bos138.dev</a></p>
              <p>Based in: Indonesia • Available worldwide</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-center text-sm text-white/80 hover:bg-white/10"> 
                <Youtube className="mx-auto h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-center text-sm text-white/80 hover:bg-white/10"> 
                <Twitter className="mx-auto h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-center text-sm text-white/80 hover:bg-white/10"> 
                <Github className="mx-auto h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
