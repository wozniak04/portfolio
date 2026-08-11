import { User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-title-wrapper">
        <span className="section-badge">
          <User size={14} /> O mnie
        </span>
        <h2 className="section-title">Inżynierskie podejście do tworzenia oprogramowania</h2>
        <p className="section-subtitle">
          Łączę świat aplikacji Full-Stack ze sztuczną inteligencją i analityką danych.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <p className="about-text">
            Jestem programistą pasjonującym się budowaniem skalowalnych systemów webowych oraz
            eksperymentowaniem z uczeniem maszynowym. Moja praca opiera się na dostarczaniu
            przemyślanych rozwiązań – od intuicyjnych interfejsów w React i TypeScript, po wydajną
            architekturę backendową w Node.js, bazach relacyjnych (PostgreSQL) i brokerach
            wiadomości (Redis, MQTT).
          </p>
          <p className="about-text">
            Oprócz tworzenia tradycyjnych aplikacji webowych, aktywnie biorę udział w wyzwaniach
            analitycznych i AI – m.in. zdobywając <strong>2. miejsce w konkursie Morze AI</strong>{' '}
            za opracowanie algorytmów analizy i wykrywania manewrów oraz anomalii morskich z
            sygnałów GPS AIS.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">🏆 2.</div>
            <div className="stat-label">Miejsce Morze AI</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Projektów GitHub</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">Full-Stack</div>
            <div className="stat-label">React + Node + PyTorch</div>
          </div>
        </div>
      </div>
    </section>
  );
}
