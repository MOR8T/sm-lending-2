import React from "react";
import Question from "./Question";
import { FrequentlyQuestionsT } from "@/types/business/frequentlyQuestions";

export default function FrequentlyQuestions({
  title,
  questions,
}: FrequentlyQuestionsT) {
  return (
    <div>
      <h1
        className="md:text-[30px] md:leading-[38px] md:pt-0 pt-[32px] text-[20px]
leading-[28px] mb-[32px] md:mb-[48px]"
      >
        {title}
      </h1>
      {questions.map((e, i) => (
        <Question key={i} title={e.title} description={e.description} />
      ))}
    </div>
  );
}
