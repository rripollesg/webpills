import type { PrivacyPage } from '../privacy-types';

export const privacyPtPT: PrivacyPage = {
	metaTitle: 'Política de privacidade — Pills',
	metaDescription:
		'Como o Pills trata os seus dados de saúde: armazenamento cifrado no dispositivo, sem conta na nuvem obrigatória.',
	title: 'Política de privacidade',
	updated: 'Última atualização: 14 de agosto de 2026',
	intro:
		'Esta política descreve como a aplicação Pills (Serefor) trata as informações. Publicada para Google Play e App Store Connect.',
	backHome: 'Voltar ao início',
	tableCaption: 'Dados que podem sair do dispositivo (opcionais)',
	tableHeaders: ['Função', 'O que pode ser enviado', 'Destino'],
	tableRows: [
		['Folhetos / digitalização CIMA', 'Códigos ou consultas de medicamento', 'Serviços AEMPS / CIMA'],
		['Pills Premium', 'Identificadores de compra / recibos da loja', 'Google Play, App Store, RevenueCat'],
		[
			'Notificações push (se ativadas no build)',
			'Token FCM e metadados técnicos',
			'Firebase / Google',
		],
		[
			'Abrir Maps / chamada / calendário',
			'Dados que o utilizador escolhe partilhar',
			'Google Maps, marcação, Google Calendar, etc.',
		],
		[
			'Pills TV na mesma Wi‑Fi',
			'Dados de medicação/tomas na rede local',
			'Dispositivo TV do utilizador',
		],
	],
	sections: [
		{
			id: 'responsavel',
			title: '1. Responsável',
			body: [
				'O tratamento dos dados gerados ao utilizar o Pills é responsabilidade do editor indicado nas fichas das lojas. Contacto web: pills.serefor.com.',
			],
		},
		{
			id: 'dados',
			title: '2. Que dados são tratados',
			body: [
				'No dispositivo (principal): perfis, medicação, tomas, histórico clínico, diário, sinais vitais, ciclo menstrual opcional, preferências e backups exportados/importados pelo utilizador.',
				'No Android e iOS a base de dados pode ser cifrada (SQLCipher) com chave no Keystore / Keychain.',
				'O Pills não exige conta na nuvem para a utilização habitual.',
			],
		},
		{
			id: 'finalidades',
			title: '3. Finalidades',
			body: [
				'Lembrar e registar tomas e hábitos de saúde.',
				'Mostrar informação orientativa (ex.: folhetos AEMPS).',
				'Gerir compras Premium opcionais.',
				'Melhorar a experiência técnica (ex.: notificações).',
				'O Pills não substitui aconselhamento médico.',
			],
		},
		{
			id: 'base-juridica',
			title: '4. Base jurídica (UE / EEE)',
			body: [
				'Execução do serviço solicitado pelo utilizador.',
				'Consentimento ao ativar funções opcionais.',
				'Interesse legítimo na segurança técnica do dispositivo.',
			],
		},
		{
			id: 'conservacao',
			title: '5. Conservação',
			body: [
				'Os dados locais permanecem enquanto a app estiver instalada ou até o utilizador os apagar. Após desinstalar no iOS, o Keychain pode conservar chaves; a app pode regenerá-las numa instalação limpa.',
			],
		},
		{
			id: 'subcontratantes',
			title: '6. Cessões e subcontratantes',
			body: [
				'Não se vende informação de saúde. Os fornecedores das funções opcionais (lojas, RevenueCat, Firebase/Google, AEMPS/CIMA) podem atuar segundo as próprias políticas.',
			],
		},
		{
			id: 'direitos',
			title: '7. Direitos',
			body: [
				'Segundo a legislação aplicável (ex.: RGPD), o utilizador pode aceder, retificar, apagar, limitar ou opor-se ao tratamento e retirar consentimentos. Para dados locais: apagar no dispositivo. Contacto: pills.serefor.com.',
			],
		},
		{
			id: 'menores',
			title: '8. Menores',
			body: ['A app não se destina a menores sem supervisão de um adulto responsável.'],
		},
		{
			id: 'alteracoes',
			title: '9. Alterações',
			body: [
				'Podemos atualizar esta política. A versão vigente será publicada em pills.serefor.com/privacy.',
			],
		},
	],
};
