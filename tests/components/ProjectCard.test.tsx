import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from '../../src/components/ProjectCard';
import type { Project } from '../../src/types';

const mockProject: Project = {
  id: 'test-project',
  title: 'Test Portfolio Project',
  shortDescription: 'Short description for testing',
  fullDescription: 'Full description for testing',
  category: 'Full-Stack',
  featured: true,
  awardBadge: '🏆 Test Award',
  githubUrl: 'https://github.com/wozniak04/test-project',
  techStack: ['React', 'TypeScript'],
  features: ['Feature 1'],
  date: '2026',
};

const mockProjectWithLiveUrl: Project = {
  ...mockProject,
  id: 'test-live',
  title: 'Test Live Project',
  featured: false,
  awardBadge: undefined,
  liveUrl: 'https://example.com/live',
};

describe('ProjectCard Component', () => {
  it('renders project title, category, award badge, and tech stack tags', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProject} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Portfolio Project')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack')).toBeInTheDocument();
    expect(screen.getByText('🏆 Test Award')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders link to Case Study route and external live URL when provided', () => {
    render(
      <MemoryRouter>
        <ProjectCard project={mockProjectWithLiveUrl} />
      </MemoryRouter>
    );

    const caseStudyLink = screen.getByRole('link', { name: /Case Study/i });
    expect(caseStudyLink).toHaveAttribute('href', '/projects/test-live');

    const liveLink = screen.getByRole('link', { name: /Live demo for Test Live Project/i });
    expect(liveLink).toHaveAttribute('href', 'https://example.com/live');
  });
});
