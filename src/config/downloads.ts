/** Store URLs — rellena cuando estén publicadas en App Store y Google Play. */
export const storeUrls = {
	appStore: '',
	googlePlay: '',
} as const;

/** Rutas públicas de los APK (colócalos en public/downloads/…). */
export const apkDownloads = {
	pills: '/downloads/pills/pills.apk',
	pillsTv: '/downloads/pills-tv/pills-tv.apk',
} as const;

export function storeHref(url: string, fallback = '#descargar'): string {
	return url.trim() || fallback;
}

export function isStorePending(url: string): boolean {
	return !url.trim();
}
