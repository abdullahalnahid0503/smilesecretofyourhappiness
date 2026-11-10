const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// Central image registry. Replace any URL here with real organizational photographs — every page reads from this file.
export const images = {
  logo: 'https://media.db.com/images/public/user_68a877978360d36e853377f1/855b2c83d_image.png',
  hero: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/1b9401488_generated_7233932c.jpg',
  whoWeAre: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/bd8337ab8_generated_a781e69f.jpg',
  schoolClassroom: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/357000ed4_generated_e56a1c54.jpg',
  childPortrait: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/81e1432c5_generated_ebe0b39a.jpg',
  teacherStudent: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/c60f2ce0d_generated_f291867c.jpg',
  skillsWorkshop: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/b3b1d3571_generated_2d4ab6d1.jpg',
  floodRelief: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/a7bd11370_generated_f4183d0e.jpg',
  treePlanting: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/e991c76af_generated_df24ba30.jpg',
  bloodDonation: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/f3b6cdc46_generated_261fec9f.jpg',
  winterDrive: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/89c51b035_generated_f77c2a83.jpg',
  schoolSupplies: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/7596a6654_generated_f8e789c0.jpg',
  cleanupDrive: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/d369bd40e_generated_8e7c4bdd.jpg',
  leadershipWorkshop: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/3f10b1f2d_generated_3b8852c3.jpg',
  volunteerStories: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/5d3f8119d_generated_a9c4b82a.jpg',
  cityBranch: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/7b7da01b5_generated_1a77b136.jpg',
  ruralBranch: 'https://media.db.com/images/public/6aa3ba96574fbf7b98f17f97/173db8050_generated_aec0bd33.jpg',
};