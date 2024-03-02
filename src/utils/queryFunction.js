import { HfInference } from "@huggingface/inference";



const HF_ACCESS_TOKEN = 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;
const inference = new HfInference(HF_ACCESS_TOKEN);

// Define the model name
const modelName = "nickmuchi/vit-finetuned-chest-xray-pneumonia";

async function query(imageData) {
  const response = await fetch(
    `https://api-inference.huggingface.co/models/${modelName}`,
    {
      headers: { Authorization: `Bearer ${HF_ACCESS_TOKEN}` },
      method: "POST",
      body: imageData,
    }
  );

  const result = await response.json();
  return result;
}

export default query;
