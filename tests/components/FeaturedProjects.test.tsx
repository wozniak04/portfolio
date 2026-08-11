import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { FeaturedProjects } from '../../src/components/FeaturedProjects';

describe('FeaturedProjects Component', () => {
  it('renders primary featured projects initially', () => {
    render(
      <MemoryRouter>
        <FeaturedProjects />
      </MemoryRouter>
    );

    expect(screen.getByText('E-Learning Platform')).toBeInTheDocument();
    expect(screen.getByText('Marine Recognition & AIS Anomaly Pipeline')).toBeInTheDocument();
    expect(screen.queryByText('AI PC Configurator')).not.toBeInTheDocument();
  });

  it('toggles secondary projects grid when toggle button is clicked', () => {
    render(
      <MemoryRouter>
        <FeaturedProjects />
      </MemoryRouter>
    );

    const toggleBtn = screen.getByRole('button', { name: /Zobacz wszystkie pozostałe projekty/i });
    fireEvent.click(toggleBtn);

    expect(screen.getByText('AI PC Configurator')).toBeInTheDocument();
    expect(screen.getByText('Metroloty Landing Page')).toBeInTheDocument();
    expect(screen.getByText('Schowaj pozostałe projekty')).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.queryByText('AI PC Configurator')).not.toBeInTheDocument();
  });
});
