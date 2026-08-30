#!/usr/bin/env bash
# HTTPS con Let's Encrypt (ejecutar en el VPS cuando DNS apunte a la IP).
# Uso: sudo CERTBOT_EMAIL=tu@email.com bash deploy/enable-ssl.sh

set -euo pipefail

DOMAIN="${DOMAIN:-pills.serefor.com}"
DOMAIN_WWW="${DOMAIN_WWW:-www.pills.serefor.com}"
EMAIL="${CERTBOT_EMAIL:-}"

if ! sudo -n true 2>/dev/null; then
	echo "Ejecuta con sudo."
	exit 1
fi

sudo apt-get update
sudo apt-get install -y certbot python3-certbot-nginx

CERTBOT_ARGS=(--nginx -d "$DOMAIN" -d "$DOMAIN_WWW" --non-interactive --agree-tos --redirect)
if [[ -n "$EMAIL" ]]; then
	CERTBOT_ARGS+=(--email "$EMAIL")
else
	CERTBOT_ARGS+=(--register-unsafely-without-email)
fi

sudo certbot "${CERTBOT_ARGS[@]}"

echo "HTTPS activo: https://${DOMAIN}"
