import type { PrivacyPage } from '../privacy-types';

export const privacyEs: PrivacyPage = {
	metaTitle: 'Política de privacidad — Pills',
	metaDescription:
		'Cómo Pills trata tus datos de salud: almacenamiento local cifrado, sin cuenta en la nube obligatoria y funciones opcionales.',
	title: 'Política de privacidad',
	updated: 'Última actualización: 14 de agosto de 2026',
	intro:
		'Esta política describe cómo la aplicación Pills (Serefor) trata la información. Publicada para Google Play y App Store Connect.',
	backHome: 'Volver al inicio',
	tableCaption: 'Datos que pueden salir del dispositivo (opcionales)',
	tableHeaders: ['Función', 'Qué puede enviarse', 'Destino'],
	tableRows: [
		['Prospectos / escaneo CIMA', 'Códigos o consultas de medicamento', 'Servicios AEMPS / CIMA'],
		['Pills Premium', 'Identificadores de compra / recibos de tienda', 'Google Play, App Store, RevenueCat'],
		[
			'Notificaciones push (si están activadas en el build)',
			'Token FCM y metadatos técnicos',
			'Firebase / Google',
		],
		[
			'Abrir Maps / llamada / calendario',
			'Datos que el usuario elige compartir al abrir la app externa',
			'Google Maps, marcador, Google Calendar, etc.',
		],
		[
			'Pills TV en la misma Wi‑Fi',
			'Datos de medicación/tomas por la red local',
			'Dispositivo TV del usuario',
		],
	],
	sections: [
		{
			id: 'responsable',
			title: '1. Responsable',
			body: [
				'El tratamiento de los datos que se generan al usar Pills es responsabilidad del editor de la app indicado en las fichas de las tiendas. Contacto web: pills.serefor.com.',
			],
		},
		{
			id: 'datos',
			title: '2. Qué datos se tratan',
			body: [
				'En el dispositivo (principal): Pills está pensada para guardar en el propio teléfono o tablet perfiles (nombre, sexo, fecha de nacimiento, avatar, condiciones, alergias); medicación, tomas, recordatorios y marcas de tomada/omitida; historial clínico, diario, constantes vitales, equipo médico y citas; datos opcionales de ciclo menstrual; preferencias (idioma, tema, bloqueo de app, etc.); y copias de seguridad que el usuario exporte o importe.',
				'En Android e iOS la base de datos puede ir cifrada (SQLCipher) con una clave guardada en el almacén seguro del sistema (Keystore / Keychain).',
				'Pills no exige crear una cuenta en la nube para el uso habitual.',
			],
		},
		{
			id: 'finalidades',
			title: '3. Finalidades',
			body: [
				'Recordar y registrar tomas y hábitos de salud.',
				'Mostrar información orientativa (por ejemplo, prospectos AEMPS).',
				'Gestionar compras opcionales de Premium.',
				'Mejorar la experiencia técnica (por ejemplo, entrega de notificaciones).',
				'Pills no sustituye el consejo médico.',
			],
		},
		{
			id: 'base-juridica',
			title: '4. Base jurídica (UE / EEE)',
			body: [
				'Ejecución del servicio solicitado por el usuario (uso de la app).',
				'Consentimiento cuando se activan funciones opcionales (compras, notificaciones cloud, etc.).',
				'Interés legítimo en la seguridad técnica del dispositivo, sin menoscabo de derechos.',
			],
		},
		{
			id: 'conservacion',
			title: '5. Conservación',
			body: [
				'Los datos locales permanecen mientras la app esté instalada o hasta que el usuario los borre (ajuste del sistema, desinstalación, borrado de perfil o importación/exportación bajo su control). Tras desinstalar en iOS, el Keychain puede conservar claves; la app puede regenerarlas si detecta una instalación limpia.',
			],
		},
		{
			id: 'cesiones',
			title: '6. Cesiones y encargados',
			body: [
				'No se vende información de salud. Pueden actuar como encargados o interlocutores técnicos los proveedores de las funciones opcionales citadas (tiendas, RevenueCat, Firebase/Google, AEMPS/CIMA), según sus propias políticas.',
			],
		},
		{
			id: 'derechos',
			title: '7. Derechos',
			body: [
				'Según la legislación aplicable (p. ej. RGPD), el usuario puede acceder, rectificar, borrar, limitar u oponerse al tratamiento de datos personales, y retirar consentimientos. Para datos solo locales, puede ejercer control borrándolos en el dispositivo. Para consultas al editor: vía pills.serefor.com.',
			],
		},
		{
			id: 'menores',
			title: '8. Menores',
			body: ['La app no está dirigida a menores sin supervisión de un adulto responsable.'],
		},
		{
			id: 'cambios',
			title: '9. Cambios',
			body: [
				'Podemos actualizar esta política. La versión vigente se publicará en pills.serefor.com/privacy y, cuando proceda, se resumirá en la sección Acerca de de la app.',
			],
		},
	],
};
