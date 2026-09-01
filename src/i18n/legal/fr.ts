import type { LegalPage } from '../legal-types';

export const legalFr: LegalPage = {
	metaTitle: 'Mentions légales — Pills',
	metaDescription:
		'Informations légales sur l’application Pills et le site pills.serefor.com : éditeur, usage informatif et limitation de responsabilité.',
	title: 'Mentions légales',
	updated: 'Dernière mise à jour : 1 septembre 2026',
	intro:
		'Conformément à la réglementation applicable aux services de la société de l’information, les utilisateurs trouvent ci-dessous les informations suivantes.',
	backHome: 'Retour à l’accueil',
	sections: [
		{
			id: 'titular',
			title: '1. Éditeur du site',
			body: [
				'Éditeur : Serefor (éditeur de l’application Pills).',
				'Site web : pills.serefor.com.',
				'Contact : via les canaux indiqués sur les fiches de l’application dans les boutiques officielles ou dans la section contact de serefor.com.',
			],
		},
		{
			id: 'objeto',
			title: '2. Objet',
			body: [
				'Ce site présente l’application mobile Pills : rappels de médication, historique clinique, journal de santé, cycle menstruel et constantes vitales avec stockage local chiffré.',
				'Pills est un outil d’organisation et d’information personnelle. Il ne constitue pas un dispositif médical ni un produit de santé.',
			],
		},
		{
			id: 'informes',
			title: '3. Rapports et contenus',
			body: [
				'Les rapports exportés (par exemple, du cycle menstruel ou de l’historique clinique) sont générés à partir des données saisies par l’utilisateur sur son appareil.',
				'Il s’agit de documents d’orientation pour faciliter le suivi personnel ou les échanges avec un professionnel. Ils ne constituent ni un diagnostic, ni une prescription, ni une recommandation thérapeutique.',
			],
		},
		{
			id: 'responsabilidad',
			title: '4. Responsabilité',
			body: [
				'L’éditeur décline toute responsabilité quant à l’usage que l’utilisateur fait des informations affichées dans l’application ou sur ce site.',
				'En cas de symptômes graves, de doutes médicaux ou de grossesse, consultez toujours un professionnel de santé.',
				'L’utilisateur est responsable de l’exactitude des données qu’il enregistre et de la conservation de copies de sauvegarde lorsqu’il le juge nécessaire.',
			],
		},
		{
			id: 'propiedad',
			title: '5. Propriété intellectuelle',
			body: [
				'Les textes, le design, les logos, les captures d’écran et le code de Pills sont la propriété de Serefor ou de ses concédants de licence. Toute reproduction sans autorisation est interdite.',
			],
		},
		{
			id: 'enlaces',
			title: '6. Liens et confidentialité',
			body: [
				'Ce site peut renvoyer vers des boutiques d’applications ou des services tiers. Le traitement des données personnelles est décrit dans la Politique de confidentialité.',
			],
		},
		{
			id: 'ley',
			title: '7. Droit applicable',
			body: [
				'L’utilisation de ce site est régie par le droit espagnol. Tout litige sera soumis aux tribunaux compétents conformément à la réglementation en vigueur.',
			],
		},
	],
};
