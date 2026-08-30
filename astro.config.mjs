// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'fr', 'de', 'it', 'pt', 'pt-PT'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
