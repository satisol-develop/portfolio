import "./style.css";
import { projects, type Project, type ProjectIcon } from "./data/projects";

const ICONS: Record<ProjectIcon, string> = {
  jam: `<path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/>`,
  reader: `<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>`,
  learn: `<path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/>`,
  paint: `<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>`,
  dash: `<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>`,
};

const NUM_WORDS = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

const numWord = (n: number): string => NUM_WORDS[n] ?? String(n);

const svg = (paths: string, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const ARROW = svg(
  `<path d="M7 17 17 7"/><path d="M7 7h10v10"/>`,
  "icon icon-arrow",
);

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

function projectCard(p: Project): string {
  const tags = p.stack.map((t) => `<li class="tag">${t}</li>`).join("");
  const note = p.note ? `<p class="card-note">${p.note}</p>` : "";
  return `
  <article class="card project-card" style="--hue: ${p.hue}">
    <div class="card-visual">
      <span class="card-icon">${svg(ICONS[p.icon])}</span>
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
        <a href="#tecnologias">Tecnologías</a>
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
        ${numWord(projects.length).replace(/^./, (c) => c.toUpperCase())} productos web en producción —gestión de protectora,
        coordinación de jam sessions, biblioteca de transcripciones, entrenamiento de saxo y
        galería de arte— disponibles ahora mismo, sin registros de por medio para probarlos.
      </p>
      <div class="cta-row">
        <a class="btn btn-primary" href="#proyectos">Ver los proyectos</a>
        <a class="btn btn-secondary" href="https://github.com/satisol-develop" target="_blank" rel="noopener noreferrer">
          Ver el código ${ARROW}
        </a>
      </div>
    </section>

    <section id="proyectos" class="section container">
      <div class="section-head">
        <h2>Proyectos</h2>
        <p>Cada tarjeta abre el producto real en una pestaña nueva.</p>
      </div>
      <div class="project-grid">
        ${projects.map(projectCard).join("")}
      </div>
    </section>

    <section id="tecnologias" class="section section-quiet">
      <div class="container">
        <div class="section-head">
          <h2>Tecnologías</h2>
          <p>El stack con el que están construidos y desplegados los productos.</p>
        </div>
        <ul class="chip-row">${techChips}</ul>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p class="footer-brand">satisol-develop</p>
      <p class="footer-meta">${numWord(projects.length).replace(/^./, (c) => c.toUpperCase())} productos, un clic. · <a href="https://github.com/satisol-develop" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p class="footer-copy">© 2026 · Desplegado en GitHub Pages</p>
    </div>
  </footer>`;
}
