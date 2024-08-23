import React, { useRef, useEffect } from 'react';
import './realisations.css';
import SmallTitle from '../title/small_title/small_title';
import Slider from "react-slick";
import Tag from '../tags/tags';
import { useNavigate } from 'react-router-dom';
import projetWenabi from '../../assets/projet_wenabi.png';
import projetBodachella from '../../assets/projet_bodachella.png';
import projetGraies from '../../assets/projet_graies.png';
import projetE2R from '../../assets/projet_e2R.png';

const projectData = [
  {
    tags: ["Product Design", "Design system"],
    title: "Redéfinir l'engagement collaborateur de wenabi",
    img: projetWenabi,
    link: "/portfolio/wenabi"
  },
  {
    tags: ["Création de site internet", "Branding"],
    title: "Créer une identité visuelle et un site internet pour Bodachella",
    img: projetBodachella,
    link: "/portfolio/bodachella"
  },
  {
    tags: ["Product Design", "Branding"],
    title: "Concevoir le MVP de Graines Sauvages",
    img: projetGraies,
    link: "/portfolio/talia"
  },
  {
    tags: ["Branding"],
    title: "Imaginer le logo de la méthode E2R",
    img: projetE2R,
    link: "/portfolio/methode-e2r"
  }
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Realisations = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const shuffledProjects = shuffleArray([...projectData]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Réinitialise le slider à la première slide
    }
  }, []);

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
    dots: false,
    infinite: true,
    speed: 250,
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
        {shuffledProjects.map((project, index) => (
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
