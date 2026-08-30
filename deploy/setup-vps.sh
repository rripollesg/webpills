#!/usr/bin/env bash
# Ejecutar en el VPS como ubuntu (una sola vez):
#   curl -fsSL ... | bash
# o copiar y pegar tras conectar: ssh ubuntu@13.62.220.28

set -euo pipefail

DEPLOY_PATH="${DEPLOY_PATH:-/var/www/webpills}"
DOMAIN="${DOMAIN:-serefor.com}"
DOMAIN_WWW="${DOMAIN_WWW:-www.serefor.com}"
EC2_DNS="${EC2_DNS:-ec2-13-62-220-28.eu-north-1.compute.amazonaws.com}"
VPS_IP="${VPS_IP:-13.62.220.28}"

if ! sudo -n true 2>/dev/null; then
	echo "Este script necesita sudo sin contraseña (usuario ubuntu en EC2)."
	echo "Conéctate al VPS y ejecuta: sudo bash $0"
	exit 1
fi

sudo mkdir -p "$DEPLOY_PATH"
sudo chown -R ubuntu:ubuntu "$DEPLOY_PATH"

if ! command -v nginx >/dev/null 2>&1; then
	sudo apt-get update
	sudo apt-get install -y nginx
fi

sudo tee /etc/nginx/sites-available/webpills >/dev/null <<NGINX
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name ${DOMAIN} ${DOMAIN_WWW} ${EC2_DNS} ${VPS_IP};

    root ${DEPLOY_PATH};
    index index.html;

    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }

    location ~* \\.(?:css|js|webp|png|jpg|jpeg|gif|ico|svg|woff2?)\$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files \$uri =404;
    }

    location ~* \\.apk\$ {
        add_header Content-Disposition "attachment";
        try_files \$uri =404;
    }
}
NGINX

sudo ln -sf /etc/nginx/sites-available/webpills /etc/nginx/sites-enabled/webpills
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl reload nginx

echo "Listo: ${DEPLOY_PATH} en http://${DOMAIN} y http://${DOMAIN_WWW}"
