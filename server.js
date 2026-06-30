require("dotenv").config();

const express = require("express");
const { answerQuestion } = require("./services/chatbotService");

const app = express();

app.use(express.json());
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const answer = await answerQuestion(message);

    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "A mensagem é obrigatória.",
      });
    }
    res.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Erro ao processar pergunta",
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
