import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { CaseStudyPage } from '../../src/pages/CaseStudyPage';
import { PROJECTS_DATA } from '../../src/data/projects';
import { LanguageProvider } from '../../src/context/LanguageContext';

describe('CaseStudyPage Component', () => {
  it('renders case study for valid project id e-learning-platform', () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={['/projects/e-learning-platform']}>
          <Routes>
            <Route path="/projects/:id" element={<CaseStudyPage />} />
          </Routes>
        </MemoryRouter>
      </LanguageProvider>
    );

    expect(
      screen.getByRole('heading', { name: 'E-Learning Platform', level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kompleksowa platforma e-learningowa|Comprehensive e-learning platform/i)
    ).toBeInTheDocument();
  });

  it('renders case study for project with liveUrl if present', () => {
    const projectWithLiveUrl = PROJECTS_DATA.find((p) => p.liveUrl);
    if (projectWithLiveUrl) {
      render(
        <LanguageProvider>
          <MemoryRouter initialEntries={[`/projects/${projectWithLiveUrl.id}`]}>
            <Routes>
              <Route path="/projects/:id" element={<CaseStudyPage />} />
            </Routes>
          </MemoryRouter>
        </LanguageProvider>
      );
      expect(screen.getByText(/Live Demo/i)).toBeInTheDocument();
    }
  });

  it('renders not found fallback when project id does not exist', () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={['/projects/non-existent-id']}>
          <Routes>
            <Route path="/projects/:id" element={<CaseStudyPage />} />
          </Routes>
        </MemoryRouter>
      </LanguageProvider>
    );

    expect(
      screen.getByText(/Projekt nie został znaleziony|Project Not Found/i)
    ).toBeInTheDocument();
  });
});
