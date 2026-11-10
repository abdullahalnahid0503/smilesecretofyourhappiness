import { images } from '@/data/images';

export const blogCategories = ['Stories', 'Volunteering', 'Education', 'Leadership'];

export const blogs = [
  {
    slug: 'what-a-classroom-taught-us',
    title: { en: 'What a bamboo classroom taught us about hope', bn: 'একটি বাঁশের শ্রেণিকক্ষ আমাদের আশা সম্পর্কে যা শিখিয়েছে' },
    category: 'Education',
    author: 'Fatema Tuz Zohra',
    date: '2025-11-12',
    readTime: 5,
    image: images.schoolClassroom,
    excerpt: { en: 'Four years after ইচ্ছের হাসি প্রাথমিক বিদ্যালয় opened, we look back at the first cohort - and what they have taught us.', bn: 'ইচ্ছের হাসি প্রাথমিক বিদ্যালয় খোলার চার বছর পর আমরা প্রথম ব্যাচের দিকে ফিরে দেখি - এবং তারা আমাদের কী শিখিয়েছে।' },
    content: `When we opened the school in 2021 we had forty children, two volunteer teachers and a room with bamboo walls that leaked when it rained.

We worried about everything: attendance, books, whether parents would keep sending their children when they could be earning. What we did not expect was how quickly the children would make the place their own.

## The first cohort

Of those forty, thirty-six completed Class 5 this year. Eleven have moved on to government secondary schools. Every one of them can read a newspaper - something most of their parents cannot do.

## What we learned

- **Consistency matters more than resources.** A teacher who shows up every day is worth more than a projector.
- **Parents are partners.** Monthly parent circles changed everything about attendance.
- **Dignity is not optional.** Uniforms, a proper roof and a clean toilet were not luxuries - they were the reason families stayed.

We still have a long way to go. But the bamboo walls are gone now, and the roof does not leak.`,
  },
  {
    slug: 'first-week-as-a-volunteer',
    title: { en: 'Your first week as a Smile volunteer: what to expect', bn: 'Smile স্বেচ্ছাসেবক হিসেবে আপনার প্রথম সপ্তাহ: কী আশা করবেন' },
    category: 'Volunteering',
    author: 'Nusaiba Tasnim',
    date: '2025-10-03',
    readTime: 4,
    image: images.volunteerStories,
    excerpt: { en: 'Nervous about joining? Here is an honest look at orientation, your first field day and how we keep volunteers safe.', bn: 'যুক্ত হতে দ্বিধা? ওরিয়েন্টেশন, প্রথম মাঠদিবস ও স্বেচ্ছাসেবকদের নিরাপদ রাখার একটি সৎ বিবরণ।' },
    content: `Most people who apply to volunteer tell us the same thing: "I want to help, but I don't know if I'm qualified."

You are. Here is what your first week looks like.

## Day 1 - Orientation

A two-hour session, online or at your nearest branch. We talk about our values, safety rules and how decisions are made. You meet your branch coordinator.

## Days 2-5 - Shadowing

You join an experienced volunteer on an activity - a food distribution, a school visit, a blood camp. You watch, ask questions and help where asked.

## Day 6 onwards - Your role

Together with your coordinator you choose a focus: field work, documentation, design, logistics or teaching. Remote volunteers usually start with communications or research.

## Safety

No volunteer works alone. Every field activity has a lead, a first-aid kit and a check-in call. If something ever feels wrong, you can step back - no questions asked.`,
  },
  {
    slug: 'leading-at-twenty',
    title: { en: 'Leading a branch at twenty', bn: 'বিশ বছর বয়সে একটি শাখার নেতৃত্ব' },
    category: 'Leadership',
    author: 'Jannatul Ferdous',
    date: '2025-08-21',
    readTime: 6,
    image: images.leadershipWorkshop,
    excerpt: { en: 'The Sylhet branch president on being underestimated, learning to delegate and the flood that changed her team.', bn: 'সিলেট শাখার সভাপতি - অবমূল্যায়িত হওয়া, দায়িত্ব বণ্টন শেখা এবং যে বন্যা তাঁর টিমকে বদলে দিয়েছে।' },
    content: `I became branch president at twenty. The first thing an older relative asked was who was "actually" in charge.

## Being underestimated

It happens constantly - at government offices, with suppliers, sometimes with parents of our own volunteers. What helped was preparation. If I walked in with numbers, a plan and a printed letterhead, the conversation changed.

## Learning to delegate

My first year I tried to do everything. By the second, I understood that a committee exists so the president does not have to. Our general secretary now runs operations better than I ever did.

## The flood

June 2024 changed us. For eleven days nobody slept properly. But I watched nineteen-year-olds coordinate boats, doctors and supply chains with a calm I had not seen before. That is when I stopped worrying about whether we were "old enough".`,
  },
  {
    slug: 'why-we-stopped-public-distributions',
    title: { en: 'Why we stopped doing public distributions', bn: 'কেন আমরা প্রকাশ্য বিতরণ বন্ধ করেছি' },
    category: 'Stories',
    author: 'Md. Ashraful Islam',
    date: '2025-06-14',
    readTime: 4,
    image: images.winterDrive,
    excerpt: { en: 'The photos looked good. The people in the queues did not feel good. Here is how we changed our approach to relief.', bn: 'ছবিগুলো ভালো দেখাত। সারিতে দাঁড়ানো মানুষদের ভালো লাগত না। ত্রাণে আমাদের পদ্ধতি কীভাবে বদলেছি।' },
    content: `For years, our winter drives looked like every other charity's: a truck, a banner, a long queue, and photos of volunteers handing over blankets.

Then an elderly man in Kurigram told one of our volunteers he had waited three hours and felt like he was begging.

## What we changed

- We survey households first, with local help.
- We deliver door to door, usually in the evening.
- We do not photograph recipients without asking, and never in a queue.

## What it cost

More time and more volunteers per blanket. Fewer dramatic photos for social media.

## What we gained

Trust. In villages where we have done this for three winters, people now tell us who needs help most - including families we would never have found from a truck.`,
  },
];