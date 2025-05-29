// callGemini.js
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = 'AIzaSyDaLMcNrzi_mRwENiRn6lBkA2pttvMF2Is'; // STILL A SECURITY RISK IN BROWSER

export async function getExplanation(code, language) {
  const prompt = `Explain this ${language} code in simple terms:\n\n${code} give me straight forward answer without giving okay here is the explanation or this is the end ,etc`;

  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ text: prompt }],
    });

    if (
      response &&
      response.candidates &&
      response.candidates[0] &&
      response.candidates[0].content &&
      response.candidates[0].content.parts &&
      response.candidates[0].content.parts[0]
    ) {
      return response.candidates[0].content.parts[0].text;
    } else {
      return 'No explanation found.';
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return 'Error fetching explanation.';
  }
}

export async function getComplexity(code, language) {
  const prompt = `give the details in simple and Return the time and space complexity of ${language} code:\n\n${code} in json format like : {
  "timeComplexity": {
    "details": "...",
    "best case":,
    "average case": ,
    "worst case":,
  },
  "spaceComplexity": {
    "details": "...",
     "best case":,
    "average case": ,
    "worst case":,
  } `;

  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ text: prompt }],
    });

    if (
      response &&
      response.candidates &&
      response.candidates[0] &&
      response.candidates[0].content &&
      response.candidates[0].content.parts &&
      response.candidates[0].content.parts[0]
    ) {
      return response.candidates[0].content.parts[0].text;
    } else {
      return 'No complexity info found.';
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return 'Error fetching complexity.';
  }
}
