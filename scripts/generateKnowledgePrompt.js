const fs = require("fs");

const knowledge = JSON.parse(
    fs.readFileSync("./knowledge.json", "utf8")
);

const promptKnowledge = knowledge
    .map(item =>
`Q: ${item.Pergunta}
A: ${item.Resposta}`)
    .join("\n\n");

fs.writeFileSync(
    "./knowledge_prompt.txt",
    promptKnowledge,
    "utf8"
);

console.log("knowledge_prompt.txt criado com sucesso!");