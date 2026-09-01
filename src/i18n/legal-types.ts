export type LegalPage = {
	metaTitle: string;
	metaDescription: string;
	title: string;
	updated: string;
	intro: string;
	backHome: string;
	sections: { id: string; title: string; body: string[] }[];
};
