import { images } from '@/data/images';

// Each branch carries its own committee (organizational chart). Add a new object to add a branch.
// Committee tiers render top-to-bottom; members inside a tier render side-by-side.
export const branches = [
  {
    slug: 'dhaka',
    name: { en: 'Dhaka Branch', bn: 'ঢাকা শাখা' },
    location: { en: 'Dhaka Division', bn: 'ঢাকা বিভাগ' },
    image: images.cityBranch,
    founded: 2016,
    description: {
      en: 'Our founding branch coordinates national programs and runs urban initiatives across the capital, from food drives to youth workshops.',
      bn: 'আমাদের প্রতিষ্ঠাতা শাখা জাতীয় কার্যক্রম সমন্বয় করে এবং রাজধানীজুড়ে খাদ্য বিতরণ থেকে তরুণদের ওয়ার্কশপ পর্যন্ত শহুরে উদ্যোগ পরিচালনা করে।',
    },
    activities: [
      { en: 'Monthly food distribution', bn: 'মাসিক খাদ্য বিতরণ' },
      { en: 'Blood donation camps', bn: 'রক্তদান ক্যাম্প' },
      { en: 'Skill workshops', bn: 'দক্ষতা ওয়ার্কশপ' },
      { en: 'School supply drives', bn: 'শিক্ষা উপকরণ বিতরণ' },
    ],
    committee: [
      { label: { en: 'Branch President', bn: 'শাখা সভাপতি' }, members: [{ name: 'Tanvir Ahmed', position: { en: 'Branch President', bn: 'শাখা সভাপতি' } }] },
      { label: { en: 'Vice President', bn: 'সহ-সভাপতি' }, members: [{ name: 'Nusrat Jahan', position: { en: 'Vice President', bn: 'সহ-সভাপতি' } }, { name: 'Rafiul Islam', position: { en: 'Vice President', bn: 'সহ-সভাপতি' } }] },
      { label: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' }, members: [{ name: 'Sadia Rahman', position: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' } }] },
      { label: { en: 'Joint Secretary & Treasurer', bn: 'যুগ্ম সম্পাদক ও কোষাধ্যক্ষ' }, members: [{ name: 'Mahmudul Hasan', position: { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' } }, { name: 'Farhana Akter', position: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' } }] },
      { label: { en: 'Executive Members', bn: 'নির্বাহী সদস্য' }, members: [{ name: 'Imran Hossain', position: { en: 'Organizing Secretary', bn: 'সাংগঠনিক সম্পাদক' } }, { name: 'Tasnim Chowdhury', position: { en: 'Media & Publicity', bn: 'মিডিয়া ও প্রচার' } }, { name: 'Arif Khan', position: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' } }, { name: 'Sumaiya Islam', position: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' } }] },
    ],
  },
  {
    slug: 'chattogram',
    name: { en: 'Chattogram Branch', bn: 'চট্টগ্রাম শাখা' },
    location: { en: 'Chattogram Division', bn: 'চট্টগ্রাম বিভাগ' },
    image: images.cleanupDrive,
    founded: 2018,
    description: {
      en: 'Our port-city branch focuses on coastal community support, environmental clean-ups and emergency relief during cyclones.',
      bn: 'বন্দরনগরীর এই শাখা উপকূলীয় কমিউনিটি সহায়তা, পরিবেশ পরিচ্ছন্নতা ও ঘূর্ণিঝড়ের সময় জরুরি ত্রাণে মনোযোগী।',
    },
    activities: [
      { en: 'Beach & river clean-ups', bn: 'সমুদ্রতীর ও নদী পরিচ্ছন্নতা' },
      { en: 'Cyclone relief', bn: 'ঘূর্ণিঝড় ত্রাণ' },
      { en: 'Tree plantation', bn: 'বৃক্ষরোপণ' },
    ],
    committee: [
      { label: { en: 'Branch President', bn: 'শাখা সভাপতি' }, members: [{ name: 'Rakibul Hasan', position: { en: 'Branch President', bn: 'শাখা সভাপতি' } }] },
      { label: { en: 'Vice President', bn: 'সহ-সভাপতি' }, members: [{ name: 'Sharmin Sultana', position: { en: 'Vice President', bn: 'সহ-সভাপতি' } }] },
      { label: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' }, members: [{ name: 'Nayeem Uddin', position: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' } }] },
      { label: { en: 'Joint Secretary & Treasurer', bn: 'যুগ্ম সম্পাদক ও কোষাধ্যক্ষ' }, members: [{ name: 'Priya Das', position: { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' } }, { name: 'Jubayer Ahmed', position: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' } }] },
      { label: { en: 'Executive Members', bn: 'নির্বাহী সদস্য' }, members: [{ name: 'Mizanur Rahman', position: { en: 'Organizing Secretary', bn: 'সাংগঠনিক সম্পাদক' } }, { name: 'Anika Tabassum', position: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' } }, { name: 'Fahim Chowdhury', position: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' } }] },
    ],
  },
  {
    slug: 'rajshahi',
    name: { en: 'Rajshahi Branch', bn: 'রাজশাহী শাখা' },
    location: { en: 'Rajshahi Division', bn: 'রাজশাহী বিভাগ' },
    image: images.ruralBranch,
    founded: 2018,
    description: {
      en: 'Working with rural communities in the north - winter clothing drives, agricultural awareness and support for village schools.',
      bn: 'উত্তরের গ্রামীণ কমিউনিটির সাথে কাজ - শীতবস্ত্র বিতরণ, কৃষি সচেতনতা ও গ্রামের বিদ্যালয়ে সহায়তা।',
    },
    activities: [
      { en: 'Winter clothing drives', bn: 'শীতবস্ত্র বিতরণ' },
      { en: 'Village school support', bn: 'গ্রামীণ বিদ্যালয় সহায়তা' },
      { en: 'Health camps', bn: 'স্বাস্থ্য ক্যাম্প' },
    ],
    committee: [
      { label: { en: 'Branch President', bn: 'শাখা সভাপতি' }, members: [{ name: 'Shahriar Kabir', position: { en: 'Branch President', bn: 'শাখা সভাপতি' } }] },
      { label: { en: 'Vice President', bn: 'সহ-সভাপতি' }, members: [{ name: 'Marufa Khatun', position: { en: 'Vice President', bn: 'সহ-সভাপতি' } }] },
      { label: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' }, members: [{ name: 'Abdullah Al Mamun', position: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' } }] },
      { label: { en: 'Joint Secretary & Treasurer', bn: 'যুগ্ম সম্পাদক ও কোষাধ্যক্ষ' }, members: [{ name: 'Rumana Parvin', position: { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' } }, { name: 'Sajid Hossain', position: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' } }] },
      { label: { en: 'Executive Members', bn: 'নির্বাহী সদস্য' }, members: [{ name: 'Tahmid Islam', position: { en: 'Organizing Secretary', bn: 'সাংগঠনিক সম্পাদক' } }, { name: 'Nadia Afrin', position: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' } }] },
    ],
  },
  {
    slug: 'sylhet',
    name: { en: 'Sylhet Branch', bn: 'সিলেট শাখা' },
    location: { en: 'Sylhet Division', bn: 'সিলেট বিভাগ' },
    image: images.floodRelief,
    founded: 2020,
    description: {
      en: 'Our youngest major branch leads flash-flood response and runs learning circles for children in tea-garden communities.',
      bn: 'আমাদের সর্বকনিষ্ঠ বড় শাখা আকস্মিক বন্যায় সাড়া দেয় এবং চা-বাগান কমিউনিটির শিশুদের জন্য শিক্ষা চক্র পরিচালনা করে।',
    },
    activities: [
      { en: 'Flood relief', bn: 'বন্যা ত্রাণ' },
      { en: 'Learning circles', bn: 'শিক্ষা চক্র' },
      { en: 'Clean water access', bn: 'বিশুদ্ধ পানির সুবিধা' },
    ],
    committee: [
      { label: { en: 'Branch President', bn: 'শাখা সভাপতি' }, members: [{ name: 'Jannatul Ferdous', position: { en: 'Branch President', bn: 'শাখা সভাপতি' } }] },
      { label: { en: 'Vice President', bn: 'সহ-সভাপতি' }, members: [{ name: 'Rashed Chowdhury', position: { en: 'Vice President', bn: 'সহ-সভাপতি' } }] },
      { label: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' }, members: [{ name: 'Sabbir Ahmed', position: { en: 'General Secretary', bn: 'সাধারণ সম্পাদক' } }] },
      { label: { en: 'Joint Secretary & Treasurer', bn: 'যুগ্ম সম্পাদক ও কোষাধ্যক্ষ' }, members: [{ name: 'Mehnaz Begum', position: { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' } }, { name: 'Kamrul Islam', position: { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' } }] },
      { label: { en: 'Executive Members', bn: 'নির্বাহী সদস্য' }, members: [{ name: 'Adnan Sami', position: { en: 'Organizing Secretary', bn: 'সাংগঠনিক সম্পাদক' } }, { name: 'Lamia Hoque', position: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' } }, { name: 'Ridwan Kabir', position: { en: 'Executive Member', bn: 'নির্বাহী সদস্য' } }] },
    ],
  },
];