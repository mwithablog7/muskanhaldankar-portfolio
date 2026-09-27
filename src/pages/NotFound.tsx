import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="empty" style={{ marginTop: 60 }}>
      <strong>Page not found</strong>
      <p style={{ margin: '10px 0 18px' }}>
        The page you are looking for does not exist.
      </p>
      <Link className="btn btn--primary btn--sm" to="/">
        Back home
      </Link>
    </div>
  );
}
