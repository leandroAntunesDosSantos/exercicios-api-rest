let { livros, incrementadorLivros } = require("../bancodedados");

const listarLivros = (req, res) => {
  res.status(200).json(livros);
};

const consultarLivro = (req, res) => {
  const { id } = req.params;
  if (Number(id) < 0 || Number(id) === 0) {
    return res.status(400).json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  }
  const procuraLivro = livros.find((item) => {
    return item.id === Number(id);
  });

  if (!procuraLivro) {
    return res.status(400).json({
      mensagem: "Não existe livro para o ID informado.",
    });
  }
  return res.status(200).json(procuraLivro);
};

const adicionarLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;
  const adicionarLivro = {
    id: incrementadorLivros++,
    titulo: titulo,
    autor: autor,
    ano: ano,
    numPaginas: numPaginas,
  };
  livros.push(adicionarLivro);
  res.status(200).json(adicionarLivro);
};

const substituirLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;
  const encontrarLivro = livros.find((item) => {
    return item.id === Number(id);
  });
  if (!encontrarLivro) {
    return res.status(400).json({
      mensagem: "Não existe livro a ser substituído para o ID informado.",
    });
  }
  (encontrarLivro.titulo = titulo),
    (encontrarLivro.autor = autor),
    (encontrarLivro.ano = ano),
    (encontrarLivro.numPaginas = numPaginas);
  return res.status(200).json({
    mensagem: "Livro substituído.",
  });
};

const alterarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;
  const selecionarLivro = livros.find((item) => {
    return item.id === Number(id);
  });
  if (!selecionarLivro) {
    return res.status(400).json({
      mensagem: "Não existe livro a ser alterado para o ID informado.",
    });
  }
  if (titulo) {
    selecionarLivro.titulo = titulo;
  }
  if (autor) {
    selecionarLivro.autor = autor;
  }
  if (ano) {
    selecionarLivro.ano = ano;
  }
  if (numPaginas) {
    selecionarLivro.numPaginas = numPaginas;
  }
  return res.status(200).json({
    mensagem: "Livro alterado.",
  });
};

const removerLivro = (req, res) => {
  const { id } = req.params;
  const verificarLivro = livros.find((item) => {
    return item.id === Number(id);
  });
  if (!verificarLivro) {
    return res.status(400).json({
      mensagem: "Não existe livro a ser removido para o ID informado.",
    });
  }
  livros = livros.filter((item) => {
    return item.id !== Number(id);
  });
  return res.status(200).json({
    mensagem: "Livro removido.",
  });
};

module.exports = {
  listarLivros,
  consultarLivro,
  adicionarLivro,
  substituirLivro,
  alterarLivro,
  removerLivro,
};
