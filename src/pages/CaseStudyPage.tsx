import { useParams, Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_DATA.find((p) => p.id === id);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].caseStudy;

  if (!project) {
    return (
      <div className="case-study-container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={18} /> {t.backBtn}
        </Link>
        <div className="about-card">
          <h2>{t.notFoundTitle}</h2>
          <p className="about-text">{t.notFoundDesc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-container">
      <Link to="/projects" className="back-link">
        <ArrowLeft size={18} /> {t.backBtn}
      </Link>

      <header className="case-study-header">
        <div className="project-badge-row">
          <span className="category-badge">{project.category}</span>
          {project.awardBadge && <span className="award-badge-tag">{project.awardBadge}</span>}
        </div>

        <h1 className="case-study-title">{project.title}</h1>
        <p className="hero-bio">{project.fullDescription}</p>

        <div className="project-card-footer">
          <div className="project-links">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <GithubIcon size={18} />
              <span>{t.codeBtn}</span>
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                <ExternalLink size={18} />
                <span>{t.demoBtn}</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {project.metrics && (
        <div className="metrics-row">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-card">
              <div className="metric-val">{m.value}</div>
              <div className="metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {project.architectureOverview && (
        <section className="case-study-section">
          <h2 className="case-study-section-title">
            <Layers className="category-icon" size={22} />
            {t.archTitle}
          </h2>
          <p className="about-text">{project.architectureOverview}</p>
        </section>
      )}

      <section className="case-study-section">
        <h2 className="case-study-section-title">
          <CheckCircle2 className="category-icon" size={22} />
          {t.featTitle}
        </h2>
        <ul className="features-list">
          {project.features.map((feature, idx) => (
            <li key={idx} className="feature-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section-title">
          <Cpu className="category-icon" size={22} />
          {t.stackTitle}
        </h2>
        <div className="tech-stack-row">
          {project.techStack.map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {project.highlights && (
        <section className="case-study-section">
          <h2 className="case-study-section-title">
            <Award className="category-icon" size={22} />
            {t.highlightsTitle}
          </h2>
          <ul className="features-list">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="feature-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
