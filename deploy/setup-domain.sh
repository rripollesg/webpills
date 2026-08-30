#!/usr/bin/env bash
# Actualiza nginx para serefor.com (ejecutar en el VPS o vía SSH).
# Requiere DNS: A @ y A www → IP del VPS.

set -euo pipefail

DEPLOY_PATH="${DEPLOY_PATH:-/var/www/webpills}"
DOMAIN="${DOMAIN:-serefor.com}"
DOMAIN_WWW="${DOMAIN_WWW:-www.serefor.com}"
EC2_DNS="${EC2_DNS:-ec2-13-62-220-28.eu-north-1.compute.amazonaws.com}"
VPS_IP="${VPS_IP:-13.62.220.28}"

if ! sudo -n true 2>/dev/null; then
	echo "Ejecuta con: sudo bash $0"
	exit 1
fi

if ! command -v nginx >/dev/null 2>&1; then
	sudo apt-get update
	sudo apt-get install -y nginx
fi

sudo mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled "$DEPLOY_PATH"
sudo chown -R ubuntu:ubuntu "$DEPLOY_PATH"

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

echo "Nginx listo para http://${DOMAIN} y http://${DOMAIN_WWW}"
echo "Cuando el DNS apunte al VPS: sudo CERTBOT_EMAIL=tu@email.com bash deploy/enable-ssl.sh"
