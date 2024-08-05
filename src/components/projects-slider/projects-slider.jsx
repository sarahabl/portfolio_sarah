import React, { useRef, useEffect } from 'react';
import './projects-slider.css';
import Tag from '../tags/tags'; // Assure-toi que le chemin d'importation est correct

// Exemple de données pour les projets
const projectsData = [
  {
    id: 1,
    title: "Projet 1",
    image: "/path/to/image1.jpg",
    tags: ["Tag1", "Tag2"]
  },
  {
    id: 2,
    title: "Projet 2",
    image: "/path/to/image2.jpg",
    tags: ["Tag3"]
  },
  {
    id: 3,
    title: "Projet 3",
    image: "/path/to/image3.jpg",
    tags: ["Tag4", "Tag5"]
  },
  // Ajoute plus de projets si nécessaire
];

const ProjectsSlider = () => {
  const sliderRef = useRef(null);

  const handleScroll = (event) => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      sliderRef.current.scrollLeft = scrollLeft + event.deltaY;
      event.preventDefault(); // Empêche le défilement vertical de la page
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="slider-container" ref={sliderRef}>
      {projectsData.map(project => (
        <div className="project-card" key={project.id}>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSlider;
