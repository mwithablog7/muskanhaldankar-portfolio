import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { PROJECTS } from '../data/projects';
import { Hero } from '../components/Hero';
import { Timeline } from '../components/Timeline';
import { SkillsExplorer } from '../components/SkillsExplorer';

export function Home() {
  const feature = PROJECTS.find(
    (p) => p.slug === 'fia-eco-rally-cup-communications' && !p.hidden
  );
  const independent = PROJECTS.find((p) => p.slug === 'mwithablog' && !p.hidden);

  return (
    <>
      <Hero />

      {/* ---------- Selected Experience ---------- */}
      <section className="section" aria-labelledby="selected-experience">
        <div className="section__head" data-reveal>
          <p className="section__eyebrow">Career</p>
          <h2 className="section__title" id="selected-experience">
            Selected Experience
          </h2>
          <p className="section__lead">
            Hands-on marketing work across events, premium brands, digital
            campaigns and content operations.
          </p>
        </div>
        <Timeline />
        <p style={{ marginTop: 28 }}>
          <Link className="btn btn--ghost btn--sm" to="/work">
            View all work →
          </Link>
        </p>
      </section>

      {/* ---------- Marketing Capabilities ---------- */}
      <section className="section" aria-labelledby="capabilities">
        <div className="section__head" data-reveal>
          <p className="section__eyebrow">Capabilities</p>
          <h2 className="section__title" id="capabilities">
            Marketing Capabilities
          </h2>
          <p className="section__lead">
            The working toolkit — planning and execution, reporting and
            analytics, research, content and AI-assisted digital work.
          </p>
        </div>
        <SkillsExplorer />
      </section>

      {/* ---------- Selected Work / Case Studies ---------- */}
      <section className="section" aria-labelledby="selected-work">
        <div className="section__head" data-reveal>
          <p className="section__eyebrow">Case study</p>
          <h2 className="section__title" id="selected-work">
            Selected Work
          </h2>
        </div>

        {feature ? (
          <article className="feature" data-reveal>
            <p className="feature__meta">
              <span>{feature.category}</span>
              {feature.organization && <span>{feature.organization}</span>}
              {feature.date && <span>{feature.date}</span>}
            </p>
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__desc">{feature.shortDescription}</p>
            {feature.tags && feature.tags.length > 0 && (
              <div className="card__tags">
                {feature.tags.map((t) => (
                  <span className="tag tag--on-dark" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="feature__actions">
              <Link className="btn btn--primary" to={`/work/${feature.slug}`}>
                View case study
              </Link>
            </div>
          </article>
        ) : null}

        <p style={{ marginTop: 28 }}>
          <Link className="btn btn--ghost btn--sm" to="/work">
            All projects →
          </Link>
        </p>
      </section>

      {/* ---------- Independent Digital Work ---------- */}
      <section className="section" aria-labelledby="independent-work">
        <div className="section__head" data-reveal>
          <p className="section__eyebrow">Independent</p>
          <h2 className="section__title" id="independent-work">
            Independent Digital Work
          </h2>
          <p className="section__lead">
            A professional marketing laboratory for testing content concepts,
            audience response and digital experiences.
          </p>
        </div>

        {independent ? (
          <article className="feature feature--light" data-reveal>
            <p className="feature__meta">
              <span>{independent.category}</span>
              {independent.organization && <span>{independent.organization}</span>}
              {independent.date && <span>{independent.date}</span>}
            </p>
            <h3 className="feature__title">{independent.title}</h3>
            <p className="feature__desc">{independent.shortDescription}</p>
            <div className="feature__actions">
              <Link className="btn btn--primary" to={`/work/${independent.slug}`}>
                Open project
              </Link>
            </div>
          </article>
        ) : null}
      </section>

      {/* ---------- About ---------- */}
      <section className="section" aria-labelledby="about-teaser">
        <div className="section__head" data-reveal>
          <p className="section__eyebrow">About</p>
          <h2 className="section__title" id="about-teaser">
            Creative thinking, analytical habits
          </h2>
          <p className="section__lead">{site.about[0]}</p>
        </div>
        <Link className="btn btn--ghost btn--sm" to="/about">
          About me →
        </Link>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="section" aria-labelledby="contact-cta">
        <div className="cta-band" data-reveal>
          <div className="cta-band__text">
            <p className="section__eyebrow">Contact</p>
            <h2 className="cta-band__title">Let’s connect</h2>
            <p>
              Open to junior marketing roles, collaborations and project work.
            </p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--primary" href={`mailto:${site.contact.email}`}>
              Email me
            </a>
            <Link className="btn btn--ghost btn--on-dark" to="/contact">
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
