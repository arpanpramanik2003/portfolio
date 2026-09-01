import { Navbar } from '../components/common/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Certificates } from '../components/sections/Certificates';
import { Research } from '../components/sections/Research';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/common/Footer';
import { CustomCursor } from '../components/common/CustomCursor';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-canvas text-text-main transition-colors duration-300 w-full max-w-full overflow-x-hidden lg:overflow-x-visible">
      <CustomCursor />
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden lg:overflow-x-visible">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
