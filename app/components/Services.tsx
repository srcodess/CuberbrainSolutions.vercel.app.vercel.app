"use client";
import React from "react";

const services = [
  {
    title: "Cubiertas Metálicas",
    description:
      "Instalación profesional para proyectos industriales y comerciales.",
    image: "/assets/servicios/cubiertas-metalicas.jpg",
  },
  {
    title: "Cubiertas Plásticas",
    description:
      "PVC, policarbonato y soluciones translúcidas de alta resistencia.",
    image: "/assets/servicios/cubiertas-plasticas.jpg",
  },
  {
    title: "Cielorrasos",
    description:
      "Instalación técnica y acabados arquitectónicos profesionales.",
    image: "/assets/servicios/cielorrasos.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="site-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-sub">
          Instalación profesional de cubiertas y cielorrasos en Bogotá y toda Colombia
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact" className="btn btn-primary">
                  Solicitar cotización
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
