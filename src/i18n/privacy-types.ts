export type PrivacyPage = {
	metaTitle: string;
	metaDescription: string;
	title: string;
	updated: string;
	intro: string;
	backHome: string;
	sections: { id: string; title: string; body: string[] }[];
	tableCaption: string;
	tableHeaders: [string, string, string];
	tableRows: [string, string, string][];
};

export const privacyUpdated = '2026-08-14';
