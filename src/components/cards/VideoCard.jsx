import React from 'react';
import { format } from 'date-fns';
import { Play } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLang } from '@/lib/i18n';

export default function VideoCard({ video, onPlay }) {
  const { tx } = useLang();
  return (
    <article className="card-hc group flex h-full flex-col overflow-hidden">
      <button type="button" onClick={() => onPlay(video)} className="relative block w-full overflow-hidden text-left" aria-label={`Play ${tx(video.title)}`}>
        <Image src={video.thumbnail} alt="" className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FDE01A] text-black shadow-lg transition-transform group-hover:scale-110"><Play className="ml-1 h-7 w-7 fill-current" /></span>
        </span>
      </button>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-black/55">{format(new Date(video.date), 'MMM d, yyyy')}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug">{tx(video.title)}</h3>
        <p className="mt-2 text-[15px] text-black/65">{tx(video.desc)}</p>
      </div>
    </article>
  );
}