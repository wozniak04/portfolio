import type { Project, SkillGroup } from '../types';

export const PROJECTS_DATA_PL: Project[] = [
  {
    id: 'ai-referral-prediction',
    title: 'Predicting AI Referral Opportunities in LLMs (RAG Optimization)',
    shortDescription:
      'Model uczenia maszynowego (Random Forest) oraz pipeline badawczy (30 000 podstron, GroupKFold po client_id) przewidujący cytowania RAG i ruch od asystentów AI (ChatGPT, Perplexity, Claude).',
    fullDescription:
      'Kompleksowe badanie naukowe oraz model uczenia maszynowego dedykowany dla strategów SEO i zespołów redakcyjnych. System analizuje 30 000 anonimizowanych podstron z panelu ponad 79 mln wierszy danych produkcyjnych FlyRank Benchmark, aby precyzyjnie przewidywać szanse na zdobycie cytowań RAG i ruchu od asystentów AI (ChatGPT, Perplexity, Claude). Zastosowanie uczciwego podziału walidacyjnego GroupKFold wyeliminowało 20% lukę zapamiętywania domen i pozwoliło osiągnąć Precision@50 równy 68.00% (2.12× wyższy od bazowych reguł).',
    category: 'AI / Machine Learning',
    featured: true,
    awardBadge: '📄 Artykuł Naukowo-Badawczy (Data Science)',
    githubUrl: 'https://github.com/wozniak04/ml-starter',
    paperUrl: '/projects/ai-referral-prediction/paper',
    techStack: [
      'Python',
      'scikit-learn',
      'PyTorch',
      'Random Forest',
      'GroupKFold',
      'Pandas',
      'NumPy',
      'Data Pipelines',
    ],
    features: [
      'Analiza 30 000 aktywnych podstron z panelu ponad 79 mln rekordów analitycznych FlyRank.',
      'Model klasyfikujący Random Forest (100 estymatorów, max_depth=6) operujący na cechach organicznych i strukturalnych.',
      'Rzetelna walidacja 5-Fold GroupKFold po client_id chroniąca przed przeciekiem danych (Data Leakage) i zapamiętywaniem domen.',
      'Osiągnięta precyzja Precision@50 = 68.00% (w porównaniu do 32.00% dla reguł eksperckich i 6.43% dla wyboru losowego).',
      'Kwantyfikacja luki zapamiętywania (Memorization Gap = 20.00%) wykazująca przeszacowanie wyników w tradycyjnym podziale losowym.',
      'Analiza ważności cech: wyświetlenia organiczne (33.95%) oraz długość tekstu (31.11%) jako kluczowe predyktory cytowań RAG.',
      'Praktyczny system kodów przyczyn (Content Action Playbook) do priorytetyzacji pracy redaktorów z zasadami No-Go Automations.',
    ],
    architectureOverview:
      'Data pipeline przyjmuje surowe metryki widoczności organicznej i parametrów artykułów, filtruje wskaźniki pochodne targetu (zapobieganie przeciekowi etykiet), a następnie buduje macierz cech. Uczciwy podział 5-Fold GroupKFold po client_id zapewnia, że domeny klienta występujące w zbiorze walidacyjnym nigdy nie były widziane podczas uczenia. Wyselekcjonowany klasyfikator Random Forest generuje prawdopodobieństwa, które są przekształcane w oceny rangowe oraz kody przyczyn dla zespołu edytorskiego.',
    highlights: [
      'Ponad 2.1x wyższa precyzja (68.00% vs 32.00%) w porównaniu do standardowych reguł branżowych',
      'Dowód naukowy na obecność 20% luki zapamiętywania w tradycyjnej walidacji K-Fold',
      'Pełna powtarzalność badań (Reproducible Research Pipeline, notebooks & metric receipts)',
    ],
    metrics: [
      { label: 'Precision@50', value: '68.00%' },
      { label: 'Wzrost vs Reguły', value: '2.12×' },
      { label: 'Memorization Gap', value: '20.00%' },
      { label: 'Przebadanych Podstron', value: '30,000' },
    ],
    date: '2026',
  },
  {
    id: 'e-learning-platform',
    title: 'E-Learning Platform',
    shortDescription:
      'Nowoczesna, mikroserwisowa platforma edukacyjna do kursów online z czatem w czasie rzeczywistym i kontenerami Docker.',
    fullDescription:
      'Kompleksowa platforma e-learningowa stworzona w oparciu o architekturę kontenerową (Docker Compose). Umożliwia tworzenie, edycję i publikowanie kursów, interaktywny moduł nauki z lekcjami Markdown, oraz wielojęzyczny (PL/EN) interfejs. Posiada dedykowany czat w czasie rzeczywistym bazujący na komunikacji Socket.io i brokerze wiadomości MQTT (Eclipse Mosquitto). Bezpieczeństwo zapewnia system sesyjny zabezpieczony tokenami CSRF oraz autoryzacja zintegrowana z Google OAuth 2.0.',
    category: 'Full-Stack',
    featured: true,
    awardBadge: 'Wyróżniony Projekt Full-Stack',
    githubUrl: 'https://github.com/wozniak04/e-learning-platform',
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Zustand',
      'Node.js',
      'Express',
      'PostgreSQL 17',
      'Redis',
      'MQTT (Mosquitto)',
      'Socket.io',
      'Docker Compose',
      'Nginx',
      'Cloudinary',
      'Google OAuth 2.0',
    ],
    features: [
      'Zarządzanie kursami: tworzenie, edycja, publikowanie i usuwanie materiałów edukacyjnych.',
      'Moduł nauki wspierający lekcje w formacie Markdown z podglądem na żywo.',
      'Dedykowany czat na żywo dla uczestników każdego kursu w oparciu o Socket.io i MQTT.',
      'Granularne uprawnienia: podział na konta twórców (edytorów) oraz kursantów (odczyt).',
      'Wielojęzyczność (i18next): wbudowane wsparcie dla języka polskiego i angielskiego.',
      'Bezpieczna autoryzacja sesyjna zabezpieczona tokenami CSRF i integracją Google Auth.',
      'Chmurowy hosting okładek kursów i serwowanie mediów z wykorzystaniem Cloudinary.',
    ],
    architectureOverview:
      'Serwer Nginx pełni rolę Reverse Proxy przekierowującego zapytania do kontenera React (frontend) oraz Node.js Express (backend). Baza PostgreSQL 17 przechowuje relacyjne dane kursów i użytkowników, Redis zarządza podręczną pamięcią cache i sesjami, a Eclipse Mosquitto (MQTT) odpowiada za szybkie asynchroniczne powiadomienia i transmisję wiadomości czatu na żywo.',
    highlights: [
      '100% skonteneryzowane środowisko deweloperskie i produkcyjne (Docker Compose)',
      'Zaawansowane mechanizmy zabezpieczeń CSRF + Google OAuth 2.0',
      'Skalowalny broker wiadomości MQTT powiązany ze stosem czatu Socket.io',
    ],
    metrics: [
      { label: 'Architektura', value: 'Docker Compose' },
      { label: 'Baza Danych', value: 'PostgreSQL + Redis' },
      { label: 'Wsparcie Językowe', value: 'Polski / Angielski' },
    ],
    date: '2025 - 2026',
  },
  {
    id: 'marine-recognition',
    title: 'Marine Recognition & AIS Anomaly Pipeline',
    shortDescription:
      'Model uczenia maszynowego (PyTorch) oraz pipeline analityczny GPS AIS do automatycznej detekcji manewrów statków i anomalii morskich.',
    fullDescription:
      'Projekt nagrodzony II miejscem w ogólnopolskim konkursie Morze AI. Głównym celem systemu jest ciągła analityka strumieniowych i historycznych sygnałów z nadajników nawigacyjnych AIS (Automatic Identification System). Opracowany pipeline przelicza współrzędne geograficzne, prędkość oraz kurs statków, a model sieci neuronowej w PyTorch klasyfikuje manewry jednostek morskich w czasie oraz identyfikuje nietypowe trajektorie (outliery / anomalie morskie).',
    category: 'AI / Machine Learning',
    featured: true,
    awardBadge: '🏆 2. Miejsce w Konkursie Morze AI',
    githubUrl: 'https://github.com/wozniak04/marine_recognition',
    techStack: [
      'Python',
      'PyTorch',
      'Data Analytics',
      'AIS GPS Signals',
      'Folium / Maps',
      'NumPy',
      'Pandas',
      'UV Package Manager',
    ],
    features: [
      'Automatyczne przetwarzanie czyszczenie i filtracja surowych rekordów z sygnałów GPS AIS.',
      'Detekcja i klasyfikacja manewrów statków (zwroty, wyhamowania, manewry portowe) za pomocą sieci neuronowej PyTorch.',
      'Algorytm wykrywania w czasie rzeczywistym outlierów i potencjalnie niebezpiecznych trajektorii rejsów.',
      'Wizualizacja trasy statków i nakładanie anomalii na interaktywną mapę nawigacyjną (Folium/Mapbox).',
      'Wydajny, zoptymalizowany pod kątem pamięci pipeline danych operujący na plikach wag `ship_model.pth`.',
    ],
    architectureOverview:
      'Data-pipeline przyjmuje dane AIS, przeprowadza inżynierię cech (współrzędne, delta prędkości, zmiana kąta kursu), a następnie przekazuje je do wyselekcjonowanego modelu PyTorch. Wyniki predykcji wraz z lokalizacją geograficzną są mapowane i wizualizowane na mapach przestrzennych.',
    highlights: [
      'Zdobyte 2. miejsce w prestiżowym konkursie analitycznym Morze AI',
      'Autorski algorytm wyciągania cech czasoprzestrzennych z depesz AIS',
      'Model PyTorch gotowy do analizy w czasie rzeczywistym',
    ],
    metrics: [
      { label: 'Osiągnięcie', value: '🏆 2. Miejsce Morze AI' },
      { label: 'Framework ML', value: 'PyTorch' },
      { label: 'Dane Wejściowe', value: 'GPS AIS Trajectories' },
    ],
    date: '2026',
  },
  {
    id: 'konfigurator-komputera',
    title: 'AI PC Configurator',
    shortDescription:
      'Inteligentny konfigurator zestawów komputerowych wspomagany algorytmami sztucznej inteligencji.',
    fullDescription:
      'Aplikacja webowa pomagająca użytkownikom w doborze optymalnych podzespołów komputerowych w oparciu o ich budżet, przeznaczenie (gry, obróbka wideo, ML) oraz weryfikację kompatybilności gniazd procesora, poboru mocy zasilacza i gabarytów obudowy.',
    category: 'Web App',
    featured: false,
    githubUrl: 'https://github.com/wozniak04/konfigurator-komputera',
    techStack: ['TypeScript', 'React', 'Node.js', 'AI API'],
    features: [
      'Automatyczne dobieranie zestawów PC według budżetu.',
      'Sprawdzanie kompatybilności podstawki CPU, RAM i wymogów mocy zasilacza.',
      'Rekomendacje podzespołów z wykorzystaniem sztucznej inteligencji.',
    ],
    date: '2023',
  },
  {
    id: 'metroloty',
    title: 'Metroloty Landing Page',
    shortDescription:
      'Promocyjna strona internetowa innowacyjnej technologii miejskiej do zbierania petycji i wsparcia społecznego.',
    fullDescription:
      'Nowoczesny landing page stworzony w celu rozpromowania innowacyjnej technologii transportu metropolitalnego, zbierania podpisów pod petycjami oraz angażowania społeczności lokalnej.',
    category: 'Web App',
    featured: false,
    githubUrl: 'https://github.com/wozniak04/metroloty',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Interaktywna prezentacja założeń projektu metropolitalnego.',
      'System zbierania podpisów i wsparcia technologii.',
      'Dostosowanie do urządzeń mobilnych (Mobile First).',
    ],
    date: '2023',
  },
  {
    id: 'scrapping-olx',
    title: 'OLX iPhone Offer Scraper',
    shortDescription:
      'Automatyczny skrypt scrapperujący i powiadamiający o okazjach cenowych smartfonów.',
    fullDescription:
      'Narzędzie w języku Python parsujące ogłoszenia w poszukiwaniu atrakcyjnych ofert cenowych z automatycznym filtrowaniem fałszywych lub uszkodzonych przedmiotów.',
    category: 'Data / Tools',
    featured: false,
    githubUrl: 'https://github.com/wozniak04/Scrappingolx',
    techStack: ['Python', 'BeautifulSoup', 'Scrapy', 'Automation'],
    features: [
      'Automatyczne przeszukiwanie ogłoszeń w interwałach czasowych.',
      'Filtrowanie ofert według progu cenowego i opisu stanu sprzętu.',
    ],
    date: '2024',
  },
];

