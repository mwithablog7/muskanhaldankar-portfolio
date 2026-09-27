import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site } from '../data/site';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation; reset scroll + page title.
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    document.title = site.seo.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', site.seo.description);
  }, [location.pathname]);

  // Gentle text reveals: fade in sections as they enter the viewport.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (els.length === 0) return;

    const showAll = () => els.forEach((el) => el.classList.add('is-in'));
    if (reduce || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // Scroll fallback: self-heals if the IntersectionObserver misfires
    // (also keeps reveals working in environments without a live compositor).
    const revealNow = (el: HTMLElement) => el.classList.add('is-in');
    const onScroll = () => {
      els.forEach((el) => {
        if (
          !el.classList.contains('is-in') &&
          el.getBoundingClientRect().top < window.innerHeight * 0.92
        ) {
          revealNow(el);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.pathname]);

  return (
    <div className="shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="site-header__brand">
            {site.name}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav
            id="site-nav"
            className={`site-nav${open ? ' is-open' : ''}`}
            aria-label="Main"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={
                  location.pathname === item.to ||
                  (item.to !== '/' && location.pathname.startsWith(item.to))
                    ? 'active'
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <div className="site-footer__links">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`}>Email</a>
            )}
            {site.contact.linkedin && (
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
