import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/common/Reveal';

// Large navigational option (Gallery / Connect landing pages)
export default function OptionCard({ to, title, desc, image, icon: Icon, index = 0 }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Link to={to} className="card-hc group flex h-full flex-col overflow-hidden">
        {image && <Image src={image} alt="" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
        <div className="flex flex-1 items-start justify-between gap-4 p-7">
          <div>
            {Icon && <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDE01A]"><Icon className="h-6 w-6" /></span>}
            <h3 className="text-2xl font-extrabold leading-tight">{title}</h3>
            <p className="mt-2 text-black/65">{desc}</p>
          </div>
          <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black transition-colors group-hover:bg-black group-hover:text-white"><ArrowUpRight className="h-5 w-5" /></span>
        </div>
      </Link>
    </Reveal>
  );
}