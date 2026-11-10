export const navItems = [
  { key: 'nav.home', to: '/' },
  {
    key: 'nav.about',
    to: '/about',
    children: [
      { key: 'nav.branches', to: '/about/branches' },
      { key: 'nav.leadership', to: '/about/leadership' },
      { key: 'nav.projects', to: '/about/projects' },
      { key: 'nav.school', to: '/about/primary-school' },
      { key: 'nav.skills', to: '/about/skill-development' },
      { key: 'nav.constitution', to: '/about/constitution' },
    ],
  },
  { key: 'nav.gallery', to: '/gallery' },
  {
    key: 'nav.connect',
    to: '/connect',
    children: [
      { key: 'nav.volunteer', to: '/connect/volunteer' },
      { key: 'nav.regular', to: '/connect/regular-member' },
      { key: 'nav.lifetime', to: '/connect/lifetime-member' },
      { key: 'nav.career', to: '/connect/career' },
    ],
  },
  { key: 'nav.blogs', to: '/blogs' },
  { key: 'nav.contact', to: '/contact' },
];

export const footerGroups = [
  { title: 'footer.quickLinks', links: [
    { key: 'nav.home', to: '/' }, { key: 'nav.about', to: '/about' }, { key: 'nav.projects', to: '/about/projects' },
    { key: 'nav.gallery', to: '/gallery' }, { key: 'nav.blogs', to: '/blogs' }, { key: 'nav.contact', to: '/contact' },
  ] },
  { title: 'footer.getInvolved', links: [
    { key: 'nav.volunteer', to: '/connect/volunteer' }, { key: 'nav.regular', to: '/connect/regular-member' },
    { key: 'nav.lifetime', to: '/connect/lifetime-member' }, { key: 'nav.career', to: '/connect/career' }, { key: 'nav.donate', to: '/donate' },
  ] },
  { title: 'footer.about', links: [
    { key: 'nav.branches', to: '/about/branches' }, { key: 'nav.leadership', to: '/about/leadership' },
    { key: 'nav.school', to: '/about/primary-school' }, { key: 'nav.skills', to: '/about/skill-development' },
    { key: 'nav.constitution', to: '/about/constitution' },
  ] },
];