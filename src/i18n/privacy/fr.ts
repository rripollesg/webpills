import type { PrivacyPage } from '../privacy-types';

export const privacyFr: PrivacyPage = {
	metaTitle: 'Politique de confidentialité — Pills',
	metaDescription:
		'Comment Pills traite vos données de santé : stockage chiffré sur l’appareil, sans compte cloud obligatoire.',
	title: 'Politique de confidentialité',
	updated: 'Dernière mise à jour : 14 août 2026',
	intro:
		'Cette politique décrit comment l’application Pills (Serefor) traite les informations. Publiée pour Google Play et App Store Connect.',
	backHome: 'Retour à l’accueil',
	tableCaption: 'Données pouvant quitter l’appareil (optionnelles)',
	tableHeaders: ['Fonction', 'Ce qui peut être envoyé', 'Destination'],
	tableRows: [
		['Notices / scan CIMA', 'Codes ou requêtes de médicament', 'Services AEMPS / CIMA'],
		['Pills Premium', 'Identifiants d’achat / reçus magasin', 'Google Play, App Store, RevenueCat'],
		[
			'Notifications push (si activées dans le build)',
			'Jeton FCM et métadonnées techniques',
			'Firebase / Google',
		],
		[
			'Ouvrir Maps / appel / calendrier',
			'Données que l’utilisateur choisit de partager',
			'Google Maps, composeur, Google Calendar, etc.',
		],
		[
			'Pills TV sur le même Wi‑Fi',
			'Données de médication/prises sur le réseau local',
			'Appareil TV de l’utilisateur',
		],
	],
	sections: [
		{
			id: 'responsable',
			title: '1. Responsable',
			body: [
				'Le traitement des données générées lors de l’utilisation de Pills relève de l’éditeur indiqué sur les fiches des stores. Contact web : pills.serefor.com.',
			],
		},
		{
			id: 'donnees',
			title: '2. Quelles données sont traitées',
			body: [
				'Sur l’appareil (principal) : profils, médication, prises, historique clinique, journal, constantes, cycle menstruel optionnel, préférences et sauvegardes exportées/importées par l’utilisateur.',
				'Sur Android et iOS, la base peut être chiffrée (SQLCipher) avec une clé dans Keystore / Keychain.',
				'Pills n’exige pas de compte cloud pour un usage habituel.',
			],
		},
		{
			id: 'finalites',
			title: '3. Finalités',
			body: [
				'Rappeler et enregistrer les prises et habitudes de santé.',
				'Afficher des informations indicatives (ex. notices AEMPS).',
				'Gérer les achats Premium optionnels.',
				'Améliorer l’expérience technique (ex. notifications).',
				'Pills ne remplace pas un avis médical.',
			],
		},
		{
			id: 'base-legale',
			title: '4. Base juridique (UE / EEE)',
			body: [
				'Exécution du service demandé par l’utilisateur.',
				'Consentement pour les fonctions optionnelles.',
				'Intérêt légitime pour la sécurité technique de l’appareil.',
			],
		},
		{
			id: 'conservation',
			title: '5. Conservation',
			body: [
				'Les données locales restent tant que l’app est installée ou jusqu’à suppression par l’utilisateur. Après désinstallation sur iOS, le Keychain peut conserver des clés ; l’app peut les régénérer en cas d’installation propre.',
			],
		},
		{
			id: 'sous-traitants',
			title: '6. Cessions et sous-traitants',
			body: [
				'Aucune vente d’informations de santé. Les fournisseurs des fonctions optionnelles (stores, RevenueCat, Firebase/Google, AEMPS/CIMA) peuvent intervenir selon leurs propres politiques.',
			],
		},
		{
			id: 'droits',
			title: '7. Droits',
			body: [
				'Conformément au droit applicable (ex. RGPD), l’utilisateur peut accéder, rectifier, effacer, limiter ou s’opposer au traitement, et retirer ses consentements. Pour les données locales : suppression sur l’appareil. Contact : pills.serefor.com.',
			],
		},
		{
			id: 'mineurs',
			title: '8. Mineurs',
			body: ['L’app n’est pas destinée aux mineurs sans supervision d’un adulte responsable.'],
		},
		{
			id: 'modifications',
			title: '9. Modifications',
			body: [
				'Nous pouvons mettre à jour cette politique. La version en vigueur sera publiée sur pills.serefor.com/privacy.',
			],
		},
	],
};
