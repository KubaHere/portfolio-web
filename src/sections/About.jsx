import { useI18n } from '../contexts/I18nContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';
import photo from '../assets/profile.jpeg'
import CV from '../assets/Jakub Žák.pdf'

const About = () => {
  const { t } = useI18n();
  const [aboutRef, isAboutVisible] = useIntersectionObserver();

  const handleDownloadCV = () => {
    // Replace with actual CV file path
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Jakub Žák.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about__container">
        <div className={`about__content ${isAboutVisible ? 'about__content--visible' : ''}`}>
          <div className="about__header">
            <h2 className="about__title">{t('about.title')}</h2>
          </div>
          
          <div className="about__body">
            <div className="about__text">
              <p className="about__bio">
                {t('about.bio')}
              </p>
              
              <div className="about__details">
                <div className="about__detail_container">
                <div className="about__detail">
                  <span className="about__detail-label">{t('about.location')}:</span>
                  <span className="about__detail-value">{t('about.locationValue')}</span>
                </div>
                
                <div className="about__detail">
                  <span className="about__detail-label">{t('about.email')}:</span>
                  <a href="mailto:jakub.zak.business@gmail.com" className="about__detail-value about__detail-link">
                    jakub.zak.business@gmail.com
                  </a>
                </div>
                
                <div className="about__detail">
                  <span className="about__detail-label">{t('about.experience')}:</span>
                  <span className="about__detail-value">{t('about.experienceValue')}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleDownloadCV}
                className="about__cv-btn"
              >
                {t('about.downloadCV')}
              </button>
            </div>
            
            <div className="about__image">
              <div className="about__image-placeholder">
                <img src={photo} alt="Jakub Žák" className="about__image-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
