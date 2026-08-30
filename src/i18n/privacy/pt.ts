import type { PrivacyPage } from '../privacy-types';

export const privacyPt: PrivacyPage = {
	metaTitle: 'Política de privacidade — Pills',
	metaDescription:
		'Como o Pills trata seus dados de saúde: armazenamento criptografado no dispositivo, sem conta na nuvem obrigatória.',
	title: 'Política de privacidade',
	updated: 'Última atualização: 14 de agosto de 2026',
	intro:
		'Esta política descreve como o aplicativo Pills (Serefor) trata as informações. Publicada para Google Play e App Store Connect.',
	backHome: 'Voltar ao início',
	tableCaption: 'Dados que podem sair do dispositivo (opcionais)',
	tableHeaders: ['Função', 'O que pode ser enviado', 'Destino'],
	tableRows: [
		['Bulas / escaneamento CIMA', 'Códigos ou consultas de medicamento', 'Serviços AEMPS / CIMA'],
		['Pills Premium', 'Identificadores de compra / recibos da loja', 'Google Play, App Store, RevenueCat'],
		[
			'Notificações push (se ativadas no build)',
			'Token FCM e metadados técnicos',
			'Firebase / Google',
		],
		[
			'Abrir Maps / chamada / calendário',
			'Dados que o usuário escolhe compartilhar',
			'Google Maps, discador, Google Calendar etc.',
		],
		[
			'Pills TV na mesma Wi‑Fi',
			'Dados de medicação/doses na rede local',
			'Dispositivo TV do usuário',
		],
	],
	sections: [
		{
			id: 'responsavel',
			title: '1. Responsável',
			body: [
				'O tratamento dos dados gerados ao usar o Pills é responsabilidade do editor indicado nas fichas das lojas. Contato web: pills.serefor.com.',
			],
		},
		{
			id: 'dados',
			title: '2. Quais dados são tratados',
			body: [
				'No dispositivo (principal): perfis, medicação, doses, histórico clínico, diário, sinais vitais, ciclo menstrual opcional, preferências e backups exportados/importados pelo usuário.',
				'No Android e iOS o banco pode ser criptografado (SQLCipher) com chave no Keystore / Keychain.',
				'O Pills não exige conta na nuvem para o uso habitual.',
			],
		},
		{
			id: 'finalidades',
			title: '3. Finalidades',
			body: [
				'Lembrar e registrar doses e hábitos de saúde.',
				'Mostrar informações orientativas (ex.: bulas AEMPS).',
				'Gerir compras Premium opcionais.',
				'Melhorar a experiência técnica (ex.: notificações).',
				'O Pills não substitui aconselhamento médico.',
			],
		},
		{
			id: 'base-legal',
			title: '4. Base jurídica (UE / EEE)',
			body: [
				'Execução do serviço solicitado pelo usuário.',
				'Consentimento ao ativar funções opcionais.',
				'Interesse legítimo na segurança técnica do dispositivo.',
			],
		},
		{
			id: 'conservacao',
			title: '5. Conservação',
			body: [
				'Os dados locais permanecem enquanto o app estiver instalado ou até o usuário apagá-los. Após desinstalar no iOS, o Keychain pode conservar chaves; o app pode regenerá-las em instalação limpa.',
			],
		},
		{
			id: 'encargados',
			title: '6. Cessões e encarregados',
			body: [
				'Não se vende informação de saúde. Os fornecedores das funções opcionais (lojas, RevenueCat, Firebase/Google, AEMPS/CIMA) podem atuar segundo as próprias políticas.',
			],
		},
		{
			id: 'direitos',
			title: '7. Direitos',
			body: [
				'Segundo a legislação aplicável (ex.: RGPD), o usuário pode acessar, retificar, apagar, limitar ou opor-se ao tratamento e retirar consentimentos. Para dados locais: apagar no dispositivo. Contato: pills.serefor.com.',
			],
		},
		{
			id: 'menores',
			title: '8. Menores',
			body: ['O app não se destina a menores sem supervisão de um adulto responsável.'],
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
