import { site } from '../data/site';

export function Contact() {
  const { email, linkedin, other } = site.contact;
  const hasEmail = Boolean(email);
  const hasLinkedin = Boolean(linkedin);
  const hasOther = other.length > 0;

  return (
    <section className="section" aria-labelledby="contact-title">
      <div className="section__head">
        <p className="section__eyebrow">Get in touch</p>
        <h1 className="section__title" id="contact-title">
          Contact
        </h1>
        <p className="section__lead">
          The best way to reach me is below.
        </p>
      </div>

      {!hasEmail && !hasLinkedin && !hasOther ? (
        <div className="empty">
          <strong>No contact details added yet</strong>
          Fill in <code>site.contact</code> in <code>src/data/site.ts</code>{' '}
          — email, LinkedIn, or any other professional link.
        </div>
      ) : (
        <div className="contact-actions">
          {hasEmail && (
            <div className="contact-row">
              <div>
                <span className="contact-row__label">Email</span>
                <span className="contact-row__value">{email}</span>
              </div>
              <a className="btn btn--primary btn--sm" href={`mailto:${email}`}>
                Send email
              </a>
            </div>
          )}

          {hasLinkedin && (
            <div className="contact-row">
              <div>
                <span className="contact-row__label">LinkedIn</span>
                <span className="contact-row__value">{linkedin}</span>
              </div>
              <a
                className="btn btn--ghost btn--sm"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </div>
          )}

          {other.map((link) => (
            <div className="contact-row" key={link.url}>
              <div>
                <span className="contact-row__label">{link.label}</span>
                <span className="contact-row__value">{link.url}</span>
              </div>
              <a
                className="btn btn--ghost btn--sm"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
