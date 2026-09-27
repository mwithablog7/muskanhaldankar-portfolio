import { useMemo, useState } from 'react';
import { CATEGORIES, PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function Work() {
  const projects = useMemo(
    () => PROJECTS.filter((p) => !p.hidden),
    []
  );
  const [filter, setFilter] = useState<string>('All');

  // Only show categories that actually have at least one project,
  // plus "All" — so empty categories never appear as dead ends.
  const usedCategories = CATEGORIES.filter((c) =>
    projects.some((p) => p.category === c)
  );

  const shown =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="section" aria-labelledby="work-title">
        <div className="section__head">
          <p className="section__eyebrow">Portfolio</p>
          <h1 className="section__title" id="work-title">
            Work
          </h1>
          <p className="section__lead">
            Projects across marketing, analytics, content, strategy and
            creative work.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="empty">
            <strong>No projects yet</strong>
            Add your first project in <code>src/data/projects.ts</code>
          </div>
        ) : (
          <>
            <div className="filters" role="group" aria-label="Filter projects">
              {['All', ...usedCategories].map((c) => (
                <button
                  key={c}
                  type="button"
                  className="filter-btn"
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            {shown.length > 0 ? (
              <div className="grid">
                {shown.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <strong>Nothing in “{filter}” yet</strong>
                Projects added to this category will appear here.
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
