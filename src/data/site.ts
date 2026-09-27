/**
 * ============================================================================
 *  SITE CONTENT — edit everything in this file to personalise your portfolio
 * ============================================================================
 *
 *  EVERYTHING here is editable. Anything you leave EMPTY or DELETE will
 *  simply not be displayed — no fake content is ever generated.
 *
 *  After editing: run `npm run deploy` to publish (or `npm run dev` to
 *  preview locally). See README.md for the full editing guide.
 */

export const site = {
  /* ------------------------------------------------------------------ *
   *  HERO                                                              *
   * ------------------------------------------------------------------ */

  /** Your name. Shown in the hero, header, footer and page title. */
  name: 'Muskan Haldankar',

  /** Professional positioning line shown under your name. */
  positioning: 'Digital Marketing • Content • Analytics • Growth',

  /** Short introduction (1–3 sentences). Keep it honest and plain. */
  intro:
    'Junior marketing professional with hands-on experience across digital marketing, campaign execution, marketing reporting and market research in Italy and India — working across content, social media, events and AI-assisted content management.',

  /* ------------------------------------------------------------------ *
   *  ABOUT                                                             *
   * ------------------------------------------------------------------ */

  /**
   * Short bio — array of paragraphs. Add as many as you like.
   * Leave the array empty ([]) to hide the section.
   */
  about: [
    'Junior marketing professional with hands-on experience across digital marketing, campaign execution, marketing reporting, and market research in Italy and India, including experience with a premium global brand.',
    'Experienced in Excel-based tracking and reporting, competitor research, social media strategy, content planning and supporting marketing activities from research and planning through execution and performance reporting. Strong cross-cultural communication and collaboration skills developed across international academic and professional environments.',
    "I'm in my final year at the European School of Economics, based in Italy (academic year 2026/2027). My focus is digital marketing at the intersection of content, analytics and growth — I care about the why behind audience behaviour as much as the numbers behind performance.",
    "I'm looking for entry-level opportunities in digital marketing, content strategy, marketing analytics and growth — particularly in technology, education, automotive, motorsport, or any digitally driven team that takes creativity and data equally seriously.",
    'I learn by building — AI-assisted prototypes, small digital experiments, projects taken from a rough idea to something real. I am practical rather than corporate, and serious about turning curiosity into real expertise.',
  ],

  /** Interests — free-form list. Empty array = section hidden. */
  interests: [
    'Consumer psychology & buyer behaviour',
    'Content performance & audience response',
    'Experimentation and growth thinking',
    'Digital experiences & AI-assisted prototyping',
  ],

  /** Education — add or remove entries freely. Empty array = hidden. */
  education: [
    {
      qualification: 'BSc Business Administration — Marketing Specialisation',
      institution: 'European School of Economics — Florence, Italy',
      dates: 'Sep 2024 – Present',
      detail:
        'Relevant coursework: Market Research · Introduction to Marketing · Cross-Cultural E-Commerce · Corporate Finance · Operations Management · Managing People · Buyer Behaviour · Final Project Preparation Workshop · International Project Management',
    },
    {
      qualification: 'A Levels — Biology, Chemistry, Physics, English',
      institution: 'RIMS International School and Junior College — Mumbai, India',
      dates: '2021',
    },
  ],

  /* ------------------------------------------------------------------ *
   *  SKILLS                                                            *
   * ------------------------------------------------------------------ *
   *  Categories are fully editable — rename, add, remove.
   *  NO percentages, levels or progress bars are ever shown.
   */
  skills: [
    {
      category: 'Marketing & Research',
      items: [
        'Campaign planning & execution',
        'Market research',
        'Competitor research',
        'Audience research',
        'Digital marketing',
        'Social media strategy',
        'Brand communication',
        'Consumer behaviour',
      ],
    },
    {
      category: 'Reporting & Analytics',
      items: [
        'Marketing reporting',
        'Excel-based tracking & reporting',
        'Google Analytics',
        'Performance analysis',
        'Data-informed content optimisation',
      ],
    },
    {
      category: 'Creative & Content',
      items: [
        'Content planning',
        'Social media content',
        'Copywriting',
        'Brand messaging',
        'Canva',
        'Adobe Creative Suite',
        'Photoshop',
        'Premiere Pro',
        'CapCut',
      ],
    },
    {
      category: 'AI-Assisted Tools',
      items: [
        'ChatGPT',
        'Claude',
        'Meta AI',
        'AI-assisted content creation',
        'AI-assisted research',
      ],
    },
    {
      category: 'Professional',
      items: [
        'Cross-cultural communication',
        'Team collaboration',
        'Adaptability',
        'Attention to detail',
        'Time management',
        'Problem solving',
      ],
    },
  ],

  /** Languages — shown as chips on the About page. Empty array = hidden. */
  languages: ['English — C2', 'Hindi — Native', 'Marathi — Native', 'Italian — A2'],

  /** Certifications — shown on the About page. Empty array = hidden. */
  certifications: ['Digital Marketing Certification — 2022'],

  /* ------------------------------------------------------------------ *
   *  CV / RESUME                                                       *
   * ------------------------------------------------------------------ *
   *  1. Drop your PDF into:  public/cv/resume.pdf
   *  2. Leave cvUrl as '' to hide the CV buttons entirely.
   */
  cvUrl: '', // e.g. 'cv/resume.pdf'  (file inside public/cv/)

  /* ------------------------------------------------------------------ *
   *  CONTACT                                                           *
   * ------------------------------------------------------------------ *
   *  Leave a field EMPTY ('') and its button/link is hidden.
   *  Never add links you do not actually own.
   */
  contact: {
    email: 'muskanhaldankar07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/muskanhaldankar',
    other: [
      { label: 'Phone', url: 'tel:+393490671252', display: '+39 349 067 1252' },
      { label: 'Instagram — mwithablog', url: 'https://www.instagram.com/mwithablog/' },
    ] as { label: string; url: string; display?: string }[],
  },

  /* ------------------------------------------------------------------ *
   *  SEO — used for <title> and Open Graph tags                         *
   * ------------------------------------------------------------------ */
  seo: {
    title: 'Muskan Haldankar — Marketing Portfolio',
    description:
      'Portfolio of Muskan Haldankar — junior marketing professional with experience across digital marketing, campaign execution, marketing reporting and market research in Italy and India.',
  },
};
