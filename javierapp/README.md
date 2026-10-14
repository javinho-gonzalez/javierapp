# Welcome to My Expo app 👋

## 📌 Sobre o Projeto
Este repositório contém uma aplicação mobile básica desenvolvida com **React Native** e **Expo Framework**. O objetivo principal foi colocar em prática conceitos fundamentais de desenvolvimento mobile, incluindo navegação entre telas via *File-based Routing, gerenciamento de estado local, manipulação de componentes nativos, estilização modular e tratamento básico de erros de validação no formulário de login (sem persistência em banco de dados).

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: `v22.14.0` (Recommended: use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions)
- **Git**
- **npm** or **yarn**

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/javinho-gonzalez/javierapp.git
   cd javierapp

2. **Set the Node Version (If using NVM)**

   ```bash
   nvm use 22.14.0
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the app**

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## O que aprendi neste projeto

Através deste projeto, foi possível praticar e consolidar diversos conceitos vitais de Engenharia de Software e Coding Desenvolvimento Mobile:

1. Engenharia de Software & Ambiente de Desenvolvimento

- Configuração de Ambiente: Instalação e gerenciamento do ambiente de execução com Node.js e gerenciador de pacotes (npm).

- Estruturação de Projetos com Expo: Criação e inicialização de projetos React Native usando a ferramenta create-expo-app.

- Controle de Versão (Git): Organização do repositório ignorando arquivos temporários e dependências pesadas (node_modules, .expo) através do .gitignore.

2. Arquitetura & Navegação Mobile

- File-based Routing (Expo Router): Compreensão do roteamento baseado na estrutura de diretórios (/app), configurando a navegação entre as telas do sistema (index, login, cadastrar e servicos).

- Navegação Declarativa (router.replace): Substituição e controle de pilha de telas ao realizar ações como login e retorno.

3. Práticas de Coding & React Native

- Componentes Nativos: Utilização prática dos componentes fundamentais do React Native:

- View: Estrutura de layout e containers flexíveis.

- Text: Exibição de textos e rótulos de instrução.

- TextInput: Captura de dados do usuário e configuração de propriedades (como secureTextEntry para senhas e autoCapitalize).

- Button: Ações de submissão e navegação via onPress.

 Gerenciamento de Estado (useState): Armazenamento e atualização em tempo real das credenciais de usuário e senha digitadas no formulário.

- Tratamento de Erros e Validação Local: Criação de rotinas lógicas para validar inputs (ex: campos vazios, sanitização de espaços acidentais) e feedback visual interativo ao usuário via Alert.alert.

- Estilização com StyleSheet: Organização dos estilos da interface usando a API StyleSheet.create do React Native, aplicando conceitos de Flexbox, alinhamentos e cantos arredondados.

## Recursos para o Estudo

- [Documentação Oficial do Expo](https://docs.expo.dev/)

- [Documentação do Expo Router](https://docs.expo.dev/router/introduction/)

- [Documentação do React Native](https://reactnative.dev/)

## Telas do app

![Tela De login](./assets/screenshots/Tela%20login%20javierapp.png)
![Tela De login Caixas Login vazias](./assets/screenshots/Tela%20login%20javierapp%20tratamento%20de%20erro_caixas%20de%20login%20vazias.png)
![Tela De login Usuario ou Senha Errada](./assets/screenshots/Tela%20login%20javierapp%20tratamento%20de%20erro%20usuario%20ou%20senha%20errada.png)
![Tela Index](./assets/screenshots/Tela%20index%20javierapp.png)
![Tela Cadastrar](./assets/screenshots/Tela%20cadastrar%20javierapp.png)
![Tela Cadastrar Campos Obrigatórios Vazios](./assets/screenshots/Tela%20cadastrar%20javierapp%20tratamento%20de%20erro%20campos%20obrigatorios%20vazios.png)
![Tela Cadastrar Mensagem Cadastro com Sucesso](./assets/screenshots/Tela%20cadastrar%20javierapp%20mensagem%20de%20cadastro%20succediso%20e%20direcionamento%20login.png)
![Tela De Serviços](./assets/screenshots/Tela%20servicos%20accessivel%20em%20desenvolvimento.png)


