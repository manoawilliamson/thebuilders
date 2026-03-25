import Link from "next/link";
import { EmailSignupForm } from "@/components/EmailSignupForm";
import { CourseCard } from "@/components/CourseCard";
import { WorkshopCard } from "@/components/WorkshopCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FadeInSection } from "@/components/FadeInSection";
import { FAQ } from "@/components/FAQ";
import coursesData from "@/data/courses.json";
import workshopsData from "@/data/workshops.json";
import testimonialsData from "@/data/testimonials.json";

const learnItems = [
  {
    title: "Vibecoding & AI-assisted development",
    description: "Code alongside AI and ship features faster with real projects.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Perfect prompting techniques",
    description: "Get exactly what you need from AI with structured, repeatable methods.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "AI builder tools & workflows",
    description: "No-code and low-code builders to create real products.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Real projects, not just theory",
    description: "Build and ship real AI-powered products by the end of your learning path.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const steps = [
  { number: "1", title: "Join the community", description: "Get access to Discord and weekly live sessions." },
  { number: "2", title: "Learn through practical workshops & courses", description: "Hands-on lessons, no fluff." },
  { number: "3", title: "Build real projects with AI", description: "Ship something you can show in your portfolio." },
  { number: "4", title: "Level up your skills continuously", description: "New content and guest experts every month." },
];

const stats = [
  { value: "500+", label: "Creators learning" },
  { value: "10+", label: "Practical courses" },
  { value: "50+", label: "Live workshops" },
  { value: "99%", label: "Would recommend" },
];

const benefits = [
  { metric: "10x", label: "faster to ship", description: "Go from idea to working product with AI-assisted development." },
  { metric: "3x", label: "more output", description: "Better prompts and workflows mean more done in less time." },
  { metric: "0", label: "fluff", description: "Only skills you can use the same day. No theory without application." },
];

const comparison = {
  oldWay: [
    "Endless tutorials, no clear path",
    "Theory-heavy courses that don't stick",
    "No community or real projects",
    "Overwhelmed by tools, no system",
  ],
  newWay: [
    "Structured paths from basics to building",
    "Hands-on lessons with real deliverables",
    "Discord community + live workshops",
    "Curated tools and workflows that work in 2026",
  ],
};

const homeFaq = [
  { id: "1", question: "Do I need to know how to code?", answer: "Not for every course. We have paths for non-coders (prompting, no-code builders) and for developers (vibecoding, AI-assisted dev). Pick what fits you." },
  { id: "2", question: "How is this different from free YouTube content?", answer: "We focus on structured learning, real projects, and a community. You get a clear path, feedback, and content that's updated for 2026—not one-off videos." },
  { id: "3", question: "Can I get a refund?", answer: "Yes. If a course isn't right for you, we offer a refund within 14 days. No hassle." },
  { id: "4", question: "How do I join the community?", answer: "Sign up for a course or join the email list—you'll get an invite to our Discord where we run live sessions and share projects." },
];

export default function HomePage() {
  const featuredCourses = coursesData.slice(0, 3);
  const workshops = workshopsData.slice(0, 3);
  const testimonials = testimonialsData;

  return (
    <>
      {/* Hero — dark, editorial (Sanity style) */}
      <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(10, 10, 10, 0.48)_100%)]" aria-hidden />
        <div className="absolute left-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 sm:px-8 lg:px-12 z-10" style={{ top: "calc(50vh - 4rem)" }}>
          <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Building the
            <br />
            <span className="text-white/90">AI Skills</span>
            <br />
            of Tomorrow
          </h1>
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl font-sans">
            A collective where we learn, build, and ship with AI—from perfect prompts to real products. No fluff, just practical skills that matter.
          </p>
          <div className="mt-16 flex flex-wrap items-center gap-8">
            <Link
              href="/#signup"
              className="inline-flex items-center text-base font-medium tracking-wide text-white hover:text-white/80 transition-colors font-sans"
            >
              Join our mission
              <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="text-base font-medium tracking-wide text-white/60 hover:text-white transition-colors font-sans"
            >
              Learn more
            </Link>
          </div>
          <p className="mt-16 text-sm font-medium tracking-widest uppercase text-white/50">
            Trusted by 500+ creators
          </p>
        </div>
        {/* Scroll — minimal arrow */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10" aria-hidden>
          <div className="flex flex-col items-center gap-3 text-white/50 opacity-0 animate-scroll-hint-in">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase">Scroll</span>
            <svg className="h-6 w-6 animate-scroll-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Our paths — Sanity style */}
      <section className="bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="paths-heading">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p id="paths-heading" className="font-display text-sm font-semibold tracking-widest uppercase text-[#0a0a0a]/60">
              What we offer
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl lg:text-5xl">
              our paths
            </h2>
            <p className="mt-3 text-sm text-[#0a0a0a]/60">01 — 04</p>
          </div>
          <div className="mt-20 space-y-24 border-t border-[#0a0a0a]/10 pt-20 sm:space-y-28 lg:mt-24 lg:space-y-32 lg:pt-24">
            {learnItems.map((item, i) => (
              <div key={item.title} className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-2">
                  <span className="font-mono text-sm text-[#0a0a0a]/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-6 text-base text-[#0a0a0a]/70 font-sans">{item.description}</p>
                  <Link
                    href="/about"
                    className="mt-8 inline-flex items-center text-base font-medium text-[#0a0a0a] hover:opacity-70 transition-opacity font-sans"
                  >
                    Learn more
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="lg:col-span-4 flex flex-wrap gap-3 content-start">
                  {item.title.split(" ").slice(0, 2).map((tag) => (
                    <span key={tag} className="rounded-full border border-[#0a0a0a]/20 px-4 py-2 font-mono text-sm text-[#0a0a0a]/70">
                      {tag.replace(/&/g, "and")}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our ethos — Sanity style */}
      <section className="border-y border-[#0a0a0a]/10 bg-[#f5f5f5] py-24 sm:py-32 lg:py-40" aria-labelledby="ethos-heading">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 id="ethos-heading" className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">
            Shaping the future of AI. Together.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-[#1a1a1a]/70 font-sans">
            We innovate, challenge, and solve problems within the digital landscape. Each path has its own focus—prompting, vibecoding, no-code builders—while adding real skills you can use the same day.
          </p>
          <Link
            href="/#signup"
            className="mt-12 inline-flex items-center text-base font-medium tracking-wide text-[#0a0a0a] hover:opacity-70 transition-opacity font-sans"
          >
            Work with us
            <svg className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats — minimal strip */}
      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="stats-heading">
        <div id="stats-heading" className="sr-only">Key numbers</div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a] sm:text-3xl">{s.value}</div>
                <div className="mt-2 text-sm text-[#0a0a0a]/60 font-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — minimal */}
      <section className="border-t border-[#0a0a0a]/10 bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="how-heading">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 id="how-heading" className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a] sm:text-3xl">
              How it works
            </h2>
          </div>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="font-mono text-sm text-[#0a0a0a]/50">{String(step.number).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-[#0a0a0a]">{step.title}</h3>
                <p className="mt-3 text-sm text-[#0a0a0a]/60 font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison — minimal two columns */}
      <section className="bg-[#f5f5f5] py-24 sm:py-32 lg:py-40" aria-labelledby="comparison-heading">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 id="comparison-heading" className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a] sm:text-3xl">
              The problem we solve
            </h2>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div className="border-l-2 border-[#0a0a0a]/20 pl-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#0a0a0a]/60">Old way</h3>
              <ul className="mt-6 space-y-4 text-sm text-[#0a0a0a]/70 font-sans">
                {comparison.oldWay.map((item) => (
                  <li key={item}>× {item}</li>
                ))}
              </ul>
            </div>
            <div className="border-l-2 border-[#0a0a0a] pl-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#0a0a0a]">The Builders way</h3>
              <ul className="mt-6 space-y-4 text-sm text-[#0a0a0a]/80 font-sans">
                {comparison.newWay.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-12">
            <Link href="/#signup" className="text-base font-medium text-[#0a0a0a] hover:opacity-70 transition-opacity font-sans">
              Get started →
            </Link>
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-[#0a0a0a]/10 bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <p id="trust-heading" className="text-center text-sm font-medium tracking-widest uppercase text-[#0a0a0a]/50">
            Join creators already building with AI
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-4 sm:gap-x-20">
            {["Designers", "Developers", "Marketers", "Founders", "Content creators"].map((role) => (
              <span key={role} className="text-sm font-medium text-[#0a0a0a]/70">{role}</span>
            ))}
          </div>
        </div>
      </section>


      

      {/* Testimonials */}
      <section className="border-t border-[#0a0a0a]/10 bg-white py-24 sm:py-32 lg:py-40" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 id="testimonials-heading" className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a] sm:text-3xl">
              Join 500+ creators
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f5] py-40 sm:py-48 lg:py-56" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl px-12 sm:px-16 lg:px-20">
          <div className="max-w-3xl">
            <h2 id="faq-heading" className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">
              FAQ
            </h2>
          </div>
          <div className="mt-16">
            <FAQ items={homeFaq} />
          </div>
          <p className="mt-12">
            <Link href="/contact" className="text-base font-medium text-[#0a0a0a] hover:opacity-70 transition-opacity font-sans">
              Can’t find your answer? Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* CTA + Email Signup — dark */}
      <section id="signup" className="bg-[#0a0a0a] py-40 sm:py-48 lg:py-56" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl px-12 text-center sm:px-16 lg:px-20">
          <h2 id="cta-heading" className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build with AI?
          </h2>
          <p className="mt-8 text-base text-white/70 font-sans">
            Get free resources and early access. No spam.
          </p>
          <div className="mt-16">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur sm:p-12">
              <EmailSignupForm variant="dark" />
            </div>
          </div>
          <p className="mt-12">
            <Link href="/about" className="text-base font-medium text-white/60 hover:text-white transition-colors font-sans">
              Learn more about us
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
