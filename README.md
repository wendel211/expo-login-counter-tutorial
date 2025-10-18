# Minicurso React Native – Criando seu Primeiro App com Expo

Este projeto foi desenvolvido para o minicurso de React Native e Expo, ministrado por mim no **Instituto Federal da Bahia (IFBA) – Campus Feira de Santana**. O objetivo é ensinar, de forma simples e prática, como criar o primeiro aplicativo mobile usando React Native e Expo, mesmo para quem nunca programou antes.

## Sobre o projeto

Durante o minicurso, será construído um aplicativo com duas telas principais:

1. **Tela de Login** – permite inserir nome de usuário e senha.
2. **Tela do Contador** – exibe um contador que pode ser incrementado ou zerado.

O projeto tem foco educativo e foi planejado para introduzir os conceitos básicos do desenvolvimento mobile com React Native.

## Pré-requisitos

Antes de começar, é importante ter o ambiente preparado:

**No computador:**
* Node.js instalado (versão 18 ou superior)
* Editor de código, como VS Code
* Conexão com a internet

**No celular:**
* Instale o aplicativo **Expo Go**
   * [Baixar na Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   * [Baixar na App Store](https://apps.apple.com/app/expo-go/id982107779)

## Como executar o projeto

1. **Clonar o repositório:**
```bash
git clone https://github.com/seuusuario/expo-login-counter-tutorial.git
```

2. **Entrar na pasta do projeto:**
```bash
cd expo-login-counter-tutorial
```

3. **Instalar as dependências:**
```bash
npm install
```

4. **Iniciar o aplicativo:**
```bash
npx expo start
```

5. **Executar no celular:**
   * Abra o app **Expo Go**
   * Escaneie o QR Code exibido no terminal ou navegador

## Estrutura do projeto
```
expo-login-counter-tutorial/
 ├── App.js                # Arquivo principal com a navegação
 ├── screens/
 │    ├── LoginScreen.js   # Tela de login
 │    └── CounterScreen.js # Tela do contador
 └── ...
```

## Detalhes das telas

### Tela de Login
* Permite digitar usuário e senha.
* Se as credenciais estiverem corretas, o usuário é direcionado para a tela principal.
* Caso contrário, é exibida uma mensagem de erro.

**Credenciais padrão:**
```
Usuário: admin
Senha: 123
```

### Tela do Contador
* Mostra um número inicial igual a 0.
* O botão **"Somar +1"** aumenta o valor do contador.
* O botão **"Zerar"** redefine o valor para 0.

Essas ações servem para demonstrar o uso de estados e eventos no React Native.

## Conteúdos abordados no minicurso

Durante o desenvolvimento do projeto, são explicados os seguintes conceitos:

* O que é o Expo e como ele facilita o desenvolvimento mobile
* Estrutura básica de um aplicativo React Native
* Criação e estilização de componentes
* Uso do hook `useState` para controle de estado
* Navegação entre telas com o React Navigation

## Desafios sugeridos

Após o minicurso, o participante poderá praticar com os seguintes desafios:

* Adicionar um botão **"Diminuir -1"**
* Alterar as cores e o estilo da aplicação
* Mostrar uma mensagem quando o contador atingir determinado valor
* Implementar um botão **"Sair"** que retorna à tela de login

## Autor

**Wendel Muniz**  
Minicurso desenvolvido como atividade prática para introdução ao React Native.  
**Instituto Federal da Bahia – Campus Feira de Santana**  
Curso: Bacharelado em Sistemas de Informação

## Licença

Este projeto está sob a licença MIT. Você pode utilizá-lo, modificar e redistribuir livremente para fins de aprendizado.
