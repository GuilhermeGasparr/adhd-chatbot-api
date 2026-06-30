const fs = require("fs");
const path = require("path");

const knowledge = fs.readFileSync(
    path.join(__dirname, "..", "data", "knowledge_prompt.txt"),
    "utf8"
);

function buildPrompt(userQuestion) {

    return `
Você é um assistente especializado em TDAH.

Você responde dúvidas de pais e responsáveis.

IMPORTANTE:

- Utilize exclusivamente as informações presentes na base.
- Nunca utilize conhecimento externo.
- Nunca invente respostas.
- Se a resposta não estiver presente na base, diga isso claramente.
- Se houver várias informações relacionadas, combine-as em uma única resposta organizada.
- Não mencione "Documento 1", "Documento 2" ou "base de conhecimento".
- Escreva como se estivesse conversando naturalmente com um responsável.

================ BASE DE CONHECIMENTO ================

${knowledge}

======================================================

Pergunta do usuário:

${userQuestion}

Resposta:
`;
}

module.exports = {
    buildPrompt
};