import { User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export function About() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="section-container">
      <div className="section-title-wrapper">
        <span className="section-badge">
          <User size={14} /> O mnie
        </span>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <p className="about-text">{t.text1}</p>
          <p className="about-text">{t.text2}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">🏆 2.</div>
            <div className="stat-label">{t.stat1Label}</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">{t.stat2Label}</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">Full-Stack</div>
            <div className="stat-label">{t.stat3Label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
