import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useI18n } from '../contexts/I18nContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo" onClick={() => scrollToSection('hero')}>
          <span className="header__logo-text">Jakub Žák</span>
        </div>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li><button onClick={() => scrollToSection('hero')} className="header__nav-link">{t('nav.home')}</button></li>
            <li><button onClick={() => scrollToSection('about')} className="header__nav-link">{t('nav.about')}</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="header__nav-link">{t('nav.skills')}</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="header__nav-link">{t('nav.projects')}</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="header__nav-link">{t('nav.contact')}</button></li>
          </ul>
        </nav>

        <div className="header__controls">
          <button
            onClick={toggleLanguage}
            className="header__control-btn header__control-btn--lang"
            aria-label={`Switch to ${lang === 'en' ? 'Czech' : 'English'}`}
          >
            {lang === 'en' ? 'CZ' : 'EN'}
          </button>
          
          <button
            onClick={toggleTheme}
            className="header__control-btn header__control-btn--theme"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="header__mobile-toggle-line"></span>
            <span className="header__mobile-toggle-line"></span>
            <span className="header__mobile-toggle-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
