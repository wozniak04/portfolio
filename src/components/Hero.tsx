import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Terminal, Layers } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-greeting">
          <span className="status-dot"></span>
          <span>Open for Opportunities & Collaborations</span>
        </div>

        <h1 className="hero-name">
          Cześć, jestem <span className="text-gradient">wozniak04</span>
        </h1>

        <h2 className="hero-role">Full-Stack Developer & AI Pipeline Engineer</h2>

        <p className="hero-bio">
          Projektuję i buduję nowoczesne, wydajne aplikacje webowe w React 19, TypeScript i Node.js
          oraz tworzę potoki analityczne danych GPS AIS z wykorzystaniem modeli PyTorch.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">
            <span>Zobacz Projekty & Osiągnięcia</span>
            <ArrowRight size={18} />
          </Link>
          <a href="#contact" className="btn-secondary">
            <Terminal size={18} />
            <span>Skontaktuj się</span>
          </a>
        </div>
      </div>

      <div className="hero-showcase">
        <div className="achievement-hero-card">
          <div className="badge-gold">
            <Trophy size={14} />
            <span>Wyróżnienie Ogólnopolskie</span>
          </div>
          <h3 className="achievement-title">🏆 2. Miejsce w Konkursie Morze AI</h3>
          <p className="achievement-desc">
            Model PyTorch & Data Pipeline do klasyfikacji manewrów statków i detekcji anomalii
            trajektorii na podstawie sygnałów GPS AIS.
          </p>
        </div>

        <div className="achievement-hero-card">
          <div className="section-badge">
            <Layers size={14} />
            <span>Wyróżniony Projekt Full-Stack</span>
          </div>
          <h3 className="achievement-title">🎓 E-Learning Platform</h3>
          <p className="achievement-desc">
            Kontenerowa platforma edukacyjna w Docker Compose z czatem MQTT/Socket.io w czasie
            rzeczywistym i PostgreSQL.
          </p>
        </div>
      </div>
    </section>
  );
}
