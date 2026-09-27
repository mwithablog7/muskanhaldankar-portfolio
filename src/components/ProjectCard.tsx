import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { SmartImage } from './SmartImage';

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0];

  return (
    <article className="card">
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
          {project.date && <span>{project.date}</span>}
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
      </div>
    </article>
  );
}
