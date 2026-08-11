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

describe('Page Components & Sections', () => {
  it('renders HomePage with Hero, About, Skills, FeaturedProjects, and Contact', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /Cześć, jestem/i, level: 1 })).toBeInTheDocument();
    expect(
      screen.getByText('Inżynierskie podejście do tworzenia oprogramowania')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Umiejętności & Narzędzia', level: 2 })
    ).toBeInTheDocument();
  });

  it('renders ProjectsPage', () => {
    render(
      <MemoryRouter>
        <ProjectsPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Wyróżnione Projekty & Konkursy', level: 2 })
    ).toBeInTheDocument();
  });

  it('renders SkillsPage and Skills with default category fallback', () => {
    render(
      <MemoryRouter>
        <SkillsPage />
        <Skills />
      </MemoryRouter>
    );

    expect(
      screen.getAllByRole('heading', { name: 'Umiejętności & Narzędzia', level: 2 }).length
    ).toBeGreaterThan(0);
  });

  it('renders ContactPage', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Porozmawiajmy o współpracy', level: 2 })
    ).toBeInTheDocument();
  });

  it('renders Hero and About components directly', () => {
    render(
      <MemoryRouter>
        <Hero />
        <About />
      </MemoryRouter>
    );

    expect(screen.getByText(/Full-Stack Developer & AI Pipeline Engineer/i)).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    render(<Footer />);

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
