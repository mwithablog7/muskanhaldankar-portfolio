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
    'Final-year student at the European School of Economics in Italy, building a career where creative marketing meets analytical thinking. I like figuring out why people respond to content, what makes campaigns work, and how data can improve creative decisions.',

  /* ------------------------------------------------------------------ *
   *  ABOUT                                                             *
   * ------------------------------------------------------------------ */

  /**
   * Short bio — array of paragraphs. Add as many as you like.
   * Leave the array empty ([]) to hide the section.
   */
  about: [
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
      qualification: 'Final-year studies',
      institution: 'European School of Economics — Italy',
      dates: 'Academic year 2026/2027',
      detail:
        'Relevant modules: UG6005 Buyer Behaviour · FPPW Final Project Preparation Workshop · International Project Management',
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
      category: 'Content',
      items: [
        'Content strategy',
        'Content creation',
        'Social media',
        'Creative concepts',
        'Content performance',
      ],
    },
    {
      category: 'Analytics',
      items: [
        'Marketing analytics',
        'Performance analysis',
        'Identifying patterns',
        'Data interpretation',
        'Turning observations into recommendations',
      ],
    },
    {
      category: 'Consumer behaviour',
      items: [
        'Consumer psychology',
        'Buyer behaviour',
        'Audience motivation',
        'Connecting insight to marketing decisions',
      ],
    },
    {
      category: 'Growth',
      items: ['Experimentation', 'CRO', 'SEO / content', 'Digital experience testing'],
    },
    {
      category: 'Creative technology',
      items: ['AI-assisted prototyping', 'Digital experimentation', 'Building prototypes'],
    },
  ],

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
    email: '', // e.g. 'you@example.com'
    linkedin: '', // e.g. 'https://www.linkedin.com/in/yourprofile'
    other: [] as { label: string; url: string }[],
  },

  /* ------------------------------------------------------------------ *
   *  SEO — used for <title> and Open Graph tags                         *
   * ------------------------------------------------------------------ */
  seo: {
    title: 'Muskan Haldankar — Marketing Portfolio',
    description:
      'Portfolio of Muskan Haldankar — final-year European School of Economics student in Italy, working across digital marketing, content, analytics and growth.',
  },
};
