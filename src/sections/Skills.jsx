import { useI18n } from '../contexts/I18nContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Skills.css';

const Skills = () => {
  const { t } = useI18n();
  const [skillsRef, isSkillsVisible] = useIntersectionObserver();

  const skills = [
    {
      nameKey: 'skills.python.name',
      descriptionKey: 'skills.python.description',
      level: 'Advanced',
      icon: '🐍',
      category: 'primary'
    },
    {
      nameKey: 'skills.javascript.name',
      descriptionKey: 'skills.javascript.description',
      level: 'Advanced',
      icon: '⚡',
      category: 'primary'
    },
    {
      nameKey: 'skills.react.name',
      descriptionKey: 'skills.react.description',
      level: 'Advanced',
      icon: '⚛️',
      category: 'secondary'
    },
    {
      nameKey: 'skills.git.name',
      descriptionKey: 'skills.git.description',
      level: 'Advanced',
      icon: '📝',
      category: 'secondary'
    },
    {
      nameKey: 'skills.css.name',
      descriptionKey: 'skills.css.description',
      level: 'Advanced',
      icon: '🎨',
      category: 'primary'
    },
    {
      nameKey: 'skills.typescript.name',
      descriptionKey: 'skills.typescript.description',
      level: 'Intermediate',
      icon: '🔷',
      category: 'primary'
    },
    {
      nameKey: 'skills.nodejs.name',
      descriptionKey: 'skills.nodejs.description',
      level: 'Intermediate',
      icon: '🟢',
      category: 'secondary'
    },
    
  ];
  

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills__container">
        <div className={`skills__content ${isSkillsVisible ? 'skills__content--visible' : ''}`}>
          <div className="skills__header">
            <h2 className="skills__title">{t('skills.title')}</h2>
            <p className="skills__description">{t('skills.description')}</p>
          </div>
          
          <div className="skills__grid">
            {skills.map((skill, index) => (
              <div 
                key={skill.nameKey}
                className={`skills__card skills__card--${skill.category} skills__card--${index % 2 === 0 ? 'even' : 'odd'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skills__card-icon">
                  <span className="skills__card-emoji">{skill.icon}</span>
                </div>
                
                <div className="skills__card-content">
                  <h3 className="skills__card-name">{t(skill.nameKey)}</h3>
                  <span className="skills__card-level">{skill.level}</span>
                  <p className="skills__card-description">{t(skill.descriptionKey)}</p>
                </div>
                
                <div className="skills__card-progress">
                  <div 
                    className="skills__card-progress-bar"
                    style={{ 
                      width: skill.level === 'Advanced' ? '90%' : 
                             skill.level === 'Intermediate' ? '70%' : '50%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
