const { buildPrompt } = require("./promptBuilder");
const { generateAnswer } = require("./geminiService");

async function answerQuestion(question) {

    const prompt = buildPrompt(question);

    const answer = await generateAnswer(prompt);

    return answer;
}

module.exports = {
    answerQuestion
};