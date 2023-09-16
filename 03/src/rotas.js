const express = require("express");
const {
  listarLivros,
  consultarLivro,
  adicionarLivro,
  substituirLivro,
  alterarLivro,
  removerLivro,
} = require("./controlador.js/livro");

const rotas = express();

rotas.get("/livros", listarLivros);
rotas.get("/livros/:id", consultarLivro);
rotas.post("/livros", adicionarLivro);
rotas.put("/livros/:id", substituirLivro);
rotas.patch("/livros/:id", alterarLivro);
rotas.delete("/livros/:id", removerLivro);

module.exports = rotas;
