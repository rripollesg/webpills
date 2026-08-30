#!/usr/bin/env bash
# Genera un par de claves para GitHub Actions y muestra los pasos siguientes.
# Ejecutar en tu máquina local (no en el servidor).

set -euo pipefail

KEY_PATH="${1:-./deploy/github-actions-webpills}"

ssh-keygen -t ed25519 -C "github-actions-webpills" -f "$KEY_PATH" -N ""

echo ""
echo "=== 1. Añade la clave pública al VPS ==="
echo "ssh ubuntu@13.62.220.28 \"mkdir -p ~/.ssh && chmod 700 ~/.ssh && echo '$(cat "${KEY_PATH}.pub")' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys\""
echo ""
echo "=== 2. Añade la clave privada como secret en GitHub ==="
echo "gh secret set VPS_SSH_KEY -R rripollesg/webpills < \"${KEY_PATH}\""
echo ""
echo "=== 3. Prueba la conexión ==="
echo "ssh -i \"${KEY_PATH}\" ubuntu@13.62.220.28 \"echo OK\""
