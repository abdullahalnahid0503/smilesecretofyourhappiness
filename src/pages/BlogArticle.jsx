import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Avatar from '@/components/common/Avatar';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogCard from '@/components/cards/BlogCard';
import CTABand from '@/components/common/CTABand';
import { blogs } from '@/data/blogs';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

export default function BlogArticle() {
  const { slug } = useParams();
  const { t, tx } = useLang();
  const post = blogs.find((b) => b.slug === slug);
  usePageMeta(post ? tx(post.title) : t('nav.blogs'), post ? tx(post.excerpt) : '');
  if (!post) return <Navigate to="/blogs" replace />;
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="container-x pt-12 lg:pt-20">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-black"><ArrowLeft className="h-4 w-4" /> {t('common.backTo')} {t('nav.blogs')}</Link>
          <div className="mx-auto mt-8 max-w-3xl">
            <span className="rounded-full border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-wider">{post.category}</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">{tx(post.title)}</h1>
            <p className="mt-5 text-xl leading-relaxed text-black/65">{tx(post.excerpt)}</p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y-2 border-black py-5">
              <div className="flex items-center gap-3">
                <Avatar name={post.author} size="sm" className="h-12 w-12 text-sm" />
                <div><p className="font-bold">{post.author}</p><p className="text-sm text-black/60">{format(new Date(post.date), 'MMMM d, yyyy')} · <Clock className="inline h-3.5 w-3.5" /> {post.readTime} {t('common.minRead')}</p></div>
              </div>
              <ShareButtons title={tx(post.title)} />
            </div>
          </div>
        </header>
        <div className="container-x mt-10">
          <Image src={post.image} alt={tx(post.title)} className="aspect-[21/9] w-full rounded-[2rem] border-2 border-black object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="prose prose-lg prose-headings:font-heading prose-headings:font-extrabold prose-headings:tracking-tight prose-p:leading-[1.75] prose-strong:text-black prose-li:marker:text-black max-w-none text-black/80 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:text-black [&_h3]:text-black [&_ul]:list-disc [&_ul]:pl-6 [&_p]:mb-6 [&_li]:mb-2 [&_h2]:mb-4">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <div className="mt-14 border-t-2 border-black pt-8"><ShareButtons title={tx(post.title)} /></div>
        </div>
      </article>

      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="container-x">
          <h2 className="eyebrow mb-8">{t('common.related')}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{related.map((b) => <BlogCard key={b.slug} post={b} />)}</div>
        </div>
      </section>

      <CTABand variant="black" title={t('home.final.title')} body={t('home.final.body')} primary={{ to: '/connect/volunteer', label: t('hero.cta1') }} secondary={{ to: '/donate', label: t('common.donateNow') }} />
    </>
  );
}