import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../src/App';

describe('App component', () => {
  it('renders brand name and navigation items', () => {
    render(<App />);
    expect(screen.getAllByText(/wozniak04/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Full-Stack Developer & AI Pipeline Engineer/i)).toBeInTheDocument();
  });
});
