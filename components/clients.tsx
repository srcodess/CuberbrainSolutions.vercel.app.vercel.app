"use client";
import React from "react";

const clients = [
  {
    name: "Constructora ABC",
    service: "Cubiertas metálicas industriales",
  },
  {
    name: "Arquitectura Moderna SAS",
    service: "Cielorrasos y acabados arquitectónicos",
  },
  {
    name: "Centro Comercial XYZ",
    service: "Cubiertas plásticas y soluciones translúcidas",
  },
];

export default function Clients() {
  return (
    <section id="clientes" className="services-section">
      <div className="site-container">
        <h2 className="section-title">Clientes que confían en nosotros</h2>
        <p className="section-sub">
          Proyectos ejecutados con calidad, cumplimiento y respaldo técnico
        </p>

        <div className="services-grid">
          {clients.map((client) => (
            <div key={client.name} className="service-card">
              <div className="service-content">
                <h3>{client.name}</h3>
                <p>{client.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
