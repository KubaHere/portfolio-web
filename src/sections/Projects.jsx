import { useState } from 'react';
import { useI18n } from '../contexts/I18nContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects, techFilters } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const { t } = useI18n();
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.techTags.includes(techFilters.find(f => f.id === activeFilter)?.label));

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="projects__container">
        <div className={`projects__content ${isProjectsVisible ? 'projects__content--visible' : ''}`}>
          <div className="projects__header">
            <h2 className="projects__title">{t('projects.title')}</h2>
            <p className="projects__description">{t('projects.description')}</p>
          </div>
          
          <div className="projects__filters">
            {techFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`projects__filter-btn ${activeFilter === filter.id ? 'projects__filter-btn--active' : ''}`}
              >
                {t(filter.key)}
              </button>
            ))}
          </div>
          
          <div className="projects__grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="projects__card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openProjectModal(project)}
              >
                <div className="projects__card-image">
                  <div className="projects__card-image-placeholder">
                    <span className="projects__card-image-text">[PROJECT IMAGE]</span>
                  </div>
                </div>
                
                <div className="projects__card-content">
                  <h3 className="projects__card-title">{t(project.titleKey)}</h3>
                  <p className="projects__card-description">{t(project.descriptionKey)}</p>
                  
                  <div className="projects__card-tech">
                    {project.techTags.map(tag => (
                      <span key={tag} className="projects__card-tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="projects__card-actions">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-btn projects__card-btn--live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('projects.viewLive')}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-btn projects__card-btn--code"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('projects.viewCode')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="projects__modal-overlay" onClick={closeProjectModal}>
          <div className="projects__modal" onClick={(e) => e.stopPropagation()}>
            <button className="projects__modal-close" onClick={closeProjectModal}>
              ×
            </button>
            
            <div className="projects__modal-content">
              <div className="projects__modal-image">
                <div className="projects__modal-image-placeholder">
                  <span>[PROJECT IMAGE]</span>
                </div>
              </div>
              
              <div className="projects__modal-details">
                <h3 className="projects__modal-title">{t(selectedProject.titleKey)}</h3>
                <p className="projects__modal-description">{t(selectedProject.descriptionKey)}</p>
                
                <div className="projects__modal-tech">
                  <h4>Technologies:</h4>
                  <div className="projects__modal-tech-tags">
                    {selectedProject.techTags.map(tag => (
                      <span key={tag} className="projects__modal-tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="projects__modal-actions">
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__modal-btn projects__modal-btn--live"
                    >
                      {t('projects.viewLive')}
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a 
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__modal-btn projects__modal-btn--code"
                    >
                      {t('projects.viewCode')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
