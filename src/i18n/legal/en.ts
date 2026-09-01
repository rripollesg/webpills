import type { LegalPage } from '../legal-types';

export const legalEn: LegalPage = {
	metaTitle: 'Legal notice — Pills',
	metaDescription:
		'Legal information for the Pills app and pills.serefor.com: publisher, informational use and limitation of liability.',
	title: 'Legal notice',
	updated: 'Last updated: 1 September 2026',
	intro:
		'In accordance with applicable information society services regulations, users are provided with the following information.',
	backHome: 'Back to home',
	sections: [
		{
			id: 'titular',
			title: '1. Site owner',
			body: [
				'Owner: Serefor (www.serefor.com), publisher of the Pills application.',
				'Website: pills.serefor.com.',
				'Contact: via the channels listed on the official store listings or on serefor.com.',
			],
		},
		{
			id: 'objeto',
			title: '2. Purpose',
			body: [
				'This website presents the Pills mobile app: medication reminders, clinical history, health diary, menstrual cycle and vitals with encrypted local storage.',
				'Pills is a personal organisation and information tool. It is not a medical device or healthcare product.',
			],
		},
		{
			id: 'informes',
			title: '3. Reports and content',
			body: [
				'Exported reports (for example, menstrual cycle or clinical history) are generated from data entered by the user on their device.',
				'They are orientation documents to support personal tracking or discussions with a professional. They do not constitute diagnosis, prescription or therapeutic advice.',
			],
		},
		{
			id: 'responsabilidad',
			title: '4. Liability',
			body: [
				'The owner is not liable for how users apply the information shown in the app or on this website.',
				'For severe symptoms, medical questions or pregnancy, always consult a healthcare professional.',
				'Users are responsible for the accuracy of the data they record and for keeping backups when appropriate.',
			],
		},
		{
			id: 'propiedad',
			title: '5. Intellectual property',
			body: [
				'Pills texts, design, logos, screenshots and code are owned by Serefor or its licensors. Reproduction without permission is prohibited.',
			],
		},
		{
			id: 'enlaces',
			title: '6. Links and privacy',
			body: [
				'This site may link to app stores or third-party services. Personal data processing is described in the Privacy Policy.',
			],
		},
		{
			id: 'ley',
			title: '7. Applicable law',
			body: [
				'Use of this website is governed by Spanish law. Any dispute shall be submitted to the courts that apply under current regulations.',
			],
		},
	],
};
