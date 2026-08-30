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
