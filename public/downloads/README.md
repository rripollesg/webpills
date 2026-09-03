# Descargas APK

APK de instalación directa para Android (versionados con **Git LFS**).

## Estructura

```
downloads/
├── pills/
│   └── pills.apk          ← app móvil Pills (Android)
└── pills-tv/
    └── pills-tv.apk       ← complemento Pills TV (Android TV / Fire TV)
```

Tras clonar el repo:

```bash
git lfs install
git lfs pull
```

## App Store y Google Play

Los enlaces a las tiendas se configuran en `src/config/downloads.ts` (`storeUrls.appStore` y `storeUrls.googlePlay`).
