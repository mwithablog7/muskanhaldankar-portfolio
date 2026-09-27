import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, type Project } from '../data/projects';

/** Career-history entries, most recent first. */
const TIMELINE_SLUGS = [
  'fia-eco-rally-cup-communications',
  'la-marzocco-internship',
  'cadence-academy-internship',
  'ifortis-virtual-events',
  'ai-assisted-content-management',
];

/**
 * Professional career-history interface: each entry expands to a concise
 * description + responsibilities, with a link through to the full page.
 */
export function Timeline() {
  const [open, setOpen] = useState<string | null>(null);

  const items = TIMELINE_SLUGS.map((slug) =>
    PROJECTS.find((p) => p.slug === slug)
  ).filter((p): p is Project => Boolean(p && !p.hidden));

  if (items.length === 0) return null;

  return (
    <div className="timeline">
      {items.map((p) => {
        const isOpen = open === p.slug;
        return (
          <div className={`timeline__item${isOpen ? ' is-open' : ''}`} key={p.slug}>
            <button
              type="button"
              className="timeline__head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : p.slug)}
            >
              <span className="timeline__year">{p.timelineYear ?? p.date}</span>
              <span className="timeline__label">{p.timelineLabel ?? p.title}</span>
              <span className="timeline__chevron" aria-hidden="true">
                +
              </span>
            </button>

            {isOpen && (
              <div className="timeline__body">
                <p className="timeline__desc">{p.shortDescription}</p>
                {p.responsibilities && p.responsibilities.length > 0 && (
                  <ul className="timeline__list">
                    {p.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}
                <Link className="timeline__link" to={`/work/${p.slug}`}>
                  Open full page →
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
