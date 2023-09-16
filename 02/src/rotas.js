const express = require("express");
///////
const {
  listarConvidados,
  consultarConvidado,
  cadastrarConvidado,
  removerConvidado,
} = require("./controlador/convidados");

///////
const rotas = express();

//////
rotas.get("/", listarConvidados);
rotas.get("/convidados", consultarConvidado); // rota de consultas
rotas.post("/convidados", cadastrarConvidado);
rotas.delete("/convidados/:nome", removerConvidado);
//////
module.exports = rotas;
