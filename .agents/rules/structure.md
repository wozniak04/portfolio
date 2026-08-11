# Struktura Projektu i Organizacja Kodów

Projekt musi zachowywać przejrzystą, czytelną i modularną strukturę folderów:

```text
portfolio/
├── .agents/              # Reguły i umiejętności agenta
│   └── rules/            # Dedykowane pliki reguł (testing.md, structure.md itp.)
├── .github/              # Automatyzacje i workflowy CI/CD GitHub Actions
│   └── workflows/        # ci.yaml, deploy.yaml
├── public/               # Zasoby statyczne (obrazy, zrzuty ekranów projektów, ikony)
├── src/                  # Czysty kod produkcyjny aplikacji (BEZ jakichkolwiek plików testowych)
│   ├── assets/           # Style, czcionki, obrazy importowane w kodzie
│   ├── components/       # Komponenty React (UI)
│   ├── hooks/            # Własne hooki React
│   ├── utils/            # Funkcje pomocnicze i logika biznesowa
│   ├── types/            # Definicje typów TypeScript
│   ├── App.tsx
│   └── main.tsx
└── tests/                # Wyodrębnione całe środowisko testowe
    ├── setup.ts          # Konfiguracja środowiska testowego (jest-dom)
    ├── components/       # Testy dla komponentów UI (React Testing Library)
    ├── unit/             # Testy jednostkowe dla utils/hooks (Vitest)
    └── e2e/              # Testy End-to-End całej aplikacji
```

### Zasady organizacji:

1. **Całkowita separacja testów**: Katalog `src/` zawiera wyłącznie czysty kod źródłowy produkcyjny. Wszystkie pliki testowe (`*.test.tsx`, `*.test.ts`) oraz plik konfiguracyjny `setup.ts` znajdują się w katalogu `tests/`.
2. **Krótkie i dedykowane moduły**: Komponenty w `src/components/` są dzielone tematycznie, posiadają przejrzyste nazwy i odrębne pliki stylów/typów w razie potrzeby.
