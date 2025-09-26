"use server";

import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({ apiKey: process.env.GENAI_KEY });
const modelName = "gemini-2.0-flash-lite";

export const sendPrompt = async (pdfText: string) => {
  const response = await client.models.generateContent({
    model: modelName,
    contents: `Create 5 questions from this text: ${pdfText}`,
    config: {
      systemInstruction: `You are a teacher who creates multiple-choice exams with 3 choices. 
        Format your response into this Question:<question>||A.<choiceA>,,B.<choiceB>,,C.<choiceC>||Answer:<answer>
        Separate each question with ///
        Respond with only the questions`,
    },
  });
  return response.text;
};
