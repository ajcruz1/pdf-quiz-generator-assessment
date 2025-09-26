"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

type QuizPageProps = {
  questions: string
};

const QuizPage = ({ questions }: QuizPageProps) => {
  const questionArray = questions.split("///").filter(n => n);
  const [question, choices, answer] = questionArray[0].split("||");
  
  const [idx, setIdx] = useState(0);
  const [currentQuestion, setQuestion] = useState(question);
  const [currentChoices, setChoices] = useState(choices.split(",,"));
  const [currentAnswer, setAnswer] = useState(answer);
  const [score, setScore] = useState(0);

  const chooseAnswer = (choice: string) => () => {    
    if (currentAnswer.replaceAll("Answer:","").startsWith(choice)) {
      setScore(score + 1)
    }

    if (questionArray.length > idx+1) {
      const [question, choices, answer] = questionArray[idx+1].split("||");
      setQuestion(question);
      setChoices(choices.split(",,"))
      setAnswer(answer)
    }

    setIdx(idx+1)
  }

  const reset = () => {
    const [question, choices, answer] = questionArray[0].split("||");
    setQuestion(question);
    setChoices(choices.split(",,"))
    setAnswer(answer)
    setIdx(0)
    setScore(0)
  }

  return (
    <div className="min-w-screen min-h-screen">
      {
        idx < questionArray.length ? (
          <div className="flex flex-col size-full items-center justify-center gap-8">
            <Label className="text-2xl bold">Question #{idx+1}: {currentQuestion.replaceAll("Question:", "")}</Label>
            <div className="flex flex-wrap justify-center gap-3">
              <Button onClick={chooseAnswer("A")}>{currentChoices[0]}</Button>
              <Button onClick={chooseAnswer("B")}>{currentChoices[1]}</Button>
              <Button onClick={chooseAnswer("C")}>{currentChoices[2]}</Button>
            </div>
          </div>) : (
            <div className="flex flex-col size-full items-center justify-center gap-4">
              <Label className="text-4xl bold">Your final score is: {score}</Label>
              <div className="flex gap-4">
                <Button onClick={reset}>Try again</Button>
                <Button asChild>
                  <Link href={"/"}>Generate a new quiz</Link>
                </Button>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default QuizPage;