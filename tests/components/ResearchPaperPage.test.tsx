import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ResearchPaperPage } from '../../src/pages/ResearchPaperPage';
import { LanguageProvider } from '../../src/context/LanguageContext';

function renderResearchPaperPage() {
  return render(
    <LanguageProvider>
      <MemoryRouter>
        <ResearchPaperPage />
      </MemoryRouter>
    </LanguageProvider>
  );
}

describe('ResearchPaperPage Component', () => {
  it('renders title, metrics, and abstract section', () => {
    renderResearchPaperPage();

    expect(
      screen.getByText(/Predicting AI Referral Opportunities: A Machine Learning Approach/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Precision@50 (GroupKFold)')).toBeInTheDocument();
    expect(screen.getAllByText('68.00%').length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Abstract & Executive Summary|Streszczenie Badania/i)
    ).toBeInTheDocument();
  });

  it('renders all 3 research figure images with valid src attributes', () => {
    renderResearchPaperPage();

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(3);

    const figure1 = screen.getByAltText(/AI Sessions vs Impressions Scatter Plot/i);
    const figure2 = screen.getByAltText(/Model Comparison Precision@50/i);
    const figure3 = screen.getByAltText(/Feature Importances Bar Chart/i);

    expect(figure1).toBeInTheDocument();
    expect(figure1.getAttribute('src')).toMatch(/figures\/ai_sessions_vs_impressions\.png$/);

    expect(figure2).toBeInTheDocument();
    expect(figure2.getAttribute('src')).toMatch(/figures\/model_comparison_precision50\.png$/);

    expect(figure3).toBeInTheDocument();
    expect(figure3.getAttribute('src')).toMatch(/figures\/feature_importances\.png$/);
  });

  it('renders Section 7 (Reproducibility) and Section 8 (Acknowledgments)', () => {
    renderResearchPaperPage();

    expect(
      screen.getByText(/7\. Reproducibility & Open Code|7\. Powtarzalność & Otwarty Kod/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/8\. Acknowledgments & Data Credit|8\. Podziękowania & Podstawa Danych/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/work\/notebooks\/capstone\.ipynb/i)).toBeInTheDocument();
    expect(screen.getByText(/FlyRank ML Internship dataset/i)).toBeInTheDocument();
  });
});
