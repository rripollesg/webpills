import type { UI } from '../types';

export const fr: UI = {
	meta: {
		title: 'Pills — Votre santé, chiffrée dans votre poche',
		description:
			'Rappels de médicaments, historique clinique, journal avec carte corporelle, cycle menstruel et constantes avec sommeil et montre connectée. Glucose CGM et scan dans 6 pays. Données chiffrées sur votre appareil.',
		keywords:
			'Pills, médicaments, rappel de pilules, historique clinique, journal de santé, cycle menstruel, constantes vitales, confidentialité, chiffrement, Android, iOS',
		copyright: '© Serefor · Pills 2025',
	},
	nav: {
		features: 'Fonctions',
		screenshots: 'Captures',
		platforms: 'Plateformes',
		privacy: 'Confidentialité',
		premium: 'Premium',
		faq: 'FAQ',
		download: 'Télécharger',
		openMenu: 'Ouvrir le menu',
		closeMenu: 'Fermer le menu',
		language: 'Langue',
	},
	hero: {
		badge: 'V2.0.0 · ANDROID · IOS',
		titleBefore: 'Vos médicaments et votre santé,',
		titleAccent: 'chiffrés dans votre poche',
		description:
			'Pills se souvient de chaque prise, conserve votre historique clinique, votre journal avec carte corporelle et votre cycle. Constantes vitales que vous pouvez ajouter, glucose CGM et scan dans 6 pays — tout chiffré sur votre appareil.',
		ctaPrimary: 'Télécharger Pills',
		ctaSecondary: 'Voir toutes les fonctions',
	},
	stats: {
		items: [
			{ value: 'TV', label: 'Notifications et Pills TV' },
			{ value: '6', label: "Langues d'interface" },
			{ value: '6+', label: 'Constantes ajoutables' },
			{ value: 'AES-256', label: 'Sauvegardes chiffrées' },
		],
		ticker: [
			'GLUCOSE CGM AUTO-SYNC',
			'SOMMEIL ET MONTRE CONNECTÉE',
			"OCR D'ANALYSES",
			'COMMANDES VOCALES',
			'WIDGETS ANDROID',
			'PILLS TV',
			'SAUVEGARDES .PILLSBAK',
			'CHIFFREMENT SQLCIPHER',
			'CIMA / BDPM / AIFA / BfArM / BASG / SWISSMEDIC',
			'VADEMECUM MULTI-PAYS',
			'CARTE CORPORELLE + EVA',
		],
	},
	features: {
		eyebrow: 'Fonctions',
		title: "Tout ce qu'il faut pour prendre soin de votre santé",
		description:
			'Une seule app pour médicaments, historique clinique, journal, cycle, constantes et sommeil — conçue pour que vos informations ne quittent pas votre appareil.',
		items: [
			{
				icon: 'calendar',
				title: 'Calendrier des prises',
				description:
					'Vues jour et semaine avec prises en attente, prises et omises. Marquez depuis la notification ou en un geste.',
			},
			{
				icon: 'scan',
				title: 'Scan multi-pays',
				description:
					'Scannez la boîte en ES, FR, IT, DE, AT et CH (CIMA, BDPM, AIFA, BfArM, BASG, Swissmedic). Vademecum ATC inclus.',
			},
			{
				icon: 'clipboard',
				title: 'Historique clinique',
				description:
					'Notes, rendez-vous, équipe soignante et analyses avec OCR. Chronologie unifiée en lecture seule pour préserver le contexte.',
			},
			{
				icon: 'heart',
				title: 'Constantes et sommeil',
				description:
					'Tension, glucose avec auto-sync CGM, sommeil et FC au repos depuis montre connectée (Health Connect), IMC, température et SpO₂.',
			},
			{
				icon: 'droplet',
				title: 'Cycle menstruel',
				description:
					'Calendrier, flux quotidien, prédiction des règles et fenêtre fertile. Liez votre contraceptif oral au suivi.',
			},
			{
				icon: 'body',
				title: 'Journal avec carte corporelle',
				description:
					"Marquez les zones, l'intensité EVA 0–10 et l'orientation locale CIE-10. Tout calculé hors ligne sur votre appareil.",
			},
			{
				icon: 'mic',
				title: 'Commandes vocales',
				description:
					'Demandez quels médicaments prendre ou validez une prise avec Siri, Google Assistant ou Alexa.',
			},
			{
				icon: 'users',
				title: 'Multi-profil',
				description:
					'Plusieurs personnes sur le même appareil, chacune avec médicaments, journal et cycle isolés.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion sur Android TV / Fire TV / tablette en Wi‑Fi local, appairage par code ou QR.',
			},
		],
	},
	showcases: {
		diary: {
			eyebrow: 'Journal de santé',
			title: 'Carte corporelle avec orientation par zone et intensité',
			description:
				'Marquez la zone de douleur sur la silhouette, indiquez son intensité (EVA 0–10) et recevez une orientation locale avec codes CIE-10 indicatifs — tout calculé hors ligne sur votre appareil.',
			bullets: [
				'Silhouette face / dos avec zones sélectionnables',
				'Alertes info, précaution ou urgence selon la zone',
				'Disponible en es, en, pt, fr et de',
				"100 % hors ligne, ce n'est pas un diagnostic médical",
			],
			mock: {
				zonesLabel: 'Zones marquées',
				zone: 'Bassin',
				alertTitle: 'Douleur pelvienne soudaine intense',
				alertBody:
					'Chez les personnes pouvant être enceintes, douleur unilatérale intense avec vertiges ou saignement : urgences.',
				cieTitle: 'Dysménorrhée / douleur menstruelle',
				cieDesc: 'Crampes pendant les règles. Douleur invalidante nouvelle : consultez un gynécologue.',
				evaLabel: 'Intensité (EVA)',
			},
		},
		cycle: {
			eyebrow: 'Cycle menstruel',
			title: 'Calendrier, analyse et prédiction de votre cycle',
			description:
				'Enregistrez flux et symptômes chaque jour, visualisez les phases sur le calendrier mensuel et recevez des alertes pour les prochaines règles et la fenêtre fertile estimée.',
			bullets: [
				'Analyse de régularité (NORMAL / ANORMAL) avec graphique',
				'Historique des règles modifiable, sans perdre vos symptômes',
				'Rapport PDF dédié au cycle',
				'Ne remplace ni contraception ni diagnostic',
			],
			mock: {
				phaseLabel: 'Phase actuelle',
				phase: 'Folliculaire / lutéale',
				ovulation: 'Ovulation dans 3 jours',
				nextPeriod: 'Prochaines règles dans 17 jours',
				button: "Marquer la fin des règles aujourd'hui",
			},
		},
	},
	screenshots: {
		eyebrow: 'Captures',
		title: "L'app telle que vous l'utilisez chaque jour",
		description:
			'Médicaments, historique clinique, journal, constantes avec sommeil et cycle.',
		gallery: [
			{
				id: 'historial',
				title: 'Historique clinique',
				caption: 'Chronologie avec notes, rendez-vous, analyses et équipe soignante.',
			},
			{
				id: 'parte-medica',
				title: 'Dossier médical',
				caption: 'Questions au médecin, notes et suivi des symptômes.',
			},
			{
				id: 'ciclo-informe',
				title: 'Rapport du cycle menstruel',
				caption: 'PDF avec durée moyenne, timeline des phases et symptômes enregistrés.',
			},
			{
				id: 'calendario',
				title: 'Calendrier des prises',
				caption: 'Vue quotidienne avec prises en attente, prises et prochaine dose.',
			},
			{
				id: 'parte-historial',
				title: "Détail de l'historique",
				caption: 'Vue complète de chaque entrée clinique.',
			},
			{
				id: 'constantes',
				title: 'Constantes et sommeil',
				caption: 'Glucose CGM, sommeil depuis montre connectée, tension, IMC, température, FC et SpO₂.',
			},
			{
				id: 'ciclo-registro',
				title: 'Journal du cycle',
				caption: 'Flux du jour, symptômes et pertes avec sélection rapide.',
			},
			{
				id: 'perfil',
				title: 'Profil et réglages',
				caption: 'Multi-profil, verrouillage biométrique et préférences.',
			},
		],
	},
	voice: {
		eyebrow: 'Commandes vocales',
		title: 'Interrogez et validez vos prises sans toucher le téléphone',
		description: 'Compatible avec Siri, Google Assistant et Alexa. Les données sont lues sur votre appareil.',
		hint: 'Ouvrez Pills au moins une fois, avec médicaments et prises du jour sur le profil actif.',
		moreLabel: 'Voir plus de détails',
		actionsTitle: 'Liens profonds',
		actions: [
			{ name: 'Quelles prises', link: 'pills://dose/upcoming' },
			{ name: 'Marquer prise', link: 'pills://dose/taken' },
			{ name: 'Omettre prise', link: 'pills://dose/skipped' },
			{ name: 'Rappels', link: 'pills://reminders' },
		],
		assistants: [
			{
				id: 'siri',
				name: 'Siri',
				platform: 'iPhone / iPad · iOS 16+',
				steps: [
					'Installez Pills et ouvrez-la une fois.',
					'Réglages → Siri et recherche → Pills.',
					'Dites la phrase ou épinglez-la dans Raccourcis.',
				],
				phrases: [
					'« Quels médicaments dois-je prendre dans Pills »',
					'« Marquer une prise dans Pills »',
					'« Omettre une prise dans Pills »',
				],
				altTitle: 'Raccourci manuel',
				altSteps: [
					'Raccourcis → + → Ouvrir URL → pills://dose/upcoming.',
					'Nommez-le et activez-le avec Siri.',
				],
			},
			{
				id: 'google',
				name: 'Google',
				platform: 'Android',
				steps: [
					'Installez Pills et ouvrez-la une fois.',
					'Utilisez Google comme assistant par défaut.',
					'Dites « Ok Google » + la phrase (indexation possible en quelques heures).',
				],
				phrases: [
					'« Quels médicaments dois-je prendre dans Pills »',
					'« Marquer une prise dans Pills »',
					'« Omettre une prise dans Pills »',
				],
				altTitle: 'Routine Google Home',
				altSteps: [
					'Google Home → Automatisations → phrase personnalisée.',
					'Action → Ouvrir URL → pills://dose/upcoming.',
				],
			},
			{
				id: 'alexa',
				name: 'Alexa',
				platform: 'Echo / Amazon',
				steps: [
					'App Alexa → Skills → cherchez « Pills » → Activer.',
					'Echo en espagnol (Espagne) pour les phrases es-ES.',
					'Dites « Alexa, ouvre Pills » ou une phrase ci-dessous.',
				],
				phrases: [
					'« Alexa, dis à Pills quels médicaments je dois prendre »',
					'« Alexa, dis à Pills que j’ai pris mon médicament »',
					'« Alexa, dis à Pills d’omettre la prise »',
				],
				limitNote:
					'Alexa ne lit pas vos médicaments locaux. Pour lister ou marquer des prises, utilisez Siri, Google ou ouvrez Pills sur le téléphone.',
			},
		],
	},
	platforms: {
		eyebrow: 'Plateformes',
		title: 'Disponible là où vous en avez besoin',
		description:
			'La même expérience de rappel de médicaments, adaptée à chaque appareil.',
		items: [
			{
				icon: 'phone',
				title: 'Android / iOS',
				description:
					"Base de données et pièces jointes chiffrées, widgets d'écran d'accueil et commandes vocales.",
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion pour Android TV, Fire TV ou tablette, synchronisée en Wi‑Fi local.',
			},
		],
	},
	privacy: {
		eyebrow: 'Confidentialité',
		title: 'Vos données de santé ne quittent pas votre téléphone',
		description:
			'Pas de compte cloud obligatoire. Sur Android et iOS, SQLCipher chiffre la base de données ; la clé reste dans Keychain / Keystore.',
		points: [
			'Clé maître dans Keychain / Keystore avec dérivation HKDF-SHA256',
			"Pièces jointes (PDF, analyses) chiffrées sur l'appareil",
			'Verrouillage par code PIN, schéma ou biométrie',
			'Sauvegardes locales .pillsbak avec PBKDF2 + AES-256-GCM',
			"Pas de FCM ni d'analytics de symptômes par défaut",
		],
	},
	premium: {
		eyebrow: 'Pills Premium',
		title: 'Commencez gratuitement, évoluez quand vous en avez besoin',
		description: 'Sans publicité ni revente de données. Premium débloque uniquement plus de capacité.',
		recommended: 'Recommandé',
		free: {
			name: 'Gratuit',
			price: '0 €',
			period: 'pour toujours',
			cta: 'Télécharger gratuitement',
			features: [
				"Jusqu'à 3 médicaments",
				'Historique clinique 30 jours',
				"Jusqu'à 5 rendez-vous ponctuels",
				"Jusqu'à 3 comptes-rendus de laboratoire",
			],
		},
		paid: {
			name: 'Premium',
			price: 'Abonnement',
			period: 'App Store / Google Play',
			cta: 'Essayer Premium',
			features: [
				'Médicaments illimités',
				'Historique clinique complet',
				'Rendez-vous et comptes-rendus illimités',
				'Export PDF des constantes, historique et cycle',
				'Widget du planning du jour',
			],
		},
	},
	faq: {
		eyebrow: 'Questions fréquentes',
		title: 'Avant de commencer',
		items: [
			{
				question: 'Dois-je créer un compte ?',
				answer:
					"Non. Pills est conçue pour fonctionner sans compte cloud obligatoire. Vos données restent sur l'appareil.",
			},
			{
				question: 'Pills remplace-t-elle mon médecin ?',
				answer:
					"Non. C'est un outil informatif pour organiser et observer vos données. Il ne remplace pas un avis médical, pharmaceutique ni un diagnostic professionnel.",
			},
			{
				question: "Puis-je l'utiliser pour plusieurs personnes ?",
				answer:
					'Oui. Les profils permettent à plusieurs personnes — par exemple une famille ou un aidant — de garder leurs données isolées sur le même appareil.',
			},
			{
				question: 'Sur quels appareils fonctionne-t-elle ?',
				answer:
					'Pills est disponible sur Android et iOS. La base de données et les pièces jointes utilisent un chiffrement local.',
			},
			{
				question: 'Mes données sont-elles en sécurité ?',
				answer:
					'Oui. Sur Android et iOS, la base utilise SQLCipher avec une clé dans Keychain/Keystore. Les sauvegardes sont locales et chiffrées par mot de passe.',
			},
		],
	},
	cta: {
		title: "Prenez soin de vos prises dès aujourd'hui",
		description:
			'Téléchargez Pills et gardez votre calendrier de prises, journal de santé et cycle menstruel à portée de main — chiffrés sur votre appareil.',
		availableOn: 'Disponible sur',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		pillsTv: 'Pills TV',
		pillsTvHint: 'Android TV · Fire TV',
		apkDirect: "Télécharger l'APK",
		trustLine: 'Chiffrement de bout en bout · Vos données restent sur votre appareil',
		disclaimer:
			'Pills est un outil informatif. Il ne remplace pas un avis médical, pharmaceutique ni un diagnostic professionnel.',
	},
	toast: {
		downloadTitle: 'Pills arrive bientôt',
		downloadBody: 'Nous préparons les liens de téléchargement. Vous pourrez bientôt emporter Pills avec vous.',
	},
	footer: {
		tagline:
			'Vos médicaments, votre cycle et votre historique clinique — organisés et chiffrés sur votre propre appareil.',
		product: 'Produit',
		legal: 'Mentions',
		privacyPolicy: 'Politique de confidentialité',
		legalNotice: 'Mentions légales',
		contact: 'Contact',
		rights: 'Tous droits réservés.',
		disclaimer:
			"Pills est un outil informatif et d'organisation personnelle. En cas de doute sur votre santé, consultez un professionnel.",
		creditsBefore: 'Site développé par ',
		creditsLink: 'serefor.com',
	},
};
