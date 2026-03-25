import Image from "next/image";

export interface WorkshopCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  date: string;
  image: string;
}

export function WorkshopCard({ title, instructor, description, date, image }: WorkshopCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-[#0a0a0a]/10 bg-white transition-all hover:border-[#0a0a0a]/20">
      <div className="relative aspect-video overflow-hidden bg-[#f5f5f5]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs text-[#0a0a0a]/50">{date}</p>
        <h3 className="mt-2 font-display text-lg font-bold text-[#0a0a0a]">{title}</h3>
        <p className="mt-1 text-sm text-[#0a0a0a]/60">{instructor}</p>
        <p className="mt-2 text-sm text-[#0a0a0a]/70 line-clamp-2">{description}</p>
      </div>
    </article>
  );
}
