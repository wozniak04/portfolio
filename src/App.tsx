import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<CaseStudyPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
