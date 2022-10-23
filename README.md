
# Agrifrost - Previna-se contra geadas

![GitHub repo size](https://img.shields.io/github/repo-size/PauloHenriqueOliveiradeAlmeida/agrifrost?style=for-the-badge)  ![GitHub language count](https://img.shields.io/github/languages/count/PauloHenriqueOliveiradeAlmeida/agrifrost?style=for-the-badge)


Projeto desenvolvido para a 8ª edição da FeCEESP, visando melhorar a qualidade de trabalho de agricultores rurais, prevenindo geadas nas plantações, poluição do solo, entre outros.

## Stack utilizada

**Front-end:**

![ReactJS](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge) ![CSS](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white&style=for-the-badge)

**Back-end:**

![NextJS](https://img.shields.io/badge/-NextJS-black?style=for-the-badge&logo=next.js)
![NodeJS](https://img.shields.io/badge/-NodeJS-green?style=for-the-badge&logo=node.js&logoColor=white)

## Funcionalidades

- Integração ao Google Maps
- Temperatura na localização atual
- Indicador de risco de geada
- Indicador de umidade
- Indicador de velocidade do vento
- Integração a API OpenWeatherMap


## Licença
![GNU License](https://img.shields.io/badge/License-GNU%20GPL-blue?style=for-the-badge)


Ao fato do aplicativo ser um projeto realizado para fim escolar, possui licença livre e pode ser utilizado e modificado,
porém, pedimos para nos deixarem os créditos se o utilizarem para fins pessoais.

Não permitido o uso para fins comerciais.


## 💻 Pré-Requisitos

Para o projeto funcionar, antes de tudo você precisará ter instalado:

* Node.js
* React e Next
* npm ou yarn
* conta GoogleCloud

## 🚀 Instalação

Para instalar o projeto em sua máquina, primeiro clone o repositório:

```bash
  git clone https://github.com/PauloHenriqueOliveiradeAlmeida/agrifrost.git
```
Abra a pasta gerada no terminal:
```bash
  cd agrifrost
```
### Instale as dependências:

* Com NPM:
```bash
  npm install
```

* Com Yarn:
```bash
  yarn add
```

## 👾 Variáveis de Ambiente
Para o projeto funcionar, você precisará criar/editar o arquivo
```.env``` e adicionar as seguintes variáveis:

```.env
NEXT_PUBLIC_GOOGLE_CLOUD_API=token_googleCloud
```


## 🏃‍♂️ Testando

Rode 
```bash
  npm run dev
```
no terminal e abra a URL

https://localhost:3000

no navegador e seja feliz :)


## ☕ Demonstração

Aqui você pode ver uma demonstração ao vivo do projeto:

https://agrifrost.vercel.app

