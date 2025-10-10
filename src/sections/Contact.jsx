import { useState } from 'react';
import { useI18n } from '../contexts/I18nContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../config/emailjs';
import './Contact.css';

const Contact = () => {
  const { t } = useI18n();
  const [contactRef, isContactVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL
      };

      // Odeslání emailu přes EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.USER_ID
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="contact__container">
        <div className={`contact__content ${isContactVisible ? 'contact__content--visible' : ''}`}>
          <div className="contact__header">
            <h2 className="contact__title">{t('contact.title')}</h2>
            <p className="contact__description">{t('contact.description')}</p>
          </div>
          
          <div className="contact__body">
            <div className="contact__info">
              <div className="contact__info-item">
                <div className="contact__info-icon">📧</div>
                <div className="contact__info-content">
                  <h3>Email</h3>
                  <a href="mailto:zak@jakubzak.tech" className="contact__info-link">
                    zak@jakubzak.tech
                  </a>
                </div>
              </div>
              
              <div className="contact__info-item">
                <div className="contact__info-icon">📍</div>
                <div className="contact__info-content">
                  <h3>{t('contact.location')}</h3>
                  <p>{t('contact.locationMessage')}</p>
                </div>
              </div>
              
              <div className="contact__info-item">
                <div className="contact__info-icon">💼</div>
                <div className="contact__info-content">
                  <h3>{t('contact.availability')}</h3>
                  <p>{t('contact.availabilityMessage')}</p>
                </div>
              </div>
            </div>
            
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`contact__form-input ${errors.name ? 'contact__form-input--error' : ''}`}
                  placeholder={t('contact.namePlaceholder')}
                />
                {errors.name && (
                  <span className="contact__form-error">{errors.name}</span>
                )}
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`contact__form-input ${errors.email ? 'contact__form-input--error' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <span className="contact__form-error">{errors.email}</span>
                )}
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className={`contact__form-textarea ${errors.message ? 'contact__form-textarea--error' : ''}`}
                  placeholder={t('contact.messagePlaceholder')}
                />
                {errors.message && (
                  <span className="contact__form-error">{errors.message}</span>
                )}
              </div>
              
              <button
                type="submit"
                className="contact__form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? '...' : t('contact.send')}
              </button>
              
              {submitStatus && (
                <div className={`contact__form-status contact__form-status--${submitStatus}`}>
                  {submitStatus === 'success' ? t('contact.success') : t('contact.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
