import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { FeaturedProjects } from '../../src/components/FeaturedProjects';
import { LanguageProvider } from '../../src/context/LanguageContext';

describe('FeaturedProjects Component', () => {
  it('renders primary featured projects initially', () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <FeaturedProjects />
        </MemoryRouter>
      </LanguageProvider>
    );

    expect(screen.getByText('E-Learning Platform')).toBeInTheDocument();
    expect(screen.getByText('Marine Recognition & AIS Anomaly Pipeline')).toBeInTheDocument();
    expect(screen.queryByText('AI PC Configurator')).not.toBeInTheDocument();
  });

  it('toggles secondary projects grid when toggle button is clicked', () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <FeaturedProjects />
        </MemoryRouter>
      </LanguageProvider>
    );

    const toggleBtn = screen.getByRole('button', {
      name: /Zobacz wszystkie pozostałe projekty|View all remaining projects/i,
    });
    fireEvent.click(toggleBtn);

    expect(screen.getByText('AI PC Configurator')).toBeInTheDocument();
    expect(screen.getByText('Metroloty Landing Page')).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.queryByText('AI PC Configurator')).not.toBeInTheDocument();
  });
});