export const PROJECTS_DATA_EN: Project[] = [
  {
    id: 'ai-referral-prediction',
    title: 'Predicting AI Referral Opportunities in LLMs (RAG Optimization)',
    shortDescription:
      'Machine learning ranking model (Random Forest) and data pipeline (30k pages, GroupKFold by client_id) predicting RAG citations and referral traffic from AI search assistants (ChatGPT, Perplexity, Claude).',
    fullDescription:
      'Comprehensive scientific research study and machine learning model designed for SEO strategists and editorial teams. The system evaluates 30,000 anonymized content items across a panel of 79M+ production data rows (FlyRank Benchmark Panel) to predict Retrieval-Augmented Generation (RAG) citations and referral opportunities from AI search assistants (ChatGPT, Perplexity, Claude). Using an honest GroupKFold cross-validation split by client_id eliminated a 20% domain memorization gap, achieving an out-of-fold Precision@50 of 68.00% (a 2.12x gain over baseline heuristics).',
    category: 'AI / Machine Learning',
    featured: true,
    awardBadge: '📄 Data Science Research Paper',
    githubUrl: 'https://github.com/wozniak04/ml-starter',
    paperUrl: '/projects/ai-referral-prediction/paper',
    techStack: [
      'Python',
      'scikit-learn',
      'PyTorch',
      'Random Forest',
      'GroupKFold',
      'Pandas',
      'NumPy',
      'Data Pipelines',
    ],
    features: [
      'Evaluated 30,000 active content items from a 79M+ record production analytics panel.',
      'Random Forest ranking classifier (100 estimators, max depth of 6) trained on search and structural attributes.',
      'Honest 5-fold GroupKFold validation split by client_id preventing entity data leakage and domain memorization.',
      'Out-of-fold Precision@50 of 68.00% (vs 32.00% baseline heuristic rule and 6.43% random baseline rate).',
      'Quantified a 20.00% Memorization Gap demonstrating traditional random split overfitting on domain authority.',
      'Feature importance analysis identifying Organic Impressions (33.95%) and Word Count (31.11%) as primary RAG drivers.',
      'Operational Content Action Playbook mapping model probabilities to reason codes with No-Go Automations guardrails.',
    ],
    architectureOverview:
      'The data pipeline ingests raw organic search metrics and structural content attributes, strictly excluding target-derived columns to prevent label leakage. An honest 5-Fold GroupKFold split grouped by client_id guarantees that client domains in validation folds are never seen during model training. The tuned Random Forest classifier computes out-of-fold probability scores, which are translated into relative opportunity ranks and human-actionable reason codes.',
    highlights: [
      '2.12x precision gain (68.00% vs 32.00%) over industry rule-based heuristics',
      'Empirical proof of a 20.00% domain memorization gap in standard K-Fold splitting',
      '100% reproducible research pipeline with version-controlled notebooks and metric receipts',
    ],
    metrics: [
      { label: 'Precision@50', value: '68.00%' },
      { label: 'Lift vs Baseline', value: '2.12×' },
      { label: 'Memorization Gap', value: '20.00%' },
      { label: 'Evaluated Items', value: '30,000' },
    ],
    date: '2026',
  },
  {
    id: 'e-learning-platform',
    title: 'E-Learning Platform',
    shortDescription:
      'A modern, microservice educational platform for online courses with real-time chat and Docker containers.',
    fullDescription:
      'Comprehensive e-learning platform built on containerized architecture (Docker Compose). Enables creating, editing, and publishing courses, an interactive learning module with Markdown lessons, and a bilingual (PL/EN) interface. Features a dedicated real-time chat powered by Socket.io communication and an MQTT message broker (Eclipse Mosquitto). Security is ensured via a session system with CSRF token protection and integrated Google OAuth 2.0 authentication.',
    category: 'Full-Stack',
    featured: true,
    awardBadge: 'Featured Full-Stack Project',
    githubUrl: 'https://github.com/wozniak04/e-learning-platform',
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Zustand',
      'Node.js',
      'Express',
      'PostgreSQL 17',
      'Redis',
      'MQTT (Mosquitto)',
      'Socket.io',
      'Docker Compose',
      'Nginx',
      'Cloudinary',
      'Google OAuth 2.0',
    ],
    features: [
      'Course management: creation, editing, publishing, and deleting educational content.',
      'Learning module supporting Markdown lessons with live interactive preview.',
      'Dedicated real-time chat room for participants of each course using Socket.io & MQTT.',
      'Granular role permissions: separation between creator (editor) and student (read-only) accounts.',
      'Multilingual support (i18next): built-in support for Polish and English languages.',
      'Secure session authentication protected with CSRF tokens and Google Auth integration.',
      'Cloud hosting for course cover images and media serving using Cloudinary.',
    ],
    architectureOverview:
      'Nginx server acts as a Reverse Proxy routing requests to the React container (frontend) and Node.js Express (backend). PostgreSQL 17 database stores relational course and user data, Redis manages in-memory cache and sessions, and Eclipse Mosquitto (MQTT) handles fast asynchronous notifications and live chat message transmission.',
    highlights: [
      '100% containerized development and production environment (Docker Compose)',
      'Advanced CSRF security mechanisms + Google OAuth 2.0',
      'Scalable MQTT message broker coupled with Socket.io chat stack',
    ],
    metrics: [
      { label: 'Architecture', value: 'Docker Compose' },
      { label: 'Database', value: 'PostgreSQL + Redis' },
      { label: 'Language Support', value: 'Polish / English' },
    ],
    date: '2025 - 2026',
  },
  {
    id: 'marine-recognition',
    title: 'Marine Recognition & AIS Anomaly Pipeline',
    shortDescription:
      'PyTorch machine learning model and GPS AIS data pipeline for automated ship maneuver classification and maritime anomaly detection.',
    fullDescription:
      'Awarded 2nd Place in the nationwide Morze AI competition. The core purpose of the system is continuous analytics on streaming and historical signals from AIS (Automatic Identification System) navigation transponders. The developed pipeline calculates geographic coordinates, speed, and vessel heading, while a PyTorch neural network model classifies ship maneuvers over time and identifies unusual trajectories (outliers / maritime anomalies).',
    category: 'AI / Machine Learning',
    featured: true,
    awardBadge: '🏆 2nd Place in Morze AI Competition',
    githubUrl: 'https://github.com/wozniak04/marine_recognition',
    techStack: [
      'Python',
      'PyTorch',
      'Data Analytics',
      'AIS GPS Signals',
      'Folium / Maps',
      'NumPy',
      'Pandas',
      'UV Package Manager',
    ],
    features: [
      'Automated data preprocessing, cleaning, and filtering of raw GPS AIS signal records.',
      'Detection and classification of ship maneuvers (turns, speed drops, harbor maneuvers) using PyTorch neural networks.',
      'Real-time algorithm for identifying spatial outliers and potentially dangerous voyage trajectories.',
      'Visualization of vessel tracks and anomaly overlays on interactive navigation maps (Folium/Mapbox).',
      'Efficient, memory-optimized data pipeline operating on `ship_model.pth` neural weight checkpoints.',
    ],
    architectureOverview:
      'The data pipeline ingests raw AIS data, performs spatio-temporal feature engineering (coordinates, speed delta, heading angle variations), and feeds them into a tuned PyTorch model. Model inference predictions along with geographic positions are mapped onto spatial charts.',
    highlights: [
      'Awarded 2nd Place in the prestigious Morze AI analytics competition',
      'Custom spatio-temporal feature extraction algorithms for AIS messages',
      'PyTorch neural model engineered for real-time inference',
    ],
    metrics: [
      { label: 'Achievement', value: '🏆 2nd Place Morze AI' },
      { label: 'ML Framework', value: 'PyTorch' },
      { label: 'Input Data', value: 'GPS AIS Trajectories' },
    ],
    date: '2026',
  },
  {
    id: 'konfigurator-komputera',
    title: 'AI PC Configurator',
    shortDescription:
      'Intelligent custom PC builder powered by artificial intelligence algorithms.',
    fullDescription:
      'Web application assisting users in selecting optimal computer components based on budget, primary use-case (gaming, video editing, ML), featuring automatic socket compatibility checks, PSU wattage calculations, and case clearance verification.',
    category: 'Web App',
    featured: false,
    githubUrl: 'https://github.com/wozniak04/konfigurator-komputera',
    techStack: ['TypeScript', 'React', 'Node.js', 'AI API'],
    features: [
      'Automated PC part pick recommendations tailored to user budget.',
      'Socket compatibility checks for CPU, RAM types, and PSU power consumption.',
      'AI-assisted hardware recommendations and bottleneck prevention.',
    ],
    date: '2023',
  },
  {
    id: 'metroloty',
    title: 'Metroloty Landing Page',
    shortDescription:
      'Promotional website for an innovative urban transit technology designed for petition signatures and public support.',
    fullDescription:
      'Modern promotional landing page created to market an innovative metropolitan transport concept, collect petition signatures, and engage the local community.',
    category: 'Web App',
    featured: false,
    githubUrl: 'https://github.com/wozniak04/metroloty',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Interactive presentation of metropolitan transit concept key points.',
      'Signature collection and public support system.',
      'Mobile-first responsive visual layout.',
    ],
    date: '2023',
  },
  {
    id: 'scrapping-olx',
    title: 'OLX iPhone Offer Scraper',
    shortDescription:
      'Automated Web Scraper script monitoring and alerting on smartphone price deals.',
    fullDescription:
      'Python automation tool parsing classified listings for below-market deals with automatic filtering of fake or damaged item descriptions.',
    category: 'Data / Tools',
    featured: false,
    githubUrl: 'https://github.com/wozniak04/Scrappingolx',
    techStack: ['Python', 'BeautifulSoup', 'Scrapy', 'Automation'],
    features: [
      'Periodic automated listing scraping and threshold evaluation.',
      'Price threshold filtering and text sentiment analysis for damaged items.',
    ],
    date: '2024',
  },
];

