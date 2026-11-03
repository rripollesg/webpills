# webpills

Landing page estática de **Pills** (Astro): medicación, historial clínico, constantes vitales, ciclo menstrual y privacidad local. Diseño oscuro multidioma con capturas reales de la app v2.

**Licencia:** software propietario. Ver [LICENSE](LICENSE).

## Idiomas

| Idioma | Ruta |
|--------|------|
| Español (por defecto) | `/` |
| English | `/en/` |
| Français | `/fr/` |
| Deutsch | `/de/` |
| Italiano | `/it/` |
| Português | `/pt/` |
| Українська | `/uk/` |

Traducciones en `src/i18n/locales/`.

## Desarrollo

```bash
npm install
npm run dev
```

Build y vista previa:

```bash
npm run build
npm run preview
```

## Descargas APK

Los APK de instalación directa están en **GitHub Releases** (`apk-v2.0.0`), no en Vercel (límite 100 MB por archivo):

- [pills.apk](https://github.com/rripollesg/webpills/releases/download/apk-v2.0.0/pills.apk)
- [pills-tv.apk](https://github.com/rripollesg/webpills/releases/download/apk-v2.0.0/pills-tv.apk)

URLs configuradas en `src/config/downloads.ts`. También puedes dejar copias locales en `public/downloads/` (Git LFS) para el VPS/rollback.

## Estructura principal

- `src/components/` — secciones de la landing (Hero, Features, Capturas, FAQ, CTA…)
- `public/screenshots/` — capturas de la app (webp 360×800)
- `public/downloads/` — APK de Pills y Pills TV

## Política de privacidad

- Español → `/privacy`
- Otros idiomas → `/en/privacy`, `/fr/privacy`, …

Basada en la política de privacidad de la app Pills.

## Comandos de voz (Siri, Google Assistant)

Guía corta para usuarios en la landing: **[Comandos de voz](https://pills.serefor.com/#voz)** (`#voz` / `/en/#voz` / …).

Pasos y frases clave por asistente (Siri, Google).

Documentación técnica completa en el README del proyecto Flutter (`../README.md`, sección «Comandos de voz»).

## Despliegue en Vercel

Producción: **https://pills.serefor.com** (hosting en Vercel; el VPS ya no sirve esta web).

### 1. Conectar el repo

1. En [vercel.com](https://vercel.com) → **Add New Project** → importa `rripollesg/webpills`.
2. Framework: **Astro** (detectado). Build: `npm run build` · Output: `dist`.
3. Production branch: `main`.
Config local: `vercel.json`. Los APK grandes se excluyen del deploy (`.vercelignore`) y se sirven desde GitHub Releases.

### 2. Dominio `pills.serefor.com`

Ya está añadido al proyecto Vercel `webpills`. En **Cloudflare** (DNS de `serefor.com`) cambia el registro de `pills` (ahora apunta al proxy de Cloudflare / VPS) por:

| Tipo | Nombre | Valor | Proxy |
|------|--------|-------|-------|
| CNAME | `pills` | `e99dc7f423ea05f6.vercel-dns-017.com` | **DNS only** (gris, sin proxy) |
| CNAME | `www.pills` | `e99dc7f423ea05f6.vercel-dns-017.com` | **DNS only** (gris) |

Atajo Domain Connect de Vercel: panel del dominio en el proyecto → Apply with Cloudflare.

Tras propagar DNS, el SSL lo gestiona Vercel automáticamente. Verifica con:

```bash
vercel domains verify pills.serefor.com --scope rauls-projects-ec441989
```

### 3. CI

| Workflow | Cuándo |
|----------|--------|
| `ci.yml` | Push / PR a `main` / `v1` — comprueba el build |
| `deploy-vps.yml` | Solo **manual** (rollback al VPS si hiciera falta) |

El deploy a producción lo hace Vercel en cada push a `main`.

### Rollback al VPS (opcional)

El workflow `deploy-vps.yml` sigue disponible por `workflow_dispatch`. Variables/secrets antiguos (`VPS_HOST`, `VPS_USER`, `VPS_DEPLOY_PATH`, `VPS_SSH_KEY`) solo hacen falta si lo usas.
