import type { UI } from '../types';

export const en: UI = {
	meta: {
		title: 'Pills — Your health, encrypted in your pocket',
		description:
			'Medication reminders, clinical history, body-map diary, menstrual cycle and vitals with sleep and wearables. CGM glucose and 6-country scan. Data stays encrypted on your device.',
		keywords:
			'Pills, medication reminder, pill tracker, clinical history, health diary, menstrual cycle, vitals, privacy, encryption, Android, iOS',
		copyright: '© Serefor · Pills 2025',
	},
	nav: {
		features: 'Features',
		screenshots: 'Screenshots',
		platforms: 'Platforms',
		privacy: 'Privacy',
		premium: 'Premium',
		faq: 'FAQ',
		download: 'Download',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		language: 'Language',
	},
	hero: {
		badge: 'V2.0.0 · ANDROID · IOS',
		titleBefore: 'Your medication and your health,',
		titleAccent: 'encrypted in your pocket',
		description:
			'Pills remembers every dose, stores your clinical history, body-map diary and cycle. Vital signs you can add, CGM glucose and 6-country scan — all encrypted on your device.',
		ctaPrimary: 'Download Pills',
		ctaSecondary: 'See all features',
	},
	stats: {
		items: [
			{ value: 'TV', label: 'Alerts & Pills TV' },
			{ value: '6', label: 'Interface languages' },
			{ value: '6+', label: 'Addable vitals' },
			{ value: 'AES-256', label: 'Encrypted backups' },
		],
		ticker: [
			'CGM GLUCOSE AUTO-SYNC',
			'SLEEP & WEARABLES',
			'LAB OCR',
			'VOICE COMMANDS',
			'ANDROID WIDGETS',
			'PILLS TV',
			'.PILLSBAK BACKUPS',
			'SQLCIPHER ENCRYPTION',
			'CIMA / BDPM / AIFA / BfArM / BASG / SWISSMEDIC',
			'MULTI-COUNTRY VADEMECUM',
			'BODY MAP + VAS',
		],
	},
	features: {
		eyebrow: 'Features',
		title: 'Everything you need to look after your health',
		description:
			'One app for medication, clinical history, diary, cycle, vitals and sleep — designed so your information never leaves your device.',
		items: [
			{
				icon: 'calendar',
				title: 'Dose calendar',
				description:
					'Daily and weekly views with pending, taken and skipped doses. Mark from the notification or with a tap.',
			},
			{
				icon: 'scan',
				title: 'Multi-country scan',
				description:
					'Scan packages in ES, FR, IT, DE, AT and CH (CIMA, BDPM, AIFA, BfArM, BASG, Swissmedic). ATC vademecum included.',
			},
			{
				icon: 'clipboard',
				title: 'Clinical history',
				description:
					'Notes, appointments, care team and lab reports with OCR. Unified timeline, read-only to preserve context.',
			},
			{
				icon: 'heart',
				title: 'Vitals & sleep',
				description:
					'Blood pressure, CGM auto-sync glucose, sleep and resting HR from wearables (Health Connect), BMI, temperature and SpO₂.',
			},
			{
				icon: 'droplet',
				title: 'Menstrual cycle',
				description:
					'Calendar, daily flow, period prediction and fertile window. Link your oral contraceptive to tracking.',
			},
			{
				icon: 'body',
				title: 'Body-map diary',
				description:
					'Mark zones, VAS intensity 0–10 and local ICD-10 guidance. All computed offline on your device.',
			},
			{
				icon: 'mic',
				title: 'Voice commands',
				description:
					'Ask which pills are due or mark a dose with Siri, Google Assistant or Alexa.',
			},
			{
				icon: 'users',
				title: 'Multi-profile',
				description:
					'Several people on the same device, each with isolated medication, diary and cycle data.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion on Android TV / Fire TV / tablet over local Wi‑Fi, paired with code or QR.',
			},
		],
	},
	showcases: {
		diary: {
			eyebrow: 'Health diary',
			title: 'Body map with zone guidance and intensity',
			description:
				'Mark the pain zone on the silhouette, set intensity (VAS 0–10) and get local guidance with indicative ICD-10 codes — all computed offline on your device.',
			bullets: [
				'Front / back silhouette with selectable zones',
				'Info, caution or urgency alerts by zone',
				'Available in es, en, pt, fr and de',
				'100% offline, not a medical diagnosis',
			],
			mock: {
				zonesLabel: 'Marked zones',
				zone: 'Pelvis',
				alertTitle: 'Sudden intense pelvic pain',
				alertBody:
					'In people who may be pregnant, intense unilateral pain with dizziness or bleeding: seek emergency care.',
				cieTitle: 'Dysmenorrhoea / menstrual pain',
				cieDesc: 'Cramps with menstruation. New incapacitating pain: see a gynaecologist.',
				evaLabel: 'Intensity (VAS)',
			},
		},
		cycle: {
			eyebrow: 'Menstrual cycle',
			title: 'Calendar, analysis and cycle prediction',
			description:
				'Log flow and symptoms daily, view phases on the monthly calendar and get alerts for next period and estimated fertile window.',
			bullets: [
				'Regularity analysis (NORMAL / ABNORMAL) with chart',
				'Editable period history without losing symptoms',
				'Dedicated cycle PDF report',
				'Does not replace contraception or diagnosis',
			],
			mock: {
				phaseLabel: 'Current phase',
				phase: 'Follicular / luteal',
				ovulation: 'Ovulation in 3 days',
				nextPeriod: 'Next period in 17 days',
				button: 'Mark period end today',
			},
		},
	},
	screenshots: {
		eyebrow: 'Screenshots',
		title: 'The app as you use it every day',
		description:
			'Medication, clinical history, diary, vitals with sleep and cycle.',
		gallery: [
			{
				id: 'historial',
				title: 'Clinical history',
				caption: 'Timeline with notes, appointments, labs and care team.',
			},
			{
				id: 'parte-medica',
				title: 'Medical record',
				caption: 'Questions for your doctor, notes and symptom tracking.',
			},
			{
				id: 'ciclo-informe',
				title: 'Menstrual cycle report',
				caption: 'PDF with average length, phase timeline and logged symptoms.',
			},
			{
				id: 'calendario',
				title: 'Dose calendar',
				caption: 'Daily view with pending, taken doses and next reminder.',
			},
			{
				id: 'parte-historial',
				title: 'History detail',
				caption: 'Full view of each clinical entry.',
			},
			{
				id: 'constantes',
				title: 'Vitals & sleep',
				caption: 'CGM glucose, sleep from wearables, blood pressure, BMI, temperature, HR and SpO₂.',
			},
			{
				id: 'ciclo-registro',
				title: 'Cycle log',
				caption: 'Daily flow, symptoms and vaginal discharge with quick chips.',
			},
			{
				id: 'perfil',
				title: 'Profile & settings',
				caption: 'Multi-profile, biometric lock and preferences.',
			},
		],
	},
	voice: {
		eyebrow: 'Voice commands',
		title: 'Ask and mark doses without touching your phone',
		description: 'Works with Siri, Google Assistant and Alexa. Data is read on your device.',
		hint: 'Open Pills at least once, with medication and today’s doses on the active profile.',
		moreLabel: 'Show more detail',
		actionsTitle: 'Deep links',
		actions: [
			{ name: 'What’s due', link: 'pills://dose/upcoming' },
			{ name: 'Mark dose', link: 'pills://dose/taken' },
			{ name: 'Skip dose', link: 'pills://dose/skipped' },
			{ name: 'Reminders', link: 'pills://reminders' },
		],
		assistants: [
			{
				id: 'siri',
				name: 'Siri',
				platform: 'iPhone / iPad · iOS 16+',
				steps: [
					'Install Pills and open it once.',
					'Settings → Siri & Search → Pills.',
					'Say the phrase or pin it in Shortcuts.',
				],
				phrases: [
					'"What pills do I need in Pills"',
					'"Mark dose taken in Pills"',
					'"Skip dose in Pills"',
				],
				altTitle: 'Manual shortcut',
				altSteps: [
					'Shortcuts → + → Open URL → pills://dose/upcoming.',
					'Name it and trigger with Siri.',
				],
			},
			{
				id: 'google',
				name: 'Google',
				platform: 'Android',
				steps: [
					'Install Pills and open it once.',
					'Set Google as the default assistant.',
					'Say “Ok Google” + the phrase (indexing may take a few hours).',
				],
				phrases: [
					'"What pills do I need in Pills"',
					'"Mark dose in Pills"',
					'"Skip dose in Pills"',
				],
				altTitle: 'Google Home routine',
				altSteps: [
					'Google Home → Automations → custom voice phrase.',
					'Action → Open URL → pills://dose/upcoming.',
				],
			},
			{
				id: 'alexa',
				name: 'Alexa',
				platform: 'Echo / Amazon',
				steps: [
					'Alexa app → Skills → search “Pills” → Enable.',
					'Echo language: Spanish (Spain) for es-ES phrases.',
					'Say “Alexa, open Pills” or a phrase below.',
				],
				phrases: [
					'"Alexa, tell Pills what pills I need"',
					'"Alexa, tell Pills I took my pill"',
					'"Alexa, tell Pills to skip the dose"',
				],
				limitNote:
					'Alexa cannot read local medication. To list or mark doses, use Siri, Google, or open Pills on your phone.',
			},
		],
	},
	platforms: {
		eyebrow: 'Platforms',
		title: 'Available wherever you need it',
		description:
			'The same medication reminder experience, adapted to each device.',
		items: [
			{
				icon: 'phone',
				title: 'Android / iOS',
				description:
					'Encrypted database and attachments, home-screen widgets and voice commands.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion for Android TV, Fire TV or tablet, synced over local Wi‑Fi.',
			},
		],
	},
	privacy: {
		eyebrow: 'Privacy',
		title: 'Your health data never leaves your phone',
		description:
			'No mandatory cloud account. On Android and iOS, SQLCipher encrypts the database; the key lives in Keychain / Keystore.',
		points: [
			'Master key in Keychain / Keystore with HKDF-SHA256 derivation',
			'Attachments (PDFs, lab reports) encrypted on device',
			'Lock with PIN, pattern or biometrics',
			'Local .pillsbak backups with PBKDF2 + AES-256-GCM',
			'No FCM or symptom analytics by default',
		],
	},
	premium: {
		eyebrow: 'Pills Premium',
		title: 'Start free, expand when you need to',
		description: 'No ads or data selling. Premium only unlocks more capacity.',
		recommended: 'Recommended',
		free: {
			name: 'Free',
			price: '€0',
			period: 'forever',
			cta: 'Download free',
			features: [
				'Up to 3 medications',
				'30-day clinical history',
				'Up to 5 one-off appointments',
				'Up to 3 lab reports',
			],
		},
		paid: {
			name: 'Premium',
			price: 'Subscription',
			period: 'App Store / Google Play',
			cta: 'Try Premium',
			features: [
				'Unlimited medications',
				'Full clinical history',
				'Unlimited appointments and reports',
				'PDF export for vitals, history and cycle',
				"Today's schedule widget",
			],
		},
	},
	faq: {
		eyebrow: 'FAQ',
		title: 'Before you start',
		items: [
			{
				question: 'Do I need to create an account?',
				answer:
					'No. Pills is designed to work without a mandatory cloud account. Your data stays on your device.',
			},
			{
				question: 'Does Pills replace my doctor?',
				answer:
					'No. It is an informational tool to organise and observe your data. It does not replace medical, pharmacy or professional diagnosis advice.',
			},
			{
				question: 'Can I use it for several people?',
				answer:
					'Yes. Profiles let several people — for example a family or caregiver — keep their data isolated on the same device.',
			},
			{
				question: 'Which devices does it work on?',
				answer:
					'Pills is available for Android and iOS. The database and attachments use local encryption.',
			},
			{
				question: 'Is my data secure?',
				answer:
					'Yes. On Android and iOS the database uses SQLCipher with a key in Keychain/Keystore. Backups are local and password-encrypted.',
			},
		],
	},
	cta: {
		title: 'Start managing your medication today',
		description:
			'Download Pills and keep your dose calendar, health diary and menstrual cycle at hand — encrypted on your device.',
		availableOn: 'Get it on',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		pillsTv: 'Pills TV',
		pillsTvHint: 'Android TV · Fire TV',
		apkDirect: 'Download APK',
		trustLine: 'End-to-end encryption · Your data stays on your device',
		disclaimer:
			'Pills is an informational tool. It does not replace medical, pharmacy or professional diagnosis advice.',
	},
	toast: {
		downloadTitle: 'Pills coming soon',
		downloadBody: 'We are preparing download links. You will be able to take Pills with you very soon.',
	},
	footer: {
		tagline:
			'Your medication, cycle and clinical history — organised and encrypted on your own device.',
		product: 'Product',
		legal: 'Legal',
		privacyPolicy: 'Privacy policy',
		legalNotice: 'Legal notice',
		contact: 'Contact',
		rights: 'All rights reserved.',
		disclaimer:
			'Pills is an informational and personal organisation tool. For any health concerns, consult a professional.',
		creditsBefore: 'Site by ',
		creditsLink: 'serefor.com',
	},
};
