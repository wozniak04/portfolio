import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FolderGit2, User, Mail, Sparkles, Menu, X, Globe } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export function Navbar() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === '/';

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand-logo" onClick={closeMobile}>
          <div className="brand-avatar">W</div>
          <span>wozniak04</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop">
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`}>
                <User size={16} className="inline-icon" /> {t.about}
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
              >
                <FolderGit2 size={16} className="inline-icon" /> {t.projects}
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
              >
                <Sparkles size={16} className="inline-icon" /> {t.skills}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                <Mail size={16} className="inline-icon" /> {t.contact}
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleLanguage}
                className="lang-toggle-btn"
                aria-label="Toggle language PL/EN"
              >
                <Globe size={14} />
                <span>{language === 'pl' ? 'PL 🇵🇱' : 'EN 🇬🇧'}</span>
              </button>
            </li>
            <li>
              <a
                href="https://github.com/wozniak04"
                target="_blank"
                rel="noreferrer"
                className="icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hamburger-btn"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav className="mobile-menu-drawer">
          <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`} onClick={closeMobile}>
            <User size={18} /> {t.about}
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
            onClick={closeMobile}
          >
            <FolderGit2 size={18} /> {t.projects}
          </Link>
          <Link
            to="/skills"
            className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
            onClick={closeMobile}
          >
            <Sparkles size={18} /> {t.skills}
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobile}
          >
            <Mail size={18} /> {t.contact}
          </Link>
          <button type="button" onClick={toggleLanguage} className="lang-toggle-btn">
            <Globe size={16} />
            <span>{language === 'pl' ? 'Przełącz na English 🇬🇧' : 'Switch to Polski 🇵🇱'}</span>
          </button>
          <a
            href="https://github.com/wozniak04"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            onClick={closeMobile}
          >
            <GithubIcon size={18} /> GitHub (wozniak04)
          </a>
        </nav>
      )}
    </header>
  );
}
