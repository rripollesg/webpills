import type { UI } from '../types';

export const it: UI = {
	meta: {
		title: 'Pills — La tua salute, crittografata in tasca',
		description:
			'Promemoria farmaci, storico clinico, diario con mappa corporea, ciclo mestruale e costanti con sonno e wearable. Glucosio CGM e scansione in 6 paesi. Dati crittografati sul dispositivo.',
		keywords:
			'Pills, farmaci, promemoria pillole, storico clinico, diario salute, ciclo mestruale, costanti vitali, privacy, crittografia, Android, iOS',
		copyright: '© Serefor · Pills 2025',
	},
	nav: {
		features: 'Funzioni',
		screenshots: 'Screenshot',
		platforms: 'Piattaforme',
		privacy: 'Privacy',
		premium: 'Premium',
		faq: 'FAQ',
		download: 'Scarica',
		openMenu: 'Apri menu',
		closeMenu: 'Chiudi menu',
		language: 'Lingua',
	},
	hero: {
		badge: 'V2.0.0 · ANDROID · IOS',
		titleBefore: 'I tuoi farmaci e la tua salute,',
		titleAccent: 'crittografati in tasca',
		description:
			'Pills ricorda ogni assunzione, conserva lo storico clinico, il diario con mappa corporea e il ciclo. Costanti vitali che puoi aggiungere, glucosio CGM e scansione in 6 paesi — tutto crittografato sul dispositivo.',
		ctaPrimary: 'Scarica Pills',
		ctaSecondary: 'Vedi tutte le funzioni',
	},
	stats: {
		items: [
			{ value: 'TV', label: 'Notifiche e Pills TV' },
			{ value: '6', label: 'Lingue interfaccia' },
			{ value: '6+', label: 'Costanti aggiungibili' },
			{ value: 'AES-256', label: 'Backup crittografati' },
		],
		ticker: [
			'GLUCOSIO CGM AUTO-SYNC',
			'SONNO E WEARABLE',
			'OCR ANALISI',
			'COMANDI VOCALI',
			'WIDGET ANDROID',
			'PILLS TV',
			'BACKUP .PILLSBAK',
			'CIFRATURA SQLCIPHER',
			'CIMA / BDPM / AIFA / BfArM / BASG / SWISSMEDIC',
			'VADEMECUM MULTI-PAESE',
			'MAPPA CORPOREA + EVA',
		],
	},
	features: {
		eyebrow: 'Funzioni',
		title: 'Tutto ciò che serve per la tua salute',
		description:
			'Una sola app per farmaci, storico clinico, diario, ciclo, costanti e sonno — pensata perché le informazioni non escano dal dispositivo.',
		items: [
			{
				icon: 'calendar',
				title: 'Calendario assunzioni',
				description:
					'Vista giornaliera e settimanale con dose in sospeso, assunte e saltate. Segna dalla notifica o con un tocco.',
			},
			{
				icon: 'scan',
				title: 'Scansione multi-paese',
				description:
					'Scansiona la confezione in ES, FR, IT, DE, AT e CH (CIMA, BDPM, AIFA, BfArM, BASG, Swissmedic). Vademecum ATC incluso.',
			},
			{
				icon: 'clipboard',
				title: 'Storico clinico',
				description:
					'Note, appuntamenti, équipe medica e analisi con OCR. Timeline unificata in sola lettura per non perdere il contesto.',
			},
			{
				icon: 'heart',
				title: 'Costanti e sonno',
				description:
					'Pressione, glucosio con auto-sync CGM, sonno e FC a riposo da wearable (Health Connect), IMC, temperatura e SpO₂.',
			},
			{
				icon: 'droplet',
				title: 'Ciclo mestruale',
				description:
					'Calendario, flusso giornaliero, previsione mestruazioni e finestra fertile. Collega il contraccettivo orale al monitoraggio.',
			},
			{
				icon: 'body',
				title: 'Diario con mappa corporea',
				description:
					'Segna zone, intensità EVA 0–10 e orientamento locale CIE-10. Tutto calcolato offline sul dispositivo.',
			},
			{
				icon: 'mic',
				title: 'Comandi vocali',
				description:
					'Chiedi quali farmaci assumere o segna un\'assunzione con Siri, Google Assistant o Alexa.',
			},
			{
				icon: 'users',
				title: 'Multi-profilo',
				description:
					'Più persone sullo stesso dispositivo, ciascuna con farmaci, diario e ciclo isolati.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion per Android TV / Fire TV / tablet in Wi‑Fi locale, abbinamento con codice o QR.',
			},
		],
	},
	showcases: {
		diary: {
			eyebrow: 'Diario di salute',
			title: 'Mappa corporea con orientamento per zona e intensità',
			description:
				'Segna la zona del dolore sulla sagoma, indica l\'intensità (EVA 0–10) e ricevi orientamento locale con codici CIE-10 indicativi — tutto calcolato offline sul dispositivo.',
			bullets: [
				'Sagoma fronte / retro con zone selezionabili',
				'Avvisi informativi, di precauzione o urgenza per zona',
				'Disponibile in es, en, pt, fr e de',
				'100% offline, non è una diagnosi medica',
			],
			mock: {
				zonesLabel: 'Zone segnate',
				zone: 'Bacino',
				alertTitle: 'Dolore pelvico improvviso intenso',
				alertBody:
					'In persone con possibilità di gravidanza, dolore unilaterale intenso con capogiro o sanguinamento: pronto soccorso.',
				cieTitle: 'Dismenorrea / dolore mestruale',
				cieDesc: 'Crampi con le mestruazioni. Dolore invalidante nuovo: consultare un ginecologo.',
				evaLabel: 'Intensità (EVA)',
			},
		},
		cycle: {
			eyebrow: 'Ciclo mestruale',
			title: 'Calendario, analisi e previsione del ciclo',
			description:
				'Registra flusso e sintomi ogni giorno, visualizza le fasi nel calendario mensile e ricevi avvisi per la prossima mestruazione e la finestra fertile stimata.',
			bullets: [
				'Analisi della regolarità (NORMALE / ANORMALE) con grafico',
				'Storico mestruazioni modificabile, senza perdere i sintomi',
				'Report PDF dedicato al ciclo',
				'Non sostituisce contraccezione né diagnosi',
			],
			mock: {
				phaseLabel: 'Fase attuale',
				phase: 'Follicolare / luteale',
				ovulation: 'Ovulazione tra 3 giorni',
				nextPeriod: 'Prossima mestruazione tra 17 giorni',
				button: 'Segna fine mestruazione oggi',
			},
		},
	},
	screenshots: {
		eyebrow: 'Screenshot',
		title: "L'app come la usi ogni giorno",
		description:
			'Farmaci, storico clinico, diario, costanti con sonno e ciclo.',
		gallery: [
			{
				id: 'historial',
				title: 'Storico clinico',
				caption: 'Timeline con note, appuntamenti, analisi ed équipe medica.',
			},
			{
				id: 'parte-medica',
				title: 'Scheda medica',
				caption: 'Domande al medico, note e monitoraggio dei sintomi.',
			},
			{
				id: 'ciclo-informe',
				title: 'Report del ciclo mestruale',
				caption: 'PDF con durata media, timeline delle fasi e sintomi registrati.',
			},
			{
				id: 'calendario',
				title: 'Calendario assunzioni',
				caption: 'Vista giornaliera con dose in sospeso, assunte e prossima.',
			},
			{
				id: 'parte-historial',
				title: 'Dettaglio storico',
				caption: 'Vista completa di ogni voce clinica.',
			},
			{
				id: 'constantes',
				title: 'Costanti e sonno',
				caption: 'Glucosio CGM, sonno da wearable, pressione, IMC, temperatura, FC e SpO₂.',
			},
			{
				id: 'ciclo-registro',
				title: 'Registro del ciclo',
				caption: 'Flusso giornaliero, sintomi e secrezione con chip rapidi.',
			},
			{
				id: 'perfil',
				title: 'Profilo e impostazioni',
				caption: 'Multi-profilo, blocco biometrico e preferenze.',
			},
		],
	},
	voice: {
		eyebrow: 'Comandi vocali',
		title: 'Chiedi e segna le assunzioni senza toccare il telefono',
		description: 'Compatibile con Siri, Google Assistant e Alexa. I dati si leggono sul dispositivo.',
		hint: 'Apri Pills almeno una volta, con farmaci e assunzioni di oggi sul profilo attivo.',
		moreLabel: 'Mostra più dettagli',
		actionsTitle: 'Deep link',
		actions: [
			{ name: 'Cosa assumere', link: 'pills://dose/upcoming' },
			{ name: 'Segna assunzione', link: 'pills://dose/taken' },
			{ name: 'Salta assunzione', link: 'pills://dose/skipped' },
			{ name: 'Promemoria', link: 'pills://reminders' },
		],
		assistants: [
			{
				id: 'siri',
				name: 'Siri',
				platform: 'iPhone / iPad · iOS 16+',
				steps: [
					'Installa Pills e aprila una volta.',
					'Impostazioni → Siri e ricerca → Pills.',
					'Dì la frase o fissala in Comandi.',
				],
				phrases: [
					'«Quali farmaci devo prendere in Pills»',
					'«Segna assunzione in Pills»',
					'«Salta assunzione in Pills»',
				],
				altTitle: 'Comando manuale',
				altSteps: [
					'Comandi → + → Apri URL → pills://dose/upcoming.',
					'Dagli un nome e attivalo con Siri.',
				],
			},
			{
				id: 'google',
				name: 'Google',
				platform: 'Android',
				steps: [
					'Installa Pills e aprila una volta.',
					'Usa Google come assistente predefinito.',
					'Dì «Ok Google» + la frase (indicizzazione in alcune ore).',
				],
				phrases: [
					'«Quali farmaci devo prendere in Pills»',
					'«Segna assunzione in Pills»',
					'«Salta assunzione in Pills»',
				],
				altTitle: 'Routine Google Home',
				altSteps: [
					'Google Home → Automazioni → frase personalizzata.',
					'Azione → Apri URL → pills://dose/upcoming.',
				],
			},
			{
				id: 'alexa',
				name: 'Alexa',
				platform: 'Echo / Amazon',
				steps: [
					'App Alexa → Skill → cerca «Pills» → Attiva.',
					'Echo in spagnolo (Spagna) per frasi es-ES.',
					'Dì «Alexa, apri Pills» o una frase sotto.',
				],
				phrases: [
					'«Alexa, chiedi a Pills quali farmaci devo prendere»',
					'«Alexa, dì a Pills che ho preso la pillola»',
					'«Alexa, dì a Pills di saltare l\'assunzione»',
				],
				limitNote:
					'Alexa non legge i farmaci locali. Per elencare o segnare assunzioni usa Siri, Google o apri Pills sul telefono.',
			},
		],
	},
	platforms: {
		eyebrow: 'Piattaforme',
		title: 'Disponibile dove ti serve',
		description:
			'La stessa esperienza di promemoria farmaci, adattata a ogni dispositivo.',
		items: [
			{
				icon: 'phone',
				title: 'Android / iOS',
				description:
					'Database e allegati crittografati, widget sulla schermata home e comandi vocali.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion per Android TV, Fire TV o tablet, sincronizzata in Wi‑Fi locale.',
			},
		],
	},
	privacy: {
		eyebrow: 'Privacy',
		title: 'I tuoi dati sanitari non lasciano il telefono',
		description:
			'Nessun account cloud obbligatorio. Su Android e iOS SQLCipher cifra il database; la chiave resta in Keychain / Keystore.',
		points: [
			'Chiave master in Keychain / Keystore con derivazione HKDF-SHA256',
			'Allegati (PDF, analisi) cifrati sul dispositivo',
			'Blocco con PIN, schema o biometria',
			'Backup locali .pillsbak con PBKDF2 + AES-256-GCM',
			'Niente FCM né analytics dei sintomi di default',
		],
	},
	premium: {
		eyebrow: 'Pills Premium',
		title: 'Inizia gratis, amplia quando serve',
		description: 'Niente pubblicità né vendita di dati. Premium sblocca solo più capacità.',
		recommended: 'Consigliato',
		free: {
			name: 'Gratis',
			price: '0 €',
			period: 'per sempre',
			cta: 'Scarica gratis',
			features: [
				'Fino a 3 farmaci',
				'Storico clinico 30 giorni',
				'Fino a 5 appuntamenti singoli',
				'Fino a 3 referti di laboratorio',
			],
		},
		paid: {
			name: 'Premium',
			price: 'Abbonamento',
			period: 'App Store / Google Play',
			cta: 'Prova Premium',
			features: [
				'Farmaci illimitati',
				'Storico clinico completo',
				'Appuntamenti e referti illimitati',
				'Export PDF di vitali, storico e ciclo',
				'Widget programmazione di oggi',
			],
		},
	},
	faq: {
		eyebrow: 'Domande frequenti',
		title: 'Prima di iniziare',
		items: [
			{
				question: 'Devo creare un account?',
				answer:
					'No. Pills è pensata per funzionare senza un account cloud obbligatorio. I dati restano sul dispositivo.',
			},
			{
				question: 'Pills sostituisce il mio medico?',
				answer:
					'No. È uno strumento informativo per organizzare e osservare i tuoi dati. Non sostituisce il parere medico, farmaceutico né una diagnosi professionale.',
			},
			{
				question: 'Posso usarla per più persone?',
				answer:
					'Sì. I profili permettono a più persone — ad esempio una famiglia o un caregiver — di tenere i dati isolati sullo stesso dispositivo.',
			},
			{
				question: 'Su quali dispositivi funziona?',
				answer:
					'Pills è disponibile per Android e iOS. Database e allegati usano crittografia locale.',
			},
			{
				question: 'I miei dati sono al sicuro?',
				answer:
					'Sì. Su Android e iOS il database usa SQLCipher con chiave in Keychain/Keystore. I backup sono locali e cifrati con password.',
			},
		],
	},
	cta: {
		title: 'Inizia a curare le tue assunzioni oggi',
		description:
			'Scarica Pills e tieni a portata di mano calendario assunzioni, diario di salute e ciclo mestruale — crittografati sul dispositivo.',
		availableOn: 'Scarica su',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		pillsTv: 'Pills TV',
		pillsTvHint: 'Android TV · Fire TV',
		apkDirect: 'Scarica APK',
		trustLine: 'Crittografia end-to-end · I tuoi dati restano sul dispositivo',
		disclaimer:
			'Pills è uno strumento informativo. Non sostituisce il parere medico, farmaceutico né una diagnosi professionale.',
	},
	toast: {
		downloadTitle: 'Pills in arrivo',
		downloadBody: 'Stiamo preparando i link per il download. Molto presto potrai portare Pills con te.',
	},
	footer: {
		tagline:
			'I tuoi farmaci, il tuo ciclo e il tuo storico clinico — organizzati e crittografati sul tuo dispositivo.',
		product: 'Prodotto',
		legal: 'Legale',
		privacyPolicy: 'Informativa privacy',
		legalNotice: 'Note legali',
		contact: 'Contatto',
		rights: 'Tutti i diritti riservati.',
		disclaimer:
			'Pills è uno strumento informativo e di organizzazione personale. Per dubbi sulla salute, consulta un professionista.',
		creditsBefore: 'Sito sviluppato da ',
		creditsLink: 'serefor.com',
	},
};
