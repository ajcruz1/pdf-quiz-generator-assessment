"use server";

import OpenAI from "openai";

const client = new OpenAI();

export const sendPrompt = async (pdfText: string) => {
  const response = await client.responses.create({
    model: "gpt-5-mini",
    reasoning: { effort: "medium" },
    instructions: `You are a teacher who creates multiple-choice exams with 3 choices.
        Format your response into this Question:<question>||A.<choiceA>,,B.<choiceB>,,C.<choiceC>||Answer:<answer>
        Separate each question with ///
        Respond with only the questions`,
    input: `Create 5 questions from this text: ${pdfText}`,
  });

  return response.output_text;
};
