let { incrementadorAluno, alunos, cursosValidos } = require("../bancodedados");

const listarAlunos = (req, res) => {
  try {
    res.status(200).json(alunos);
  } catch (error) {
    res.status(400).json({
      mensagem:
        "Esta é uma mensagem para explicar o erro e/ou código de status retornado.",
    });
  }
};

const selecionarAluno = (req, res) => {
  try {
    const { id } = req.params;
    const alunoSelecionado = alunos.filter((aluno) => {
      return aluno.id === Number(id);
    });
    if (id <= 0) {
      return res
        .status(400)
        .json({ mensagem: "o id deve ser um número válido." });
    }
    if (alunoSelecionado.length === 1) {
      return res.status(200).json(alunoSelecionado);
    }
    return res.status(404).json({ mensagem: "aluno nao foi encontrado" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;
  nome.trim();
  sobrenome.trim();
  curso.trim();
  if (!nome || !sobrenome || !idade || !curso) {
    res.status(400).json({ msg: "Falta incluir informações" });
  }
  if (nome === " " || sobrenome === " " || idade === " " || curso === " ") {
    res.status(400).json({ msg: "Possui espaços vazios" });
  }
  if (idade < 18) {
    res.status(400).json({ msg: "idade não permitida" });
  }
  const buscaCurso = cursosValidos.find((item) => {
    return item.nome === curso;
  });
  if (!buscaCurso) {
    return res.status(400).json({ msg: "Curso não cadastrado." });
  }
  const alunoAdicionar = {
    id: incrementadorAluno++,
    nome,
    sobrenome,
    idade,
    curso,
  };
  alunos.push(alunoAdicionar);
  return res.status(204).json();
};

const deletarConta = (req, res) => {
  const { id } = req.params;
  const aluno = alunos.find((aluno) => {
    return aluno.id === Number(id);
  });
  if (!aluno) {
    return res.status(404).json({ msg: "não existe esse aluno" });
  }
  alunos = alunos.filter((aluno) => {
    return aluno.id !== Number(id);
  });
  return res.status(204).send();
};

const modificarAluno = (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, idade, curso } = req.body;
  const aluno = alunos.find((item) => {
    return item.id === Number(id);
  });

  if (!aluno) {
    res.status(404).json({ msg: "Aluno não encontrado!" });
  }
  if (idade < 18) {
    res.status(400).json({ msg: "idade não permitida" });
  }
  const buscaCurso = cursosValidos.find((item) => {
    return item.nome === curso;
  });
  if (!buscaCurso) {
    return res.status(400).json({ msg: "Curso não cadastrado." });
  }
  aluno.nome = nome;
  aluno.sobrenome = sobrenome;
  aluno.idade = idade;
  aluno.curso = curso;
  return res.status(200).json(aluno);
};

const alterarNomeAluno = (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const aluno = alunos.find((item) => {
    return item.id === Number(id);
  });
  if (!aluno) {
    res.status(404).json({ msg: "Aluno não encontrado!" });
  }
  aluno.nome = nome;
  return res.status(204).json();
};

module.exports = {
  listarAlunos,
  selecionarAluno,
  cadastrarAluno,
  deletarConta,
  modificarAluno,
  alterarNomeAluno,
};
