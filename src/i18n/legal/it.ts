import type { LegalPage } from '../legal-types';

export const legalIt: LegalPage = {
	metaTitle: 'Note legali — Pills',
	metaDescription:
		'Informazioni legali sull’app Pills e sul sito pills.serefor.com: titolare, uso informativo e limitazione di responsabilità.',
	title: 'Note legali',
	updated: 'Ultimo aggiornamento: 1 settembre 2026',
	intro:
		'In conformità con la normativa applicabile ai servizi della società dell’informazione, agli utenti vengono fornite le seguenti informazioni.',
	backHome: 'Torna alla home',
	sections: [
		{
			id: 'titular',
			title: '1. Titolare del sito',
			body: [
				'Titolare: Serefor (editore dell’applicazione Pills).',
				'Sito web: pills.serefor.com.',
				'Contatto: tramite i canali indicati nelle schede dell’app negli store ufficiali o nella sezione contatti di serefor.com.',
			],
		},
		{
			id: 'objeto',
			title: '2. Oggetto',
			body: [
				'Questo sito presenta l’app mobile Pills: promemoria per i farmaci, storico clinico, diario della salute, ciclo mestruale e parametri vitali con archiviazione locale crittografata.',
				'Pills è uno strumento di organizzazione e informazione personale. Non è un dispositivo medico né un prodotto sanitario.',
			],
		},
		{
			id: 'informes',
			title: '3. Report e contenuti',
			body: [
				'I report esportati (ad esempio, del ciclo mestruale o dello storico clinico) vengono generati dai dati inseriti dall’utente sul proprio dispositivo.',
				'Sono documenti orientativi per facilitare il monitoraggio personale o il confronto con un professionista. Non costituiscono diagnosi, prescrizione né raccomandazione terapeutica.',
			],
		},
		{
			id: 'responsabilidad',
			title: '4. Responsabilità',
			body: [
				'Il titolare non è responsabile dell’uso che l’utente fa delle informazioni mostrate nell’app o su questo sito.',
				'In caso di sintomi gravi, dubbi medici o gravidanza, consultare sempre un professionista sanitario.',
				'L’utente è responsabile dell’accuratezza dei dati che registra e del mantenimento di copie di backup quando lo ritiene opportuno.',
			],
		},
		{
			id: 'propiedad',
			title: '5. Proprietà intellettuale',
			body: [
				'Testi, design, loghi, screenshot e codice di Pills sono di proprietà di Serefor o dei suoi licenzianti. È vietata la riproduzione senza autorizzazione.',
			],
		},
		{
			id: 'enlaces',
			title: '6. Link e privacy',
			body: [
				'Questo sito può collegarsi a store di applicazioni o servizi di terze parti. Il trattamento dei dati personali è descritto nell’Informativa sulla privacy.',
			],
		},
		{
			id: 'ley',
			title: '7. Legge applicabile',
			body: [
				'L’utilizzo di questo sito è regolato dalla legge spagnola. Qualsiasi controversia sarà sottoposta ai tribunali competenti secondo la normativa vigente.',
			],
		},
	],
};
