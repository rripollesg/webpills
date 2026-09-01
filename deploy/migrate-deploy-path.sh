#!/usr/bin/env bash
# Migra de /var/www/webpills a la nueva ruta y elimina la antigua.

set -euo pipefail

OLD_PATH="/var/www/webpills"
NEW_PATH="/var/www/serefor_com_usr/data/www/pills.serefor.com"

if ! sudo -n true 2>/dev/null; then
	echo "Ejecuta con sudo."
	exit 1
fi

sudo mkdir -p "$NEW_PATH"

if [[ -d "$OLD_PATH" ]] && [[ "$(sudo ls -A "$OLD_PATH" 2>/dev/null)" ]]; then
	sudo rsync -a "$OLD_PATH/" "$NEW_PATH/"
fi

sudo chown -R ubuntu:ubuntu "$NEW_PATH"

if [[ -d "$OLD_PATH" ]]; then
	sudo rm -rf "$OLD_PATH"
fi

echo "Migrado a ${NEW_PATH} y eliminado ${OLD_PATH}"
