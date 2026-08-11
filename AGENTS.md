# Wytyczne Projektu – Strona Portfolio (GitHub Pages)

## 📌 Cel Projektu

Projekt to osobista strona internetowa typu **Portfolio**, przeznaczona do darmowego hostowania na **GitHub Pages** (`<username>.github.io`).
Strona ma na celu zaprezentowanie umiejętności, sylwetki zawodowej oraz autorskich projektów.

---

## 🔄 CI/CD & Deployment

- **Automatyczny Deployment**: Strona posiada skonfigurowany pipeline CI/CD w GitHub Actions (`.github/workflows/deploy.yaml`).
- **Push do `main` = Produkcja**: **Każdy commit zmerged/pushed do gałęzi `main` jest automatycznie budowany i wdrażany bezpośrednio na produkcję** (GitHub Pages).
- **Jakość kodu**: Przed wypchnięciem zmian do `main` należy upewnić się, że budowanie (`npm run build`), testy oraz sprawdzanie typów TypeScript przebiegają bez błędów.

---

## 🚀 Sekcje Strony

1. **O mnie (About Me)**: Krótki bio, opis doświadczenia, umiejętności technicznych i zainteresowań.
2. **Umiejętności (Skills)**: Przejrzysty wykazy technologii, językowa i narzędziowa stacku (np. React, TypeScript, Node.js, Git).
3. **Projekty (Projects)**:
   - Karty/zrzuty ekranu dla każdego projektu.
   - Opisy funkcjonalności i zastosowanych technologii.
   - Odnośniki do repozytoriów GitHub oraz aktywnych demonstracji live (o ile są dostępne).
4. **Kontakt (Contact)**: Formularz lub sekcja z odnośnikami do e-maila, GitHub, LinkedIn itp.

---

## 🛠️ Stack Technologiczny

- **Core**: React 19 + TypeScript + Vite
- **Stylizowanie**: CSS / Vanilla CSS / Tailored CSS (Glassmorphism, nowoczesny Dark Mode, responsywność)
- **Hosting / Deployment**: GitHub Pages (w pełni statyczny frontend)

---

## 🎨 Zasady Designu i Jakości Kodowania

- **Estetyka Premium**: Strona powinna wywierać doskonałe pierwsze wrażenie (płynne przejścia, mikro-animacje, przejrzysta typografia, przemyślany ciemny motyw).
- **Responsywność (Mobile-First)**: Perfekcyjne wyświetlanie zarówno na telefonach, tabletach, jak i monitorach desktopowych.
- **Wydajność**: Optymalny czas ładowania, zoptowalizowane obrazy/zrzuty ekranu projektów.
- **Brak zbędnego backendu**: Całość ma działać jako czysty, statyczny bundle (Vite build).
