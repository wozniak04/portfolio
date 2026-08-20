import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Layers,
  Cpu,
  Award,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export function ResearchPaperPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const figure1Path = `${baseUrl}figures/ai_sessions_vs_impressions.png`;
  const figure2Path = `${baseUrl}figures/model_comparison_precision50.png`;
  const figure3Path = `${baseUrl}figures/feature_importances.png`;

  return (
    <div className="case-study-container research-paper-wrapper">
      <Link to="/projects" className="back-link">
        <ArrowLeft size={18} />{' '}
        {isEn ? 'Back to Projects & Achievements' : 'Powrót do projektów & osiągnięć'}
      </Link>

      <header className="case-study-header">
        <div className="project-badge-row">
          <span className="category-badge">AI / Machine Learning</span>
          <span className="award-badge-tag">
            <FileText size={14} style={{ display: 'inline', marginRight: '4px' }} />
            {isEn ? 'Data Science Research Paper' : 'Artykuł Naukowo-Badawczy'}
          </span>
        </div>

        <h1 className="case-study-title" style={{ marginTop: '12px' }}>
          {isEn
            ? 'Predicting AI Referral Opportunities: A Machine Learning Approach to Optimizing Content for LLM Search Assistants'
            : 'Przewidywanie Szans na Ruch z AI: Podejście Machine Learning do Optymalizacji Treści pod Asystentów Wyszukiwania LLM'}
        </h1>

        <p className="hero-bio" style={{ fontSize: '1.1rem', marginTop: '16px' }}>
          {isEn
            ? 'An empirical Data Science research study analyzing 30,000 active content items across 32 enterprise client domains (79M+ production analytics records) to predict Retrieval-Augmented Generation (RAG) citations and AI search referral traffic.'
            : 'Empiryczne badanie naukowe Data Science analizujące 30 000 aktywnych podstron z 32 domen klienckich (ponad 79 mln rekordów analitycznych) w celu predykcji cytowań RAG i ruchu z asystentów wyszukiwania AI.'}
        </p>

        <div className="project-card-footer" style={{ marginTop: '24px' }}>
          <div className="project-links">
            <a
              href="https://github.com/wozniak04/ml-starter"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <GithubIcon size={18} />
              <span>{isEn ? 'View Code & Notebooks on GitHub' : 'Kod & Notebooki na GitHub'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Metrics Row */}
      <div className="metrics-row">
        <div className="metric-card">
          <div className="metric-val">68.00%</div>
          <div className="metric-lbl">Precision@50 (GroupKFold)</div>
        </div>
        <div className="metric-card">
          <div className="metric-val">2.125×</div>
          <div className="metric-lbl">
            {isEn ? 'Lift over Baseline Rule' : 'Poprawa precyzji vs reguły'}
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-val">20.00%</div>
          <div className="metric-lbl">
            {isEn ? 'Memorization Gap' : 'Luka zapamiętywania domen'}
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-val">30,000</div>
          <div className="metric-lbl">
            {isEn ? 'Evaluated Pages (79M+ Rows)' : 'Badanych podstron (79M+ wierszy)'}
          </div>
        </div>
      </div>

      {/* Abstract / Executive Summary */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <BookOpen className="category-icon" size={22} />
          {isEn ? 'Abstract & Executive Summary' : 'Streszczenie Badania (Abstract)'}
        </h2>
        <p className="about-text" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
          {isEn
            ? 'As conversational AI search tools (such as ChatGPT, Perplexity, and Claude) increasingly synthesize answers directly for users, web publishers face uncertainty regarding which content items successfully capture AI referral traffic. In this research, we evaluate 30,000 anonymized content items across 32 enterprise client domains from the FlyRank benchmark panel to determine what observable search and structural metrics predict Retrieval-Augmented Generation (RAG) citations.'
            : 'Wraz z rozwojem konwersacyjnych asystentów AI (takich jak ChatGPT, Perplexity i Claude), którzy generują odpowiedzi bezpośrednio dla użytkowników, wydawcy internetowi stają przed wyzwaniem: które treści pozyskują ruch i cytowania z AI? W niniejszym badaniu przeanalizowano 30 000 anonimowych podstron z 32 domen produkcyjnych panelu FlyRank Benchmark, aby określić, które wskaźniki organiczne i strukturalne przewidują cytowania RAG.'}
        </p>
        <p
          className="about-text"
          style={{ marginTop: '12px', fontSize: '1.05rem', lineHeight: '1.7' }}
        >
          {isEn
            ? 'Using an honest 5-fold client-grouped validation split (GroupKFold by client_id), we train a Random Forest ranking model that achieves an out-of-fold Precision@50 of 68.00%, outperforming a heuristic baseline rule (32.00%) by +36.00% (a 2.125× improvement) over a naive 6.43% base rate. We further demonstrate that random train-test splitting introduces a 20.00% memorization gap by leaking domain-level authority traits across folds.'
            : 'Stosując rzetelny 5-krotny podział walidacyjny po domenach (GroupKFold według client_id), wytrenowano model klasyfikujący Random Forest, który osiągnął wynik Precision@50 = 68.00%, przewyższając branżową regułę ekspercką (32.00%) o +36.00 punktów procentowych (poprawa 2.125×) względem losowej bazy (6.43%). Wykazano również, że tradycyjny podział losowy powoduje 20.00% lukę zapamiętywania poprzez przeciek cech autorytetu domeny międzyzbiorowego.'}
        </p>
      </section>

      {/* Introduction & Problem Statement */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <Layers className="category-icon" size={22} />
          {isEn
            ? '1. Introduction & Strategic Problem'
            : '1. Wprowadzenie & Sformułowanie Problemu'}
        </h2>
        <p className="about-text">
          {isEn
            ? 'Traditional Search Engine Optimization (SEO) has historically focused on driving click-through traffic from blue links on Search Engine Results Pages (SERPs). However, the rapid emergence of LLM-driven search engines and RAG architectures fundamentally alters user discovery. AI search assistants summarize information directly and provide footnoted citations back to source documents.'
            : 'Tradycyjne SEO koncentrowało się na pozyskiwaniu kliknięć z niebieskich linków na stronach wyników wyszukiwania (SERP). Pojawienie się wyszukiwarek opartych na modelach LLM i architekturze RAG zasadniczo zmienia ten proces – asystenci AI podsumowują informacje i podają przypisy do źródeł.'}
        </p>
        <div className="paper-callout-info" style={{ marginTop: '16px' }}>
          <strong>{isEn ? 'Key Research Question:' : 'Kluczowe Pytanie Badawcze:'}</strong>{' '}
          {isEn
            ? 'How should editorial resources be allocated to optimize existing content for AI referral visibility without relying on expensive and subjective manual audits?'
            : 'Jak zespoły redakcyjne powinny alokować zasoby, aby optymalizować istniejące treści pod kątem widoczności w AI, unikając kosztownych i subiektywnych audytów ręcznych?'}
        </div>
      </section>

      {/* Data & Privacy safeguards + Figure 1 */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <Cpu className="category-icon" size={22} />
          {isEn ? '2. Dataset Composition & Base Rate' : '2. Struktura Danych & Zabezpieczenia'}
        </h2>
        <ul className="features-list">
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>{isEn ? 'Evaluated Dataset:' : 'Badany zbiór danych:'}</strong>{' '}
              {isEn
                ? '30,000 active content items across 32 enterprise client domains over a 90-day snapshot window.'
                : '30 000 aktywnych podstron z 32 domen klienckich w 90-dniowym oknie obserwacji.'}
            </span>
          </li>
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>{isEn ? 'Target Label & Base Rate:' : 'Etykieta docelowa & Baza:'}</strong>{' '}
              {isEn
                ? 'Exactly 1,930 pages recorded >0 AI referral sessions, establishing a positive base rate of 6.43%.'
                : 'Dokładnie 1 930 podstron zarejestrowało >0 sesji z AI, co daje rzadką bazę pozytywną równą 6.43%.'}
            </span>
          </li>
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>{isEn ? 'Leakage Prevention:' : 'Ochrona przed przeciekiem etykiet:'}</strong>{' '}
              {isEn
                ? 'Target-derived columns (ai_traffic_pct, trend_direction, sessions_last_30d) were strictly excluded from training features.'
                : 'Kolumny pochodne targetu (ai_traffic_pct, trend_direction, sessions_last_30d) zostały bezwzględnie usunięte ze zbioru cech.'}
            </span>
          </li>
        </ul>

        {/* Figure 1 */}
        <div className="paper-figure-card">
          <img
            src={figure1Path}
            alt="AI Sessions vs Impressions Scatter Plot"
            className="paper-img"
          />
          <p className="figure-caption">
            <strong>{isEn ? 'Figure 1:' : 'Wykres 1:'}</strong>{' '}
            {isEn
              ? 'Log-scale scatter plot illustrating the relationship between Google organic impressions and AI referral sessions, demonstrating signal sparsity and concentration on high-visibility pages.'
              : 'Wykres rozrzutu (Scatter Plot) w skali logarytmicznej przedstawiający zależność między wyświetleniami w Google a liczbą sesji z narzędzi AI, obrazujący rzadkość sygnału oraz fakt, że ruch AI koncentruje się na podstronach o wysokiej widoczności organicznej.'}
          </p>
        </div>
      </section>

      {/* Benchmark Results Table + Figure 2 */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <Award className="category-icon" size={22} />
          {isEn ? '3. Out-of-Fold Performance Benchmarks' : '3. Wyniki & Tabela Benchmarków'}
        </h2>
        <p className="about-text" style={{ marginBottom: '20px' }}>
          {isEn
            ? 'The model was evaluated using Precision@50 (proportion of true positive AI referral pages in the top 50 model recommendations), matching the realistic capacity of an editorial review team.'
            : 'Model oceniano za pomocą wskaźnika Precision@50 (udział prawdziwych podstron z ruchem AI w pierwszych 50 rekomendacjach), co odpowiada moce przerobowej zespołu redakcyjnego.'}
        </p>

        <div className="paper-table-wrapper">
          <table className="paper-table">
            <thead>
              <tr>
                <th>{isEn ? 'Strategy / Model' : 'Strategia / Model'}</th>
                <th>{isEn ? 'Validation Split' : 'Podział Walidacyjny'}</th>
                <th>Precision@50</th>
                <th>{isEn ? 'Lift vs Base Rate' : 'Wzrost vs Baza'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Naïve Base Rate (Random Selection)</td>
                <td>—</td>
                <td>6.43%</td>
                <td>1.00×</td>
              </tr>
              <tr>
                <td>Rule-Based Baseline (Heuristic W04)</td>
                <td>Heuristic Rule</td>
                <td>32.00%</td>
                <td>4.98×</td>
              </tr>
              <tr className="highlight-row">
                <td>
                  <strong>Honest Random Forest (GroupKFold)</strong> ✨
                </td>
                <td>
                  <strong>GroupKFold by client_id</strong>
                </td>
                <td>
                  <strong>68.00%</strong>
                </td>
                <td>
                  <strong>10.58× (+36.00% vs Baseline)</strong>
                </td>
              </tr>
              <tr style={{ opacity: 0.7 }}>
                <td>Naïve Random Split Model (Overfitted)</td>
                <td>Random 5-Fold KFold</td>
                <td>88.00%</td>
                <td>13.69× (Leaked / Overfitted)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Figure 2 */}
        <div className="paper-figure-card" style={{ marginTop: '24px' }}>
          <img src={figure2Path} alt="Model Comparison Precision@50" className="paper-img" />
          <p className="figure-caption">
            <strong>{isEn ? 'Figure 2:' : 'Wykres 2:'}</strong>{' '}
            {isEn
              ? 'Bar chart comparing Precision@50 performance across baseline strategies: from Random Selection (6.43%), Heuristic Baseline (32.00%), Honest GroupKFold Random Forest (68.00%), to Overfitted Naïve Random Split (88.00%), illustrating the 20.00% domain memorization gap.'
              : 'Wykres słupkowy porównujący skuteczność metryki Precision@50 – od losowego wyboru (6.43%), przez sztywną regułę biznesową Baseline (32.00%), uczciwy model Random Forest z podziałem GroupKFold (68.00%), aż po sztucznie przeuczony model z podziałem losowym Naive (88.00%), obrazując 20-procentową lukę zapamiętywania domen (memorization gap).'}
          </p>
        </div>

        <div className="paper-callout-warning" style={{ marginTop: '24px' }}>
          <AlertTriangle size={20} className="warning-icon" />
          <div>
            <strong>
              {isEn ? 'The 20.00% Memorization Gap:' : '20.00% Luka Zapamiętywania Domen:'}
            </strong>{' '}
            {isEn
              ? 'Comparing Naïve Random Split (88.00%) to Honest Grouped Split (68.00%) proves that standard random cross-validation overestimates model skill by 20% by allowing algorithms to memorize domain authority traits.'
              : 'Porównanie podziału losowego (88.00%) z uczciwym podziałem grupowym (68.00%) dowodzi, że tradycyjna walidacja losowa przeszacowuje skuteczność modelu o 20% poprzez zapamiętywanie autorytetu domen.'}
          </div>
        </div>
      </section>

      {/* Feature Importance Analysis + Figure 3 */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <Cpu className="category-icon" size={22} />
          {isEn ? '4. Feature Importance Analysis' : '4. Ważność Cech (Feature Importance)'}
        </h2>
        <p className="about-text" style={{ marginBottom: '20px' }}>
          {isEn
            ? 'Out-of-fold feature importances demonstrate that the Random Forest model relies primarily on two key search & content drivers:'
            : 'Ważność cech z walidacji wykazuje, że model Random Forest bazuje głównie na dwóch kluczowych wskaźnikach:'}
        </p>

        <div className="importance-list">
          <div className="importance-item">
            <div className="importance-header">
              <span>1. Organic Impressions (impressions_90d)</span>
              <strong>33.95%</strong>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '33.95%' }}></div>
            </div>
          </div>

          <div className="importance-item">
            <div className="importance-header">
              <span>2. Content Word Count (word_count)</span>
              <strong>31.11%</strong>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '31.11%' }}></div>
            </div>
          </div>

          <div className="importance-item">
            <div className="importance-header">
              <span>3. Click-Through Rate (ctr)</span>
              <strong>11.46%</strong>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '11.46%' }}></div>
            </div>
          </div>

          <div className="importance-item">
            <div className="importance-header">
              <span>4. Days with Impressions (days_with_impressions)</span>
              <strong>9.71%</strong>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '9.71%' }}></div>
            </div>
          </div>

          <div className="importance-item">
            <div className="importance-header">
              <span>5. Average Google Position (avg_position)</span>
              <strong>9.70%</strong>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: '9.70%' }}></div>
            </div>
          </div>
        </div>

        {/* Figure 3 */}
        <div className="paper-figure-card" style={{ marginTop: '24px' }}>
          <img src={figure3Path} alt="Feature Importances Bar Chart" className="paper-img" />
          <p className="figure-caption">
            <strong>{isEn ? 'Figure 3:' : 'Wykres 3:'}</strong>{' '}
            {isEn
              ? 'Feature importance bar chart in the Random Forest model, demonstrating that Google organic impressions (impressions_90d ~34%) and article word count (word_count ~31%) are the primary predictors of AI referral traffic.'
              : 'Wykres słupkowy ważności cech w modelu Random Forest, pokazujący, że najważniejszymi sygnałami przewidującymi ruch z AI są łączna liczba wyświetleń w Google (impressions_90d – ok. 34%) oraz objętość artykułu (word_count – ok. 31%).'}
          </p>
        </div>
      </section>

      {/* Content Action Playbook */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <ShieldCheck className="category-icon" size={22} />
          {isEn
            ? '5. Content Action Playbook & Code'
            : '5. Kod & Podręcznik Działań (Action Playbook)'}
        </h2>
        <p className="about-text" style={{ marginBottom: '16px' }}>
          {isEn
            ? 'To operationalize predictions, model probabilities map to human actionable reason codes:'
            : 'W celu wdrożenia predykcji, prawdopodobieństwa modelu mapowane są na czytelne kody przyczyn dla redaktorów:'}
        </p>

        <pre className="code-block-container">
          <code>{`def assign_reason_code(row):
    imp = row['impressions_90d']
    pos = row['avg_position']
    ctype = row['content_type']
    is_article = ctype in ['keyword article', 'feedly article']
    
    if imp >= 1000 and 0 < pos <= 10 and is_article:
        return 'high_volume_top_rank_article'
    elif imp >= 1000 and is_article:
        return 'high_volume_article'
    elif 0 < pos <= 10 and is_article:
        return 'top_rank_striking_distance'
    else:
        return 'moderate_search_presence'`}</code>
        </pre>

        <div style={{ marginTop: '20px' }}>
          <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '10px' }}>
            {isEn ? 'No-Go Automations Guardrails:' : 'Zasady Bezpieczeństwa (No-Go Automations):'}
          </h4>
          <ul className="features-list">
            <li className="feature-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>
                {isEn
                  ? 'NO automated AI text generation without human editor review.'
                  : 'BRAK automatycznej generacji treści AI bez weryfikacji redaktora.'}
              </span>
            </li>
            <li className="feature-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>
                {isEn
                  ? 'NO automated page deletions or redirects based solely on low scores.'
                  : 'BRAK automatycznego usuwania podstron na podstawie niskich ocen.'}
              </span>
            </li>
            <li className="feature-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>
                {isEn
                  ? 'NO manipulative prompt injection targeting LLM crawlers.'
                  : 'BRAK manipulacyjnego spamu słów kluczowych pod roboty AI.'}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Limitations & Honest Framing */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <AlertTriangle className="category-icon" size={22} />
          {isEn ? '6. Limitations & Honest Boundaries' : '6. Ograniczenia & Granice Badania'}
        </h2>
        <ul className="features-list">
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>
                {isEn ? 'Correlational, Non-Causal:' : 'Korelacja, nie przyczynowość:'}
              </strong>{' '}
              {isEn
                ? 'Measures observed associations in historical data. Increasing word count alone does not causally force citations.'
                : 'Mierzy obserwowane zależności w danych historycznych. Samo zwiększenie liczby słów nie powoduje automatycznie cytowania.'}
            </span>
          </li>
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>{isEn ? 'Scope Boundary:' : 'Zakres stosowania:'}</strong>{' '}
              {isEn
                ? 'Valid strictly for informational articles. Not valid for transactional e-commerce pages.'
                : 'Ważne wyłącznie dla artykułów informacyjnych. Nie dotyczy stron transakcyjnych e-commerce.'}
            </span>
          </li>
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>{isEn ? 'Black-Box Limitation:' : 'Ograniczenie czarnej skrzynki:'}</strong>{' '}
              {isEn
                ? 'Does NOT claim to decode proprietary internal algorithms of OpenAI or Google.'
                : 'Model NIE ma na celu dekodowania wewnętrznych komercyjnych algorytmów OpenAI czy Google.'}
            </span>
          </li>
        </ul>
      </section>

      {/* Section 7: Reproducibility & Open Code */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <FileText className="category-icon" size={22} />
          {isEn
            ? '7. Reproducibility & Open Code'
            : '7. Powtarzalność & Otwarty Kod (Reproducibility)'}
        </h2>
        <p className="about-text" style={{ marginBottom: '16px' }}>
          {isEn
            ? 'All source code, Jupyter notebooks, feature engineering pipelines, and evaluation scripts are version-controlled and 100% reproducible.'
            : 'Cały kod źródłowy, notebooki Jupyter, potoki inżynierii cech oraz skrypty ewaluacyjne są objęte kontrolą wersji i w 100% powtarzalne.'}
        </p>
        <ul className="features-list">
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>{isEn ? 'Capstone Notebook:' : 'Główny Notebook:'}</strong>{' '}
              <code>work/notebooks/capstone.ipynb</code>
            </span>
          </li>
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>{isEn ? 'Validation Audit Notebook:' : 'Notebook Audytu Walidacji:'}</strong>{' '}
              <code>work/notebooks/w06_validation_audit.ipynb</code>
            </span>
          </li>
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>
                {isEn ? 'Action Playbook Notebook:' : 'Notebook Podręcznika Działań:'}
              </strong>{' '}
              <code>work/notebooks/w07_action_playbook.ipynb</code>
            </span>
          </li>
          <li className="feature-item">
            <CheckCircle2 size={18} className="check-icon" />
            <span>
              <strong>
                {isEn ? 'Exported Metric Receipts:' : 'Wyeksportowane Raporty Metryk:'}
              </strong>{' '}
              <code>work/outputs/metrics_summary.json</code>
            </span>
          </li>
        </ul>
      </section>

      {/* Section 8: Acknowledgments & Data Credit */}
      <section className="case-study-section paper-card">
        <h2 className="case-study-section-title">
          <Award className="category-icon" size={22} />
          {isEn ? '8. Acknowledgments & Data Credit' : '8. Podziękowania & Podstawa Danych'}
        </h2>
        <p className="about-text">
          {isEn ? (
            <>
              Built on the{' '}
              <a
                href="https://flyrank.ai"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
              >
                FlyRank ML Internship dataset
              </a>
              . We gratefully acknowledge FlyRank for providing access to anonymized production
              search analytics and LLM referral panel data.
            </>
          ) : (
            <>
              Badanie zrealizowane w oparciu o zbiór danych{' '}
              <a
                href="https://flyrank.ai"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
              >
                FlyRank ML Internship dataset
              </a>
              . Składamy podziękowania dla zespołu FlyRank za udostępnienie anonimizowanych danych
              produkcyjnych z panelu analitycznego wyszukiwań i skierowań AI.
            </>
          )}
        </p>
      </section>
    </div>
  );
}
