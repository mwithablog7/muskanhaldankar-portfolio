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
          </div>
        </div>
      </footer>
    </div>
  );
}
