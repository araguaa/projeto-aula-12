# Sistema de Autenticação

Este projeto foi desenvolvido como atividade prática da disciplina, com o objetivo de aplicar conceitos de desenvolvimento web, integração entre frontend e backend, validação de formulários e persistência de dados utilizando banco de dados SQLite.

A aplicação permite que usuários realizem cadastro, login e gerenciamento de conta através de uma interface desenvolvida em React.

## Funcionalidades

* Cadastro de usuários
* Login e logout
* Persistência de sessão
* Alteração de senha
* Listagem de usuários cadastrados
* Paginação da lista de usuários
* Validação de dados no frontend e backend
* Notificações utilizando React Toastify
* Navegação entre páginas com React Router
* Gerenciamento global de autenticação utilizando Context API

## Tecnologias Utilizadas

### Frontend

* React
* React Router DOM
* React Hook Form
* Axios
* React Toastify
* CSS

### Backend

* Node.js
* Express
* SQLite
* CORS

## Estrutura do Projeto

```text
projeto-aula-12/
│
├── Frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── ...
│ │
│ └── package.json
│
└── Backend/
    ├── routes/
    ├── database/
    ├── server.js
    └── package.json
```

O frontend é responsável pela interface do usuário e comunicação com a API.

O backend é responsável pelas regras de negócio, autenticação e acesso ao banco de dados SQLite.

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

---

### 2. Executar o Backend

Abra um terminal na pasta Backend:

```bash
cd Backend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

O backend ficará disponível em:

```text
http://localhost:3000
```

---

### 3. Executar o Frontend

Abra outro terminal na pasta Frontend:

```bash
cd Frontend
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

O frontend ficará disponível em:

```text
http://localhost:5173
```

---

## Banco de Dados

O projeto utiliza SQLite para armazenar os dados dos usuários.

As informações cadastradas são persistidas localmente através de um arquivo de banco de dados criado automaticamente pelo backend.

## Conceitos Aplicados

Durante o desenvolvimento deste projeto foram aplicados conceitos como:

* Componentização
* Context API
* React Router
* React Hook Form
* Consumo de APIs REST
* CRUD
* Paginação
* Validação de formulários
* Tratamento de erros
* Persistência de dados com SQLite

## Autor

Willian Peres

Projeto desenvolvido para fins acadêmicos e aprendizado em desenvolvimento web.
