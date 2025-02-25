import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KOREAN } from "../../../constants/constants";

import { questions } from "../../../data/test-page/question";
import { useAddTestResult } from "../../../hooks/useAddTestResult";
import { calculateMBTI } from "../../../utils/mbtiCalculator";
import useAuthStore from "../../../zustand/authStore";

const TestForm = () => {
  const navigate = useNavigate();

  /** State */
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const { userInfo, setUserInfo } = useAuthStore((state) => state);

  /** Function */
  const handleChange = (i, type, option) => {
    const newAnswers = [...answers];
    newAnswers[i] = { type, answer: option };
    setAnswers(newAnswers);
  };

  const addTestResultMutation = useAddTestResult();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userId, nickname } = userInfo;
    const mbtiResult = calculateMBTI(answers);

    addTestResultMutation.mutate({
      nickname,
      mbtiResult,
      userId,
      date: new Date().toLocaleString(KOREAN),
      visibility: false,
    });
    setUserInfo({ mbtiResult });

    navigate(`/my-test-result?mbti=${mbtiResult}`);
  };

  /** UI */
  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q, i) => {
        const { id, question, options, type } = q;

        return (
          <div key={id} className="w-full max-w-[400px] mb-10">
            <p className="text-lg font-medium mb-4">{question}</p>
            {options.map((option, idx) => {
              return (
                <label key={idx} htmlFor={option + idx} className={labelStyle}>
                  <input
                    type="radio"
                    id={option + idx}
                    name={question}
                    value={option}
                    onChange={() => handleChange(i, type, option)}
                    required
                    className={radioStyle}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        );
      })}
      <button type="submit" className={buttonStyle}>
        결과 확인하기
      </button>
    </form>
  );
};

export default TestForm;

/** Tailwind Style */
const labelStyle =
  "p-3 border-2 border-solid rounded-lg flex items-center mb-2 transition delay-100 duration-200 ease-in-out hover:border-gray-500";

const radioStyle =
  "h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 mr-2";

const buttonStyle =
  "w-full h-[50px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600";
