import React from 'react';
import { Target, Eye } from 'lucide-react';
import Reveal from '@/components/common/Reveal';

// Renders the last word of the heading with a straight yellow underline,
// matching the mockup's accent under "Vision". Works for EN + BN copy.
function AccentHeading({ heading, accent = false, className }) {
  if (!accent) return <h3 className={className}>{heading}</h3>;
  const parts = heading.trim().split(' ');
  const last = parts.pop();
  return (
    <h3 className={className}>
      {parts.join(' ')}{' '}
      <span className="border-b-[3px] border-[#FDE01A]">{last}</span>
    </h3>
  );
}

export default function MissionVisionSlabs({ mission, missionBody, vision, visionBody }) {
  const slabs = [
    { idx: '01', Icon: Target, heading: mission, body: missionBody, tone: 'yellow' },
    { idx: '02', Icon: Eye, heading: vision, body: visionBody, tone: 'dark' },
  ];

  return (
    <div className="container-x mt-16">
      <div className="grid grid-cols-1 overflow-hidden border-2 border-black transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#FDE01A] md:grid-cols-2">
        {slabs.map(({ idx, Icon, heading, body, tone }, i) => {
          const yellow = tone === 'yellow';
          return (
            <Reveal key={heading} delay={i * 0.08} className="h-full">
              <article
                className={[
                  'relative flex h-full flex-col p-8 lg:p-12',
                  yellow
                    ? 'bg-[#FDE01A] text-black border-b-2 border-black md:border-b-0 md:border-r-2'
                    : 'bg-black text-white',
                ].join(' ')}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={[
                      'inline-flex h-12 w-12 items-center justify-center',
                      yellow ? 'bg-black' : 'bg-[#FDE01A]',
                    ].join(' ')}
                  >
                    <Icon className={['h-6 w-6', yellow ? 'text-white' : 'text-black'].join(' ')} aria-hidden="true" />
                  </span>
                  <span
                    className={[
                      'font-heading text-7xl font-black leading-none tracking-tight sm:text-8xl',
                      yellow ? 'text-black/20' : 'text-white/20',
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {idx}
                  </span>
                </div>
                <AccentHeading
                  accent={!yellow}
                  heading={heading}
                  className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl"
                />
                <p
                  className={[
                    'mt-5 max-w-md text-lg leading-relaxed',
                    yellow ? 'text-black/80' : 'text-white/80',
                  ].join(' ')}
                >
                  {body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}