import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { I18nProvider } from './contexts/I18nContext';
import './App.css';

function App() {
  return (
    <I18nProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

export default App;