export function getProjects(language: 'pl' | 'en'): Project[] {
  return language === 'en' ? PROJECTS_DATA_EN : PROJECTS_DATA_PL;
}

export const PROJECTS_DATA: Project[] = PROJECTS_DATA_PL;

export const SKILL_GROUPS_PL: SkillGroup[] = [
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React 19', level: 'Zaawansowany' },
      { name: 'TypeScript', level: 'Zaawansowany' },
      { name: 'JavaScript (ES6+)', level: 'Zaawansowany' },
      { name: 'HTML5 & CSS3 / SCSS', level: 'Zaawansowany' },
      { name: 'Vite & Webpack', level: 'Średni' },
      { name: 'Zustand & Redux', level: 'Zaawansowany' },
      { name: 'Responsive Web Design', level: 'Zaawansowany' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js & Express', level: 'Zaawansowany' },
      { name: 'PostgreSQL', level: 'Zaawansowany' },
      { name: 'Redis Cache', level: 'Średni' },
      { name: 'REST APIs & GraphQL', level: 'Zaawansowany' },
      { name: 'MQTT & Socket.io', level: 'Średni' },
      { name: 'C# / .NET', level: 'Średni' },
      { name: 'PHP', level: 'Podstawowy' },
    ],
  },
  {
    category: 'AI & Data Engineering',
    skills: [
      { name: 'Python', level: 'Zaawansowany' },
      { name: 'PyTorch', level: 'Średni' },
      { name: 'Data Pipeline Analytics', level: 'Zaawansowany' },
      { name: 'Pandas & NumPy', level: 'Zaawansowany' },
      { name: 'Jupyter & ML Modeling', level: 'Średni' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git & GitHub Actions', level: 'Zaawansowany' },
      { name: 'Docker & Docker Compose', level: 'Zaawansowany' },
      { name: 'Nginx Reverse Proxy', level: 'Średni' },
      { name: 'Vitest & Testing Library', level: 'Średni' },
      { name: 'Linux / Bash', level: 'Średni' },
    ],
  },
];

