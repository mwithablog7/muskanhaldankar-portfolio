import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

/**
 * Editorial hero with a restrained cursor parallax: typography and small
 * gold details shift a few pixels as the cursor moves. Disabled entirely
 * for reduced-motion users and on touch devices.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    if (reduce || !canHover) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--px', x.toFixed(3));
        el.style.setProperty('--py', y.toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      <span className="hero__deco hero__deco--rule" aria-hidden="true" />
      <span className="hero__deco hero__deco--dot" aria-hidden="true" />
      <span className="hero__deco hero__deco--square" aria-hidden="true" />

      <p className="hero__eyebrow hero-anim hero-anim--1">Portfolio</p>
      <h1 className="hero-anim hero-anim--2">{site.name}</h1>
      <p className="hero__role hero-anim hero-anim--3">Junior Marketing Professional</p>
      <p className="hero__positioning hero-anim hero-anim--4">{site.positioning}</p>
      <p className="hero__intro hero-anim hero-anim--5">{site.intro}</p>
      <div className="hero__actions hero-anim hero-anim--6">
        <Link className="btn btn--primary" to="/work">
          View my work
        </Link>
        <Link className="btn btn--ghost" to="/contact">
          Let’s connect
        </Link>
      </div>
    </section>
  );
}
