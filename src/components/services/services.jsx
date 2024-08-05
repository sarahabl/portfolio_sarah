import React from 'react';
import './services.css';

// Exemple de données pour les services
const servicesData = [
  {
    id: 1,
    title: "Service 1",
    description: "Description du service 1.",
    image: "/path/to/image1.jpg"
  },
  {
    id: 2,
    title: "Service 2",
    description: "Description du service 2.",
    image: "/path/to/image2.jpg"
  },
  {
    id: 3,
    title: "Service 3",
    description: "Description du service 3.",
    image: "/path/to/image3.jpg"
  },
  {
    id: 4,
    title: "Service 4",
    description: "Description du service 4.",
    image: "/path/to/image4.jpg"
  },
  {
    id: 5,
    title: "Service 5",
    description: "Description du service 5.",
    image: "/path/to/image5.jpg"
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {servicesData.map(service => (
        <div className="service-card" key={service.id}>
          <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
          <div className="service-info">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
