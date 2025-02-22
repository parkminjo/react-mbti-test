import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../../api/auth";
import { createTestResult } from "../../../api/testResults";
import { KOREAN, QUERY_KEY } from "../../../constants/constants";

import { calculateMBTI } from "../../../utils/mbtiCalculator";
import useAuthStore from "../../../zustand/authStore";
import { questions } from "../../../data/test-page/question";

const TestForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const { accessToken, setUser } = useAuthStore((state) => state);

  /** Function */
  const handleChange = (i, type, option) => {
    const newAnswers = [...answers];
    newAnswers[i] = { type, answer: option };
    setAnswers(newAnswers);
  };

  const addTestResult = useMutation({
    mutationFn: createTestResult,
    onSuccess: queryClient.invalidateQueries({
      queryKey: [QUERY_KEY],
    }),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { id, nickname } = await getUserProfile(accessToken);
    const mbtiResult = calculateMBTI(answers);

    addTestResult.mutate({
      nickname,
      mbtiResult,
      userId: id,
      date: new Date().toLocaleString(KOREAN),
      visibility: false,
    });
    setUser({ userId: id, nickname, mbtiResult });

    navigate(`/my-test-result?mbti=${mbtiResult}`);
  };

  /** UI */
  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q, i) => {
        const { id, question, options, type } = q;

        return (
          <div key={id} className="w-[400px] mb-10">
            <p className="text-lg font-medium mb-4">{question}</p>
            {options.map((option, idx) => {
              return (
                <label
                  key={idx}
                  htmlFor={option + idx}
                  className="p-3 border-2 border-solid rounded-lg flex items-center mb-2 transition delay-100 duration-200 ease-in-out hover:border-gray-500"
                >
                  <input
                    type="radio"
                    id={option + idx}
                    name={question}
                    value={option}
                    onChange={() => handleChange(i, type, option)}
                    required
                    className="h-4 text-blue-600 bg-gray-100 bidxrder-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 mr-2"
                  />
                  {option}
                </label>
              );
            })}
          </div>
        );
      })}
      <button
        type="submit"
        className="w-[400px] h-[50px] rounded-lg text-white bg-blue-500 transition delay-100 duration-200 ease-in-out hover:bg-blue-600"
      >
        결과 확인하기
      </button>
    </form>
  );
};

export default TestForm;
