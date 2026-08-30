import type { PrivacyPage } from '../privacy-types';

export const privacyEn: PrivacyPage = {
	metaTitle: 'Privacy policy — Pills',
	metaDescription:
		'How Pills handles your health data: encrypted on-device storage, no mandatory cloud account, and optional features.',
	title: 'Privacy policy',
	updated: 'Last updated: 14 August 2026',
	intro:
		'This policy describes how the Pills app (Serefor) handles information. Published for Google Play and App Store Connect.',
	backHome: 'Back to home',
	tableCaption: 'Data that may leave the device (optional)',
	tableHeaders: ['Feature', 'What may be sent', 'Destination'],
	tableRows: [
		['Leaflets / CIMA scan', 'Medication codes or lookups', 'AEMPS / CIMA services'],
		['Pills Premium', 'Purchase identifiers / store receipts', 'Google Play, App Store, RevenueCat'],
		[
			'Push notifications (if enabled in the build)',
			'FCM token and technical metadata',
			'Firebase / Google',
		],
		[
			'Open Maps / call / calendar',
			'Data the user chooses to share when opening the external app',
			'Google Maps, dialer, Google Calendar, etc.',
		],
		[
			'Pills TV on the same Wi‑Fi',
			'Medication/dose data over the local network',
			'User’s TV device',
		],
	],
	sections: [
		{
			id: 'controller',
			title: '1. Controller',
			body: [
				'Processing of data generated when using Pills is the responsibility of the app publisher listed on the store listings. Web contact: pills.serefor.com.',
			],
		},
		{
			id: 'data',
			title: '2. What data is processed',
			body: [
				'On the device (primary): Pills is designed to store on your phone or tablet profiles (name, sex, date of birth, avatar, conditions, allergies); medication, doses, reminders and taken/skipped marks; clinical history, diary, vital signs, care team and appointments; optional menstrual cycle data; preferences (language, theme, app lock, etc.); and backups the user exports or imports.',
				'On Android and iOS the database may be encrypted (SQLCipher) with a key stored in the system secure store (Keystore / Keychain).',
				'Pills does not require creating a cloud account for normal use.',
			],
		},
		{
			id: 'purposes',
			title: '3. Purposes',
			body: [
				'Remind and log doses and health habits.',
				'Show orientative information (e.g. AEMPS leaflets).',
				'Manage optional Premium purchases.',
				'Improve the technical experience (e.g. notification delivery).',
				'Pills does not replace medical advice.',
			],
		},
		{
			id: 'legal-basis',
			title: '4. Legal basis (EU / EEA)',
			body: [
				'Performance of the service requested by the user (use of the app).',
				'Consent when optional features are enabled (purchases, cloud notifications, etc.).',
				'Legitimate interest in the technical security of the device, without undermining rights.',
			],
		},
		{
			id: 'retention',
			title: '5. Retention',
			body: [
				'Local data remain while the app is installed or until the user deletes them (system settings, uninstall, profile deletion, or import/export under their control). After uninstalling on iOS, Keychain may retain keys; the app may regenerate them if it detects a clean install.',
			],
		},
		{
			id: 'processors',
			title: '6. Transfers and processors',
			body: [
				'Health information is not sold. Providers of the optional features listed (stores, RevenueCat, Firebase/Google, AEMPS/CIMA) may act as processors or technical counterparts under their own policies.',
			],
		},
		{
			id: 'rights',
			title: '7. Rights',
			body: [
				'Under applicable law (e.g. GDPR), the user may access, rectify, erase, restrict or object to processing of personal data, and withdraw consents. For local-only data, control can be exercised by deleting them on the device. For inquiries to the publisher: via pills.serefor.com.',
			],
		},
		{
			id: 'minors',
			title: '8. Minors',
			body: ['The app is not intended for minors without supervision by a responsible adult.'],
		},
		{
			id: 'changes',
			title: '9. Changes',
			body: [
				'We may update this policy. The current version will be published at pills.serefor.com/privacy and, where appropriate, summarised in the About section of the app.',
			],
		},
	],
};
