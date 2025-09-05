"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Youtube, ShoppingBag, Sparkles, FlaskConical, Brain, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// ————————————————————————————————————————————
// MLDS Universe — Single-file React landing (Tailwind)
// Sections: Hero • Pillars • Series • Trailer • Merch • Newsletter • Contact • Footer
// Replace placeholders (VIDEO_ID_HERE, links, images) with your real assets.
// ————————————————————————————————————————————

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.25)] ${className}`}>
    {children}
  </div>
);

function SeriesCard({
  tag, title, blurb, cta, href,
}: { tag: string; title: string; blurb: string; cta?: string; href?: string }) {
  return (
    <motion.a href={href || "#"} whileHover={{ y: -4, scale: 1.02 }} className="group block">
      <Card className="overflow-hidden h-full">
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-amber-300/30 via-fuchsia-400/20 to-cyan-300/30 grid place-items-center">
          <div className="text-center">
            <span className="inline-block text-xs uppercase tracking-widest text-white/80 bg-white/10 px-2 py-1 rounded-full">{tag}</span>
            <div className="mt-2 text-white/90 text-sm">Cover Image Placeholder</div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-white/95">{title}</h3>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{blurb}</p>
          <div className="mt-4 flex items-center gap-2 text-amber-300 group-hover:gap-3 transition-all">
            <span className="text-sm font-medium">{cta || "Explore"}</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </Card>
    </motion.a>
  );
}

export default function MLDSUniverseLanding() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950 relative overflow-hidden">
      {/* Glow / Stars Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.25),transparent),radial-gradient(40%_30%_at_80%_20%,rgba(251,191,36,0.17),transparent),radial-gradient(40%_40%_at_20%_10%,rgba(192,132,252,0.12),transparent)]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.35) 1px, transparent 1px)," +
              "radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.25) 1px, transparent 1px)," +
              "radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.25) 1px, transparent 1px)," +
              "radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,0.2) 1px, transparent 1px)",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-300 via-fuchsia-400 to-cyan-300 shadow" />
              <span className="font-semibold tracking-wide">MLDS Universe</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#series" className="hover:text-white">Series</a>
              <a href="#trailer" className="hover:text-white">Trailer</a>
              <a href="#merch" className="hover:text-white">Merch</a>
              <a href="#newsletter" className="hover:text-white">Newsletter</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <a href="#trailer" className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-sm">
              <Play size={16} /> Watch
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <Section id="hero" className="pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Enter the <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300">MLDS Universe</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Dreams, science, and wonder converge across connected stories: <em>Dream Saga</em>, <em>Axel’s Amazing World</em>, <em>Dr Disciple</em>, and <em>Ask Dr Darwin</em>.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#series" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-amber-300/90 to-fuchsia-400/90 text-slate-900 font-semibold shadow">
                Explore Series <ArrowRight size={16} />
              </a>
              <a href="#trailer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10">
                <Play size={16} /> Watch Trailer
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70">
              <div className="flex items-center gap-2"><Sparkles size={18} /><span>Original IP</span></div>
              <div className="flex items-center gap-2"><FlaskConical size={18} /><span>Edu-tainment</span></div>
              <div className="flex items-center gap-2"><Brain size={18} /><span>AI-assisted Production</span></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <Card className="p-5">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-black grid place-items-center">
                <div className="text-center max-w-sm">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-amber-300 via-fuchsia-400 to-cyan-300 mb-4 shadow-lg" />
                  <h3 className="text-xl font-semibold">Welcome to DreamDecypher.ai</h3>
                  <p className="mt-2 text-sm text-white/70">This is your central hub for the MLDS Universe—trailers, episodes, merch, and behind-the-scenes.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* PILLARS */}
      <Section id="pillars" className="py-6">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: <BookOpen />, title: "Story", text: "Interlinked series spanning dreams, discovery, and courage." },
            { icon: <FlaskConical />, title: "Science", text: "Curiosity-driven learning paced for kids and families." },
            { icon: <Sparkles />, title: "Wonder", text: "Awe-centric visuals, music, and interactive moments." },
          ].map((p, i) => (
            <Card key={i} className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10">{p.icon}</div>
                <h4 className="text-lg font-semibold">{p.title}</h4>
              </div>
              <p className="mt-2 text-white/70 text-sm">{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SERIES */}
      <Section id="series" className="py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Explore the Series</h2>
          <a href="#" className="text-sm text-amber-300 hover:underline">See all</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SeriesCard
            tag="Dream Saga"
            title="Morpheus & Lumina"
            blurb="A cinematic journey through the subconscious where shadows and light reveal who we are."
            href="#"
          />
          <SeriesCard
            tag="Axel’s Amazing World"
            title="Rabbit & Carrot (Ep. 2)"
            blurb="Axel, Dragon, and Wolf discover new animals and veggies—summoning wonder with the MLDS amulet."
            href="#"
          />
          <SeriesCard
            tag="Dr Disciple"
            title="Lab Notes & Field Adventures"
            blurb="Science-meets-story with the signature black vest, royal-blue shirt, and a mission to inspire."
            href="#"
          />
          <SeriesCard
            tag="Ask Dr Darwin"
            title="Curious Minds, Clear Answers"
            blurb="Bite-size explainers, behind-the-scenes, and community Q&A across the MLDS Universe."
            href="#"
          />
          <SeriesCard
            tag="Cosmos Codex"
            title="Calendars & Artifacts"
            blurb="Limited-run cosmic calendars, emblems, and collectibles from the MLDS workshop."
            href="#"
          />
          <SeriesCard
            tag="YouTube"
            title="Official Channel"
            blurb="Trailers, shorts, and full episodes—subscribe and join the journey."
            href="#"
            cta="Open Channel"
          />
        </div>
      </Section>

      {/* TRAILER */}
      <Section id="trailer" className="py-12">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <Card className="p-5">
            <h2 className="text-2xl font-bold">Welcome Trailer</h2>
            <p className="mt-2 text-white/70 text-sm">Drop your YouTube ID into the src below (replace &lt;VIDEO_ID_HERE&gt;) or swap for a self-hosted MP4.</p>
            <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="MLDS Universe Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 border border-white/10">
                <Youtube size={18} /> Open on YouTube
              </a>
              <a href="#series" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-amber-300/90 to-fuchsia-400/90 text-slate-900 font-semibold shadow">
                Explore Series <ArrowRight size={16} />
              </a>
            </div>
          </Card>

          <Card className="p-5 flex flex-col">
            <h2 className="text-2xl font-bold">Production Roadmap</h2>
            <ul className="mt-3 space-y-2 text-white/75 text-sm">
              <li>• Launch site v1 with series hub and trailer.</li>
              <li>• Publish Axel Ep. 2 page (Rabbit & Carrot) with clip grid.</li>
              <li>• Add Dr Disciple lab notes & Ask Dr Darwin Q&A archive.</li>
              <li>• Merch page: Cosmos Codex calendars + emblem drops.</li>
              <li>• Newsletter + lightweight blog for updates.</li>
            </ul>
            <div className="mt-auto pt-5 text-xs text-white/50">Iterate weekly; keep pages shippable.</div>
          </Card>
        </div>
      </Section>

      {/* MERCH */}
      <Section id="merch" className="py-12">
        <Card className="p-6 md:p-8">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Cosmos Codex: 2026 Calendars & Collectibles</h2>
              <p className="mt-3 text-white/75">Showcase your cosmic art calendars and the MLDS/EBA emblem line. Link out to Etsy (printable + physical) or a dedicated storefront.</p>
              <div className="mt-5 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-amber-300/90 to-fuchsia-400/90 text-slate-900 font-semibold shadow">
                  <ShoppingBag size={18} /> Visit Shop
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white/10 border border-white/10">Learn More</a>
              </div>
            </div>
            <div className="rounded-xl aspect-square bg-gradient-to-br from-amber-300/20 via-fuchsia-400/20 to-cyan-300/20 border border-white/10 grid place-items-center text-white/80">
              Product Image Placeholder
            </div>
          </div>
        </Card>
      </Section>

      {/* NEWSLETTER */}
      <Section id="newsletter" className="py-12">
        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Get Universe Updates</h2>
              <p className="mt-2 text-white/70 text-sm">Drops, episodes, behind-the-scenes. No spam, just magic.</p>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="flex w-full gap-3"
            >
              <input
                type="email"
                required
                placeholder="you@cosmos.dev"
                className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-amber-300/40"
              />
              <button className="rounded-xl px-5 py-3 bg-gradient-to-r from-amber-300/90 to-fuchsia-400/90 text-slate-900 font-semibold">
                Join
              </button>
            </form>
            {submitted && (
              <div className="md:col-span-2 text-sm text-amber-300">Thanks! You’re on the list. (Hook this to Formspree, Beehiiv, ConvertKit, etc.)</div>
            )}
          </div>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-12">
        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
              <p className="mt-2 text-white/70 text-sm">For collaborations, licensing, or educational partnerships.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">Email: hello@dreamdecypher.ai</div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">YouTube: @MLDSUniverse</div>
              </div>
            </div>
            <div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 h-full flex flex-col justify-center">
                <div className="text-white/80 text-sm">Social</div>
                <div className="mt-2 flex gap-3 text-white/80">
                  <a href="#" className="hover:text-white inline-flex items-center gap-1"><Youtube size={16} /> YouTube</a>
                  <a href="#" className="hover:text-white inline-flex items-center gap-1">X</a>
                  <a href="#" className="hover:text-white inline-flex items-center gap-1">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-white/50">
        © 2025 MLDS Universe • DreamDecypher.ai — All rights reserved.
      </footer>
    </div>
  );
}
    
