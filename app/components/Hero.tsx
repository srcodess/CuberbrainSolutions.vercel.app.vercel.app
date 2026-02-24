"use client";
import { useEffect, useState } from "react";

const images = [
  "/assets/hero-1.jpg",
  "/assets/hero-2.jpg",
  "/assets/hero-3.jpg",
  "/assets/hero-4.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      
      <div className="hero-content">
        <h1>
          Cubiertas, Cielo Rasos y <br />
          <span>Acabados Arquitectónicos</span>
        </h1>

        <p>
          Ejecutamos soluciones constructivas de alta calidad para proyectos
          residenciales, comerciales e industriales, con garantía y cumplimiento.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-cta">
            Cotiza tu proyecto ahora
          </a>
          <small>Respuesta en menos de 24 horas ·</small>
        </div>
      </div>
    </section>
  );
}
