require("dotenv").config();
const together = require("together-ai");

const togetherClient = new together.Together({
  apiKey: process.env.TOGETHER_API_KEY,
});

const chatBotAnalysis = async (userReviews) => {
  const message = [{ content: userReviews.join(), role: "user" }];
  const result = await togetherClient.chat.completions.create({
    messages: message,
    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
    max_tokens: null,
    temperature: 0.7,
    top_p: 0.7,
    top_k: 50,
    repetition_penalty: 1,
    stop: ["<|eot_id|>", "<|eom_id|>"],
    stream: false,
  });
  if (result.error) {
    console.error("Error:", result.error);
    throw error;
  }
  return result.choices[0].message.content;
};

module.exports = chatBotAnalysis;
