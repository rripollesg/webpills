import type { UI } from '../types';

export const pt: UI = {
	meta: {
		title: 'Pills — Sua saúde, criptografada no bolso',
		description:
			'Lembretes de medicação, histórico clínico, diário com mapa corporal, ciclo menstrual e sinais vitais com sono e wearables. Glicose CGM e escaneamento em 6 países. Dados criptografados no dispositivo.',
		keywords:
			'Pills, medicamentos, lembrete de remédios, histórico clínico, diário de saúde, ciclo menstrual, sinais vitais, privacidade, criptografia, Android, iOS',
		copyright: '© Serefor · Pills 2025',
	},
	nav: {
		features: 'Funções',
		screenshots: 'Capturas',
		platforms: 'Plataformas',
		privacy: 'Privacidade',
		premium: 'Premium',
		faq: 'FAQ',
		download: 'Baixar',
		openMenu: 'Abrir menu',
		closeMenu: 'Fechar menu',
		language: 'Idioma',
	},
	hero: {
		badge: 'V2.0.0 · ANDROID · IOS',
		titleBefore: 'Sua medicação e sua saúde,',
		titleAccent: 'criptografadas no bolso',
		description:
			'Pills lembra cada dose, guarda seu histórico clínico, seu diário com mapa corporal e seu ciclo. Constantes vitais que você pode adicionar, glicose CGM e escaneamento em 6 países — tudo criptografado no dispositivo.',
		ctaPrimary: 'Baixar Pills',
		ctaSecondary: 'Ver todas as funções',
	},
	stats: {
		items: [
			{ value: 'TV', label: 'Notificações e Pills TV' },
			{ value: '6', label: 'Idiomas da interface' },
			{ value: '6+', label: 'Constantes adicionáveis' },
			{ value: 'AES-256', label: 'Backups criptografados' },
		],
		ticker: [
			'GLICOSE CGM AUTO-SYNC',
			'SONO E WEARABLES',
			'OCR DE EXAMES',
			'COMANDOS DE VOZ',
			'WIDGETS ANDROID',
			'PILLS TV',
			'BACKUPS .PILLSBAK',
			'CRIPTOGRAFIA SQLCIPHER',
			'CIMA / BDPM / AIFA / BfArM / BASG / SWISSMEDIC',
			'VADEMECUM MULTI-PAÍS',
			'MAPA CORPORAL + EVA',
		],
	},
	features: {
		eyebrow: 'Funções',
		title: 'Tudo o que você precisa para cuidar da saúde',
		description:
			'Um único app para medicação, histórico clínico, diário, ciclo, sinais vitais e sono — pensado para que as informações não saiam do dispositivo.',
		items: [
			{
				icon: 'calendar',
				title: 'Calendário de doses',
				description:
					'Visão diária e semanal com pendentes, tomadas e omitidas. Marque pela notificação ou com um toque.',
			},
			{
				icon: 'scan',
				title: 'Escaneamento multi-país',
				description:
					'Escaneie a embalagem em ES, FR, IT, DE, AT e CH (CIMA, BDPM, AIFA, BfArM, BASG, Swissmedic). Vademecum ATC incluído.',
			},
			{
				icon: 'clipboard',
				title: 'Histórico clínico',
				description:
					'Notas, consultas, equipe médica e exames com OCR. Linha do tempo unificada, somente leitura, para não perder o contexto.',
			},
			{
				icon: 'heart',
				title: 'Sinais vitais e sono',
				description:
					'Pressão, glicose com auto-sync CGM, sono e FC em repouso de wearables (Health Connect), IMC, temperatura e SpO₂.',
			},
			{
				icon: 'droplet',
				title: 'Ciclo menstrual',
				description:
					'Calendário, fluxo diário, previsão da menstruação e janela fértil. Vincule o anticoncepcional oral ao acompanhamento.',
			},
			{
				icon: 'body',
				title: 'Diário com mapa corporal',
				description:
					'Marque zonas, intensidade EVA 0–10 e orientação local CIE-10. Tudo calculado offline no dispositivo.',
			},
			{
				icon: 'mic',
				title: 'Comandos de voz',
				description:
					'Pergunte quais remédios tomar ou marque uma dose com Siri, Google Assistant ou Alexa.',
			},
			{
				icon: 'users',
				title: 'Multi-perfil',
				description:
					'Várias pessoas no mesmo dispositivo, cada uma com medicação, diário e ciclo isolados.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion para Android TV / Fire TV / tablet via Wi‑Fi local, pareamento por código ou QR.',
			},
		],
	},
	showcases: {
		diary: {
			eyebrow: 'Diário de saúde',
			title: 'Mapa corporal com orientação por zona e intensidade',
			description:
				'Marque a zona da dor na silhueta, indique a intensidade (EVA 0–10) e receba orientação local com códigos CIE-10 indicativos — tudo calculado offline no dispositivo.',
			bullets: [
				'Silhueta frente / costas com zonas selecionáveis',
				'Alertas de informação, precaução ou urgência por zona',
				'Disponível em es, en, pt, fr e de',
				'100% offline, não é um diagnóstico médico',
			],
			mock: {
				zonesLabel: 'Zonas marcadas',
				zone: 'Pelve',
				alertTitle: 'Dor pélvica súbita intensa',
				alertBody:
					'Em pessoas com possibilidade de gravidez, dor unilateral intensa com tontura ou sangramento: procure emergência.',
				cieTitle: 'Dismenorreia / dor menstrual',
				cieDesc: 'Cólicas com a menstruação. Dor incapacitante nova: consulte um ginecologista.',
				evaLabel: 'Intensidade (EVA)',
			},
		},
		cycle: {
			eyebrow: 'Ciclo menstrual',
			title: 'Calendário, análise e previsão do ciclo',
			description:
				'Registre fluxo e sintomas a cada dia, visualize as fases no calendário mensal e receba avisos da próxima menstruação e da janela fértil estimada.',
			bullets: [
				'Análise de regularidade (NORMAL / ANORMAL) com gráfico',
				'Histórico de menstruações editável, sem perder os sintomas',
				'Relatório PDF dedicado ao ciclo',
				'Não substitui anticoncepção nem diagnóstico',
			],
			mock: {
				phaseLabel: 'Fase atual',
				phase: 'Folicular / lútea',
				ovulation: 'Ovulação em 3 dias',
				nextPeriod: 'Próxima menstruação em 17 dias',
				button: 'Marcar fim da menstruação hoje',
			},
		},
	},
	screenshots: {
		eyebrow: 'Capturas',
		title: 'O app como você usa todo dia',
		description:
			'Medicação, histórico clínico, diário, sinais vitais com sono e ciclo.',
		gallery: [
			{
				id: 'historial',
				title: 'Histórico clínico',
				caption: 'Linha do tempo com notas, consultas, exames e equipe médica.',
			},
			{
				id: 'parte-medica',
				title: 'Prontuário médico',
				caption: 'Perguntas ao médico, notas e acompanhamento de sintomas.',
			},
			{
				id: 'ciclo-informe',
				title: 'Relatório do ciclo menstrual',
				caption: 'PDF com duração média, timeline de fases e sintomas registrados.',
			},
			{
				id: 'calendario',
				title: 'Calendário de doses',
				caption: 'Visão diária com pendentes, tomadas e próxima dose.',
			},
			{
				id: 'parte-historial',
				title: 'Detalhe do histórico',
				caption: 'Visualização completa de cada entrada clínica.',
			},
			{
				id: 'constantes',
				title: 'Sinais vitais e sono',
				caption: 'Glicose CGM, sono de wearables, pressão, IMC, temperatura, FC e SpO₂.',
			},
			{
				id: 'ciclo-registro',
				title: 'Registro do ciclo',
				caption: 'Fluxo diário, sintomas e corrimento com chips rápidos.',
			},
			{
				id: 'perfil',
				title: 'Perfil e ajustes',
				caption: 'Multi-perfil, bloqueio biométrico e preferências.',
			},
		],
	},
	voice: {
		eyebrow: 'Comandos de voz',
		title: 'Pergunte e marque doses sem tocar no celular',
		description: 'Compatível com Siri, Google Assistant e Alexa. Os dados são lidos no dispositivo.',
		hint: 'Abra o Pills pelo menos uma vez, com medicamentos e doses de hoje no perfil ativo.',
		moreLabel: 'Ver mais detalhes',
		actionsTitle: 'Deep links',
		actions: [
			{ name: 'O que tomar', link: 'pills://dose/upcoming' },
			{ name: 'Marcar dose', link: 'pills://dose/taken' },
			{ name: 'Pular dose', link: 'pills://dose/skipped' },
			{ name: 'Lembretes', link: 'pills://reminders' },
		],
		assistants: [
			{
				id: 'siri',
				name: 'Siri',
				platform: 'iPhone / iPad · iOS 16+',
				steps: [
					'Instale o Pills e abra uma vez.',
					'Ajustes → Siri e busca → Pills.',
					'Diga a frase ou fixe nos Atalhos.',
				],
				phrases: [
					'«Quais remédios devo tomar no Pills»',
					'«Marcar dose no Pills»',
					'«Pular dose no Pills»',
				],
				altTitle: 'Atalho manual',
				altSteps: [
					'Atalhos → + → Abrir URL → pills://dose/upcoming.',
					'Dê um nome e ative com Siri.',
				],
			},
			{
				id: 'google',
				name: 'Google',
				platform: 'Android',
				steps: [
					'Instale o Pills e abra uma vez.',
					'Use o Google como assistente padrão.',
					'Diga «Ok Google» + a frase (pode levar horas para indexar).',
				],
				phrases: [
					'«Quais remédios devo tomar no Pills»',
					'«Marcar dose no Pills»',
					'«Pular dose no Pills»',
				],
				altTitle: 'Rotina Google Home',
				altSteps: [
					'Google Home → Automações → frase personalizada.',
					'Ação → Abrir URL → pills://dose/upcoming.',
				],
			},
			{
				id: 'alexa',
				name: 'Alexa',
				platform: 'Echo / Amazon',
				steps: [
					'App Alexa → Skills → busque «Pills» → Ativar.',
					'Echo em espanhol (Espanha) para frases es-ES.',
					'Diga «Alexa, abra Pills» ou uma frase abaixo.',
				],
				phrases: [
					'«Alexa, diga ao Pills quais remédios devo tomar»',
					'«Alexa, diga ao Pills que tomei o remédio»',
					'«Alexa, diga ao Pills para pular a dose»',
				],
				limitNote:
					'A Alexa não lê medicamentos locais. Para listar ou marcar doses, use Siri, Google ou abra o Pills no celular.',
			},
		],
	},
	platforms: {
		eyebrow: 'Plataformas',
		title: 'Disponível onde você precisar',
		description:
			'A mesma experiência de lembrete de medicação, adaptada a cada dispositivo.',
		items: [
			{
				icon: 'phone',
				title: 'Android / iOS',
				description:
					'Banco de dados e anexos criptografados, widgets na tela inicial e comandos de voz.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion para Android TV, Fire TV ou tablet, sincronizado por Wi‑Fi local.',
			},
		],
	},
	privacy: {
		eyebrow: 'Privacidade',
		title: 'Seus dados de saúde não saem do celular',
		description:
			'Sem conta na nuvem obrigatória. No Android e iOS, o SQLCipher criptografa o banco; a chave fica no Keychain / Keystore.',
		points: [
			'Chave mestra no Keychain / Keystore com derivação HKDF-SHA256',
			'Anexos (PDFs, exames) criptografados no dispositivo',
			'Bloqueio com PIN, padrão ou biometria',
			'Backups locais .pillsbak com PBKDF2 + AES-256-GCM',
			'Sem FCM nem analytics de sintomas por padrão',
		],
	},
	premium: {
		eyebrow: 'Pills Premium',
		title: 'Comece grátis, amplie quando precisar',
		description: 'Sem anúncios nem venda de dados. O Premium só libera mais capacidade.',
		recommended: 'Recomendado',
		free: {
			name: 'Grátis',
			price: '0 €',
			period: 'para sempre',
			cta: 'Baixar grátis',
			features: [
				'Até 3 medicamentos',
				'Histórico clínico 30 dias',
				'Até 5 consultas pontuais',
				'Até 3 laudos de laboratório',
			],
		},
		paid: {
			name: 'Premium',
			price: 'Assinatura',
			period: 'App Store / Google Play',
			cta: 'Experimentar Premium',
			features: [
				'Medicamentos ilimitados',
				'Histórico clínico completo',
				'Consultas e laudos ilimitados',
				'Exportação PDF de vitais, histórico e ciclo',
				'Widget da programação de hoje',
			],
		},
	},
	faq: {
		eyebrow: 'Perguntas frequentes',
		title: 'Antes de começar',
		items: [
			{
				question: 'Preciso criar uma conta?',
				answer:
					'Não. O Pills foi pensado para funcionar sem conta na nuvem obrigatória. Seus dados ficam no dispositivo.',
			},
			{
				question: 'O Pills substitui meu médico?',
				answer:
					'Não. É uma ferramenta informativa para organizar e observar seus dados. Não substitui orientação médica, farmacêutica nem diagnóstico profissional.',
			},
			{
				question: 'Posso usar para várias pessoas?',
				answer:
					'Sim. Os perfis permitem que várias pessoas — por exemplo uma família ou um cuidador — mantenham os dados isolados no mesmo dispositivo.',
			},
			{
				question: 'Em quais dispositivos funciona?',
				answer:
					'O Pills está disponível para Android e iOS. Banco de dados e anexos usam criptografia local.',
			},
			{
				question: 'Meus dados estão seguros?',
				answer:
					'Sim. No Android e iOS o banco usa SQLCipher com chave no Keychain/Keystore. Os backups são locais e criptografados com senha.',
			},
		],
	},
	cta: {
		title: 'Comece a cuidar da sua medicação hoje',
		description:
			'Baixe o Pills e tenha calendário de doses, diário de saúde e ciclo menstrual sempre à mão — criptografados no dispositivo.',
		availableOn: 'Disponível no',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		pillsTv: 'Pills TV',
		pillsTvHint: 'Android TV · Fire TV',
		apkDirect: 'Baixar APK',
		trustLine: 'Criptografia de ponta a ponta · Seus dados ficam no dispositivo',
		disclaimer:
			'Pills é uma ferramenta informativa. Não substitui orientação médica, farmacêutica nem diagnóstico profissional.',
	},
	toast: {
		downloadTitle: 'Pills chega em breve',
		downloadBody: 'Estamos preparando os links de download. Em breve você poderá levar o Pills com você.',
	},
	footer: {
		tagline:
			'Sua medicação, ciclo e histórico clínico — organizados e criptografados no seu próprio dispositivo.',
		product: 'Produto',
		legal: 'Legal',
		privacyPolicy: 'Política de privacidade',
		legalNotice: 'Aviso legal',
		contact: 'Contato',
		rights: 'Todos os direitos reservados.',
		disclaimer:
			'Pills é uma ferramenta informativa e de organização pessoal. Em caso de dúvida sobre a saúde, consulte um profissional.',
		creditsBefore: 'Site desenvolvido por ',
		creditsLink: 'serefor.com',
	},
};
