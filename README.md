# Rabbit Speedtest

Projeto Rabbit - Speedtest customizado para Fibra Fácil Telecom.

## Deploy

### Passos para executar manualmente:

1. Atualizar sistema:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. Instalar dependências:
   ```bash
   sudo apt install python3 python3-pip nginx git -y
   ```

3. Clonar o repositório:
   ```bash
   sudo git clone https://github.com/fibrafacil/rabbit-speedtest.git /opt/rabbit
   ```

4. Instalar dependências Python:
   ```bash
   sudo pip3 install -r /opt/rabbit/requirements.txt
   ```

5. Configurar systemd para o backend:
   ```bash
   sudo cp /opt/rabbit/rabbit.service /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl enable rabbit
   sudo systemctl start rabbit
   ```

6. Configurar Nginx:
   ```bash
   sudo cp /opt/rabbit/nginx.conf /etc/nginx/sites-available/default
   sudo systemctl restart nginx
   ```

7. Acessar no navegador:
   ```
   http://fibrafacil.com.br
   ```

### Deploy via cloud-init

Use o arquivo `cloud-init.yaml` para deploy automático no Debian 12 OpenStack.

## Testes

Clique em "Iniciar Teste" para realizar o speedtest (download/upload).

## Considerações

- O serviço Flask escuta na porta 8000.
- O Nginx faz proxy reverso para o backend.
- Os testes de velocidade utilizam arquivos de 20 MB para medir velocidade.
