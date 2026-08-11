import { SKILL_GROUPS } from '../data/projects';
import { Sparkles, Code2, Database, Cpu, Wrench } from 'lucide-react';

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend & UI':
        return <Code2 className="category-icon" size={20} />;
      case 'Backend & Databases':
        return <Database className="category-icon" size={20} />;
      case 'AI & Data Engineering':
        return <Cpu className="category-icon" size={20} />;
      default:
        return <Wrench className="category-icon" size={20} />;
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-title-wrapper">
        <span className="section-badge">
          <Sparkles size={14} /> Stack Technologiczny
        </span>
        <h2 className="section-title">Umiejętności & Narzędzia</h2>
        <p className="section-subtitle">
          Technologie, z których korzystam do tworzenia nowoczesnych i wydajnych systemów.
        </p>
      </div>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="skill-category-card">
            <div className="category-header">
              {getCategoryIcon(group.category)}
              <h3>{group.category}</h3>
            </div>
            <div className="skills-tags-list">
              {group.skills.map((skill) => (
                <span key={skill.name} className="skill-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
