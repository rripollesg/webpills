import type { LegalPage } from '../legal-types';

export const legalPt: LegalPage = {
	metaTitle: 'Aviso legal — Pills',
	metaDescription:
		'Informação legal da app Pills e do site pills.serefor.com: titular, uso informativo e limitação de responsabilidade.',
	title: 'Aviso legal',
	updated: 'Última atualização: 1 de setembro de 2026',
	intro:
		'Em conformidade com a regulamentação aplicável aos serviços da sociedade da informação, são fornecidas aos utilizadores as seguintes informações.',
	backHome: 'Voltar ao início',
	sections: [
		{
			id: 'titular',
			title: '1. Titular do site',
			body: [
				'Titular: Serefor (editor da aplicação Pills).',
				'Site web: pills.serefor.com.',
				'Contacto: através dos canais indicados nas fichas da app nas lojas oficiais ou na secção de contacto de serefor.com.',
			],
		},
		{
			id: 'objeto',
			title: '2. Objeto',
			body: [
				'Este site apresenta a aplicação móvel Pills: lembretes de medicação, histórico clínico, diário de saúde, ciclo menstrual e constantes vitais com armazenamento local encriptado.',
				'Pills é uma ferramenta de organização e informação pessoal. Não é um dispositivo médico nem um produto sanitário.',
			],
		},
		{
			id: 'informes',
			title: '3. Relatórios e conteúdos',
			body: [
				'Os relatórios exportados (por exemplo, do ciclo menstrual ou do histórico clínico) são gerados a partir dos dados introduzidos pelo utilizador no seu dispositivo.',
				'São documentos orientativos para facilitar o acompanhamento pessoal ou a consulta com um profissional. Não constituem diagnóstico, prescrição nem recomendação terapêutica.',
			],
		},
		{
			id: 'responsabilidad',
			title: '4. Responsabilidade',
			body: [
				'O titular não se responsabiliza pelo uso que o utilizador faça das informações apresentadas na app ou neste site.',
				'Em caso de sintomas graves, dúvidas médicas ou gravidez, consulte sempre um profissional de saúde.',
				'O utilizador é responsável pela veracidade dos dados que regista e por manter cópias de segurança quando o considerar adequado.',
			],
		},
		{
			id: 'propiedad',
			title: '5. Propriedade intelectual',
			body: [
				'Os textos, design, logótipos, capturas de ecrã e código de Pills são propriedade da Serefor ou dos seus licenciadores. É proibida a reprodução sem autorização.',
			],
		},
		{
			id: 'enlaces',
			title: '6. Ligações e privacidade',
			body: [
				'Este site pode ligar a lojas de aplicações ou serviços de terceiros. O tratamento de dados pessoais é descrito na Política de Privacidade.',
			],
		},
		{
			id: 'ley',
			title: '7. Legislação aplicável',
			body: [
				'A utilização deste site rege-se pela legislação espanhola. Qualquer litígio será submetido aos tribunais competentes de acordo com a regulamentação em vigor.',
			],
		},
	],
};
