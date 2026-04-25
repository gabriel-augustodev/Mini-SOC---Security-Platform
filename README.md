# 🛡️ Mini SOC - Security Platform

Plataforma de monitoramento e análise de segurança (Mini SOC)
desenvolvida para simular um ambiente real de detecção de
vulnerabilidades e análise de risco.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   🔍 Scan de vulnerabilidades utilizando Nmap
-   ⚙️ Integração Node.js + Python
-   📊 Análise automática de risco
-   📦 API REST para execução de scans

------------------------------------------------------------------------

## 🧠 Arquitetura

Cliente → Node.js → Python → Nmap → Node.js → Cliente

------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas

-   Node.js
-   Python
-   Nmap
-   Express

------------------------------------------------------------------------

## ▶️ Como executar o projeto

### 1. Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/mini-soc-security-platform.git
cd mini-soc-security-platform
```

------------------------------------------------------------------------

### 2. Backend (Node.js)

``` bash
cd backend
npm install
node src/app.js
```

------------------------------------------------------------------------

### 3. Scanner (Python)

``` bash
cd ../scanner
python3 -m venv venv
source venv/bin/activate
pip install python-nmap
```

------------------------------------------------------------------------

### 4. Testar a API

``` bash
curl -X POST http://localhost:3000/scan \
-H "Content-Type: application/json" \
-d '{"target": "scanme.nmap.org"}'
```

------------------------------------------------------------------------

## 📊 Exemplo de resposta

``` json
{
  "target": "scanme.nmap.org",
  "risk": {
    "score": 60,
    "level": "HIGH"
  },
  "results": [
    {
      "host": "45.33.32.156",
      "port": 22,
      "state": "open",
      "service": "ssh"
    }
  ]
}
```

------------------------------------------------------------------------

## 🔐 Aviso

Este projeto é apenas para fins educacionais.\
Não utilize para escanear sistemas sem autorização.

------------------------------------------------------------------------

## 📌 Próximos passos

-   💾 Persistência em banco de dados (PostgreSQL)
-   📊 Dashboard com visualização (Angular)
-   🔎 Integração com logs (ELK Stack)

------------------------------------------------------------------------

## 👨‍💻 Autor

Gabriel Augusto
