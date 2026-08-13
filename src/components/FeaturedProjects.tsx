import { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { FolderGit2, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export function FeaturedProjects() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  const [showAll, setShowAll] = useState(false);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-container">
      <div className="section-title-wrapper">
        <span className="section-badge">
          <FolderGit2 size={14} /> {t.badge}
        </span>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="featured-projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="secondary-projects-wrapper">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="toggle-projects-btn"
        >
          <span>{showAll ? t.showLess : t.showMore}</span>
          {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {showAll && (
          <div className="secondary-grid">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
