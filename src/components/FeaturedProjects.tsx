import { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { FolderGit2, ChevronDown, ChevronUp } from 'lucide-react';

export function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-container">
      <div className="section-title-wrapper">
        <span className="section-badge">
          <FolderGit2 size={14} /> Portfolio & Osiągnięcia
        </span>
        <h2 className="section-title">Wyróżnione Projekty & Konkursy</h2>
        <p className="section-subtitle">
          Najważniejsze osiągnięcia inżynieryjne oraz aplikacje Full-Stack i projekty AI.
        </p>
      </div>

      {/* Primary Featured Projects */}
      <div className="featured-projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Secondary Projects Collapsible Grid */}
      <div className="secondary-projects-wrapper">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="toggle-projects-btn"
        >
          <span>
            {showAll ? 'Schowaj pozostałe projekty' : 'Zobacz wszystkie pozostałe projekty'}
          </span>
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
