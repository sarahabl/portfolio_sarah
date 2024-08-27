import React from 'react';
import './services.css';
import SmallTitle from '../title/small_title/small_title';

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
  const handleServiceClick = (link) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = link;
  };

  return (
    <section className="services-section">
      <SmallTitle primaryText="Mes" secondaryText="services" />
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card" onClick={() => handleServiceClick(service.link)}>
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href={service.link} className="service-link">Voir</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
