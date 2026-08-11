import { describe, it, expect } from 'vitest';
import { PROJECTS_DATA, SKILL_GROUPS } from '../../src/data/projects';

describe('Projects & Skills Data Layer', () => {
  it('should contain featured projects including e-learning-platform and marine-recognition', () => {
    const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
    expect(featuredProjects.length).toBeGreaterThanOrEqual(2);

    const elearning = PROJECTS_DATA.find((p) => p.id === 'e-learning-platform');
    const marine = PROJECTS_DATA.find((p) => p.id === 'marine-recognition');

    expect(elearning).toBeDefined();
    expect(marine).toBeDefined();
    expect(marine?.awardBadge).toContain('Morze AI');
  });

  it('should have correct GitHub repository URLs for wozniak04', () => {
    PROJECTS_DATA.forEach((project) => {
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com\/wozniak04\//);
    });
  });

  it('should define structured skill groups for full-stack and AI skills', () => {
    expect(SKILL_GROUPS.length).toBeGreaterThan(0);
    const frontendGroup = SKILL_GROUPS.find((g) => g.category === 'Frontend & UI');
    expect(frontendGroup).toBeDefined();
    expect(frontendGroup?.skills.some((s) => s.name === 'React 19')).toBe(true);
  });
});
