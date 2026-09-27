import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { SmartImage } from '../components/SmartImage';
import { NotFound } from './NotFound';

export function CaseStudy() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project || project.hidden) return <NotFound />;

  // Hide the case study instead of showing a broken page when the
  // project only has a title and nothing else yet.
  const isEmpty =
    !project.shortDescription &&
    !project.detailedDescription &&
    !project.role &&
    !project.images?.length;

  if (isEmpty) {
    return (
      <div className="empty" style={{ marginTop: 40 }}>
        <strong>This project is not ready yet</strong>
        Fill in its content in <code>src/data/projects.ts</code>
      </div>
    );
  }

  const hasResults = Boolean(project.results && project.results.length > 0);
  const hasOutcome = Boolean(project.outcome);

  return (
    <article className="case">
      <Link className="case__back" to="/work">
        ← All projects
      </Link>

      <header className="case__header">
        {project.placeholder && (
          <span className="badge-placeholder">
            Placeholder content — replace with real project data
          </span>
        )}
        <p className="section__eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="hero__intro">{project.shortDescription}</p>

        <div className="case__meta">
          {project.organization && (
            <div className="case__meta-item">
              <span className="case__meta-label">Organisation</span>
              {project.organization}
            </div>
          )}
          {project.role && (
            <div className="case__meta-item">
              <span className="case__meta-label">My role</span>
              {project.role}
            </div>
          )}
          {project.date && (
            <div className="case__meta-item">
              <span className="case__meta-label">Date</span>
              {project.date}
            </div>
          )}
          {project.tools && project.tools.length > 0 && (
            <div className="case__meta-item">
              <span className="case__meta-label">Tools</span>
              {project.tools.join(', ')}
            </div>
          )}
        </div>
      </header>

      {project.detailedDescription && (
        <section className="case-section">
          <h2>Overview</h2>
          <p>{project.detailedDescription}</p>
        </section>
      )}

      {project.context && (
        <section className="case-section">
          <h2>Context</h2>
          <p>{project.context}</p>
        </section>
      )}

      {project.objective && (
        <section className="case-section">
          <h2>Objective</h2>
          <p>{project.objective}</p>
        </section>
      )}

      {project.responsibilities && project.responsibilities.length > 0 && (
        <section className="case-section">
          <h2>Responsibilities</h2>
          <ul>
            {project.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {project.process && (
        <section className="case-section">
          <h2>Process</h2>
          <p>{project.process}</p>
        </section>
      )}

      {project.images && project.images.length > 0 && (
        <section className="case-section">
          <h2>Work</h2>
          <div className="case-gallery">
            {project.images.map((img, i) => (
              <figure key={`${img}-${i}`}>
                <SmartImage
                  src={img}
                  alt={`${project.title} — image ${i + 1}`}
                />
                {project.imageCaptions?.[i] && (
                  <figcaption>{project.imageCaptions[i]}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.insights && (
        <section className="case-section">
          <h2>Insights</h2>
          <p>{project.insights}</p>
        </section>
      )}

      {project.recommendations && (
        <section className="case-section">
          <h2>Recommendations</h2>
          <p>{project.recommendations}</p>
        </section>
      )}

      {hasResults && (
        <section className="case-section">
          <h2>Results</h2>
          <ul className="results-list">
            {project.results!.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {!hasResults && hasOutcome && (
        <section className="case-section">
          <h2>Outcome / Learning</h2>
          <p className="outcome-box">{project.outcome}</p>
        </section>
      )}

      {project.lessons && (
        <section className="case-section">
          <h2>Reflection</h2>
          <p>{project.lessons}</p>
        </section>
      )}

      {project.links && project.links.length > 0 && (
        <section className="case-section">
          <h2>Links</h2>
          <ul>
            {project.links.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
