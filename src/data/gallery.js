import { images } from '@/data/images';

// Pictures: tag each image with project, branch, year and event so the filters work.
export const pictures = [
  { id: 1, src: images.floodRelief, alt: 'Volunteers delivering relief by boat', project: 'Sylhet Flash-Flood Relief', branch: 'Sylhet', year: 2024, event: 'Relief Distribution', tall: true },
  { id: 2, src: images.treePlanting, alt: 'Planting saplings by the roadside', project: 'Green Chattogram Plantation', branch: 'Chattogram', year: 2024, event: 'Plantation Day' },
  { id: 3, src: images.bloodDonation, alt: 'Blood donation camp registration', project: 'Blood for Life Camps', branch: 'Dhaka', year: 2025, event: 'Blood Camp' },
  { id: 4, src: images.winterDrive, alt: 'Handing blankets on a winter morning', project: 'Winter Warmth Drive', branch: 'Rajshahi', year: 2025, event: 'Winter Drive', tall: true },
  { id: 5, src: images.schoolSupplies, alt: 'Children receiving school bags', project: 'School Bag Project', branch: 'Dhaka', year: 2025, event: 'School Bag Day' },
  { id: 6, src: images.cleanupDrive, alt: 'Riverbank clean-up', project: 'Green Chattogram Plantation', branch: 'Chattogram', year: 2024, event: 'Clean-up Drive' },
  { id: 7, src: images.leadershipWorkshop, alt: 'Leadership bootcamp session', project: 'Youth Leadership Bootcamp', branch: 'Dhaka', year: 2025, event: 'Bootcamp' },
  { id: 8, src: images.schoolClassroom, alt: 'Children in the classroom', project: 'ইচ্ছের হাসি প্রাথমিক বিদ্যালয়', branch: 'Dhaka', year: 2025, event: 'School Day', tall: true },
  { id: 9, src: images.teacherStudent, alt: 'Teacher helping a student', project: 'ইচ্ছের হাসি প্রাথমিক বিদ্যালয়', branch: 'Dhaka', year: 2024, event: 'School Day' },
  { id: 10, src: images.volunteerStories, alt: 'Volunteers sharing tea at dusk', project: 'Sylhet Flash-Flood Relief', branch: 'Sylhet', year: 2024, event: 'Volunteer Meetup' },
  { id: 11, src: images.skillsWorkshop, alt: 'Digital skills workshop', project: 'Youth Leadership Bootcamp', branch: 'Dhaka', year: 2025, event: 'Workshop' },
  { id: 12, src: images.ruralBranch, alt: 'Volunteers speaking with villagers', project: 'Winter Warmth Drive', branch: 'Rajshahi', year: 2025, event: 'Household Survey', tall: true },
];

// Videos: replace `url` with a YouTube/Vimeo embed URL when available.
export const videos = [
  { id: 1, title: { en: 'Eleven Days in Sylhet', bn: 'সিলেটে এগারো দিন' }, date: '2024-07-02', thumbnail: images.floodRelief, url: null, desc: { en: 'A short documentary on our 2024 flood response.', bn: '২০২৪ সালের বন্যা সহায়তার একটি স্বল্পদৈর্ঘ্য প্রামাণ্যচিত্র।' } },
  { id: 2, title: { en: 'A Day at ইচ্ছের হাসি', bn: 'ইচ্ছের হাসিতে একদিন' }, date: '2025-03-15', thumbnail: images.schoolClassroom, url: null, desc: { en: 'Morning assembly to afternoon play - life at our school.', bn: 'সকালের সমাবেশ থেকে বিকেলের খেলা - আমাদের বিদ্যালয়ের জীবন।' } },
  { id: 3, title: { en: 'Why I Volunteer', bn: 'আমি কেন স্বেচ্ছাসেবক' }, date: '2025-05-20', thumbnail: images.volunteerStories, url: null, desc: { en: 'Six volunteers, one question.', bn: 'ছয় স্বেচ্ছাসেবক, একটি প্রশ্ন।' } },
  { id: 4, title: { en: 'Green Chattogram Highlights', bn: 'সবুজ চট্টগ্রাম হাইলাইটস' }, date: '2024-09-01', thumbnail: images.treePlanting, url: null, desc: { en: 'Five thousand saplings in one monsoon.', bn: 'এক বর্ষায় পাঁচ হাজার চারা।' } },
  { id: 5, title: { en: 'Leadership Bootcamp 2025', bn: 'লিডারশিপ বুটক্যাম্প ২০২৫' }, date: '2025-03-28', thumbnail: images.leadershipWorkshop, url: null, desc: { en: 'Three days with 120 emerging leaders.', bn: '১২০ উদীয়মান নেতার সাথে তিন দিন।' } },
  { id: 6, title: { en: 'Winter Warmth 2025', bn: 'শীতের উষ্ণতা ২০২৫' }, date: '2025-01-18', thumbnail: images.winterDrive, url: null, desc: { en: 'Door to door in Kurigram.', bn: 'কুড়িগ্রামে ঘরে ঘরে।' } },
];