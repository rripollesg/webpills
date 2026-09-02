import type { UI } from '../types';

export const de: UI = {
	meta: {
		title: 'Pills — Ihre Gesundheit, verschlüsselt in der Tasche',
		description:
			'Medikamentenerinnerungen, klinische Historie, Tagebuch mit Körperkarte, Menstruationszyklus und Vitalwerte mit Schlaf und Wearables. CGM-Glukose und Scan in 6 Ländern. Daten bleiben verschlüsselt auf dem Gerät.',
		keywords:
			'Pills, Medikamente, Pillenerinnerung, klinische Historie, Gesundheitstagebuch, Menstruationszyklus, Vitalwerte, Privatsphäre, Verschlüsselung, Android, iOS',
		copyright: '© Serefor · Pills 2025',
	},
	nav: {
		features: 'Funktionen',
		screenshots: 'Screenshots',
		platforms: 'Plattformen',
		privacy: 'Privatsphäre',
		premium: 'Premium',
		faq: 'FAQ',
		download: 'Download',
		openMenu: 'Menü öffnen',
		closeMenu: 'Menü schließen',
		language: 'Sprache',
	},
	hero: {
		badge: 'V2.0.0 · ANDROID · IOS',
		titleBefore: 'Ihre Medikation und Gesundheit,',
		titleAccent: 'verschlüsselt in Ihrer Tasche',
		description:
			'Pills erinnert an jede Einnahme, speichert Ihre klinische Historie, Ihr Körperkarten-Tagebuch und Ihren Zyklus. Vitalwerte zum Hinzufügen, CGM-Glukose und Scan in 6 Ländern — alles verschlüsselt auf Ihrem Gerät.',
		ctaPrimary: 'Pills herunterladen',
		ctaSecondary: 'Alle Funktionen ansehen',
	},
	stats: {
		items: [
			{ value: 'TV', label: 'Erinnerungen & Pills TV' },
			{ value: '6', label: 'Oberflächensprachen' },
			{ value: '6+', label: 'Hinzufügbare Vitalwerte' },
			{ value: 'AES-256', label: 'Verschlüsselte Backups' },
		],
		ticker: [
			'CGM-GLUKOSE AUTO-SYNC',
			'SCHLAF & WEARABLES',
			'LABOR-OCR',
			'SPRACHBEFEHLE',
			'ANDROID-WIDGETS',
			'PILLS TV',
			'.PILLSBAK-BACKUPS',
			'SQLCIPHER-VERSCHLÜSSELUNG',
			'CIMA / BDPM / AIFA / BfArM / BASG / SWISSMEDIC',
			'MULTI-LAND VADEMECUM',
			'KÖRPERKARTE + VAS',
		],
	},
	features: {
		eyebrow: 'Funktionen',
		title: 'Alles, was Sie für Ihre Gesundheit brauchen',
		description:
			'Eine App für Medikation, klinische Historie, Tagebuch, Zyklus, Vitalwerte und Schlaf — damit Ihre Daten Ihr Gerät nicht verlassen.',
		items: [
			{
				icon: 'calendar',
				title: 'Einnahmekalender',
				description:
					'Tages- und Wochenansicht mit ausstehenden, genommenen und übersprungenen Dosen. Markieren aus der Benachrichtigung oder mit einem Tipp.',
			},
			{
				icon: 'scan',
				title: 'Multi-Land-Scan',
				description:
					'Packung scannen in ES, FR, IT, DE, AT und CH (CIMA, BDPM, AIFA, BfArM, BASG, Swissmedic). ATC-Vademecum inklusive.',
			},
			{
				icon: 'clipboard',
				title: 'Klinische Historie',
				description:
					'Notizen, Termine, Ärzteteam und Laborberichte mit OCR. Einheitliche Timeline nur lesend, um den Kontext zu bewahren.',
			},
			{
				icon: 'heart',
				title: 'Vitalwerte & Schlaf',
				description:
					'Blutdruck, Glukose mit CGM-Auto-Sync, Schlaf und Ruhepuls von Wearables (Health Connect), BMI, Temperatur und SpO₂.',
			},
			{
				icon: 'droplet',
				title: 'Menstruationszyklus',
				description:
					'Kalender, täglicher Fluss, Periodenvorhersage und fruchtbares Fenster. Verknüpfen Sie Ihre orale Verhütung mit dem Tracking.',
			},
			{
				icon: 'body',
				title: 'Körperkarten-Tagebuch',
				description:
					'Zonen markieren, VAS-Intensität 0–10 und lokale ICD-10-Hinweise. Alles offline auf Ihrem Gerät berechnet.',
			},
			{
				icon: 'mic',
				title: 'Sprachbefehle',
				description:
					'Fragen Sie nach fälligen Dosen oder markieren Sie eine Einnahme mit Siri, Google Assistant oder Alexa.',
			},
			{
				icon: 'users',
				title: 'Multi-Profil',
				description:
					'Mehrere Personen auf einem Gerät, jeweils mit isolierter Medikation, Tagebuch und Zyklus.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Ergänzung für Android TV / Fire TV / Tablet über lokales WLAN, Kopplung per Code oder QR.',
			},
		],
	},
	showcases: {
		diary: {
			eyebrow: 'Gesundheitstagebuch',
			title: 'Körperkarte mit Zonenorientierung und Intensität',
			description:
				'Markieren Sie die Schmerzzone auf der Silhouette, geben Sie die Intensität an (VAS 0–10) und erhalten Sie lokale Hinweise mit indikativen ICD-10-Codes — alles offline auf Ihrem Gerät berechnet.',
			bullets: [
				'Vorder- / Rückansicht mit wählbaren Zonen',
				'Info-, Vorsichts- oder Dringlichkeitswarnungen je nach Zone',
				'Verfügbar in es, en, pt, fr und de',
				'100 % offline, kein medizinischer Befund',
			],
			mock: {
				zonesLabel: 'Markierte Zonen',
				zone: 'Becken',
				alertTitle: 'Plötzlicher starker Beckenschmerz',
				alertBody:
					'Bei Personen mit Schwangerschaftsmöglichkeit: starker einseitiger Schmerz mit Schwindel oder Blutung — Notaufnahme aufsuchen.',
				cieTitle: 'Dysmenorrhoe / Menstruationsschmerz',
				cieDesc: 'Krämpfe während der Periode. Neue lähmende Schmerzen: gynäkologische Beratung.',
				evaLabel: 'Intensität (VAS)',
			},
		},
		cycle: {
			eyebrow: 'Menstruationszyklus',
			title: 'Kalender, Analyse und Zyklusvorhersage',
			description:
				'Erfassen Sie täglich Fluss und Symptome, sehen Sie Phasen im Monatskalender und erhalten Sie Hinweise zur nächsten Periode und zum geschätzten fruchtbaren Fenster.',
			bullets: [
				'Regelmäßigkeitsanalyse (NORMAL / ABNORMAL) mit Diagramm',
				'Bearbeitbare Periodenhistorie ohne Verlust Ihrer Symptome',
				'Dedizierter Zyklus-PDF-Bericht',
				'Ersetzt weder Verhütung noch Diagnose',
			],
			mock: {
				phaseLabel: 'Aktuelle Phase',
				phase: 'Follikel- / Lutealphase',
				ovulation: 'Eisprung in 3 Tagen',
				nextPeriod: 'Nächste Periode in 17 Tagen',
				button: 'Periodenende heute markieren',
			},
		},
	},
	screenshots: {
		eyebrow: 'Screenshots',
		title: 'Die App, wie Sie sie täglich nutzen',
		description:
			'Medikation, klinische Historie, Tagebuch, Vitalwerte mit Schlaf und Zyklus.',
		gallery: [
			{
				id: 'historial',
				title: 'Klinische Historie',
				caption: 'Timeline mit Notizen, Terminen, Laborwerten und Ärzteteam.',
			},
			{
				id: 'parte-medica',
				title: 'Arztbericht',
				caption: 'Fragen an den Arzt, Notizen und Symptomverfolgung.',
			},
			{
				id: 'ciclo-informe',
				title: 'Menstruationszyklus-Bericht',
				caption: 'PDF mit durchschnittlicher Dauer, Phasen-Timeline und protokollierten Symptomen.',
			},
			{
				id: 'calendario',
				title: 'Einnahmekalender',
				caption: 'Tagesansicht mit offenen, erledigten und nächster Einnahme.',
			},
			{
				id: 'parte-historial',
				title: 'Historiendetail',
				caption: 'Vollständige Ansicht jedes klinischen Eintrags.',
			},
			{
				id: 'constantes',
				title: 'Vitalwerte & Schlaf',
				caption: 'CGM-Glukose, Schlaf von Wearables, Blutdruck, BMI, Temperatur, Puls und SpO₂.',
			},
			{
				id: 'ciclo-registro',
				title: 'Zyklusprotokoll',
				caption: 'Täglicher Fluss, Symptome und Ausfluss mit Schnellauswahl.',
			},
			{
				id: 'perfil',
				title: 'Profil & Einstellungen',
				caption: 'Multi-Profil, biometrische Sperre und Präferenzen.',
			},
		],
	},
	voice: {
		eyebrow: 'Sprachbefehle',
		title: 'Abfragen und markieren ohne das Handy zu berühren',
		description: 'Kompatibel mit Siri, Google Assistant und Alexa. Daten werden auf dem Gerät gelesen.',
		hint: 'Öffnen Sie Pills mindestens einmal, mit Medikamenten und heutigen Einnahmen im aktiven Profil.',
		assistants: [
			{
				id: 'siri',
				name: 'Siri',
				platform: 'iPhone / iPad · iOS 16+',
				steps: [
					'Pills installieren und einmal öffnen.',
					'Einstellungen → Siri & Suchen → Pills.',
					'Sagen Sie eine der Phrasen unten.',
				],
				phrases: [
					'„Welche Pillen muss ich in Pills nehmen?“',
					'„Einnahme in Pills markieren“',
					'„Einnahme in Pills überspringen“',
				],
			},
			{
				id: 'google',
				name: 'Google',
				platform: 'Android',
				steps: [
					'Pills installieren und einmal öffnen.',
					'Google als Standard-Assistent festlegen.',
					'Sagen Sie „Ok Google“ + eine der Phrasen unten.',
				],
				phrases: [
					'„Welche Pillen muss ich in Pills nehmen?“',
					'„Einnahme in Pills markieren“',
					'„Einnahme in Pills überspringen“',
				],
			},
			{
				id: 'alexa',
				name: 'Alexa',
				platform: 'Echo / Amazon',
				steps: [
					'Alexa-App → Skills → „Pills“ suchen → Aktivieren.',
					'Echo auf Spanisch (Spanien) für es-ES-Phrasen.',
					'„Alexa, öffne Pills“ oder eine Phrase unten sagen.',
				],
				phrases: [
					'„Alexa, sag Pills, welche Pillen ich nehmen muss“',
					'„Alexa, sag Pills, dass ich die Pille genommen habe“',
					'„Alexa, sag Pills, die Einnahme zu überspringen“',
				],
				limitNote:
					'Alexa liest keine lokalen Medikamente. Zum Listen oder Markieren Siri, Google oder Pills auf dem Handy nutzen.',
			},
		],
	},
	platforms: {
		eyebrow: 'Plattformen',
		title: 'Verfügbar, wo Sie es brauchen',
		description:
			'Dieselbe Medikamentenerinnerung, angepasst an jedes Gerät.',
		items: [
			{
				icon: 'phone',
				title: 'Android / iOS',
				description:
					'Verschlüsselte Datenbank und Anhänge, Startbildschirm-Widgets und Sprachbefehle.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Ergänzung für Android TV, Fire TV oder Tablet, synchronisiert über lokales WLAN.',
			},
		],
	},
	privacy: {
		eyebrow: 'Privatsphäre',
		title: 'Ihre Gesundheitsdaten verlassen Ihr Telefon nicht',
		description:
			'Kein Pflicht-Cloud-Konto. Auf Android und iOS verschlüsselt SQLCipher die Datenbank; der Schlüssel liegt in Keychain / Keystore.',
		points: [
			'Master-Schlüssel in Keychain / Keystore mit HKDF-SHA256-Ableitung',
			'Anhänge (PDFs, Laborberichte) auf dem Gerät verschlüsselt',
			'Sperre mit PIN, Muster oder Biometrie',
			'Lokale .pillsbak-Backups mit PBKDF2 + AES-256-GCM',
			'Kein FCM und keine Symptom-Analytics standardmäßig',
		],
	},
	premium: {
		eyebrow: 'Pills Premium',
		title: 'Kostenlos starten, bei Bedarf erweitern',
		description: 'Keine Werbung, kein Datenverkauf. Premium schaltet nur mehr Kapazität frei.',
		recommended: 'Empfohlen',
		free: {
			name: 'Kostenlos',
			price: '0 €',
			period: 'für immer',
			cta: 'Kostenlos laden',
			features: [
				'Bis zu 3 Medikamente',
				'Klinische Historie 30 Tage',
				'Bis zu 5 Einzeltermine',
				'Bis zu 3 Laborberichte',
			],
		},
		paid: {
			name: 'Premium',
			price: 'Abo',
			period: 'App Store / Google Play',
			cta: 'Premium testen',
			features: [
				'Unbegrenzte Medikamente',
				'Vollständige klinische Historie',
				'Unbegrenzte Termine und Berichte',
				'PDF-Export für Vitalwerte, Historie und Zyklus',
				'Widget Tagesplan',
			],
		},
	},
	faq: {
		eyebrow: 'Häufige Fragen',
		title: 'Bevor Sie starten',
		items: [
			{
				question: 'Muss ich ein Konto erstellen?',
				answer:
					'Nein. Pills ist für den Betrieb ohne Pflicht-Cloud-Konto konzipiert. Ihre Daten bleiben auf dem Gerät.',
			},
			{
				question: 'Ersetzt Pills meinen Arzt?',
				answer:
					'Nein. Es ist ein Informationswerkzeug zum Organisieren und Beobachten Ihrer Daten. Es ersetzt keine ärztliche, pharmazeutische oder professionelle Diagnoseberatung.',
			},
			{
				question: 'Kann ich es für mehrere Personen nutzen?',
				answer:
					'Ja. Profile ermöglichen es mehreren Personen — z. B. einer Familie oder einer Pflegeperson — ihre Daten auf demselben Gerät getrennt zu halten.',
			},
			{
				question: 'Auf welchen Geräten funktioniert es?',
				answer:
					'Pills ist für Android und iOS verfügbar. Datenbank und Anhänge nutzen lokale Verschlüsselung.',
			},
			{
				question: 'Sind meine Daten sicher?',
				answer:
					'Ja. Auf Android und iOS nutzt die Datenbank SQLCipher mit einem Schlüssel in Keychain/Keystore. Backups sind lokal und passwortverschlüsselt.',
			},
		],
	},
	cta: {
		title: 'Kümmern Sie sich heute um Ihre Medikation',
		description:
			'Laden Sie Pills herunter und behalten Sie Einnahmekalender, Gesundheitstagebuch und Zyklus griffbereit — verschlüsselt auf Ihrem Gerät.',
		availableOn: 'Erhältlich bei',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		pillsTv: 'Pills TV',
		pillsTvHint: 'Android TV · Fire TV',
		apkDirect: 'APK herunterladen',
		trustLine: 'Ende-zu-Ende-Verschlüsselung · Ihre Daten bleiben auf dem Gerät',
		disclaimer:
			'Pills ist ein Informationswerkzeug. Es ersetzt keine ärztliche, pharmazeutische oder professionelle Diagnoseberatung.',
	},
	toast: {
		downloadTitle: 'Pills kommt bald',
		downloadBody: 'Wir bereiten die Download-Links vor. Schon sehr bald können Sie Pills überall dabeihaben.',
	},
	footer: {
		tagline:
			'Ihre Medikation, Ihr Zyklus und Ihre klinische Historie — organisiert und verschlüsselt auf Ihrem eigenen Gerät.',
		product: 'Produkt',
		legal: 'Rechtliches',
		privacyPolicy: 'Datenschutz',
		legalNotice: 'Impressum',
		contact: 'Kontakt',
		rights: 'Alle Rechte vorbehalten.',
		disclaimer:
			'Pills ist ein informatives Organisationswerkzeug. Bei Gesundheitsfragen wenden Sie sich an Fachpersonal.',
		creditsBefore: 'Website von ',
		creditsLink: 'serefor.com',
	},
};
