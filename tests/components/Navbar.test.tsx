import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { Navbar } from '../../src/components/Navbar';
import { LanguageProvider } from '../../src/context/LanguageContext';

function renderNavbar(route = '/') {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[route]}>
        <Navbar />
      </MemoryRouter>
    </LanguageProvider>
  );
}

describe('Navbar Component', () => {
  it('renders navigation links and brand name on home route', () => {
    renderNavbar('/');

    expect(screen.getByText('wozniak04')).toBeInTheDocument();
    const homeLinks = screen.getAllByRole('link', { name: /O mnie|About Me/i });
    expect(homeLinks.length).toBeGreaterThan(0);
  });

  it('marks /projects route as active', () => {
    renderNavbar('/projects');

    const projectsLinks = screen.getAllByRole('link', {
      name: /Projekty & Osiągnięcia|Projects & Achievements/i,
    });
    expect(projectsLinks[0]).toHaveClass('active');
  });

  it('toggles mobile navigation drawer and closes when clicking a link', () => {
    renderNavbar('/');

    const toggleBtn = screen.getByRole('button', { name: /Toggle navigation menu/i });
    fireEvent.click(toggleBtn);

    const mobileLangBtn = screen.getByText('Switch to Polski 🇵🇱');
    expect(mobileLangBtn).toBeInTheDocument();

    const mobileAboutLink = screen.getAllByRole('link', { name: /O mnie|About Me/i })[1];
    fireEvent.click(mobileAboutLink);

    expect(screen.queryByText('Switch to Polski 🇵🇱')).not.toBeInTheDocument();
  });

  it('toggles language between EN and PL in navbar and drawer', () => {
    renderNavbar('/');

    const langBtn = screen.getByRole('button', { name: /Toggle language PL\/EN/i });
    fireEvent.click(langBtn);
    expect(screen.getByText(/PL 🇵🇱/i)).toBeInTheDocument();

    const toggleBtn = screen.getByRole('button', { name: /Toggle navigation menu/i });
    fireEvent.click(toggleBtn);
    const mobileLangBtn = screen.getByText('Przełącz na English 🇬🇧');
    fireEvent.click(mobileLangBtn);
    expect(screen.getByText(/EN 🇬🇧/i)).toBeInTheDocument();
  });
});
