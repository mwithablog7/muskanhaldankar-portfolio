import { useState } from 'react';

/**
 * Shows an image, or a clean "Add project image" placeholder when the
 * image is missing or fails to load. Never renders a broken image.
 */
export function SmartImage({
  src,
  alt,
  label = 'Add project image',
}: {
  src?: string;
  alt: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="img-ph" role="img" aria-label={`${label}: ${alt}`}>
        <span aria-hidden="true">◻</span>
        {label}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
