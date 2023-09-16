const express = require("express");
///////////////
const {
  listarAlunos,
  selecionarAluno,
  cadastrarAluno,
  deletarConta,
  modificarAluno,
  alterarNomeAluno,
} = require("./controladores/alunos");
////////////////
const validarSenhas = require("./intermediario");
const rotas = express();
///////////////
rotas.get("/alunos", validarSenhas, listarAlunos);
rotas.get("/alunos/:id", validarSenhas, selecionarAluno);
rotas.post("/alunos", validarSenhas, cadastrarAluno);
rotas.delete("/alunos/:id", validarSenhas, deletarConta);
//////////
rotas.put("/alunos/:id", modificarAluno);
rotas.patch("/alunos/:id/nome", alterarNomeAluno);

module.exports = rotas;
