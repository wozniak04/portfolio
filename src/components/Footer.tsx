import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} wozniak04. {t.rights}
        </p>
        <p>{t.tech}</p>
      </div>
    </footer>
  );
}
