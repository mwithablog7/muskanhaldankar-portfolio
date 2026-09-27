import { site } from '../data/site';

export function About() {
  return (
    <>
      <section className="section" aria-labelledby="about-title">
        <div className="section__head">
          <p className="section__eyebrow">About</p>
          <h1 className="section__title" id="about-title">
            {site.name}
          </h1>
          <p className="section__lead">{site.positioning}</p>
        </div>

        <div className="prose">
          {site.about.length > 0 ? (
            site.about.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <div className="empty">
              <strong>No bio added yet</strong>
              Add paragraphs to <code>site.about</code> in{' '}
              <code>src/data/site.ts</code>
            </div>
          )}
        </div>
      </section>

      {site.interests.length > 0 && (
        <section className="section" aria-labelledby="interests">
          <div className="section__head">
            <p className="section__eyebrow">Beyond work</p>
            <h2 className="section__title" id="interests">
              Interests
            </h2>
          </div>
          <div className="card__tags">
            {site.interests.map((interest) => (
              <span className="tag" key={interest}>
                {interest}
              </span>
            ))}
          </div>
        </section>
      )}

      {site.skills.length > 0 && (
        <section className="section" aria-labelledby="about-skills">
          <div className="section__head">
            <p className="section__eyebrow">Capabilities</p>
            <h2 className="section__title" id="about-skills">
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

      {site.education.length > 0 && (
        <section className="section" aria-labelledby="education">
          <div className="section__head">
            <p className="section__eyebrow">Background</p>
            <h2 className="section__title" id="education">
              Education
            </h2>
          </div>
          <div className="skills-grid">
            {site.education.map((entry, i) => (
              <div className="skill-group" key={i}>
                <h3>{entry.qualification}</h3>
                <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
                  {entry.institution}
                </p>
                <p
                  style={{
                    margin: '4px 0 0',
                    color: 'var(--ink-faint)',
                    fontSize: 14,
                  }}
                >
                  {entry.dates}
                </p>
                {entry.detail && (
                  <p style={{ margin: '8px 0 0', color: 'var(--ink-soft)' }}>
                    {entry.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {site.cvUrl && (
        <section className="section" aria-labelledby="cv">
          <div className="section__head">
            <p className="section__eyebrow">Documents</p>
            <h2 className="section__title" id="cv">
              CV
            </h2>
          </div>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
            <a className="btn btn--ghost" href={site.cvUrl} download>
              Download CV
            </a>
          </div>
        </section>
      )}
    </>
  );
}
