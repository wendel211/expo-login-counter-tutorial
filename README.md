# 📱 Expo Login Counter Tutorial

Bem-vindo(a) ao seu **primeiro aplicativo com React Native e Expo!** 🎉  
Este projeto foi criado para te mostrar, de forma simples e prática, **como construir um app do zero**, mesmo que você **nunca tenha programado antes**.

---

## 🧠 O que vamos construir

Um **aplicativo com duas telas**:

1. **Tela de Login** — onde você digita usuário e senha  
2. **Tela do Contador** — onde você pode **somar +1** ou **zerar o valor**  

Tudo isso usando apenas alguns **comandos simples** e um pouquinho de curiosidade! 💡

---

## 🚀 Antes de começar

Você precisa ter algumas coisinhas prontas no seu computador e celular:

### 🧰 No computador:
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- Um editor de código, como [VS Code](https://code.visualstudio.com/)
- Conexão com a internet

### 📱 No celular:
- Instale o app **Expo Go** (é gratuito!)
  - [Baixar na Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [Baixar na App Store](https://apps.apple.com/app/expo-go/id982107779)

Pronto! Agora você já pode criar e rodar o app! 🎯

---

## 🧩 Passo a passo para rodar o projeto

### 1️⃣ Baixar o projeto
Abra o terminal e digite:
```bash
git clone https://github.com/seuusuario/expo-login-counter-tutorial.git
```

### 2️⃣ Entrar na pasta do projeto
```bash
cd expo-login-counter-tutorial
```

### 3️⃣ Instalar as dependências
Esses são os "pacotes" que o app precisa para funcionar.
```bash
npm install
```

### 4️⃣ Iniciar o projeto
Agora vamos rodar o app:
```bash
npx expo start
```

Quando aparecer um QR Code no terminal ou na aba do navegador:

- Aponte a câmera do seu celular (com o app Expo Go aberto)
- Espere alguns segundos… e pronto! 🎉

Seu primeiro app React Native estará funcionando no seu celular! 🚀

---

## 🧱 Estrutura do projeto
```
expo-login-counter-tutorial/
 ├── App.js                # Onde está a navegação entre as telas
 ├── screens/
 │    ├── LoginScreen.js   # Tela de login com usuário e senha
 │    └── CounterScreen.js # Tela do contador com botões
 └── ...
```

---

## 🧑‍💻 Entendendo as telas

### 🔐 1. Tela de Login
**Objetivo:** permitir que o usuário digite um nome e senha e acesse a tela principal.

**Usuário e senha corretos:**
```
Usuário: admin
Senha: 123
```

- ✅ Se os dados estiverem certos → você será levado para a tela do contador
- ❌ Se estiver errado → o app mostra um alerta com a mensagem "Usuário ou senha incorretos"

### 🔢 2. Tela do Contador
**Objetivo:** praticar o uso de estados e eventos no React Native.

- O contador começa em **0**
- Ao clicar em **"Somar +1"**, o número aumenta
- Ao clicar em **"Zerar"**, o contador volta para 0

Isso mostra como o app reage às suas ações — e é daí que vem o nome **React!** ⚛️

---

## 🪄 O que você vai aprender

Durante o uso e a explicação deste projeto, você vai entender:

✅ O que é o Expo e por que ele facilita o desenvolvimento mobile  
✅ Como criar e exibir componentes na tela  
✅ O que é o hook `useState` e como ele guarda valores  
✅ Como navegar entre telas com o React Navigation  
✅ Como aplicar estilos visuais usando o `StyleSheet`

---

## 🎨 Desafios extras (para quem quiser ir além)

Depois de rodar o app e entender o básico, tente praticar com esses mini-desafios:

- ➕ Adicione um botão **"Diminuir -1"**
- 🎨 Mude a **cor do fundo** da tela
- 🪞 Mostre uma **mensagem especial** quando o contador chegar em 10
- 🕹️ Crie um botão para **"Sair"** e voltar para a tela de login

Esses exercícios ajudam a fixar o aprendizado e te deixam mais confiante como dev! 💪

---
## ❤️ Criado por

Desenvolvido com 💚 por **Wendel Muniz**  
Pensado especialmente para quem está começando no mundo do desenvolvimento mobile.

> _"Todo grande programador começou clicando em um botão que finalmente funcionou."_ 👾

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar!
