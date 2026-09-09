// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://pills.serefor.com',
	integrations: [sitemap()],
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'fr', 'de', 'it', 'pt', 'uk'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
