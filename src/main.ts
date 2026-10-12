import "./style.css";
import { projects, type Project } from "./data/projects";

const svg = (paths: string, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const ARROW = svg(`<path d="M7 17 17 7"/><path d="M7 7h10v10"/>`, "icon icon-arrow");
const CHECK = svg(`<path d="M20 6 9 17l-5-5"/>`, "icon");
const EYE = svg(
  `<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>`,
);
const ROCKET = svg(
  `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`,
);
const REFRESH = svg(
  `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>`,
);
const CODE = svg(`<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>`);
const SUN = svg(
  `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`,
  "icon",
);
const MOON = svg(`<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`, "icon");

const GITHUB = svg(
  `<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>`,
  "icon",
);

const MARK = `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <rect x="2" y="2" width="28" height="28" rx="8" fill="hsl(223 18% 16%)" stroke="hsl(222 15% 26%)"/>
  <rect x="8" y="8" width="7" height="7" rx="2" fill="hsl(265 70% 72%)"/>
  <rect x="17" y="8" width="7" height="7" rx="2" fill="hsl(180 65% 62%)"/>
  <rect x="8" y="17" width="7" height="7" rx="2" fill="hsl(145 55% 62%)"/>
  <rect x="17" y="17" width="7" height="7" rx="2" fill="hsl(35 85% 68%)"/>
</svg>`;

const NUM_WORDS = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
const numWord = (n: number): string => NUM_WORDS[n] ?? String(n);
const capitalize = (s: string): string => s.replace(/^./, (c) => c.toUpperCase());

function projectCard(p: Project): string {
  const tags = p.stack.map((t) => `<li class="tag">${t}</li>`).join("");
  const note = p.note ? `<p class="card-note">${p.note}</p>` : "";
  return `
  <article class="card project-card" style="--hue: ${p.hue}">
    <div class="card-visual">
      <img class="card-shot" src="${import.meta.env.BASE_URL}screenshots/${p.id}.jpg" alt="Captura de la interfaz de ${p.name}" width="960" height="600" loading="lazy" decoding="async" />
      <span class="status"><span class="status-dot" aria-hidden="true"></span>${p.statusLabel}</span>
    </div>
    <div class="card-body">
      <h3 class="card-title">${p.name}</h3>
      <p class="card-tagline">${p.tagline}</p>
      <p class="card-desc">${p.description}</p>
      ${note}
      <ul class="tags">${tags}</ul>
    </div>
    <div class="card-footer">
      <a class="card-link" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">
        Abrir producto ${ARROW}
      </a>
      <a class="icon-link" href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Código de ${p.name} en GitHub">
        ${GITHUB}
      </a>
    </div>
  </article>`;
}

const trustItems = [
  "Público y gratuito",
  "En producción de verdad",
  "Despliegue automático",
  "Código abierto",
]
  .map((t) => `<li class="trust-item">${CHECK}<span>${t}</span></li>`)
  .join("");

const principles = [
  {
    icon: EYE,
    title: "Público y gratuito",
    text: "Salvo el panel de gestión, todo se puede probar sin registro ni pago. El código de cada producto es público en GitHub.",
  },
  {
    icon: ROCKET,
    title: "En producción",
    text: "No son demos de portfolio: cada producto se usa de verdad, con usuarios reales y datos reales detrás.",
  },
  {
    icon: REFRESH,
    title: "Mantenimiento continuo",
    text: "Saxo Reader revalida sus fuentes cada semana con scraping automático; Jam Session evoluciona con cada evento.",
  },
  {
    icon: CODE,
    title: "Stack moderna",
    text: "React, Next.js, TypeScript y Vite, con tests, lint y despliegue automático en GitHub Pages en cada push.",
  },
]
  .map(
    (pr) => `
    <div class="principle">
      <span class="principle-icon">${pr.icon}</span>
      <h3>${pr.title}</h3>
      <p>${pr.text}</p>
    </div>`,
  )
  .join("");

const techChips = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Vite",
  "Tailwind CSS",
  "Firebase",
  "Google Apps Script",
  "Google Sheets",
  "Tone.js",
  "Zustand",
  "PWA",
  "EmailJS",
  "GitHub Actions",
]
  .map((t) => `<li class="chip">${t}</li>`)
  .join("");

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
  <a class="skip-link" href="#proyectos">Saltar a los proyectos</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand-mark" href="#top" aria-label="Inicio">${MARK}</a>
      <nav class="site-nav" aria-label="Principal">
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre">Sobre</a>
        <button class="theme-toggle" type="button" aria-label="Cambiar entre modo claro y oscuro"></button>
        <a class="btn btn-ghost" href="https://github.com/satisol-develop" target="_blank" rel="noopener noreferrer">
          GitHub ${ARROW}
        </a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero container">
      <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span>${projects.length} productos · públicos y gratuitos</p>
      <h1 class="hero-title">Software hecho para usarse, en un solo clic.</h1>
      <p class="hero-lede">
        ${capitalize(numWord(projects.length))} productos web en producción —gestión de protectora,
        coordinación de jam sessions, biblioteca de transcripciones, entrenamiento de saxo y
        galería de arte— disponibles ahora mismo, sin registros de por medio para probarlos.
      </p>
      <div class="cta-row">
        <a class="btn btn-primary" href="#proyectos">Ver los proyectos</a>
        <a class="btn btn-secondary" href="https://github.com/satisol-develop" target="_blank" rel="noopener noreferrer">
          Ver el código ${ARROW}
        </a>
      </div>
      <ul class="trust-row" aria-label="Características de los productos">${trustItems}</ul>
    </section>

    <section id="proyectos" class="section container">
      <div class="section-head">
        <h2>Proyectos</h2>
        <p>Cada tarjeta enseña el producto real y lo abre en una pestaña nueva.</p>
      </div>
      <div class="project-grid">
        ${projects.map(projectCard).join("")}
      </div>
    </section>

    <section id="sobre" class="section section-quiet">
      <div class="container">
        <div class="section-head">
          <h2>Cómo trabajan los productos</h2>
          <p>No son prototipos: son herramientas que se usan, se mantienen y se despliegan solas.</p>
        </div>
        <div class="principles-grid">${principles}</div>
      </div>
    </section>

    <section id="tecnologias" class="section container">
      <div class="section-head">
        <h2>Tecnologías</h2>
        <p>El stack con el que están construidos y desplegados los productos.</p>
      </div>
      <ul class="chip-row">${techChips}</ul>
    </section>

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div class="cta-band-copy">
          <h2>El código, abierto</h2>
          <p>Cada producto tiene su repositorio público: clona, audita o lanza una mejora.</p>
        </div>
        <a class="btn btn-primary" href="https://github.com/satisol-develop" target="_blank" rel="noopener noreferrer">
          Ver GitHub ${ARROW}
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p class="footer-brand">satisol-develop</p>
      <p class="footer-meta">${capitalize(numWord(projects.length))} productos, un clic. · <a href="https://github.com/satisol-develop" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p class="footer-copy">© 2026 · Desplegado en GitHub Pages</p>
    </div>
  </footer>`;
}

const toggle = document.querySelector<HTMLButtonElement>(".theme-toggle");

const isLight = (): boolean => document.documentElement.dataset.theme === "light";

const renderToggle = (): void => {
  if (toggle) {
    toggle.innerHTML = isLight() ? MOON : SUN;
    toggle.setAttribute("aria-pressed", String(isLight()));
  }
};

toggle?.addEventListener("click", () => {
  if (isLight()) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
  renderToggle();
});

renderToggle();
