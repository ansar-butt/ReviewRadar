const tf = require("@tensorflow/tfjs");

const model = tf.sequential();
model.add(
  tf.layers.dense({ inputShape: [1], units: 1, activation: "sigmoid" })
);
model.compile({ optimizer: "sgd", loss: "binaryCrossentropy" });

const preprocessText = (text) => {
  const processedText = text.toLowerCase().replace(/[^a-z\s]/g, "");
  return processedText;
};

const tokenizeText = (text) => {
  return text.split(/\s+/);
};

const analyzeSentiment = (userInput) => {
  const processedText = userInput.map((val) => preprocessText(val));
  const tokenizedText = processedText.map((val) => tokenizeText(val));
  const lineLengths = tokenizedText.map((tokens) => tokens.length);

  const inputTensor = tf.tensor(lineLengths, [lineLengths.length, 1]);
  const predictions = model.predict(inputTensor);

  const overallSentiment = predictions.mean().dataSync();
  return overallSentiment < 0.5 ? "positive" : "negative";
};

module.exports = analyzeSentiment;
