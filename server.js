// server.js
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// --- ROTAS (CRUD) ---

// 1. Create (Criar)
app.post('/produtos', async (req, res) => {
  const { nome, preco } = req.body;
  try {
    const produto = await prisma.produto.create({
      data: { nome, preco: parseFloat(preco) },
    });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// 2. Read (Ler todos)
app.get('/produtos', async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
});

// 3. Update (Atualizar)
app.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;
  try {
    const produto = await prisma.produto.update({
      where: { id },
      data: { nome, preco: parseFloat(preco) },
    });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// 4. Delete (Deletar)
app.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.produto.delete({ where: { id } });
    res.json({ message: 'Produto deletado' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// --- INICIAR SERVIDOR ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});