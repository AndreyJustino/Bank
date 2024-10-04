# Projeto Banco Inspirado no Banco Inter

Este repositório contém o projeto de um banco digital inspirado no Banco Inter, desenvolvido como parte do curso **Programadores do Amanhã**. O objetivo do projeto é implementar funcionalidades básicas de um banco digital, incluindo login, envio de PIX e cadastro de usuários.

## Tecnologias Utilizadas

- **React**: para a construção da interface do usuário.
- **Node.js** e **Express**: para a criação do backend da aplicação.
- **SQLite** com **Sequelize**: para gerenciamento do banco de dados.
  
## Funcionalidades

### 1. Login
Página de autenticação onde o usuário pode realizar o login com **e-mail** e **senha** para acessar o banco digital.

### 2. Register
Página de cadastro onde novos usuários podem se registrar no sistema, criando uma conta para utilizar o banco.

### 3. Home
Página inicial que é apresentada ao usuário após o login. A Home serve como o ponto de partida para acessar todas as outras funcionalidades do banco.

### 4. PayPixOption
Página onde o usuário escolhe como enviar o PIX. As opções incluem:
   - **Chave PIX**: inserir uma chave para envio.
   - **Leitor de QR Code**: ler um QR Code para enviar o PIX.
   - **Enviar para favoritos**: selecionar um destinatário pré-cadastrado.

### 5. PaySendPix
Página onde o usuário insere o valor que deseja enviar via PIX.

### 6. PayPix
Página de confirmação onde o usuário revisa o valor e os dados do destinatário antes de confirmar o envio do PIX.

## Estrutura do Projeto

O projeto é dividido em várias páginas React, cada uma representando uma funcionalidade específica do banco. Abaixo estão descrições das principais páginas:

- `Login`: Formulário de autenticação.
- `Register`: Formulário de cadastro de novo usuário.
- `Home`: Página pós-login com atalhos para as demais funcionalidades.
- `PayPixOption`: Interface para escolher o método de envio do PIX.
- `PaySendPix`: Página para inserção do valor a ser enviado.
- `PayPix`: Página para confirmação de detalhes do PIX.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    npm run dev
    ```

4. Acesse o projeto no navegador:
    ```bash
    http://localhost:5173/
    ```

## Contribuições
Este projeto está aberto para contribuições. Se tiver alguma sugestão ou encontrar um bug, fique à vontade para abrir uma issue ou fazer um pull request.

