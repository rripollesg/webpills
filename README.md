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
| Português (BR) | `/pt/` |
| Português (PT) | `/pt-PT/` |

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

Coloca los APK en:

```
public/downloads/pills/pills.apk
public/downloads/pills-tv/pills-tv.apk
```

Enlaces de App Store y Google Play: `src/config/downloads.ts`.

## Estructura principal

- `src/components/` — secciones de la landing (Hero, Features, Capturas, FAQ, CTA…)
- `public/screenshots/` — capturas de la app (webp 360×800)
- `public/downloads/` — APK de Pills y Pills TV

## Política de privacidad

- Español → `/privacy`
- Otros idiomas → `/en/privacy`, `/fr/privacy`, …

Basada en la política de privacidad de la app Pills.

## Despliegue en VPS (GitHub Actions)

Workflows en `.github/workflows/`:

| Workflow | Cuándo se ejecuta |
|----------|-------------------|
| `ci.yml` | Push y PR a `main` / `v1` — compila el sitio |
| `deploy-vps.yml` | Push a `main` / `v1` o manual — build + rsync al VPS |

### Secrets del repositorio

Configúralos en **Settings → Secrets and variables → Actions** (entorno `production` para deploy):

| Secret | Ejemplo | Descripción |
|--------|---------|-------------|
| `VPS_HOST` | `203.0.113.10` | IP o dominio del VPS |
| `VPS_USER` | `deploy` | Usuario SSH |
| `VPS_SSH_KEY` | clave privada PEM | Clave sin passphrase recomendada |
| `VPS_DEPLOY_PATH` | `/var/www/webpills` | Carpeta destino del sitio estático |

### Preparar el VPS

```bash
sudo mkdir -p /var/www/webpills
sudo chown -R deploy:deploy /var/www/webpills
```

Ejemplo de nginx: `deploy/nginx.webpills.conf.example`.