export const SKILL_GROUPS_EN: SkillGroup[] = [
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React 19', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'HTML5 & CSS3 / SCSS', level: 'Advanced' },
      { name: 'Vite & Webpack', level: 'Intermediate' },
      { name: 'Zustand & Redux', level: 'Advanced' },
      { name: 'Responsive Web Design', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Redis Cache', level: 'Intermediate' },
      { name: 'REST APIs & GraphQL', level: 'Advanced' },
      { name: 'MQTT & Socket.io', level: 'Intermediate' },
      { name: 'C# / .NET', level: 'Intermediate' },
      { name: 'PHP', level: 'Basic' },
    ],
  },
  {
    category: 'AI & Data Engineering',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'PyTorch', level: 'Intermediate' },
      { name: 'Data Pipeline Analytics', level: 'Advanced' },
      { name: 'Pandas & NumPy', level: 'Advanced' },
      { name: 'Jupyter & ML Modeling', level: 'Intermediate' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git & GitHub Actions', level: 'Advanced' },
      { name: 'Docker & Docker Compose', level: 'Advanced' },
      { name: 'Nginx Reverse Proxy', level: 'Intermediate' },
      { name: 'Vitest & Testing Library', level: 'Intermediate' },
      { name: 'Linux / Bash', level: 'Intermediate' },
    ],
  },
];

export function getSkillGroups(language: 'pl' | 'en'): SkillGroup[] {
  return language === 'en' ? SKILL_GROUPS_EN : SKILL_GROUPS_PL;
}

export const SKILL_GROUPS: SkillGroup[] = SKILL_GROUPS_PL;
