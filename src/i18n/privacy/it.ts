import type { PrivacyPage } from '../privacy-types';

export const privacyIt: PrivacyPage = {
	metaTitle: 'Informativa sulla privacy — Pills',
	metaDescription:
		'Come Pills tratta i dati sanitari: archiviazione cifrata sul dispositivo, senza account cloud obbligatorio.',
	title: 'Informativa sulla privacy',
	updated: 'Ultimo aggiornamento: 14 agosto 2026',
	intro:
		'Questa informativa descrive come l’app Pills (Serefor) tratta le informazioni. Pubblicata per Google Play e App Store Connect.',
	backHome: 'Torna alla home',
	tableCaption: 'Dati che possono lasciare il dispositivo (opzionali)',
	tableHeaders: ['Funzione', 'Cosa può essere inviato', 'Destinazione'],
	tableRows: [
		['Foglietti / scansione CIMA', 'Codici o query di farmaci', 'Servizi AEMPS / CIMA'],
		['Pills Premium', 'Identificatori di acquisto / ricevute store', 'Google Play, App Store, RevenueCat'],
		[
			'Notifiche push (se attive nel build)',
			'Token FCM e metadati tecnici',
			'Firebase / Google',
		],
		[
			'Apri Maps / chiamata / calendario',
			'Dati che l’utente sceglie di condividere',
			'Google Maps, telefono, Google Calendar, ecc.',
		],
		[
			'Pills TV sulla stessa Wi‑Fi',
			'Dati di medicazione/assunzioni sulla rete locale',
			'Dispositivo TV dell’utente',
		],
	],
	sections: [
		{
			id: 'titolare',
			title: '1. Titolare',
			body: [
				'Il trattamento dei dati generati usando Pills è responsabilità dell’editore indicato nelle schede degli store. Contatto web: pills.serefor.com.',
			],
		},
		{
			id: 'dati',
			title: '2. Quali dati sono trattati',
			body: [
				'Sul dispositivo (principale): profili, farmaci, assunzioni, storico clinico, diario, costanti vitali, ciclo mestruale opzionale, preferenze e backup esportati/importati dall’utente.',
				'Su Android e iOS il database può essere cifrato (SQLCipher) con chiave in Keystore / Keychain.',
				'Pills non richiede un account cloud per l’uso abituale.',
			],
		},
		{
			id: 'finalita',
			title: '3. Finalità',
			body: [
				'Ricordare e registrare assunzioni e abitudini di salute.',
				'Mostrare informazioni orientative (es. foglietti AEMPS).',
				'Gestire acquisti Premium opzionali.',
				'Migliorare l’esperienza tecnica (es. notifiche).',
				'Pills non sostituisce il consiglio medico.',
			],
		},
		{
			id: 'base-giuridica',
			title: '4. Base giuridica (UE / SEE)',
			body: [
				'Esecuzione del servizio richiesto dall’utente.',
				'Consenso per funzioni opzionali.',
				'Interesse legittimo alla sicurezza tecnica del dispositivo.',
			],
		},
		{
			id: 'conservazione',
			title: '5. Conservazione',
			body: [
				'I dati locali restano finché l’app è installata o fino alla cancellazione da parte dell’utente. Dopo la disinstallazione su iOS, Keychain può conservare le chiavi; l’app può rigenerarle in caso di installazione pulita.',
			],
		},
		{
			id: 'responsabili',
			title: '6. Cessioni e responsabili del trattamento',
			body: [
				'Non si vendono informazioni sanitarie. I fornitori delle funzioni opzionali (store, RevenueCat, Firebase/Google, AEMPS/CIMA) possono intervenire secondo le proprie politiche.',
			],
		},
		{
			id: 'diritti',
			title: '7. Diritti',
			body: [
				'Secondo la legge applicabile (es. GDPR), l’utente può accedere, rettificare, cancellare, limitare o opporsi al trattamento e revocare i consensi. Per i dati locali: cancellazione sul dispositivo. Contatto: pills.serefor.com.',
			],
		},
		{
			id: 'minori',
			title: '8. Minori',
			body: ['L’app non è destinata ai minori senza supervisione di un adulto responsabile.'],
		},
		{
			id: 'modifiche',
			title: '9. Modifiche',
			body: [
				'Possiamo aggiornare questa informativa. La versione vigente sarà pubblicata su pills.serefor.com/privacy.',
			],
		},
	],
};
