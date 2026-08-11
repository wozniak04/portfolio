import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-header">
        <div className="project-badge-row">
          <span className="category-badge">{project.category}</span>
          {project.awardBadge && <span className="award-badge-tag">{project.awardBadge}</span>}
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.shortDescription}</p>

        <div className="tech-stack-row">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <GithubIcon size={18} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        <Link to={`/projects/${project.id}`} className="case-study-btn">
          <span>Case Study</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
