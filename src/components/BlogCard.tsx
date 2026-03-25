import Image from "next/image";
import Link from "next/link";

export interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
  category: string;
}

export function BlogCard({ title, excerpt, date, slug, image, category }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
      <Link href={`/resources#${slug}`} className="relative block aspect-video overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-body">
          {category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <time dateTime={date} className="text-sm text-body">
          {formattedDate}
        </time>
        <h3 className="mt-2 font-display text-lg font-bold text-headline group-hover:text-primary transition-colors">
          <Link href={`/resources#${slug}`}>{title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-body line-clamp-2">{excerpt}</p>
        <Link
          href={`/resources#${slug}`}
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Read more
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
