export const site = {
	url: 'https://pills.serefor.com',
	name: 'Pills',
	author: 'Serefor',
	twitter: {
		site: 'serefor',
		creator: 'Serefor',
	},
	ogImage: '/favicon-192.png',
	organizationUrl: 'https://serefor.com',
} as const;

export function absoluteUrl(path: string): string {
	const clean = path.startsWith('/') ? path : `/${path}`;
	return `${site.url}${clean}`;
}

export const ogLocales: Record<string, string> = {
	es: 'es_ES',
	en: 'en_US',
	fr: 'fr_FR',
	de: 'de_DE',
	it: 'it_IT',
	pt: 'pt_BR',
	uk: 'uk_UA',
};
