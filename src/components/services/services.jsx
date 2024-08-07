import React from 'react';
import './services.css';
import SmallTitle from '../title/small_title/small_title';
import productDesignImg from '../../assets/product_design.png';
import designSystemImg from '../../assets/design_system.png';
import facilitationImg from '../../assets/facilitation.png';
import brandingImg from '../../assets/branding.png';
import siteInternetImg from '../../assets/site_internet.png';

const services = [
  {
    title: 'Product design',
    image: productDesignImg,
    description: 'Gérer la discovery et la delivery pour un produit réussi',
    link: '/services/product-design'
  },
  {
    title: 'Design system',
    image: designSystemImg,
    description: 'Construire des systèmes de design cohérents et modulables',
    link: '/services/design-system'
  },
  {
    title: 'Facilitation',
    image: facilitationImg,
    description: 'Faciliter les processus pour une collaboration efficace',
    link: '/services/facilitation'
  },
  {
    title: 'Branding',
    image: brandingImg,
    description: 'Construire une identité visuelle forte et mémorable',
    link: '/services/branding'
  },
  {
    title: 'Site internet',
    image: siteInternetImg,
    description: 'Imaginer et développer des sites web sur mesure et performants',
    link: '/services/site-internet'
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <SmallTitle primaryText="Mes" secondaryText="services" />
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
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
