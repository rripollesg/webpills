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

Servidor AWS (eu-north-1):

| Campo | Valor |
|-------|-------|
| IP | `13.62.220.28` |
| DNS | `ec2-13-62-220-28.eu-north-1.compute.amazonaws.com` |
| Usuario SSH | `ubuntu` |
| Ruta web | `/var/www/webpills` |

Workflows en `.github/workflows/`:

| Workflow | Cuándo se ejecuta |
|----------|-------------------|
| `ci.yml` | Push y PR a `main` / `v1` — compila el sitio |
| `deploy-vps.yml` | Push a `main` / `v1` o manual — build + rsync al VPS |

### Variables del repositorio (ya configuradas)

| Variable | Valor |
|----------|-------|
| `VPS_HOST` | `13.62.220.28` |
| `VPS_USER` | `ubuntu` |
| `VPS_DEPLOY_PATH` | `/var/www/webpills` |

### Secret pendiente (solo tú)

| Secret | Descripción |
|--------|-------------|
| `VPS_SSH_KEY` | Clave privada SSH para el deploy |

Generar clave y configurar:

```bash
bash deploy/generate-deploy-key.sh
# Sigue las instrucciones que imprime (añadir clave al VPS + secret en GitHub)
```

O manualmente:

```bash
gh secret set VPS_SSH_KEY -R rripollesg/webpills < ruta/a/clave_privada
```

### Preparar el VPS (una vez)

Conecta con tu clave habitual:

```bash
ssh ubuntu@13.62.220.28
bash deploy/setup-vps.sh
```

Instala nginx, crea `/var/www/webpills` y deja el sitio accesible en el DNS de EC2.
