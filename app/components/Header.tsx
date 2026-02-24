"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["services", "contact", "clients"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="site-container header-inner">

        {/* BRAND */}
        <div className="brand">
          <img src="/logo.png" className="logo-img" alt="Cuberbrain" />
          <div className="brand-text">
            <strong>Cuberbrain</strong>
            <span>
              Instalación profesional de cubiertas, cielorrasos y acabados arquitectónicos
            </span>
          </div>
        </div>

        {/* NAV */}
        <nav className="nav">
          <a className={active === "services" ? "active" : ""} href="#services">
            Servicios
          </a>

          <a className={active === "contact" ? "active" : ""} href="#contact">
            Contacto
          </a>

          <a className={active === "clients" ? "active" : ""} href="#clients">
            Clientes
          </a>

          {/* BOTÓN COTIZAR */}
          <a href="#contact" className="btn-cta">
  Cotizar ahora
</a>
        </nav>

      </div>
    </header>
  );
}
