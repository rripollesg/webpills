import type { PrivacyPage } from '../privacy-types';

export const privacyDe: PrivacyPage = {
	metaTitle: 'Datenschutzrichtlinie — Pills',
	metaDescription:
		'Wie Pills Ihre Gesundheitsdaten verarbeitet: verschlüsselte lokale Speicherung, kein Pflicht-Cloud-Konto.',
	title: 'Datenschutzrichtlinie',
	updated: 'Zuletzt aktualisiert: 14. August 2026',
	intro:
		'Diese Richtlinie beschreibt, wie die App Pills (Serefor) Informationen verarbeitet. Veröffentlicht für Google Play und App Store Connect.',
	backHome: 'Zur Startseite',
	tableCaption: 'Daten, die das Gerät verlassen können (optional)',
	tableHeaders: ['Funktion', 'Was gesendet werden kann', 'Ziel'],
	tableRows: [
		['Beipackzettel / CIMA-Scan', 'Medikamentencodes oder Abfragen', 'AEMPS-/CIMA-Dienste'],
		['Pills Premium', 'Kaufkennungen / Store-Belege', 'Google Play, App Store, RevenueCat'],
		[
			'Push-Benachrichtigungen (falls im Build aktiv)',
			'FCM-Token und technische Metadaten',
			'Firebase / Google',
		],
		[
			'Maps / Anruf / Kalender öffnen',
			'Daten, die der Nutzer beim Öffnen teilt',
			'Google Maps, Telefon, Google Kalender usw.',
		],
		[
			'Pills TV imselben WLAN',
			'Medikations-/Einnahmedaten im lokalen Netz',
			'TV-Gerät des Nutzers',
		],
	],
	sections: [
		{
			id: 'verantwortlicher',
			title: '1. Verantwortlicher',
			body: [
				'Die Verarbeitung der bei Nutzung von Pills erzeugten Daten obliegt dem in den Store-Einträgen angegebenen Herausgeber. Webkontakt: pills.serefor.com.',
			],
		},
		{
			id: 'daten',
			title: '2. Welche Daten verarbeitet werden',
			body: [
				'Auf dem Gerät (hauptsächlich): Profile, Medikation, Einnahmen, klinische Historie, Tagebuch, Vitalwerte, optionaler Zyklus, Einstellungen und vom Nutzer exportierte/importierte Backups.',
				'Unter Android und iOS kann die Datenbank verschlüsselt sein (SQLCipher) mit Schlüssel in Keystore / Keychain.',
				'Pills erfordert kein Cloud-Konto für den normalen Gebrauch.',
			],
		},
		{
			id: 'zwecke',
			title: '3. Zwecke',
			body: [
				'Einnahmen und Gesundheitsgewohnheiten erinnern und erfassen.',
				'Orientierende Informationen anzeigen (z. B. AEMPS-Beipackzettel).',
				'Optionale Premium-Käufe verwalten.',
				'Technische Erfahrung verbessern (z. B. Benachrichtigungen).',
				'Pills ersetzt keine medizinische Beratung.',
			],
		},
		{
			id: 'rechtsgrundlage',
			title: '4. Rechtsgrundlage (EU / EWR)',
			body: [
				'Erfüllung der vom Nutzer angeforderten Dienstleistung.',
				'Einwilligung bei optionalen Funktionen.',
				'Berechtigtes Interesse an der technischen Gerätesicherheit.',
			],
		},
		{
			id: 'speicherung',
			title: '5. Speicherdauer',
			body: [
				'Lokale Daten bleiben, solange die App installiert ist oder bis der Nutzer sie löscht. Nach Deinstallation unter iOS kann Keychain Schlüssel behalten; die App kann sie bei sauberer Installation neu erzeugen.',
			],
		},
		{
			id: 'auftragsverarbeiter',
			title: '6. Weitergaben und Auftragsverarbeiter',
			body: [
				'Gesundheitsinformationen werden nicht verkauft. Anbieter optionaler Funktionen (Stores, RevenueCat, Firebase/Google, AEMPS/CIMA) können nach eigenen Richtlinien tätig werden.',
			],
		},
		{
			id: 'rechte',
			title: '7. Rechte',
			body: [
				'Nach geltendem Recht (z. B. DSGVO) kann der Nutzer Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch verlangen und Einwilligungen widerrufen. Lokale Daten: Löschung auf dem Gerät. Kontakt: pills.serefor.com.',
			],
		},
		{
			id: 'minderjaehrige',
			title: '8. Minderjährige',
			body: ['Die App richtet sich nicht an Minderjährige ohne Aufsicht eines verantwortlichen Erwachsenen.'],
		},
		{
			id: 'aenderungen',
			title: '9. Änderungen',
			body: [
				'Wir können diese Richtlinie aktualisieren. Die geltende Fassung wird unter pills.serefor.com/privacy veröffentlicht.',
			],
		},
	],
};
