import { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import type { ContactFormData } from '../types';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'mikimen321@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-title-wrapper">
        <span className="section-badge">
          <Mail size={14} /> Kontakt
        </span>
        <h2 className="section-title">Porozmawiajmy o współpracy</h2>
        <p className="section-subtitle">
          Szukasz programisty do projektu Full-Stack lub analityka AI? Skontaktuj się ze mną!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card">
          <h3>Dane Kontaktowe</h3>
          <p className="about-text">
            Chętnie odpowiem na pytania, omówię potencjalną współpracę lub opowiem więcej o moich
            projektach i wygranym konkursie Morze AI.
          </p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div className="stat-label">Adres E-mail</div>
                <strong className="form-label">{emailAddress}</strong>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="icon-btn"
                aria-label="Kopiuj email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <a
              href="https://github.com/wozniak04"
              target="_blank"
              rel="noreferrer"
              className="contact-method-item"
            >
              <div className="contact-icon-box">
                <GithubIcon size={20} />
              </div>
              <div>
                <div className="stat-label">GitHub</div>
                <strong className="form-label">github.com/wozniak04</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/miko%C5%82aj-wo%C5%BAniak-03bba1281/"
              target="_blank"
              rel="noreferrer"
              className="contact-method-item"
            >
              <div className="contact-icon-box">
                <LinkedinIcon size={20} />
              </div>
              <div>
                <div className="stat-label">LinkedIn</div>
                <strong className="form-label">Profil LinkedIn</strong>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {submitted ? (
            <div className="about-card">
              <h4 className="achievement-title">Dziękuję za wiadomość!</h4>
              <p className="achievement-desc">
                Formularz został wysłany. Skontaktuję się z Tobą najszybciej jak to możliwe.
              </p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Twoje Imię / Firma
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="np. Jan Kowalski"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Adres E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  required
                  placeholder="Opisz swój projekt lub pytanie..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary">
                <span>Wyślij wiadomość</span>
                <Send size={18} />
              </button>
            </>
          )}
        </form>
      </div>

      {copied && <div className="copy-toast">Adres e-mail skopiowany do schowka!</div>}
    </section>
  );
}
