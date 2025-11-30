# 📦 Backend - API de Produtos

API RESTful desenvolvida em **Node.js** para gerenciamento de estoque (CRUD). Utiliza **Prisma ORM** com banco de dados **SQLite** para persistência dos dados.

---

## 🚀 Tecnologias

- **Node.js**: Ambiente de execução.
- **Express**: Framework web.
- **Prisma ORM**: Manipulação do banco de dados.
- **SQLite**: Banco de dados relacional em arquivo local.
- **Cors**: Permissão de acesso para aplicações externas.

---

## ⚙️ Como rodar o projeto

# 1. Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

#2. Banco de Dados
Gere o arquivo do banco de dados (dev.db) e crie as tabelas baseadas no schema:

bash

npx prisma migrate dev --name init


#3. Execução
Inicie o servidor em modo de desenvolvimento:

bash

npm run dev
O servidor estará rodando em: http://localhost:3000

📚 Rotas da API
Método	Rota	Descrição
POST	/produtos	Cadastra um novo produto
GET	/produtos	Lista todos os produtos
PUT	/produtos/:id	Atualiza um produto
DELETE	/produtos/:id	Remove um produto
📝 Exemplo de uso
Cadastrar produto
http

POST /produtos
Content-Type: application/json

{
  "nome": "Produto Exemplo",
  "quantidade": 10,
  "preco": 99.90
}
Listar produtos
http

GET /produtos
Atualizar produto
http

PUT /produtos/1
Content-Type: application/json

{
  "nome": "Produto Atualizado",
  "quantidade": 20,
  "preco": 89.90
}
Remover produto
http

DELETE /produtos/1

