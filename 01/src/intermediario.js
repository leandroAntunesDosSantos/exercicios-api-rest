const validarSenhas = (req, res, next) => {
  const { senha_banco } = req.query;

  if (!senha_banco) {
    return res.status(401).json({ msg: "Por favor insira a senha." });
  }
  if (senha_banco !== "cubos123") {
    return res.status(401).json({ msg: "Sua senha está incorreta." });
  }
  next();
};

module.exports = validarSenhas;
