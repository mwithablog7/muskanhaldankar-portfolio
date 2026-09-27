import { Link, useNavigate } from 'react-router-dom';
import type { Project } from '../data/projects';
import { SmartImage } from './SmartImage';

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const cover = project.images?.[0];
  const navigate = useNavigate();

  const go = () => navigate(`/work/${project.slug}`);

  return (
    <article
      className="card"
      style={{ '--i': index } as React.CSSProperties}
      role="link"
      tabIndex={0}
      aria-label={`${project.title} — open page`}
      onClick={(e) => {
        // Let real links inside the card behave normally.
        if ((e.target as HTMLElement).closest('a')) return;
        go();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          go();
        }
      }}
    >
      {cover !== undefined && (
        <div className="card__media">
          <SmartImage src={cover} alt={project.title} />
        </div>
      )}
      <div className="card__body">
        {project.placeholder && (
          <span className="badge-placeholder">Placeholder — replace</span>
        )}
        <div className="card__meta">
          <span>{project.category}</span>
          {(project.organization || project.date) && (
            <span>
              {[project.organization, project.date].filter(Boolean).join(' · ')}
            </span>
          )}
        </div>
        <h3 className="card__title">
          <Link to={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="card__desc">{project.shortDescription}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="card__tags">
            {project.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}
        <span className="card__cta" aria-hidden="true">
          View details
          <span className="card__arrow">→</span>
        </span>
      </div>
    </article>
  );
}
