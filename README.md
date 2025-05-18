# 🐇 Rabbit Dashboard

Dashboard leve e simples para exibir status de servidores e gráfico de acessos. Ideal para ambiente Debian 12 com deploy via OpenStack e cloud-init.

## Funcionalidades
- Exibição de status do sistema
- Gráfico de acessos com Chart.js
- Tabela dinâmica com dados de servidores
- Tabela com status de portas escaneadas
- Interface responsiva com Bootstrap
- Backend em Flask (Python 3)

## Como rodar localmente
```bash
git clone https://github.com/fibrafacil/rabbit.git
cd rabbit/backend
pip install flask
python app.py
```

Acesse: http://localhost:5000

## Deploy via cloud-init
Incluído arquivo `cloud-init.yaml` que desativa AppArmor, clona o repositório, e inicia o app automaticamente via systemd.
