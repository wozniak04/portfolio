# Standardy Wielojęzyczności (i18n / Localization)

1. **Obowiązkowe Tłumaczenia PL i EN dla Umiejętności (Skills) oraz Projektów**:
   - Każdy nowo dodawany element (umiejętności/Skills, opisy projektów, kategorie, sekcje, nagłówki, przyciski, komunikaty błędów i sukcesu) **MUSI bezwzględnie posiadać 100% kompletne i poprawne tłumaczenie w języku polskim (`PL`) oraz angielskim (`EN`)**.

2. **Umiejętności (Skills & Tech Stack)**:
   - Poziomy zaawansowania umiejętności (`Zaawansowany` / `Advanced`, `Średni` / `Intermediate`, `Podstawowy` / `Basic`) oraz nazwy kategorii muszą być dostarczane w obu językach poprzez funkcję `getSkillGroups(language)` w [`src/data/projects.ts`](src/data/projects.ts).

3. **Projekty (Projects Data)**:
   - Tytuły, krótkie opisy, pełne opisy Case Study, listy cech (`features`), architektura, wyróżniki (`highlights`), odznaczenia (`awardBadge`) oraz etykiety metryk (`metrics`) muszą być definiowane w kolekcjach `PROJECTS_DATA_PL` i `PROJECTS_DATA_EN` w [`src/data/projects.ts`](src/data/projects.ts).

4. **Słownik Tłumaczeń UI**:
   - Elementy nawigacji, przyciski, etykiety formularza i komunikaty systemowe znajdują się w pliku [`src/data/translations.ts`](src/data/translations.ts).
