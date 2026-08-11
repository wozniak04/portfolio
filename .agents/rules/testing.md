# Strategia i Zasady Testowania (MANDATORY)

**Wszystkie tworzone elementy projektu muszą posiadać testy.** Obowiązuje poniższy cykl pracy:

1. **Logika i Stan (Utils, Custom Hooks, Helpers)**:
   - Podczas tworzenia logiki obowiązkowo piszemy testy jednostkowe.
   - Testy muszą uwzględniać **przypadki skrajne i sytuacje graniczne (_edge cases_)** oraz błędne/nietypowe dane wejściowe.
2. **Komponenty i Interfejs Użytkownika (UI)**:
   - Najpierw tworzony jest sam interfejs UI / komponent.
   - Komponent jest prezentowany użytkownikowi do akceptacji estetycznej i funkcjonalnej.
   - **Dopiero po zatwierdzeniu UI przez użytkownika** dopisywane są testy dla UI (np. React Testing Library / Component Tests).
3. **Testy End-to-End (E2E)**:
   - Gdy wszystkie zaplanowane funkcjonalności i sekcje zostaną ukończone i zaakceptowane, pisane są **testy E2E** sprawdzające pełne przepływy na stronie.
4. **Automatyczny Pipeline CI & Coverage Gate**:
   - Każdy Pull Request oraz push na `main` uruchamia weryfikację GitHub Actions (`ci.yaml`).
   - Uruchamiane są testy oraz generowany jest raport pokrycia kodu (`npm run test:coverage`).
   - **Jeśli jakikolwiek test nie przejdzie lub build zwróci błąd, scalenie do `main` oraz wdrożenie produkcyjne zostaną zablokowane.**
5. **Lokalizacja i Separacja Testów**:
   - **Testy NIE są umieszczane w katalogu `src/` obok komponentów.**
   - Wszystkie testy znajdują się w osobnym, przeznaczonym do tego katalogu `tests/` (np. `tests/unit/`, `tests/components/`, `tests/e2e/`).
