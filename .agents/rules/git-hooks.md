# Quality Control & Git Hooks Rules

W projekcie stosowany jest rygorystyczny system kontroli jakości przed zrobieniem commita oraz przed merge do `main`:

### 1. Formatowanie Kodu (Prettier)

- Cały kod źródłowy oraz pliki konfiguracyjne muszą być sformatowane zgodnie z regułami z `.prettierrc`.
- Komenda lokalna do formatowania: `npm run format`.
- Komenda weryfikująca: `npm run format:check`.

### 2. Git Hooks (Husky & lint-staged)

- Przed każdym `git commit` automatycznie uruchamiane są haczyki Git Hooks:
  - **`pre-commit`**: Odpala `lint-staged`, który automatycznie formatuje zaimplementowany kod (`prettier --write`) oraz sprawdza błędy linterem (`oxlint`) wyłącznie na zmienionych plikach.

### 3. Konwencja Nazewnictwa Commitów (Commitlint / Conventional Commits)

- Przed zapisaniem commita haczyk **`commit-msg`** weryfikuje poprawność tytułu wiadomości commita zgodnie ze standardem **Conventional Commits**:
  - `feat:` – nowa funkcjonalność (np. `feat: add project gallery component`)
  - `fix:` – naprawa błędu (np. `fix: resolve mobile navigation overflow`)
  - `docs:` – zmiany w dokumentacji
  - `style:` – zmiany formatowania/stylu bez zmian w kodzie
  - `refactor:` – refaktoryzacja kodu
  - `test:` – dodanie lub zmiana testów
  - `chore:` – aktualizacja zależności lub narzędzi (np. `chore: update dependencies`)
