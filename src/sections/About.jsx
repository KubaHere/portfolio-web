import { useI18n } from '../contexts/I18nContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

const About = () => {
  const { t } = useI18n();
  const [aboutRef, isAboutVisible] = useIntersectionObserver();

  const handleDownloadCV = () => {
    // Replace with actual CV file path
    const cvUrl = '/cv.pdf'; // You can place your CV in the public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-[YOUR_NAME].pdf';
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
                <div className="about__detail">
                  <span className="about__detail-label">Location:</span>
                  <span className="about__detail-value">[CITY, COUNTRY]</span>
                </div>
                
                <div className="about__detail">
                  <span className="about__detail-label">Email:</span>
                  <a href="mailto:jakub.zak.business@gmail.com" className="about__detail-value about__detail-link">
                    jakub.zak.business@gmail.com
                  </a>
                </div>
                
                <div className="about__detail">
                  <span className="about__detail-label">Experience:</span>
                  <span className="about__detail-value">2 years</span>
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
                <span className="about__image-text">[YOUR_PHOTO]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
