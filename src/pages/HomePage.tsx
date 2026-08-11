import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
