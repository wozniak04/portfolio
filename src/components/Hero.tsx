import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Terminal, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export function Hero() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-greeting">
          <span className="status-dot"></span>
          <span>{t.status}</span>
        </div>

        <h1 className="hero-name">
          {t.greeting} <span className="text-gradient">wozniak04</span>
        </h1>

        <h2 className="hero-role">{t.role}</h2>

        <p className="hero-bio">{t.bio}</p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">
            <span>{t.projectsBtn}</span>
            <ArrowRight size={18} />
          </Link>
          <a href="#contact" className="btn-secondary">
            <Terminal size={18} />
            <span>{t.contactBtn}</span>
          </a>
        </div>
      </div>

      <div className="hero-showcase">
        <div className="achievement-hero-card">
          <div className="badge-gold">
            <Trophy size={14} />
            <span>Wyróżnienie Ogólnopolskie</span>
          </div>
          <h3 className="achievement-title">{t.awardTitle}</h3>
          <p className="achievement-desc">{t.awardDesc}</p>
        </div>

        <div className="achievement-hero-card">
          <div className="section-badge">
            <Layers size={14} />
            <span>Featured Full-Stack Project</span>
          </div>
          <h3 className="achievement-title">{t.featuredTitle}</h3>
          <p className="achievement-desc">{t.featuredDesc}</p>
        </div>
      </div>
    </section>
  );
}
