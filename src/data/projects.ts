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
  'Marketing',
  'Analytics',
  'Content',
  'Consumer Behaviour',
  'Creative Technology',
  'Academic',
  'Professional',
];

export const PROJECTS: Project[] = [
  /* ---------------------------------------------------------------- *
   *  FIA ECO RALLY CUP — real professional experience                *
   *  (No confidential material, figures or job titles are included.)  *
   * ---------------------------------------------------------------- */
  {
    slug: 'fia-eco-rally-cup-communications',
    title: 'FIA Eco Rally Cup — Communications Review & Analysis',
    category: 'Professional',
    shortDescription:
      'Remote communications work connected with the FIA Eco Rally Cup / ECOdolomitesGT — reviewing material, analysing sponsorship communication, and structuring long event guidelines into information people can actually use.',
    detailedDescription:
      'Communications-related work carried out remotely for the FIA Eco Rally Cup / ECOdolomitesGT. The work covered reviewing communications material, analysing sponsorship communication, researching and synthesising event and organisational guidelines, creating structured summaries, and preparing presentation material — turning lengthy documents into clear, usable information.',
    context:
      'The event runs with its own organisational guidelines and sponsorship communication to manage. I supported the communications side remotely, working from the source material provided.',
    objective:
      'To make long, dense guidelines and communication material easier to understand and use, so the information could support the event’s communications work.',
    role:
      'Remote communications-related work: reviewing communications material, analysing sponsorship communication, research and synthesis, structured summaries, and preparing presentation material.',
    process:
      'Worked through the material in stages — review the documents and event guidelines, research and synthesise the relevant points, structure what mattered into clear summaries, then shape that into presentation-ready material.',
    outcome:
      'Structured summaries and presentation material built from lengthy event and organisational guidelines — hard-to-use documents turned into clear, usable information.',
    tags: ['Communications', 'Research'],
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
