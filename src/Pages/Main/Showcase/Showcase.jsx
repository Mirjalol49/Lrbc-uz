import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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

import "./Showcase.css"

const projects = [
  {
    id: 1,
    title: "Toshkent Chinni Zavodi Rekonstruksiyasi",
    description: "Prezident Shavkat Mirziyoyev tashabbuslari asosida 1952-yilda tashkil etilgan tarixiy Toshkent chinni zavodining to'liq rekonstruksiyasi. Aloqabank tomonidan 87 milliard so'm qiymatidagi loyiha amalga oshirilib, 300 ta ish o'rni yaratildi. Zavodda yiliga 30 million dona oshxona idishlari, suvenirlar ishlab chiqariladi va ko'plab mamlakatlarga eksport qilinadi.",
    images: [chinni1, chinni2, chinni3, chinni4, chinni6, chinni7, chinni8],
    category: "Sanoat Rekonstruksiyasi",
    status: "Prezident tomonidan ochilgan"
  },
  {
    id: 2,
    title: "World Bank Uzbekistan Markaziy Ofisi",
    description: "Toshkent Biznes Markazining 13-15-qavatlarida joylashgan World Bank Uzbekistan ning markaziy ofisini qayta ta'mirlash va jihozlash ishlari",
    images: [qayta1, qayta2, qayta3, qayta4, qayta5],
    category: "Ofis Ta'mirlash",
    status: "Tugallangan"
  },
  {
    id: 3,
    title: "Tijorat Majmuasi Qurilishi",
    description: "Zamonaviy tijorat majmuasining to'liq qurilishi va jihozlanishi. Loyiha eng yuqori sifat standartlariga muvofiq amalga oshirildi.",
    images: [img1, img2, img3, img4],
    category: "Tijorat Qurilishi",
    status: "Tugallangan"
  }
];

export default function AdvancedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <h2 className="projects-title">Bizning Loyihalar</h2>
          <p className="projects-subtitle">
            Biz amalga oshirgan eng yaxshi loyihalarni ko'ring
          </p>
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
                  <div className={`project-status ${project.status.includes('Prezident') ? 'presidential' : ''}`}>
                    {project.status}
                  </div>
                </div>
                <div className="project-hover-overlay">
                  <button className="view-project-btn">
                    Batafsil Ko'rish
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
                  <h3>Loyiha Haqida</h3>
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
