# satisol-develop.github.io

Portfolio de productos de **satisol-develop**: cinco productos web públicos, listos para probar en un clic.

| Producto | Qué hace | En vivo |
| --- | --- | --- |
| [GN-Admin](https://gn-admin.github.io/admin-dashboard/) | Panel de administración de Grupo Nebak: animales, acogidas, adopciones, socios y donaciones | ✅ |
| [Jam Session](https://satisol-develop.github.io/jam-session/) | Gestión de jam sessions: inscripciones, roles, escaleta en directo y caja | ✅ |
| [Saxo Reader](https://satisol-develop.github.io/saxo-reader/) | Buscador de transcripciones de saxo (884 piezas, 21 fuentes) | ✅ |
| [Learn Sax](https://satisol-develop.github.io/learn-sax/) | Entrenador de saxo con audio: escalas, cuatriadas, ii-V-I e impro | ✅ |
| [Web Pintor](https://satisol-develop.github.io/web-pintor/) | Galería del artista plástico Mikel Artetxe | ✅ |

## Desarrollo

```bash
npm install
npm run dev        # servidor de desarrollo
npm run lint       # ESLint
npm run build      # typecheck + build a dist/
npm run preview    # previsualizar el build
```

Stack: **Vite + TypeScript estricto + ESLint flat**, sin dependencias en runtime. El contenido de los proyectos vive en `src/data/projects.ts`; para añadir un producto basta con añadir una entrada (y su captura en `public/screenshots/{id}.jpg`).

El sitio es dark premium por defecto con **toggle a modo claro** (persistido en `localStorage`). Las capturas de las tarjetas se generan con Edge headless:

```bash
msedge --headless=new --disable-gpu --no-sandbox --hide-scrollbars `
  --window-size=1280,800 --virtual-time-budget=15000 `
  --screenshot=public/screenshots/{id}.png https://…/ URL del producto
```

## Despliegue

`.github/workflows/deploy.yml` construye y publica en GitHub Pages en cada push a `main`.

1. El repositorio es **`portfolio`**, así que el sitio se sirve en `https://satisol-develop.github.io/portfolio/` (`base: "/portfolio/"` en `vite.config.ts`; si algún día se renombra a `satisol-develop.github.io`, cámbialo a `"/"`).
2. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
