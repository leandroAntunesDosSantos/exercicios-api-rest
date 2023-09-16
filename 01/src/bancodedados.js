const alunos = {
  incrementadorAluno: 4,
  incrementadorCurso: 4,
  alunos: [
    {
      id: 1,
      nome: "Jessica",
      sobrenome: "Maria",
      idade: 24,
      curso: "Javascript Intermediario",
    },
    {
      id: 2,
      nome: "Henrique",
      sobrenome: "Santos",
      idade: 20,
      curso: "Javascript Basico",
    },
    {
      id: 3,
      nome: "Marcos",
      sobrenome: "Silveira",
      idade: 36,
      curso: "Javascript Geral",
    },
  ],
  cursosValidos: [
    { 
      id: 1, nome: "Javascript Geral" ,
    },
    {
      id: 2, 
      nome: "Javascript Basico",
    },
    {
      id: 3, 
      nome: "Javascript Intermediario",
    },
  ],
};

module.exports = alunos;
