/**
 * ============================================================================
 *  PROJECTS — add, edit or remove your projects here
 * ============================================================================
 *
 *  HOW TO ADD A PROJECT
 *  --------------------
 *  1. Copy the example block at the bottom of this file.
 *  2. Paste it as a new entry in the PROJECTS array.
 *  3. Fill in the fields, set `hidden: false`, and delete any field you
 *     don't need.
 *
 *  RULES THIS SITE ENFORCES FOR YOU:
 *  - Empty or missing fields are simply NOT displayed.
 *  - `results` is only shown when YOU provide it — no numbers are invented.
 *  - If you have no measurable results, use `outcome` instead.
 *  - If `placeholder: true`, the card is visibly marked so unfinished
 *    entries can never be mistaken for finished work.
 *  - If `hidden: true`, the project appears nowhere on the site.
 *
 *  IMAGES
 *  ------
 *  Put your images in:  public/images/projects/
 *  Then reference them: images: ['images/projects/my-project.png']
 *  If an image is missing, a clean "Add project image" box is shown.
 */

export type Project = {
  /** URL-friendly id, used in the address bar. e.g. 'my-campaign-project' */
  slug: string;
  title: string;
  /** One of the categories listed in CATEGORIES below. */
  category: string;
  /** Employer / organisation / platform context, e.g. 'La Marzocco — Florence, Italy'. */
  organization?: string;
  /** 1–2 sentence summary shown on the project card. */
  shortDescription: string;
  /** Full description for the case-study page ("Overview"). Multiple paragraphs allowed. */
  detailedDescription?: string;
  /** Why the project existed — background and context. */
  context?: string;
  /** What the project was trying to accomplish. */
  objective?: string;
  /** What YOU personally did. */
  role?: string;
  /** What you were responsible for — shown as a bullet list. */
  responsibilities?: string[];
  /** How you approached the work. */
  process?: string;
  /** Tools you actually used. No invented tool names. */
  tools?: string[];
  /** Free-form date label, e.g. 'March 2026' or '2024–2025'. */
  date?: string;
  /** Image paths relative to public/. First image = card cover. */
  images?: string[];
  /** Captions shown under each image (same order as images). */
  imageCaptions?: string[];
  /** External links, e.g. a live campaign or published article. */
  links?: { label: string; url: string }[];
  /** What you discovered. */
  insights?: string;
  /** What you proposed based on the evidence. */
  recommendations?: string;
  /** REAL measurable results ONLY. Leave empty/omit if you have none. */
  results?: string[];
  /** Use this INSTEAD of results when you have no metrics. */
  outcome?: string;
  /** What you learned / would improve. */
  lessons?: string;
  /** Tags shown on the card. */
  tags?: string[];
  /** Set to true while a project is unfinished — card gets a warning badge. */
  placeholder?: boolean;
  /** Set to true to hide a project everywhere without deleting it. */
  hidden?: boolean;
};

/** Filter categories — edit freely. Empty categories are handled gracefully. */
export const CATEGORIES = [
  'Professional Experience',
  'Digital & Content',
  'Independent Marketing',
  'Marketing',
  'Academic',
];

