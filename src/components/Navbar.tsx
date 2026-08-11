import { Link, useLocation } from 'react-router-dom';
import { FolderGit2, User, Mail, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand-logo">
          <div className="brand-avatar">W</div>
          <span>wozniak04</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`}>
                <User size={16} className="inline-icon" /> O mnie
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
              >
                <FolderGit2 size={16} className="inline-icon" /> Projekty & Osiągnięcia
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}
              >
                <Sparkles size={16} className="inline-icon" /> Umiejętności
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                <Mail size={16} className="inline-icon" /> Kontakt
              </Link>
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
      </div>
    </header>
  );
}
