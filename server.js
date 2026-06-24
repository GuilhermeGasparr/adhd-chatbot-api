const express = require("express");

const app = express();
const knowledge = require("./knowledge.json");

app.use(express.json());

app.post("/chat", (req, res) => {
  const { message } = req.body;

  const resultado = knowledge.find((item) =>
    item.Pergunta?.toLowerCase().includes(message.toLowerCase()),
  );

  if (resultado) {
    return res.json({
      response: resultado.Resposta,
    });
  }

  res.json({
    response: "Não encontrei.",
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});
