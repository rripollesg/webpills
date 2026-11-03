/** Store URLs — rellena cuando estén publicadas en App Store y Google Play. */
export const storeUrls = {
	appStore: '',
	googlePlay: '',
} as const;

/**
 * APK directos (GitHub Releases).
 * No van en Vercel: el límite de archivo es 100 MB y pills.apk supera ese tamaño.
 */
export const apkDownloads = {
	pills: 'https://github.com/rripollesg/webpills/releases/download/apk-v2.0.0/pills.apk',
	pillsTv: 'https://github.com/rripollesg/webpills/releases/download/apk-v2.0.0/pills-tv.apk',
} as const;

export function storeHref(url: string, fallback = '#descargar'): string {
	return url.trim() || fallback;
}

export function isStorePending(url: string): boolean {
	return !url.trim();
}

export function isExternalUrl(url: string): boolean {
	return /^https?:\/\//i.test(url);
}
