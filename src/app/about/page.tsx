import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | The Builders",
  description:
    "The Builders helps students, creators, and makers move from AI-curious to AI-confident with practical, real-world skills.",
};

const values = [
  {
    title: "Practical first",
    description: "Every lesson ties to something you can build or use the same day. No theory without application.",
  },
  {
    title: "Anti-hype",
    description: "We don&apos;t oversell. We teach what works now, and we&apos;re honest about what's still evolving.",
  },
  {
    title: "Community-driven",
    description: "Learn alongside other builders. Share projects, get feedback, and grow together.",
  },
  {
    title: "Always updating",
    description: "AI moves fast. We keep our content and tools current so your skills stay relevant.",
  },
];

const different = [
  "Hands-on projects in every course—you ship something real.",
  "Guest workshops from practitioners (designers, photographers, creators), not just instructors.",
  "Focus on workflows and tools you can use in 2026, not generic theory.",
  "A community that actually builds things and shares what works.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl">About Us</h1>
            <p className="mt-8 text-lg leading-relaxed text-[#1a1a1a]/80 font-sans">
              The Builders is an AI education platform for people who want to learn by doing. We help students,
              creators, and makers move from AI-curious to AI-confident with real, usable skills—not theory that
              gathers dust.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square max-w-lg overflow-hidden rounded-3xl bg-[#0a0a0a]/5">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
                alt="Founder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">Founder</h2>
              <p className="mt-8 text-base leading-relaxed text-[#1a1a1a]/80 font-sans">
                After years of watching people struggle to translate AI hype into actual skills, I started The Builders to bridge the gap between &quot;AI is everywhere&quot; and &quot;I can actually build with it.&quot; Having worked in both education and product development, I saw how traditional learning methods failed to keep pace with AI&apos;s rapid evolution. We needed something different—something that prioritized building over theory.
              </p>
              <p className="mt-8 text-base leading-relaxed text-[#1a1a1a]/80 font-sans">
                The best way to learn AI isn&apos;t through endless tutorials or abstract concepts. It&apos;s by getting your hands dirty, shipping real projects, and learning from a community of fellow builders who are figuring it out alongside you. That&apos;s why every course, workshop, and resource we create is designed to get you building something meaningful from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">Mission & Values</h2>
            <p className="mt-8 text-lg leading-relaxed text-[#1a1a1a]/80 font-sans">
              Our mission is simple: help people move from AI-curious to AI-confident with real, usable skills.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#0a0a0a]/10 bg-white p-8 shadow-sm">
                <h3 className="font-display text-lg font-bold tracking-tight text-[#0a0a0a]">{v.title}</h3>
                <p className="mt-4 text-sm text-[#1a1a1a]/80 font-sans">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">Why We&apos;re Different</h2>
            <p className="mt-8 text-lg leading-relaxed text-[#1a1a1a]/80 font-sans">
              We&apos;re not another generic AI course. Here&apos;s what sets us apart.
            </p>
          </div>
          <ul className="mx-auto mt-20 max-w-3xl space-y-6">
            {different.map((item, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-[#0a0a0a]/10 bg-[#f5f5f5]/50 p-8">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-[#1a1a1a]/80 font-sans">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
