import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useLanguage } from "../../../context/LanguageContext";

// Import project images
import qayta1 from "../../../assets/Images/qayta_tamirlash1.jpg";
import qayta2 from "../../../assets/Images/qayta_tamirlash2.jpg";
import qayta3 from "../../../assets/Images/qayta_tamirlash3.jpg";
import qayta4 from "../../../assets/Images/qayta_tamirlash4.jpg";
import qayta5 from "../../../assets/Images/qayta_tamirlash5.jpg";
import img1 from "../../../assets/Images/1one.jpg";
import img2 from "../../../assets/Images/2one.jpg";
import img3 from "../../../assets/Images/3one.jpg";
import img4 from "../../../assets/Images/4one.jpg";
import chinni1 from "../../../assets/Images/chinni_zavod.jpg";
import chinni2 from "../../../assets/Images/chinni_zavod2.jpg";
import chinni3 from "../../../assets/Images/chinni_zavod3.jpg";
import chinni4 from "../../../assets/Images/chinni_zavod4.jpg";
import chinni6 from "../../../assets/Images/chinni_zavod6.jpg";
import chinni7 from "../../../assets/Images/chinni_zavod7.jpg";
import chinni8 from "../../../assets/Images/chinni_zavod8.jpg";
import project1 from "../../../assets/Images/project4.1.jpg";
import project2 from "../../../assets/Images/project4.2.jpg";
import project3 from "../../../assets/Images/project4.3.jpg";
import project4 from "../../../assets/Images/project4.4.jpg";
import project6 from "../../../assets/Images/project4.6.jpg";
import project7 from "../../../assets/Images/project4.7.jpg";
import project8 from "../../../assets/Images/project4.8.jpg";
import andijon1 from "../../../assets/Images/andijon1.jpg";
import andijon2 from "../../../assets/Images/andijon2.jpg";
import andijon3 from "../../../assets/Images/andijon3.jpg";
import andijon4 from "../../../assets/Images/andijon4.jpg";
import andijon5 from "../../../assets/Images/andijon5.jpg";
import andijon6 from "../../../assets/Images/andijon6.jpg";
import andijon7 from "../../../assets/Images/andijon7.jpg";
import iib1 from "../../../assets/Images/iib1.jpg";
import iib2 from "../../../assets/Images/iib2.jpg";
import iib3 from "../../../assets/Images/iib3.jpg";
import iib4 from "../../../assets/Images/iib4.jpg";
import iib5 from "../../../assets/Images/iib5.jpg";
import iib6 from "../../../assets/Images/iib6.jpg";
import iib7 from "../../../assets/Images/iib7.jpg";
import iib8 from "../../../assets/Images/iib8.jpg";

import "./Showcase.css"

export default function AdvancedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      ...t.showcase.projects.chinni,
      images: [chinni1, chinni2, chinni3, chinni4, chinni6, chinni7, chinni8],
    },
    {
      id: 2,
      ...t.showcase.projects.world_bank,
      images: [qayta1, qayta2, qayta3, qayta4, qayta5],
    },
    {
      id: 3,
      ...t.showcase.projects.commerce,
      images: [img1, img2, img3, img4],
    },
    {
      id: 4,
      ...t.showcase.projects.modern,
      images: [project1, project2, project3, project4, project6, project7, project8],
    },
    {
      id: 5,
      ...t.showcase.projects.water,
      images: [andijon1, andijon2, andijon3, andijon4, andijon5, andijon6, andijon7],
    },
    {
      id: 6,
      ...t.showcase.projects.iib,
      images: [iib1, iib2, iib3, iib4, iib5, iib6, iib7, iib8],
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">{t.showcase.title}</h2>
          <p className="projects-subtitle">{t.showcase.subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => openModal(project)}>
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-main-image"
                />
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                  <div className={`project-status ${project.status.includes('Prezident') || project.status.includes('President') || project.status.includes('Президент') ? 'presidential' : ''}`}>
                    {project.status}
                  </div>
                </div>
                <div className="project-hover-overlay">
                  <button className="view-project-btn">
                    {t.showcase.view_project}
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-meta">
                <span className="modal-category">{selectedProject.category}</span>
                <span className={`modal-status ${selectedProject.status.includes('Prezident') ? 'presidential' : ''}`}>
                  {selectedProject.status}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-gallery">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop
                  className="modal-swiper"
                >
                  {selectedProject.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${selectedProject.title} - ${index + 1}`}
                        className="modal-image"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="modal-info">
                <div className="modal-description">
                  <h3>{t.showcase.about_project}</h3>
                  <p>{selectedProject.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
