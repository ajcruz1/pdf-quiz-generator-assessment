"use client";

import { useState } from "react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import pdfToText from "react-pdftotext";
import * as openai from "@/utils/openai"
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";


const UploadPage = () => {
  const router = useRouter();
  const [pdfText, setPdfText] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const pdf = e.target.files[0];
      pdfToText(pdf)
        .then((text) => setPdfText(text))
        .catch(() => {
          setPdfText("");
          console.error("Failed to extract text from pdf");
        });
    }
  }

  const generateQuiz = async () => {
    if (pdfText) {
      console.log("Sending prompt");
      setLoading(true);
      const questions = await openai.sendPrompt(pdfText);
      
      router.push(`quiz?questions=${questions}`) 
      setLoading(false);
    }
  }

  return (
    <div className="flex gap-4">
      {isLoading ? <Spinner className="absolute self-center size-20" variant="infinite" /> : (
        <>
          <Input id="pdf" type="file" accept=".pdf" onChange={handleFileSelected} />
          <Button onClick={generateQuiz}>Generate Quiz</Button>
        </>
      )}
    </div>
  )
}

export default UploadPage;