import type { UI } from '../types';

export const ptPT: UI = {
	meta: {
		title: 'Pills — A sua saúde, cifrada no bolso',
		description:
			'Lembretes de medicação, histórico clínico, diário com mapa corporal, ciclo menstrual e sinais vitais com sono e pulsera. Glicose CGM e escaneamento em 6 países. Dados cifrados no dispositivo.',
	},
	nav: {
		features: 'Funções',
		screenshots: 'Capturas',
		platforms: 'Plataformas',
		privacy: 'Privacidade',
		premium: 'Premium',
		faq: 'FAQ',
		download: 'Transferir',
		openMenu: 'Abrir menu',
		closeMenu: 'Fechar menu',
		language: 'Idioma',
	},
	hero: {
		badge: 'V2.0.0 · ANDROID · IOS',
		titleBefore: 'A sua medicação e a sua saúde,',
		titleAccent: 'cifradas no bolso',
		description:
			'O Pills lembra cada dose, guarda o seu histórico clínico, o seu diário com mapa corporal e o seu ciclo. Constantes vitais que pode adicionar, glicose CGM e escaneamento em 6 países — tudo cifrado no dispositivo.',
		ctaPrimary: 'Transferir Pills',
		ctaSecondary: 'Ver todas as funções',
	},
	stats: {
		items: [
			{ value: 'TV', label: 'Notificações e Pills TV' },
			{ value: '7', label: 'Idiomas da interface' },
			{ value: '6+', label: 'Constantes adicionáveis' },
			{ value: 'AES-256', label: 'Backups cifrados' },
		],
		ticker: [
			'GLICOSE CGM AUTO-SYNC',
			'SONO E PULSERA',
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
		title: 'Tudo o que precisa para cuidar da saúde',
		description:
			'Uma única app para medicação, histórico clínico, diário, ciclo, sinais vitais e sono — pensada para que a informação não saia do dispositivo.',
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
					'Pressão, glicose com auto-sync CGM, sono e FC em repouso da pulsera (Health Connect), IMC, temperatura e SpO₂.',
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
		title: 'A app como a usa no dia a dia',
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
				title: 'Relatório do ciclo',
				caption: 'PDF com duração média, timeline de fases e sintomas registados.',
			},
			{
				id: 'calendario',
				title: 'Calendário de doses',
				caption: 'Vista diária com pendentes, tomadas e próxima dose.',
			},
			{
				id: 'parte-historial',
				title: 'Detalhe do histórico',
				caption: 'Visualização completa de cada entrada clínica.',
			},
			{
				id: 'constantes',
				title: 'Sinais vitais e sono',
				caption: 'Glicose CGM, sono da pulsera, pressão, IMC, temperatura, FC e SpO₂.',
			},
			{
				id: 'ciclo-registro',
				title: 'Registo do ciclo',
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
		title: 'Pergunte e marque doses sem tocar no telemóvel',
		description:
			'Compatível com Siri, Google Assistant e Alexa através de deep links seguros que abrem o Pills e leem a sua base de dados local.',
		items: [
			{ label: 'Siri', phrase: '«Quais remédios devo tomar no Pills»' },
			{ label: 'Google Assistant', phrase: '«Marcar dose no Pills»' },
			{ label: 'Alexa', phrase: '«Diga ao Pills para pular a dose»' },
		],
	},
	platforms: {
		eyebrow: 'Plataformas',
		title: 'Disponível onde precisar',
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
		title: 'Os seus dados de saúde não saem do telemóvel',
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
			cta: 'Transferir grátis',
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
					'Não. É uma ferramenta informativa para organizar e observar os seus dados. Não substitui orientação médica, farmacêutica nem diagnóstico profissional.',
			},
			{
				question: 'Posso usar para várias pessoas?',
				answer:
					'Sim. Os perfis permitem que várias pessoas — por exemplo uma família ou um cuidador — mantenham os dados isolados no mesmo dispositivo.',
			},
			{
				question: 'Em quais dispositivos funciona?',
				answer:
					'O Pills está disponível para Android e iOS. A base de dados e os anexos usam cifragem local.',
			},
			{
				question: 'Meus dados estão seguros?',
				answer:
					'Sim. No Android e iOS a base de dados usa SQLCipher com chave no Keychain/Keystore. Os backups são locais e cifrados com palavra-passe.',
			},
		],
	},
	cta: {
		title: 'Comece a cuidar da sua medicação hoje',
		description:
			'Transfira o Pills e tenha o calendário de doses, diário de saúde e ciclo menstrual sempre à mão — cifrados no dispositivo.',
		availableOn: 'Disponível na',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		pillsTv: 'Pills TV',
		pillsTvHint: 'Android TV · Fire TV',
		apkDirect: 'Transferir APK',
		trustLine: 'Criptografia de ponta a ponta · Os seus dados ficam no dispositivo',
		disclaimer:
			'Pills é uma ferramenta informativa. Não substitui orientação médica, farmacêutica nem diagnóstico profissional.',
	},
	toast: {
		downloadTitle: 'Pills chega em breve',
		downloadBody: 'Estamos a preparar os links de transferência. Em breve poderá levar o Pills consigo.',
	},
	footer: {
		tagline:
			'A sua medicação, ciclo e histórico clínico — organizados e cifrados no seu próprio dispositivo.',
		product: 'Produto',
		legal: 'Legal',
		privacyPolicy: 'Política de privacidade',
		legalNotice: 'Aviso legal',
		contact: 'Contacto',
		rights: 'Todos os direitos reservados.',
		disclaimer:
			'Pills é uma ferramenta informativa e de organização pessoal. Em caso de dúvida sobre a saúde, consulte um profissional.',
	},
};
