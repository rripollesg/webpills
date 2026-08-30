import type { UI } from './types';
import type { PrivacyPage } from './privacy-types';
import { es } from './locales/es';
import { en } from './locales/en';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { it } from './locales/it';
import { pt } from './locales/pt';
import { ptPT } from './locales/pt-PT';
import { privacyEs } from './privacy/es';
import { privacyEn } from './privacy/en';
import { privacyFr } from './privacy/fr';
import { privacyDe } from './privacy/de';
import { privacyIt } from './privacy/it';
import { privacyPt } from './privacy/pt';
import { privacyPtPT } from './privacy/pt-PT';

export type { UI } from './types';
export type { PrivacyPage } from './privacy-types';

export const languages = {
	es: 'Español',
	en: 'English',
	fr: 'Français',
	de: 'Deutsch',
	it: 'Italiano',
	pt: 'Português (BR)',
	'pt-PT': 'Português (PT)',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const langCodes: Lang[] = ['es', 'en', 'fr', 'de', 'it', 'pt', 'pt-PT'];

export function isLang(value: string): value is Lang {
	return value in languages;
}

export function localePath(lang: Lang, path = '') {
	const clean = path.replace(/^\//, '');
	if (lang === defaultLang) return clean ? `/${clean}` : '/';
	return clean ? `/${lang}/${clean}` : `/${lang}/`;
}

export function getLangFromUrl(url: URL): Lang {
	const [, maybe] = url.pathname.split('/');
	if (maybe && isLang(maybe)) return maybe;
	return defaultLang;
}

export const ui: Record<Lang, UI> = {
	es,
	en,
	fr,
	de,
	it,
	pt,
	'pt-PT': ptPT,
};

export function useTranslations(lang: Lang) {
	return ui[lang] ?? ui[defaultLang];
}

export const privacyUi: Record<Lang, PrivacyPage> = {
	es: privacyEs,
	en: privacyEn,
	fr: privacyFr,
	de: privacyDe,
	it: privacyIt,
	pt: privacyPt,
	'pt-PT': privacyPtPT,
};

export function usePrivacy(lang: Lang) {
	return privacyUi[lang] ?? privacyUi[defaultLang];
}
