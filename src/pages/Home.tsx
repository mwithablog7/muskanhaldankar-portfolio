import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function Home() {
  const visible = PROJECTS.filter((p) => !p.hidden);
  const featured = visible.slice(0, 3);

  return (
    <>
      <section className="hero">
        <p className="hero__eyebrow">Portfolio</p>
        <h1>{site.name}</h1>
        <p className="hero__positioning">{site.positioning}</p>
        <p className="hero__intro">{site.intro}</p>
        <div className="hero__actions">
          <Link className="btn btn--primary" to="/work">
            View Work
          </Link>
          <Link className="btn btn--ghost" to="/about">
            About
          </Link>
          <Link className="btn btn--ghost" to="/contact">
            Contact
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="selected-work">
        <div className="section__head">
          <p className="section__eyebrow">Selected work</p>
          <h2 className="section__title" id="selected-work">
            Projects
          </h2>
        </div>

        {featured.length > 0 ? (
          <>
            <div className="grid">
              {featured.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
            {visible.length > 3 && (
              <p style={{ marginTop: 28 }}>
                <Link className="btn btn--ghost btn--sm" to="/work">
                  View all projects →
                </Link>
              </p>
            )}
          </>
        ) : (
          <div className="empty">
            <strong>No projects yet</strong>
            Add your first project in{' '}
            <code>src/data/projects.ts</code> — it will appear here
            automatically.
          </div>
        )}
      </section>

      {site.skills.length > 0 && (
        <section className="section" aria-labelledby="skills">
          <div className="section__head">
            <p className="section__eyebrow">Capabilities</p>
            <h2 className="section__title" id="skills">
              Skills
            </h2>
          </div>
          <div className="skills-grid">
            {site.skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
