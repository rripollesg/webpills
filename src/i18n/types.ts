export type UI = {
	meta: {
		title: string;
		description: string;
		keywords: string;
		copyright: string;
	};
	nav: {
		features: string;
		screenshots: string;
		platforms: string;
		privacy: string;
		premium: string;
		faq: string;
		download: string;
		openMenu: string;
		closeMenu: string;
		language: string;
	};
	hero: {
		badge: string;
		titleBefore: string;
		titleAccent: string;
		description: string;
		ctaPrimary: string;
		ctaSecondary: string;
	};
	stats: {
		items: { value: string; label: string }[];
		ticker: string[];
	};
	features: {
		eyebrow: string;
		title: string;
		description: string;
		items: { title: string; description: string; icon: string }[];
	};
	showcases: {
		diary: {
			eyebrow: string;
			title: string;
			description: string;
			bullets: string[];
			mock: {
				zonesLabel: string;
				zone: string;
				alertTitle: string;
				alertBody: string;
				cieTitle: string;
				cieDesc: string;
				evaLabel: string;
			};
		};
		cycle: {
			eyebrow: string;
			title: string;
			description: string;
			bullets: string[];
			mock: {
				phaseLabel: string;
				phase: string;
				ovulation: string;
				nextPeriod: string;
				button: string;
			};
		};
	};
	screenshots: {
		eyebrow: string;
		title: string;
		description: string;
		gallery: { id: string; title: string; caption: string }[];
	};
	voice: {
		eyebrow: string;
		title: string;
		description: string;
		requirementsTitle: string;
		requirements: string[];
		actionsTitle: string;
		actionsColAction: string;
		actionsColLink: string;
		actions: { name: string; link: string; effect: string }[];
		setupTitle: string;
		assistants: {
			id: 'siri' | 'google' | 'alexa';
			name: string;
			platform: string;
			stepsTitle: string;
			steps: string[];
			phrasesTitle: string;
			phrases: { action: string; example: string }[];
			altTitle?: string;
			altSteps?: string[];
			tip?: string;
			limitNote?: string;
		}[];
	};
	platforms: {
		eyebrow: string;
		title: string;
		description: string;
		items: { title: string; description: string; icon: string }[];
	};
	privacy: {
		eyebrow: string;
		title: string;
		description: string;
		points: string[];
	};
	premium: {
		eyebrow: string;
		title: string;
		description: string;
		recommended: string;
		free: {
			name: string;
			price: string;
			period: string;
			cta: string;
			features: string[];
		};
		paid: {
			name: string;
			price: string;
			period: string;
			cta: string;
			features: string[];
		};
	};
	faq: {
		eyebrow: string;
		title: string;
		items: { question: string; answer: string }[];
	};
	cta: {
		title: string;
		description: string;
		availableOn: string;
		googlePlay: string;
		appStore: string;
		pillsTv: string;
		pillsTvHint: string;
		apkDirect: string;
		trustLine: string;
		disclaimer: string;
	};
	toast: {
		downloadTitle: string;
		downloadBody: string;
	};
	footer: {
		tagline: string;
		product: string;
		legal: string;
		privacyPolicy: string;
		legalNotice: string;
		contact: string;
		rights: string;
		disclaimer: string;
		creditsBefore: string;
		creditsLink: string;
	};
};

export const screenshotFiles: Record<string, string> = {
	historial: '/screenshots/pills-historial.webp',
	'parte-medica': '/screenshots/pills-parte-medica.webp',
	dolor: '/screenshots/pills-dolor.webp',
	calendario: '/screenshots/pills-calendario.webp',
	'parte-historial': '/screenshots/pills-parte-historial.webp',
	constantes: '/screenshots/pills-constantes.webp',
	ciclo: '/screenshots/pills-ciclo.webp',
	'ciclo-registro': '/screenshots/pills-registro-ciclo-dia.webp',
	'ciclo-informe': '/screenshots/pills-informe-ciclo-v2.webp',
	perfil: '/screenshots/pills-perfil.webp',
};
