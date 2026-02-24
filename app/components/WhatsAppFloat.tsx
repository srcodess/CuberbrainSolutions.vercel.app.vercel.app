"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573173931581?text=Hola%20quiero%20una%20cotización"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",     // 👈 IZQUIERDA FORZADA
        right: "auto",    // 👈 ANULA DERECHA
        width: "60px",    // 👈 MÁS GRANDE
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "9999px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        boxShadow: "0 15px 40px rgba(37,211,102,0.6)",
        animation: "pulse 2s infinite",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M19.11 17.93c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.97 2.62 1.11 2.8c.14.18 1.91 2.91 4.62 4.08.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.06-.11-.25-.18-.52-.32z" />
        <path d="M26.64 5.36C23.85 2.57 20.09 1 16.12 1 7.98 1 1.36 7.63 1.36 15.76c0 2.63.69 5.2 2 7.46L1 31l7.96-2.09c2.19 1.19 4.65 1.82 7.16 1.82 8.14 0 14.76-6.63 14.76-14.76 0-3.97-1.55-7.71-4.24-10.61zM16.12 28.2c-2.27 0-4.5-.61-6.44-1.76l-.46-.27-4.72 1.24 1.26-4.6-.3-.47c-1.25-1.98-1.91-4.27-1.91-6.58 0-6.84 5.57-12.4 12.41-12.4 3.32 0 6.44 1.29 8.78 3.63 2.35 2.35 3.64 5.47 3.64 8.78 0 6.84-5.57 12.4-12.4 12.4z" />
      </svg>

      {/* animación inline */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(24, 24, 44, 0.7);
          }
          70% {
            transform: scale(1.08);
            box-shadow: 0 0 0 22px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </a>
  );
}
