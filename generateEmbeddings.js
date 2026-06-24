const fs = require("fs");
const { pipeline } = require("@xenova/transformers");

async function main() {
  console.log("Carregando modelo...");

  const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2",
  );

  const knowledge = JSON.parse(fs.readFileSync("./knowledge.json", "utf8"));

  const resultado = [];

  for (let i = 0; i < knowledge.length; i++) {
    const item = knowledge[i];

    console.log(`Processando ${i + 1}/${knowledge.length}`);

    const texto = `
        Categoria: ${item.Categoria}

        Subcategoria: ${item.Subcategoria}

        Pergunta: ${item.Pergunta}

        Resposta: ${item.Resposta}
        `;

    const embedding = await extractor(texto, {
      pooling: "mean",
      normalize: true,
    });

    resultado.push({
      id: item.ID,
      categoria: item.Categoria,
      subcategoria: item.Subcategoria,
      pergunta: item.Pergunta,
      resposta: item.Resposta,
      embedding: Array.from(embedding.data),
    });
  }

  fs.writeFileSync("./embeddings.json", JSON.stringify(resultado));

  console.log("Embeddings gerados!");
}

main();
