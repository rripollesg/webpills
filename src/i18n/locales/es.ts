import type { UI } from '../types';

export const es: UI = {
	meta: {
		title: 'Pills — Tu salud, cifrada en tu bolsillo',
		description:
			'Recordatorio de medicación, historial clínico, diario con mapa corporal, ciclo menstrual y constantes con sueño y pulsera. Glucosa CGM y escaneo en 6 países. Datos cifrados en tu dispositivo.',
		keywords:
			'Pills, medicación, recordatorio de pastillas, historial clínico, diario de salud, ciclo menstrual, constantes vitales, privacidad, cifrado, Android, iOS',
		copyright: '© Serefor · Pills 2025',
	},
	nav: {
		features: 'Funciones',
		screenshots: 'Capturas',
		platforms: 'Plataformas',
		privacy: 'Privacidad',
		premium: 'Premium',
		faq: 'FAQ',
		download: 'Descargar',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		language: 'Idioma',
	},
	hero: {
		badge: 'V2.0.0 · ANDROID · IOS',
		titleBefore: 'Tu medicación y tu salud,',
		titleAccent: 'cifradas en tu bolsillo',
		description:
			'Pills recuerda cada toma, guarda tu historial clínico, tu diario con mapa corporal y tu ciclo. Constantes vitales que puedes añadir, glucosa CGM y escaneo en 6 países — todo cifrado en tu dispositivo.',
		ctaPrimary: 'Descargar Pills',
		ctaSecondary: 'Ver todas las funciones',
	},
	stats: {
		items: [
			{ value: 'TV', label: 'Notificaciones y Pills TV' },
			{ value: '6', label: 'Idiomas de interfaz' },
			{ value: '6+', label: 'Constantes añadibles' },
			{ value: 'AES-256', label: 'Backups cifrados' },
		],
		ticker: [
			'GLUCOSA CGM AUTO-SYNC',
			'SUEÑO Y PULSERA',
			'OCR DE ANALÍTICAS',
			'COMANDOS DE VOZ',
			'WIDGETS ANDROID',
			'PILLS TV',
			'BACKUPS .PILLSBAK',
			'CIFRADO SQLCIPHER',
			'CIMA / BDPM / AIFA / BfArM / BASG / SWISSMEDIC',
			'VADEMECUM MULTI-PAÍS',
			'MAPA CORPORAL + EVA',
		],
	},
	features: {
		eyebrow: 'Funciones',
		title: 'Todo lo que necesitas para cuidar tu salud',
		description:
			'Una sola app para medicación, historial clínico, diario, ciclo, vitales y sueño — pensada para que la información no salga de tu dispositivo.',
		items: [
			{
				icon: 'calendar',
				title: 'Calendario de tomas',
				description:
					'Vista diaria y semanal con pendientes, tomadas y omitidas. Marca la dosis desde la notificación o con un toque.',
			},
			{
				icon: 'scan',
				title: 'Escaneo multi-país',
				description:
					'Escanea el envase en ES, FR, IT, DE, AT y CH (CIMA, BDPM, AIFA, BfArM, BASG, Swissmedic). Vademecum ATC incluido.',
			},
			{
				icon: 'clipboard',
				title: 'Historial clínico',
				description:
					'Notas, citas, equipo médico y analíticas con OCR. Línea de tiempo unificada, solo lectura para no perder contexto.',
			},
			{
				icon: 'heart',
				title: 'Vitales y sueño',
				description:
					'Tensión, glucosa con auto-sync CGM, sueño y FC en reposo desde pulsera (Health Connect), IMC, temperatura y SpO₂.',
			},
			{
				icon: 'droplet',
				title: 'Ciclo menstrual',
				description:
					'Calendario, flujo diario, predicción de regla y ventana fértil. Vincula tu anticonceptivo oral al seguimiento.',
			},
			{
				icon: 'body',
				title: 'Diario con mapa corporal',
				description:
					'Marca zonas, intensidad EVA 0–10 y orientación local CIE-10. Todo calculado offline en tu dispositivo.',
			},
			{
				icon: 'mic',
				title: 'Comandos de voz',
				description:
					'Pregunta qué pastillas te tocan o marca una toma con Siri, Google Assistant o Alexa.',
			},
			{
				icon: 'users',
				title: 'Multi-perfil',
				description:
					'Varias personas en el mismo dispositivo, cada una con medicación, diario y ciclo aislados.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Companion en Android TV / Fire TV / tablet por Wi‑Fi local, emparejado con código o QR.',
			},
		],
	},
	showcases: {
		diary: {
			eyebrow: 'Diario de salud',
			title: 'Mapa corporal con orientación por zona e intensidad',
			description:
				'Marca la zona del dolor sobre la silueta, indica su intensidad (EVA 0–10) y recibe orientación local con códigos CIE-10 orientativos — todo calculado offline en tu dispositivo.',
			bullets: [
				'Silueta delante / detrás con zonas seleccionables',
				'Alertas de info, precaución o urgencia según la zona',
				'Disponible en es, en, pt, fr y de',
				'100% offline, no es un diagnóstico médico',
			],
			mock: {
				zonesLabel: 'Zonas marcadas',
				zone: 'Pelvis',
				alertTitle: 'Dolor pélvico súbito intenso',
				alertBody:
					'En personas con posibilidad de embarazo, dolor unilateral intenso con mareo o sangrado: urgencias.',
				cieTitle: 'Dismenorrea / dolor menstrual',
				cieDesc: 'Cólicos con la menstruación. Dolor incapacitante nuevo: consulta ginecológica.',
				evaLabel: 'Intensidad (EVA)',
			},
		},
		cycle: {
			eyebrow: 'Ciclo menstrual',
			title: 'Calendario, análisis y predicción de tu ciclo',
			description:
				'Registra flujo y síntomas cada día, visualiza fases en el calendario mensual y recibe avisos de próxima regla y ventana fértil estimada.',
			bullets: [
				'Análisis de regularidad (NORMAL / ANORMAL) con gráfica',
				'Historial de periodos editable, sin perder tus síntomas',
				'Informe PDF dedicado del ciclo',
				'No sustituye anticoncepción ni diagnóstico',
			],
			mock: {
				phaseLabel: 'Fase actual',
				phase: 'Folicular / lútea',
				ovulation: 'Ovulación en 3 días',
				nextPeriod: 'Próxima regla en 17 días',
				button: 'Marcar fin de regla hoy',
			},
		},
	},
	screenshots: {
		eyebrow: 'Capturas',
		title: 'La app, tal como la usas cada día',
		description:
			'Medicación, historial clínico, diario, vitales con sueño y ciclo.',
		gallery: [
			{
				id: 'historial',
				title: 'Historial clínico',
				caption: 'Línea de tiempo con notas, citas, analíticas y equipo médico.',
			},
			{
				id: 'parte-medica',
				title: 'Parte médico',
				caption: 'Preguntas al médico, notas y seguimiento de síntomas.',
			},
			{
				id: 'ciclo-informe',
				title: 'Informe del ciclo menstrual',
				caption: 'PDF con duración media, timeline de fases y síntomas registrados.',
			},
			{
				id: 'calendario',
				title: 'Calendario de tomas',
				caption: 'Vista diaria con pendientes, tomadas y próxima dosis.',
			},
			{
				id: 'parte-historial',
				title: 'Detalle del historial',
				caption: 'Consulta completa de cada entrada clínica.',
			},
			{
				id: 'constantes',
				title: 'Vitales y sueño',
				caption: 'Glucosa CGM, sueño desde pulsera, tensión, IMC, temperatura, FC y SpO₂.',
			},
			{
				id: 'ciclo-registro',
				title: 'Registro del ciclo',
				caption: 'Flujo diario, síntomas y secreción vaginal con chips rápidos.',
			},
			{
				id: 'perfil',
				title: 'Perfil y ajustes',
				caption: 'Multi-perfil, bloqueo biométrico y preferencias.',
			},
		],
	},
	voice: {
		eyebrow: 'Comandos de voz',
		title: 'Pregunta y marca tus tomas sin tocar el móvil',
		description:
			'Compatible con Siri, Google Assistant y Alexa a través de deep links seguros que abren Pills y leen tu base de datos local.',
		requirementsTitle: 'Antes de empezar',
		requirements: [
			'Pills instalada y abierta al menos una vez (perfil creado y medicación añadida).',
			'Tomas programadas para hoy en el perfil activo del dispositivo.',
			'Las acciones de voz usan siempre el perfil activo.',
		],
		actionsTitle: 'Acciones disponibles',
		actionsColAction: 'Acción',
		actionsColLink: 'Deep link',
		actions: [
			{
				name: 'Qué pastillas me tocan',
				link: 'pills://dose/upcoming',
				effect: 'Lee en voz alta las tomas pendientes de hoy',
			},
			{
				name: 'Marcar toma',
				link: 'pills://dose/taken',
				effect: 'Marca la próxima toma pendiente de hoy',
			},
			{
				name: 'Omitir toma',
				link: 'pills://dose/skipped',
				effect: 'Omite la próxima toma pendiente de hoy',
			},
			{
				name: 'Abrir recordatorios',
				link: 'pills://reminders',
				effect: 'Abre la agenda de recordatorios',
			},
		],
		setupTitle: 'Cómo configurarlo',
		assistants: [
			{
				id: 'siri',
				name: 'Siri',
				platform: 'iPhone / iPad (iOS 16+)',
				stepsTitle: 'Configuración',
				steps: [
					'Instala Pills desde la App Store y ábrela al menos una vez.',
					'Ve a Ajustes → Siri y búsqueda → Pills y comprueba que Siri puede usar la app.',
					'(Opcional) Abre la app Atajos → Atajos de app → Pills para fijar comandos en la pantalla de inicio.',
				],
				phrasesTitle: 'Frases de ejemplo',
				phrases: [
					{ action: 'Qué me toca', example: '«Qué pastillas me tocan en Pills»' },
					{ action: 'Marcar toma', example: '«Marcar toma en Pills» · «Ya me tomé la pastilla en Pills»' },
					{ action: 'Omitir toma', example: '«Omitir toma en Pills»' },
					{ action: 'Recordatorios', example: '«Abrir recordatorios en Pills»' },
					{ action: 'Citas', example: '«Abrir citas en Pills» · «Mis citas médicas en Pills»' },
				],
				altTitle: 'Atajo manual (alternativa)',
				altSteps: [
					'App Atajos → + → Abrir URL.',
					'URL: pills://dose/upcoming (o pills://dose/taken, pills://reminders…).',
					'Ponle un nombre («Qué me toca») y actívalo con Siri o un widget.',
				],
				tip: 'También funcionan frases en inglés: «What pills do I need in Pills», «Mark dose taken in Pills»…',
			},
			{
				id: 'google',
				name: 'Google Assistant',
				platform: 'Android',
				stepsTitle: 'Configuración',
				steps: [
					'Instala Pills (Play Store o APK) y ábrela al menos una vez.',
					'Comprueba que Google es el asistente por defecto (Ajustes → Apps → Asistente digital).',
					'Mantén el idioma del Asistente en español o inglés.',
					'(Opcional) Mantén pulsado el icono de Pills → atajos rápidos («Qué me toca», «Marcar toma»…).',
				],
				phrasesTitle: 'Frases de ejemplo',
				phrases: [
					{ action: 'Qué me toca', example: '«Qué pastillas me tocan en Pills» · «What pills do I need in Pills»' },
					{ action: 'Marcar toma', example: '«Marcar toma en Pills» · «Ya me la he tomado en Pills»' },
					{ action: 'Omitir toma', example: '«Omitir toma en Pills» · «Skip dose in Pills»' },
					{ action: 'Recordatorios', example: '«Recordatorios en Pills» · «Open reminders in Pills»' },
				],
				altTitle: 'Rutina en Google Home (alternativa fiable)',
				altSteps: [
					'App Google Home → Automatizaciones → + → Frase de voz personalizada (p. ej. «qué pastillas me tocan»).',
					'Añadir acción → Interactuar con apps → Abrir URL.',
					'URL: pills://dose/upcoming. Al decir la frase, Pills leerá las tomas pendientes.',
				],
				tip: 'Google puede tardar unas horas en indexar los atajos de una app recién instalada. Si no responde, abre Pills manualmente y vuelve a intentarlo al día siguiente.',
			},
			{
				id: 'alexa',
				name: 'Alexa',
				platform: 'Echo / dispositivos Amazon',
				stepsTitle: 'Configuración',
				steps: [
					'Abre la app Alexa en el móvil.',
					'Más → Skills y juegos → busca «Pills».',
					'Pulsa Activar / Enable.',
					'Comprueba que el Echo usa idioma español (España) para las frases del modelo es-ES.',
				],
				phrasesTitle: 'Frases de ejemplo',
				phrases: [
					{ action: 'Qué me toca', example: '«Alexa, dile a Pills qué pastillas me tocan»' },
					{ action: 'Marcar toma', example: '«Alexa, dile a Pills que ya me tomé la pastilla»' },
					{ action: 'Omitir toma', example: '«Alexa, dile a Pills que omita la toma»' },
					{ action: 'Recordatorios', example: '«Alexa, abre recordatorios en Pills»' },
					{ action: 'Abrir skill', example: '«Alexa, abre Pills»' },
				],
				limitNote:
					'Alexa no puede leer la medicación guardada en tu móvil (privacidad local). La skill te indica usar Siri, Google Assistant o abrir Pills en el teléfono, donde sí se listan y marcan las tomas con voz.',
			},
		],
	},
	platforms: {
		eyebrow: 'Plataformas',
		title: 'Disponible donde lo necesites',
		description:
			'La misma experiencia de recordatorio de medicación, adaptada a cada dispositivo.',
		items: [
			{
				icon: 'phone',
				title: 'Android / iOS',
				description:
					'Base de datos y adjuntos cifrados, widgets de pantalla de inicio y comandos de voz.',
			},
			{
				icon: 'tv',
				title: 'Pills TV',
				description:
					'Compañera para Android TV, Fire TV o tablet, sincronizada por Wi‑Fi local.',
			},
		],
	},
	privacy: {
		eyebrow: 'Privacidad',
		title: 'Tus datos de salud no salen de tu teléfono',
		description:
			'Sin cuenta en la nube obligatoria. En Android e iOS, SQLCipher cifra la base de datos; la clave vive en Keychain / Keystore.',
		points: [
			'Clave maestra en Keychain / Keystore con derivación HKDF-SHA256',
			'Adjuntos (PDFs, analíticas) cifrados en el dispositivo',
			'Bloqueo con PIN, patrón o biometría',
			'Backups locales .pillsbak con PBKDF2 + AES-256-GCM',
			'Sin FCM ni analítica de síntomas por defecto',
		],
	},
	premium: {
		eyebrow: 'Pills Premium',
		title: 'Empieza gratis, amplía cuando lo necesites',
		description: 'Sin publicidad ni venta de datos. Premium solo desbloquea más capacidad.',
		recommended: 'Recomendado',
		free: {
			name: 'Gratis',
			price: '0 €',
			period: 'para siempre',
			cta: 'Descargar gratis',
			features: [
				'Hasta 3 medicamentos',
				'Historial clínico 30 días',
				'Hasta 5 citas puntuales',
				'Hasta 3 informes de laboratorio',
			],
		},
		paid: {
			name: 'Premium',
			price: 'Suscripción',
			period: 'App Store / Google Play',
			cta: 'Probar Premium',
			features: [
				'Medicamentos ilimitados',
				'Historial clínico completo',
				'Citas e informes ilimitados',
				'Export PDF de vitales, historial y ciclo',
				'Widget de programación de hoy',
			],
		},
	},
	faq: {
		eyebrow: 'Preguntas frecuentes',
		title: 'Antes de empezar',
		items: [
			{
				question: '¿Necesito crear una cuenta?',
				answer:
					'No. Pills está pensada para funcionar sin una cuenta en la nube obligatoria. Tus datos se guardan en el dispositivo.',
			},
			{
				question: '¿Pills sustituye a mi médico?',
				answer:
					'No. Es una herramienta informativa para organizar y observar tus datos. No sustituye el consejo médico, farmacéutico ni un diagnóstico profesional.',
			},
			{
				question: '¿Puedo usarla para varias personas?',
				answer:
					'Sí. Los perfiles permiten que varias personas, por ejemplo una familia o un cuidador, mantengan sus datos aislados en el mismo dispositivo.',
			},
			{
				question: '¿En qué dispositivos funciona?',
				answer:
					'Pills está disponible para Android e iOS. La base de datos y los adjuntos usan cifrado local.',
			},
			{
				question: '¿Mis datos están seguros?',
				answer:
					'Sí. En Android e iOS la base de datos usa SQLCipher con clave en Keychain/Keystore. Los backups son locales y cifrados con contraseña.',
			},
		],
	},
	cta: {
		title: 'Empieza a cuidar tu medicación hoy',
		description:
			'Descarga Pills y ten tu calendario de tomas, diario de salud y ciclo menstrual siempre a mano — cifrados en tu dispositivo.',
		availableOn: 'Disponible en',
		appStore: 'App Store',
		googlePlay: 'Google Play',
		pillsTv: 'Pills TV',
		pillsTvHint: 'Android TV · Fire TV',
		apkDirect: 'Descargar APK',
		trustLine: 'Cifrado de extremo a extremo · Tus datos se quedan en tu dispositivo',
		disclaimer:
			'Pills es una herramienta informativa. No sustituye el consejo médico, farmacéutico ni el diagnóstico profesional.',
	},
	toast: {
		downloadTitle: 'Pills llega pronto',
		downloadBody: 'Estamos preparando los enlaces de descarga. Muy pronto podrás llevar Pills contigo.',
	},
	footer: {
		tagline:
			'Tu medicación, tu ciclo y tu historial clínico, organizados y cifrados en tu propio dispositivo.',
		product: 'Producto',
		legal: 'Legal',
		privacyPolicy: 'Política de privacidad',
		legalNotice: 'Aviso legal',
		contact: 'Contacto',
		rights: 'Todos los derechos reservados.',
		disclaimer:
			'Pills es una herramienta informativa y de organización personal. Ante cualquier duda sobre tu salud, consulta con un profesional.',
		creditsBefore: 'Sitio desarrollado por ',
		creditsLink: 'serefor.com',
	},
};
