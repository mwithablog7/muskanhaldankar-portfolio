import { useState } from 'react';
import { site } from '../data/site';

/**
 * Interactive capability explorer: select a group to reveal its skills.
 * Groups and items come from site.skills — fully editable.
 */
export function SkillsExplorer() {
  const groups = site.skills;
  const [active, setActive] = useState(0);

  if (groups.length === 0) return null;

  const current = groups[Math.min(active, groups.length - 1)];

  return (
    <div className="skills-x">
      <div className="skills-x__tabs" role="tablist" aria-label="Skill groups">
        {groups.map((g, i) => (
          <button
            key={g.category}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`skills-x__tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {g.category}
          </button>
        ))}
      </div>

      <div className="skills-x__panel" role="tabpanel" key={current.category}>
        <ul>
          {current.items.map((item, i) => (
            <li key={item} style={{ animationDelay: `${i * 45}ms` }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
