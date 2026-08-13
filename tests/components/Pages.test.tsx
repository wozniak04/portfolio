import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { HomePage } from '../../src/pages/HomePage';
import { ProjectsPage } from '../../src/pages/ProjectsPage';
import { SkillsPage } from '../../src/pages/SkillsPage';
import { ContactPage } from '../../src/pages/ContactPage';
import { Footer } from '../../src/components/Footer';
import { GithubIcon, LinkedinIcon } from '../../src/components/SocialIcons';
import { Hero } from '../../src/components/Hero';
import { About } from '../../src/components/About';
import { Skills } from '../../src/components/Skills';
import { LanguageProvider } from '../../src/context/LanguageContext';

describe('Page Components & Sections', () => {
  function renderWithLang(ui: React.ReactNode) {
    return render(
      <LanguageProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </LanguageProvider>
    );
  }

  it('renders HomePage with Hero, About, Skills, FeaturedProjects, and Contact', () => {
    renderWithLang(<HomePage />);

    expect(
      screen.getByRole('heading', { name: /Cześć, jestem|Hi, I'm/i, level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Inżynierskie podejście do tworzenia oprogramowania|Engineering Approach/i)
    ).toBeInTheDocument();
  });

  it('renders ProjectsPage', () => {
    renderWithLang(<ProjectsPage />);

    expect(
      screen.getByRole('heading', {
        name: /Wyróżnione Projekty & Konkursy|Featured Projects/i,
        level: 2,
      })
    ).toBeInTheDocument();
  });

  it('renders SkillsPage and Skills with default category fallback', () => {
    renderWithLang(<SkillsPage />);

    expect(
      screen.getByRole('heading', { name: /Umiejętności & Narzędzia|Skills & Tools/i, level: 2 })
    ).toBeInTheDocument();
  });

  it('renders ContactPage', () => {
    renderWithLang(<ContactPage />);

    expect(
      screen.getByRole('heading', { name: /Porozmawiajmy o współpracy|Let's Discuss/i, level: 2 })
    ).toBeInTheDocument();
  });

  it('renders Hero and About components directly', () => {
    renderWithLang(
      <>
        <Hero />
        <About />
        <Skills />
      </>
    );

    expect(screen.getByText(/Full-Stack Developer & AI Pipeline Engineer/i)).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    renderWithLang(<Footer />);

    expect(
      screen.getByText(/Built with React 19, TypeScript, Vite & CSS Design System/i)
    ).toBeInTheDocument();
  });

  it('renders SocialIcons components with default and custom props', () => {
    const { container } = render(
      <div>
        <GithubIcon />
        <LinkedinIcon />
        <GithubIcon size={24} className="test-class" />
        <LinkedinIcon size={24} className="test-class" />
      </div>
    );

    expect(container.querySelectorAll('svg').length).toBe(4);
  });
});
