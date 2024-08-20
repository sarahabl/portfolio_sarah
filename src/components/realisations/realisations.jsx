import React, { useRef, useEffect } from 'react';
import './realisations.css';
import SmallTitle from '../title/small_title/small_title';
import Slider from "react-slick";
import Tag from '../tags/tags'; // Import du composant Tag
import { useNavigate } from 'react-router-dom';

// Import des images des projets
import projetWenabi from '../../assets/projet_wenabi.png';
import projetBodachella from '../../assets/projet_bodachella.png';
import projetGraies from '../../assets/projet_graies.png';
import projetE2R from '../../assets/projet_e2R.png';

const projectData = [
  {
    tags: ["Product Design", "Design system"],
    title: "Redéfinir l'engagement collaborateur de wenabi",
    img: projetWenabi,
    link: "/portfolio/Wenabi" // Utilisation des routes pour la navigation
  },
  {
    tags: ["Création de site internet", "Branding"],
    title: "Créer une identité visuelle et un site internet pour Bodachella",
    img: projetBodachella,
    link: "/portfolio/Bodachella"
  },
  {
    tags: ["Product Design", "Branding"],
    title: "Concevoir le MVP de Graines Sauvages",
    img: projetGraies,
    link: "/portfolio/Talia"
  },
  {
    tags: ["Branding"],
    title: "Imaginer le logo de la méthode E2R",
    img: projetE2R,
    link: "/portfolio/MethodeE2R"
  }
];

const Realisations = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = (event) => {
      if (sliderRef.current) {
        const slider = sliderRef.current.innerSlider.list;
        slider.scrollLeft += event.deltaY;
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="realisations-container">
      <SmallTitle primaryText="Mes" secondaryText="réalisations" />
      <Slider {...settings} ref={sliderRef} className="realisations-slider">
        {projectData.map((project, index) => (
          <div key={index} className="realisations-card-wrapper" onClick={() => navigate(project.link)}>
            <div className="realisations-card">
              <div className="realisations-tags">
                {project.tags.map((tag, index) => (
                  <Tag key={index} content={tag} />
                ))}
              </div>
              <h3>{project.title}</h3>
              <div
                className="realisations-image"
                style={{ backgroundImage: `url(${project.img})` }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Realisations;
