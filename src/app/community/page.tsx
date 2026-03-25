import Link from "next/link";

export default function CommunityPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl">Community</h1>
            <p className="mt-8 text-lg leading-relaxed text-[#1a1a1a]/80 font-sans">
              Join builders learning and shipping with AI. Get feedback, share projects, and grow together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#0a0a0a]/10 bg-[#f5f5f5]/50 p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a] sm:text-3xl">Discord</h2>
              <p className="mt-6 text-base leading-relaxed text-[#1a1a1a]/80 font-sans">
                Our primary community lives on Discord. Join for weekly live sessions, project showcases, Q&A, and
                casual chat with other builders. Channels for prompting, vibecoding, tools, and off-topic.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-xl bg-[#5865F2] px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Join Discord
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V14a2 2 0 00-2-2h-4m-4-1l4 4m0 0l4-4m-4 4V4" />
                </svg>
              </a>
            </div>
            <div className="rounded-2xl border border-[#0a0a0a]/10 bg-[#f5f5f5]/50 p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#0a0a0a] sm:text-3xl">How to Join</h2>
              <ol className="mt-6 list-decimal space-y-4 pl-6 text-sm text-[#1a1a1a]/80 font-sans">
                <li>Sign up for a course or join the waitlist to get an invite link.</li>
                <li>Accept the invite and read the welcome channel.</li>
                <li>Introduce yourself in #introductions and share what you want to build.</li>
                <li>Participate in workshops and project showcases when you&apos;re ready.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">Community Guidelines</h2>
          </div>
          <ul className="mt-16 space-y-6 text-sm text-[#1a1a1a]/80 font-sans">
            <li className="flex gap-4">
              <span className="text-[#0a0a0a] font-bold" aria-hidden>•</span>
              Be respectful. No harassment, spam, or self-promotion outside designated channels.
            </li>
            <li className="flex gap-4">
              <span className="text-[#0a0a0a] font-bold" aria-hidden>•</span>
              Share what works. We learn from each other&apos;s wins and failures.
            </li>
            <li className="flex gap-4">
              <span className="text-[#0a0a0a] font-bold" aria-hidden>•</span>
              Help others when you can. Answer questions, give feedback, and encourage.
            </li>
            <li className="flex gap-4">
              <span className="text-[#0a0a0a] font-bold" aria-hidden>•</span>
              Keep discussions constructive. Critique ideas, not people.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0a0a0a] sm:text-4xl">Member Projects</h2>
            <p className="mt-6 text-base text-[#1a1a1a]/80 font-sans">
              Projects built by community members. Want to showcase yours? Share in Discord and we may feature it
              here.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "AI writing assistant", by: "Alex C." },
              { name: "Prompt library for designers", by: "Jordan R." },
              { name: "No-code landing page builder", by: "Sam W." },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-[#0a0a0a]/10 bg-[#f5f5f5]/50 p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-bold tracking-tight text-[#0a0a0a]">{p.name}</h3>
                <p className="mt-2 text-xs text-[#1a1a1a]/60 font-sans">by {p.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to join?</h2>
          <p className="mt-8 text-base text-white/80 font-sans">
            Get access to the community when you sign up for a course or join the email list.
          </p>
          <Link
            href="/#signup"
            className="mt-12 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-[#0a0a0a] hover:bg-[#f5f5f5] transition-colors"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
