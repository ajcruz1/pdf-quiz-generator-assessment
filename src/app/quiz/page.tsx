"use client";
import QuizPage from '@/components/QuizPage';
import { useSearchParams } from 'next/navigation';

const Quiz = () => {
  const searchParams = useSearchParams();
  const questions = searchParams.get('questions');

  return (
    <div className="flex min-w-screen min-h-screen">
      <QuizPage questions={questions!}/>
    </div>
  )
}

export default Quiz;