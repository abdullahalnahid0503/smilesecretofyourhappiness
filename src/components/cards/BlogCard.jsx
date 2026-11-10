import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLang } from '@/lib/i18n';

export default function BlogCard({ post }) {
  const { t, tx } = useLang();
  return (
    <article className="card-hc group flex h-full flex-col overflow-hidden">
      <Link to={`/blogs/${post.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image src={post.image} alt={tx(post.title)} className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/55">
          <span className="rounded-full border-2 border-black px-3 py-0.5 text-black">{post.category}</span>
          <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
        </div>
        <h3 className="mt-3 text-xl font-bold leading-snug"><Link to={`/blogs/${post.slug}`} className="hover:underline decoration-[#FDE01A] decoration-[3px] underline-offset-4">{tx(post.title)}</Link></h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-black/65">{tx(post.excerpt)}</p>
        <div className="mt-4 flex items-center justify-between border-t-2 border-black/10 pt-4 text-sm">
          <span className="font-medium text-black/70">{post.author}</span>
          <Link to={`/blogs/${post.slug}`} className="inline-flex items-center gap-1 font-bold">{t('common.readMore')} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </article>
  );
}