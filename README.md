<h1 align="center">
  Marvel Comics
</h1>

## Indice
- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Próximos passos](#-próximos-passos)
- [Tecnologias](#-tecnologias)
- [Como baixar e executar o projeto](#-como-baixar-e-executar-o-projeto)

---

## 🔖 Sobre

O **Marvel Comics** é uma aplicação web desenvolvida com o intuito de consumir e explorar informações dos quadrinhos da API da Marvel.

## 🚀 Funcionalidades

- Layout responsivo
- Listar quadrinhos da API
- Paginação das informações
- Modal de detalhes do quadrinho ao clica sobre ele
- Filtro de busca para pesquisar quadrinhos pelo título
  - Para o filtro foi desenvolvido um hook de debounce para melhorar a performance
- Selecionar quadrinhos para envio
  - Modal que lista os quadrinhos selecionados e disponibiiliza um mapa para selecionar o local de envio
- Exibir os repositórios do perfil no Github
- Padronização de código utilizando ESlint e Prettier

---

## 🎯 Próximos passos

- Desenvilvimento de uma suíte de testes
- Listagem das demais informações da API

## 👩🏻‍💻 Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [API da Marvel](https://developer.marvel.com/)
- [API do Google Maps](https://developers.google.com/maps/documentation/javascript/overview)
- [VS Code](https://code.visualstudio.com/) with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

---

## 🗂 Como baixar e executar o projeto

Para clonar e executar esta aplicação na sua máquina é necessário ter instalado:
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)

Para configurar a aplicação também é preciso ter:
- [Chave pública e privada da API da Marvel](https://developer.marvel.com/account)
- [Chave da API do Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)

```bash

  # Clonar o repositório
  $ git clone https://github.com/mateus2a/marvel.git marvel-brisanet

  # Entrar no diretório
  $ cd marvel-brisanet

  # Instalar as dependências
  $ yarn install

  # Duplicar o arquivo .env.example, renomear para .env e substituir as informações de acesso no seu devido local.

  # Iniciar o projeto
  $ yarn start

```

<br />

Desenvolvido por [Mateus Alencar](https://github.com/mateus2a)