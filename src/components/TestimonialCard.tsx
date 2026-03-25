import Image from "next/image";

export interface TestimonialCardProps {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export function TestimonialCard({ quote, name, role, avatar }: TestimonialCardProps) {
  return (
    <blockquote className="flex flex-col rounded-lg border border-[#0a0a0a]/10 bg-white p-5 transition-colors hover:border-[#0a0a0a]/15">
      <p className="flex-1 text-sm leading-relaxed text-[#0a0a0a]/80">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#f5f5f5]">
          <Image src={avatar} alt="" fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <cite className="not-italic text-sm font-semibold text-[#0a0a0a]">{name}</cite>
          <p className="text-xs text-[#0a0a0a]/60">{role}</p>
        </div>
      </footer>
    </blockquote>
  );
}
