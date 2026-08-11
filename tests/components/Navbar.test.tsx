import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Navbar } from '../../src/components/Navbar';

describe('Navbar Component', () => {
  it('renders navigation links and brand name on home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('wozniak04')).toBeInTheDocument();
    const homeLink = screen.getByRole('link', { name: /O mnie/i });
    expect(homeLink).toHaveClass('active');
  });

  it('marks /projects route as active', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <Navbar />
      </MemoryRouter>
    );

    const projectsLink = screen.getByRole('link', { name: /Projekty & Osiągnięcia/i });
    expect(projectsLink).toHaveClass('active');
  });

  it('marks /skills route as active', () => {
    render(
      <MemoryRouter initialEntries={['/skills']}>
        <Navbar />
      </MemoryRouter>
    );

    const skillsLink = screen.getByRole('link', { name: /Umiejętności/i });
    expect(skillsLink).toHaveClass('active');
  });

  it('marks /contact route as active', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Navbar />
      </MemoryRouter>
    );

    const contactLink = screen.getByRole('link', { name: /Kontakt/i });
    expect(contactLink).toHaveClass('active');
  });
});
