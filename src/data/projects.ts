export type ProjectIcon = "jam" | "reader" | "learn" | "paint" | "dash";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  demoUrl: string;
  repoUrl: string;
  statusLabel: string;
  note?: string;
  hue: number;
  icon: ProjectIcon;
}

export const projects: Project[] = [
  {
    id: "gn-admin",
    name: "GN-Admin",
    tagline: "Panel de administración de Grupo Nebak",
    description:
      "Gestión integral de una protectora de animales: encuestas de pre-adopción, animales, familias de acogida, adopciones, socios, donaciones y almacén.",
    stack: ["JavaScript", "Panel admin", "Gestión"],
    demoUrl: "https://gn-admin.github.io/admin-dashboard/",
    repoUrl: "https://github.com/gn-admin/admin-dashboard",
    statusLabel: "En vivo",
    note: "Requiere cuenta de acceso",
    hue: 215,
    icon: "dash",
  },
  {
    id: "jam-session",
    name: "Jam Session",
    tagline: "Gestión de jam sessions",
    description:
      "Inscripciones de músicos, roles por equipo, escaleta en directo, material de estudio y módulo de caja y barra. Preparado para el próximo evento.",
    stack: ["Next.js 16", "Firebase", "Google Sheets", "Apps Script", "ES/EU"],
    demoUrl: "https://satisol-develop.github.io/jam-session/",
    repoUrl: "https://github.com/satisol-develop/jam-session",
    statusLabel: "En vivo",
    note: "Incluye modo demo sin servicios",
    hue: 265,
    icon: "jam",
  },
  {
    id: "saxo-reader",
    name: "Saxo Reader",
    tagline: "Transcripciones de saxo, encontrables",
    description:
      "Buscador con 884 piezas de 21 fuentes: filtra por tonalidad, tipo y fuente, y lee el PDF, el vídeo o la imagen dentro de la propia app.",
    stack: ["Vite", "React", "TypeScript", "Scraping", "BBDD JSON"],
    demoUrl: "https://satisol-develop.github.io/saxo-reader/",
    repoUrl: "https://github.com/satisol-develop/saxo-reader",
    statusLabel: "En vivo",
    note: "Scraping automático cada semana",
    hue: 180,
    icon: "reader",
  },
  {
    id: "learn-sax",
    name: "Learn Sax",
    tagline: "Practica el saxo con el navegador",
    description:
      "Escalas, círculo de cuartas y quintas, cuatriadas, ii-V-I e impro en soprano, alto y tenor, con audio generado en tiempo real.",
    stack: ["React 19", "Tone.js", "Zustand", "PWA"],
    demoUrl: "https://satisol-develop.github.io/learn-sax/",
    repoUrl: "https://github.com/satisol-develop/learn-sax",
    statusLabel: "En vivo",
    note: "Instalable como app en el móvil",
    hue: 145,
    icon: "learn",
  },
  {
    id: "web-pintor",
    name: "Web Pintor",
    tagline: "Galería del artista Mikel Artetxe",
    description:
      "Web de obras del artista plástico Mikel Artetxe: galería, contacto con reCAPTCHA y SEO listo para dominio propio.",
    stack: ["React 18", "Tailwind", "EmailJS", "reCAPTCHA"],
    demoUrl: "https://satisol-develop.github.io/web-pintor/",
    repoUrl: "https://github.com/satisol-develop/web-pintor",
    statusLabel: "En vivo",
    hue: 35,
    icon: "paint",
  },
];
