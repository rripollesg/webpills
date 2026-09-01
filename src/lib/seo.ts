import { site } from '../config/site';

type FaqItem = { question: string; answer: string };

export function buildSoftwareAppJsonLd(description: string, pageUrl: string, imageUrl: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'MobileApplication',
		name: site.name,
		operatingSystem: 'Android, iOS',
		applicationCategory: 'HealthApplication',
		description,
		url: pageUrl,
		image: imageUrl,
		author: {
			'@type': 'Organization',
			name: site.author,
			url: site.organizationUrl,
		},
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'EUR',
		},
	};
}

export function buildOrganizationJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: site.author,
		url: site.organizationUrl,
		sameAs: ['https://www.linkedin.com/company/Serefor/', 'https://twitter.com/Serefor'],
	};
}

export function buildFaqJsonLd(items: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}
