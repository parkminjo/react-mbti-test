import { questions } from "../../../data/testpage/question";
import QuestionCard from "./QuestionCard";

const TestForm = () => {
  return (
    <form>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-10">MBTI 테스트</h1>
        {questions.map((question) => {
          return <QuestionCard key={question.id} question={question} />;
        })}
      </div>
    </form>
  );
};

export default TestForm;
