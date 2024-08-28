import React, { useEffect, useRef } from 'react';
import './services.css';
import SmallTitle from '../title/small_title/small_title';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Product design',
    description: 'Gérer la discovery et la delivery pour un produit réussi',
    link: '/services/product-design'
  },
  {
    title: 'Design system',
    description: 'Construire des systèmes de design cohérents et modulables',
    link: '/services/design-system'
  },
  {
    title: 'Facilitation',
    description: 'Faciliter les processus pour une collaboration efficace',
    link: '/services/facilitation'
  },
  {
    title: 'Branding',
    description: 'Construire une identité visuelle forte et mémorable',
    link: '/services/branding'
  },
  {
    title: 'Site internet',
    description: 'Imaginer et développer des sites web sur mesure et performants',
    link: '/services/site-internet'
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 } // Déclenchement à 10% de la visibilité
    );

    const elements = containerRef.current.querySelectorAll('.service-card');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className="services-section">
      <SmallTitle primaryText="Mes" secondaryText="services" />
      <div className="services-container" ref={containerRef}>
        {services.map((service, index) => (
          <Link 
            to={service.link} 
            key={index} 
            className={`service-card ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
          >
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
