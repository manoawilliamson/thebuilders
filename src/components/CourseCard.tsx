import Image from "next/image";
import Link from "next/link";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  level: string;
  image: string;
}

export function CourseCard({ title, description, duration, price, level, image }: CourseCardProps) {
  const levelLabel = level.charAt(0).toUpperCase() + level.slice(1);
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[#0a0a0a]/10 bg-white transition-all hover:border-[#0a0a0a]/20">
      <div className="relative aspect-video overflow-hidden bg-[#f5f5f5]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full border border-[#0a0a0a]/10 bg-white/90 px-2.5 py-1 font-mono text-xs text-[#0a0a0a]/80">
          {levelLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 font-mono text-xs text-[#0a0a0a]/50">
          <span>{duration}</span>
          <span aria-hidden>·</span>
          <span className="font-semibold text-[#0a0a0a]">{price}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-[#0a0a0a] transition-colors group-hover:opacity-80">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-[#0a0a0a]/70 line-clamp-3">{description}</p>
        <Link
          href={`/courses#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-[#0a0a0a] hover:opacity-70 transition-opacity"
        >
          Learn more
          <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