export const PROJECTS: Project[] = [
  /* ---------------------------------------------------------------- *
   *  FIA ECO RALLY CUP — most detailed case study                    *
   *  (No confidential material, figures or sponsor documents.)        *
   * ---------------------------------------------------------------- */
  {
    slug: 'fia-eco-rally-cup-communications',
    title: 'FIA Eco Rally Cup — Communications Review & Analysis',
    category: 'Professional Experience',
    organization: 'Automobile Club Trento — ECOdolomitesGT 2026',
    date: 'Jul 2026 – Oct 2026',
    shortDescription:
      'Supported marketing communications and event-related activities for an FIA-sanctioned electric vehicle rally in Italy.',
    detailedDescription:
      'Communications-related work carried out remotely for the FIA Eco Rally Cup / ECOdolomitesGT. The work covered reviewing communications material, analysing sponsorship communication, researching and synthesising event and organisational guidelines, creating structured summaries, and preparing presentation material — turning lengthy documents into clear, usable information.',
    context:
      'The event runs with its own organisational guidelines and sponsorship communication to manage. I supported the communications side remotely, working from the source material provided.',
    objective:
      'To make long, dense guidelines and communication material easier to understand and use, so the information could support the event’s communications work.',
    role: 'Marketing & Events Support',
    responsibilities: [
      'Supported marketing communications and social media updates for the event.',
      'Conducted sponsor and partnership research to support outreach activities.',
      'Assisted with communications planning and event visibility initiatives.',
      'Researched and synthesised information into practical marketing and communications materials.',
      'Supported the organising team with content and event-related marketing activities.',
    ],
    process:
      'Worked through the material in stages — review the documents and event guidelines, research and synthesise the relevant points, structure what mattered into clear summaries, then shape that into presentation-ready material.',
    outcome:
      'Structured summaries and presentation material built from lengthy event and organisational guidelines — hard-to-use documents turned into clear, usable information.',
    tags: ['Communications', 'Research', 'Events'],
  },

  /* ---------------------------------------------------------------- *
   *  mwithablog — independent marketing project                      *
   * ---------------------------------------------------------------- */
  {
    slug: 'mwithablog',
    title: 'mwithablog',
    category: 'Independent Marketing',
    organization: 'Instagram & LinkedIn',
    date: 'Mar 2026 – Present',
    shortDescription:
      'Independent marketing project focused on digital marketing, consumer behaviour, content strategy and digital experiences.',
    responsibilities: [
      'Develop and test marketing content concepts.',
      'Apply audience targeting and social media strategy.',
      'Analyse content performance and audience response.',
      'Refine content themes, formats and messaging based on performance observations.',
      'Explore consumer behaviour, brand communication and digital marketing through practical content.',
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/mwithablog/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muskanhaldankar' },
    ],
    tags: ['Content Strategy', 'Consumer Behaviour'],
  },

  /* ---------------------------------------------------------------- *
   *  AI-ASSISTED CONTENT & CHANNEL MANAGEMENT                        *
   *  Confidential project — the channel is NEVER named or identified. *
   * ---------------------------------------------------------------- */
  {
    slug: 'ai-assisted-content-management',
    title: 'AI-Assisted Content & Channel Management',
    category: 'Digital & Content',
    organization: 'Confidential Digital Content Project — TikTok & YouTube',
    date: 'Ongoing',
    shortDescription:
      'Managed content operations for an AI-assisted cooking and lifestyle digital content channel across TikTok and YouTube.',
    responsibilities: [
      'Planned and developed short-form content concepts based on audience interests and platform behaviour.',
      'Managed AI-assisted visual content production and creative direction.',
      'Adapted content for TikTok and YouTube formats.',
      'Created captions, descriptions and supporting platform content.',
      'Monitored content performance, including views, retention and engagement patterns.',
      'Used performance observations to refine content themes, hooks, formats and creative approaches.',
      'Maintained consistency in the channel’s visual identity and content style.',
      'Experimented with AI-assisted content production as part of the digital content workflow.',
    ],
    tags: ['Content Strategy', 'AI-Assisted Content', 'Performance'],
  },

  /* ---------------------------------------------------------------- *
   *  LA MARZOCCO — marketing & hospitality internship                *
   * ---------------------------------------------------------------- */
  {
    slug: 'la-marzocco-internship',
    title: 'Marketing & Hospitality Intern',
    category: 'Professional Experience',
    organization: 'La Marzocco — Florence, Italy',
    date: 'May 2025 – Aug 2025',
    shortDescription:
      'Supported marketing, reporting, content production and hospitality activities for a premium global brand.',
    responsibilities: [
      'Built Excel-based tracking systems that improved reporting accuracy and cross-team visibility.',
      'Supported marketing content production and campaign execution using Canva and Adobe tools.',
      'Helped align marketing communications and brand messaging across a global operating structure.',
      'Worked in an international premium-brand environment across marketing and hospitality activities.',
    ],
    tools: ['Excel', 'Canva', 'Adobe tools'],
    tags: ['Reporting', 'Content', 'Hospitality'],
  },

  /* ---------------------------------------------------------------- *
   *  CADENCE ACADEMY — digital marketing internship                  *
   * ---------------------------------------------------------------- */
  {
    slug: 'cadence-academy-internship',
    title: 'Digital Marketing Intern',
    category: 'Professional Experience',
    organization: 'Cadence Academy of Design — Mumbai, India',
    date: 'Dec 2021 – Feb 2022',
    shortDescription:
      'Supported digital marketing, campaign reporting, competitor research and social media execution.',
    responsibilities: [
      'Compiled campaign performance reports that translated campaign data into insights for stakeholders.',
      'Researched keywords and benchmarked competitors to inform content and channel strategy.',
      'Planned and executed social media campaigns across Instagram and Facebook.',
      'Contributed to a 20% increase in audience engagement through social media activity.',
      'Worked with design and content teams to maintain consistent messaging across channels.',
    ],
    tools: ['Instagram', 'Facebook'],
    tags: ['Digital Marketing', 'Reporting', 'Social Media'],
  },

  /* ---------------------------------------------------------------- *
   *  IFORTIS CORPORATE IT — virtual event organising internship      *
   * ---------------------------------------------------------------- */
  {
    slug: 'ifortis-virtual-events',
    title: 'Virtual Event Organising Intern',
    category: 'Professional Experience',
    organization: 'Ifortis Corporate IT — Mumbai, India',
    date: 'Jun 2021 – Jul 2021',
    shortDescription:
      'Supported international virtual event coordination, digital communications and attendee engagement.',
    responsibilities: [
      'Managed scheduling, platform setup and attendee communications for international virtual events.',
      'Supported digital content and communications to keep international attendees engaged.',
      'Assisted with online event logistics and coordination across international participants and teams.',
    ],
    tags: ['Events', 'Digital Communications'],
  },

  /* ---------------------------------------------------------------- *
   *  EXAMPLE PROJECT — hidden, so nobody sees it on the live site.    *
   *  Copy it, fill it in, and set `hidden: false` to publish.         *
   * ---------------------------------------------------------------- */
  {
    slug: 'example-project',
    title: '[ADD PROJECT TITLE]',
    category: 'Marketing',
    shortDescription:
      '[ADD A ONE–TWO SENTENCE SUMMARY OF THIS PROJECT. WHAT WAS IT ABOUT?]',
    detailedDescription:
      '[ADD A LONGER DESCRIPTION — THIS BECOMES THE "OVERVIEW" SECTION.]',
    context: '[WHY DID THIS PROJECT EXIST?]',
    objective: '[WHAT WERE YOU TRYING TO ACCOMPLISH?]',
    role: '[WHAT YOU PERSONALLY DID]',
    responsibilities: ['[RESPONSIBILITY 1]', '[RESPONSIBILITY 2]'],
    process: '[HOW YOU APPROACHED THE WORK, STEP BY STEP]',
    insights: '[WHAT YOU DISCOVERED — OPTIONAL]',
    recommendations: '[WHAT YOU PROPOSED BASED ON THE EVIDENCE — OPTIONAL]',
    tools: [], // e.g. ['Google Analytics', 'Meta Business Suite']
    date: '', // e.g. 'March 2026'
    images: [], // e.g. ['images/projects/my-screenshot.png']
    imageCaptions: [],
    links: [], // e.g. { label: 'Live campaign', url: 'https://example.com' }
    results: [], // REAL numbers only, e.g. ['Open rate increased from X% to Y%']
    outcome: '', // Use instead of results when you have no metrics
    lessons: '[WHAT YOU LEARNED OR WOULD IMPROVE NEXT TIME]',
    tags: [], // e.g. ['Content', 'Social']
    placeholder: true, // remove this line when the project is complete
    hidden: true, // set to false (and fill everything in) to publish
  },
];
