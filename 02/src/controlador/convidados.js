let convidados = require("../bancodedados");

const listarConvidados = (req, res) => {
  return res.json(convidados);
};

const consultarConvidado = (req, res) => {
  const { nome } = req.query;
  let resultado = convidados;

  if (!nome) {
    return res.send({ mensagem: "digite o nome do convidado" });
  }

  resultado = convidados.find((item) => {
    return item === nome;
  });
  if (!resultado) {
    res
      .status(404)
      .json({ mensagem: "O convidado buscado não está presente na lista." });
  }

  return res.status(201).json({
    mensagem: "Convidado presente.",
  });
};

const cadastrarConvidado = (req, res) => {
  const { nome } = req.body;
  verificarNome = convidados.find((item) => {
    return item === nome;
  });
  if (verificarNome) {
    return res.status(404).send({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  }
  convidados.push(nome);
  return res.status(200).json({
    mensagem: "Convidado adicionado.",
  });
};

const removerConvidado = (req, res) => {
  const { nome } = req.params;
  if (!nome) {
    return res.status(404).json({
      mensagem:
        "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
    });
  }
  convidados = convidados.filter((item) => {
    return item !== nome;
  });
  res.status(200).json({
    mensagem: "Convidado removido.",
  });
};

module.exports = {
  listarConvidados,
  consultarConvidado,
  cadastrarConvidado,
  removerConvidado,
};
