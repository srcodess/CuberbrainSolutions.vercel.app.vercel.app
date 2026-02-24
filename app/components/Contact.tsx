"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `
Nueva solicitud desde CuberBrain:

Nombre: ${name}
Correo: ${email}
Mensaje: ${message}
    `;

    window.open(
      `https://wa.me/573173931581?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="section">
      <div className="site-container">
        <div className="card max-w-xl mx-auto">
          <h2 className="section-title text-center">Contacto</h2>
          <p className="section-sub text-center">
            Escríbenos y te responderemos en menos de 24 horas
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4 mt-6">
            <input
              type="text"
              placeholder="Nombre"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Correo"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Mensaje"
              rows={4}
              className="input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-primary mt-2">
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
