import { useState } from 'react';
import { Mail, Copy, Check, Send, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import type { ContactFormData } from '../types';

export function Contact() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailAddress = 'mikimen321@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMessage(t.errorMsg);
      return;
    }

    setLoading(true);
    try {
      // Send form data to Web3Forms API (delivering directly to mikimen321@gmail.com)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          to: emailAddress,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(t.errorMsg);
      }
    } catch {
      setErrorMessage(t.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-title-wrapper">
        <span className="section-badge">
          <Mail size={14} /> {t.badge}
        </span>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card">
          <h3>{t.infoTitle}</h3>
          <p className="about-text">{t.infoText}</p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div className="stat-label">{t.emailLabel}</div>
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
                <div className="stat-label">{t.githubLabel}</div>
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
                <div className="stat-label">{t.linkedinLabel}</div>
                <strong className="form-label">LinkedIn</strong>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {submitted ? (
            <div className="about-card" style={{ textAlign: 'center' }}>
              <h4 className="achievement-title">{t.successTitle}</h4>
              <p className="achievement-desc" style={{ marginBottom: '1.5rem' }}>
                {t.successDesc}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-primary"
                style={{ margin: '0 auto' }}
              >
                <span>{t.sendAnotherBtn}</span>
              </button>
            </div>
          ) : (
            <>
              {errorMessage && (
                <div
                  className="error-banner"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    marginBottom: '1rem',
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t.nameField}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.emailField}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t.messageField}
                </label>
                <textarea
                  id="message"
                  required
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>{t.sendingBtn}</span>
                  </>
                ) : (
                  <>
                    <span>{t.sendBtn}</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>

      {copied && <div className="copy-toast">{t.copiedToast}</div>}
    </section>
  );
}
